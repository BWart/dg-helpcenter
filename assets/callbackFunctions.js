function callbackCheck(){
  console.log("enter callbackcheck")
    //return false;
    //CallbackCheck Private CH
    console.log(requestReasonTag)
    console.log(localStorage.getItem("callbackGroup5"))
    if (reasonsForCallback.indexOf(requestReasonTag) >= 0 && localStorage.getItem("callbackGroup5") == "true" && currentLanguage == "de"){
      console.log("callbackcheck true")
      return true;
    }
    console.log("callbackcheck false")
    return false;
  }



  function callbackAPIRequest(enteredPhoneNumber, enteredOrderNumber, enteredMail, enteredRGNumber, enteredRecordChecker){
    var brandID = ""
    var groupID = ""
    var brandName = ""
    var baseERPLink = ""
    var ringGroup = ""
    var customerTypeShorthand = ""
    var customerLocale = ""
    var customerSearchLink = ""
    customerTypeShorthand = "connect"
    brandID = "360002520320"
    groupID = "9631731442450" //Callback Requests Connect
    //groupID = "360003887000"  //Connect Privatkunden
    //groupID = "360003882299"  //Connect Firmenkunden
    brandName = "digitec Connect"
    baseERPLink = "https://erp.digitecgalaxus.ch/"
    ringGroup = "callback2connect_ch_de"
    switch (currentLanguage){
      case 'de':
        customerLocale = "8"
        break;
      case 'fr':
        customerLocale = "16"
        break;
      case 'it':
        customerLocale = "22"
        break;
      default:
        customerLocale = "1"
        break;
    }
    var callbackPerLang = ""
    switch (currentLanguage){
      case 'de':
        callbackPerLang = "Rückruf"
        break;
      case 'fr':
        callbackPerLang = "Rappel"
        break;
      case 'de':
        callbackPerLang = "Richiamo"
        break;
      default:
        callbackPerLang = "Callback"
        break;
    }
    var compiledSubject = callbackPerLang + ": " + $(requestReasonDropdownNesty).text()
    if (requestReasonTag.includes("_other_request_")){
      compiledSubject = callbackPerLang + ": " + requestReasonTopCategoryPlaintext[requestReasonTopCategory[requestReasonTag]][currentLanguage] + "; " + $(requestReasonDropdownNesty).text()
    }
    var orderLink = baseERPLink + "Order/" + enteredOrderNumber;
    var invoiceLink = baseERPLink + "Invoice/" + enteredRGNumber;
    if (enteredOrderNumber.length < 5){
      orderLink = "None"
    }
    if (enteredRGNumber.length < 5){
      invoiceLink = "None"
    }
    var ticketBody = "This is a callback request\n\nCustomer Phone: " + enteredPhoneNumber + "\nCustomer Mail: " + enteredMail + "\nOrder: " + orderLink + " \nInvoice: " + invoiceLink + "\nRequest Reason: " + compiledSubject + " \n -- \ninteraction_id: "
    var ticketTags = "callback_request voice " + requestReasonTag + " talkdesk_interaction_"
    var baseOrderLink = baseERPLink + "Order/"
    var baseRGLink = baseERPLink + "Invoice/"
    var custName = enteredMail.split("@")[0].replace(".", " ")
    customerSearchLink = baseERPLink + "Customer/SearchPersonAdvanced?&PersonAdvancedSearch.EMail=" + enteredMail
    var dataToPass = {
        "customer_phone": enteredPhoneNumber,
        "customer_mail": enteredMail,
        "customer_search_link": customerSearchLink,
        "customer_name": custName,
        "customer_locale": customerLocale,
        "record": enteredRecordChecker,
        "rg_motive": compiledSubject,
        "customer_language": currentLanguage,
        "ticket_body": ticketBody,
        "ticket_subject": compiledSubject,
        "order_number": enteredOrderNumber,
        "invoice_number": enteredRGNumber,
        "brand_id": brandID,
        "group_id": groupID,
        "brand_name": brandName,
        "ticket_tags": ticketTags,
        "ring_group": ringGroup,
        "erp_link_base_order": baseOrderLink,
        "erp_link_base_invoice": baseRGLink,
        "callback_country": callbackCountry
    }
    var dataToPass2 = JSON.stringify(dataToPass)
    let auth = "Bearer " + wertmarke
    console.log(ringGroup)
    /*$.ajax({
      type: "POST",
      url: "https://api.talkdeskapp.com/flows/3731b2ebb4c5492f868cbe2f1e3e3601/interactions",
      headers: {"content-type" : "application/json",
      "authorization" : auth
      },
      data: dataToPass2,
      success: function(result){
        if(gaSend){
          ga('send', 'event', 'Errors', 'CallbackAPI', 'Success')
        }
        window.open("https://" + portal + "/hc?callbackreturn=yes", "_self")
      },
      error: function (result){
        callbackButtonClicked = false;
        if(gaSend){
          ga('send', 'event', 'Errors', 'CallbackAPI', String(result))
        }
        var dynamicWording2 = filldynamicWording();
        $('.callbackFormErrorText').html(dynamicWording2[currentLanguage]['callbackAPIError'])
      },
      dataType: "json"
    })
    //*/
  }