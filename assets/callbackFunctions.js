function callbackCheck(){
    //return false;
    //CallbackCheck Private CH
    if (reasonsForCallback.indexOf(requestReasonTag) >= 0 && localStorage.getItem("callbackGroup5") == "true" && customerType == "private-customer" && (portal == 'helpcenter.digitec.ch' || portal == 'helpcenter.galaxus.ch')){
      //console.log("callbackcheck private true")
      return true;
    }
    //CallbackCheck Business CH
    if (reasonsForCallback.indexOf(requestReasonTag) >= 0 && localStorage.getItem("callbackGroup5") == "true" && customerType == "business-customer" && (portal == 'helpcenter.digitec.ch' || portal == 'helpcenter.galaxus.ch')){
      //console.log("callbackcheck business true")
      return true;
    }
    //Callback Germany + Austria
    if (reasonsForCallback.indexOf(requestReasonTag) >= 0 && localStorage.getItem("callbackGroup5") == "true" && (portal == 'helpcenter.galaxus.de' || portal == 'helpcenter.galaxus.at')){
      //console.log("callbackcheck business true")
      return true;
    }
    //console.log("callbackcheck false")
    return false;
  }



  function callbackAPIRequest(enteredPhoneNumber, enteredOrderNumber, enteredMail, enteredRGNumber, enteredRecordChecker){
    var brandID = ""
    var groupID = ""
    var brandName = ""
    var baseERPLink = ""
    var ringGroup = ""
    var customerTypeShorthand = ""
    var brandTag = " brand-"
    var customerLocale = ""
    if (customerType == "private-customer") {
      customerTypeShorthand = "c"
    } else if (customerType == "business-customer") {
      if (isInBusinessOpeningTimes()){
        if ((portal == "helpcenter.digitec.ch" || portal == "helpcenter.galaxus.ch") && (currentLanguage.toLowerCase() == "de" || currentLanguage.toLowerCase() == "fr" || currentLanguage.toLowerCase() == "en-us")){
          customerTypeShorthand = "c"
        } else {
          customerTypeShorthand = "b"
        }
      } else {
        customerTypeShorthand = "c"
      }
    } else {
      customerTypeShorthand = "connect"
    }
    if (requestReasonTag.includes('webform_case_product_advice_') && currentLanguage == "de" && isInCHPEOpeningTimes()){
      customerTypeShorthand = "pe"
    }
    switch(portal){
      case 'helpcenter.digitec.ch':
        brandID = "263412"
        groupID = "6972193395474"
        brandName = "digitec"
        baseERPLink = "https://erp.digitecgalaxus.ch/"
        ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + callbackRingGroupLevels[requestReasonTag]
        brandTag += "digitec-"
        if (customerType == "private-customer"){
          brandTag += "private"
        } else {
          brandTag += "business"
        }
        break;
      case 'helpcenter.galaxus.ch':
        brandID = "486521"
        groupID = "6972193395474"
        brandName = "galaxus CH"
        baseERPLink = "https://erp.digitecgalaxus.ch/"
        ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + callbackRingGroupLevels[requestReasonTag]
        brandTag += "galaxus-"
        if (customerType == "private-customer"){
          brandTag += "private"
        } else {
          brandTag += "business"
        }
        break;
      case 'helpcenter.connect.digitec.ch':
        brandID = "360002520320"
        groupID = "6972193395474"
        brandName = "digitec CONNECT"
        baseERPLink = "https://erp.digitecgalaxus.ch/"
        ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + callbackRingGroupLevels[requestReasonTag]
        brandTag = ""
        break;
      case 'helpcenter.galaxus.de':
        brandID = "360000002879"
        groupID = "8588490254354"
        brandName = "galaxus DE"
        baseERPLink = "https://erp.galaxus.eu/"
        ringGroup = "callback2" + customerTypeShorthand + "_ger_" + currentLanguage.toLowerCase() + callbackRingGroupLevelsEU[requestReasonTag]
        brandTag = ""
        break;
      case 'helpcenter.galaxus.at':
        brandID = "360002535479"
        groupID = "8588490254354"
        brandName = "galaxus AT"
        baseERPLink = "https://erp.galaxus.eu/"
        ringGroup = "callback2" + customerTypeShorthand + "_ger_" + currentLanguage.toLowerCase() + callbackRingGroupLevelsEU[requestReasonTag]
        brandTag = ""
        break;
      default:
        brandID = "486521"
        groupID = "6972193395474"
        brandName = "Brand unknown"
        baseERPLink = "https://erp.digitecgalaxus.ch/"
        ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + callbackRingGroupLevels[requestReasonTag]
        brandTag += "digitec-"
        if (customerType == "private-customer"){
          brandTag += "private"
        } else {
          brandTag += "business"
        }
        break;   
    }
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
    var ticketTags = "callback_request voice " + requestReasonTag + brandTag + " talkdesk_interaction_"
    var baseOrderLink = baseERPLink + "Order/"
    var baseRGLink = baseERPLink + "Invoice/"
    var custName = enteredMail.split("@")[0].replace(".", " ")
    var dataToPass = {
        "customer_phone": enteredPhoneNumber,
        "customer_mail": enteredMail,
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
    $.ajax({
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