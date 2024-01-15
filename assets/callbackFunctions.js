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




function callbackAPIRequest(enteredPhoneNumber, enteredOrderNumber, enteredMail, enteredRGNumber, enteredRecordChecker, enteredCsatChecker){
  const reasonsForb2b =["webform_case_creditnote",
  "webform_case_refund",
  "webform_case_other_request_returns",
  "webform_case_receipt",
  "webform_case_payment_reminder",
  "webform_case_no_bill",
  "webform_case_dunning_block",
  "webform_case_voucher",
  "webform_case_other_request_payment",
  "webform_case_delete_account",
  "webform_case_cant_login",
  "webform_case_other_request_account",
  "webform_case_offer"]
  var brandID = ""
  var groupID = ""
  var brandName = ""
  var baseERPLink = ""
  var ringGroup = ""
  var customerTypeShorthand = ""
  var customerLocale = ""
  var csatTag = " "
  var customerTypeTag = " "
  if (enteredCsatChecker == "yes"){
    csatTag = " csat-eu-opt-in "
  }
  if (customerType == "private-customer") {
    customerTypeShorthand = "c"
    customerTypeTag = " customer_type_private"
  } else if (customerType == "business-customer") {
    customerTypeTag = " customer_type_business"
    if (isInBusinessOpeningTimes()){
      if ((portal == "helpcenter.digitec.ch" || portal == "helpcenter.galaxus.ch") && (currentLanguage.toLowerCase() == "en-us" || currentLanguage.toLowerCase() == "fr") && (reasonsForb2b.includes(requestReasonTag))){
        customerTypeShorthand = "b"
      } else {
        customerTypeShorthand = "c"
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
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + level
      break;
    case 'helpcenter.galaxus.ch':
      brandID = "486521"
      groupID = "6972193395474"
      brandName = "galaxus CH"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + level
      break;
    case 'helpcenter.connect.digitec.ch':
      brandID = "360002520320"
      groupID = "6972193395474"
      brandName = "digitec CONNECT"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + level
      break;
    case 'helpcenter.galaxus.de':
      brandID = "360000002879"
      groupID = "8588490254354"
      brandName = "galaxus DE"
      baseERPLink = "https://erp.galaxus.eu/"
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ger_" + currentLanguage.toLowerCase() + level
      break;
    case 'helpcenter.galaxus.at':
      brandID = "360002535479"
      groupID = "8588490254354"
      brandName = "galaxus AT"
      baseERPLink = "https://erp.galaxus.eu/"
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ger_" + currentLanguage.toLowerCase() + level
      break;
    default:
      brandID = "486521"
      groupID = "6972193395474"
      brandName = "Brand unknown"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      var level = callbackRingGroupLevels[requestReasonTag];
      if (typeof level == "undefined"){
        level = "_lv2"
      }
      ringGroup = "callback2" + customerTypeShorthand + "_ch_" + currentLanguage.toLowerCase() + level
      break;   
  }
  //Replaced by extra check in if-case to check for customertypeshorthand b
  //if (ringGroup == "callback2b_ch_en-us_lv1"){ringGroup = "callback2c_ch_en-us_lv1"}
  //if (ringGroup == "callback2b_ch_fr_lv1"){ringGroup = "callback2c_ch_fr_lv1"}
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
    case 'nl':
      customerLocale = "1005"
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
    case 'it':
      callbackPerLang = "Richiamo"
      break;
    case 'nl':
      callbackPerLang = "Callback"
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
  let tempLanguage = currentLanguage;
  if (tempLanguage == "en-us"){
    tempLanguage = "en"
  }
  var ticketBody = "This is a callback request\n\nCustomer Phone: " + enteredPhoneNumber + "\nCustomer Mail: " + enteredMail + "\nOrder: " + orderLink + " \nInvoice: " + invoiceLink + "\nRequest Reason: " + compiledSubject + " \n -- \ninteraction_id: "
  var ticketTags = "callback_request voice" + csatTag + requestReasonTag + customerTypeTag + " " + tempLanguage + " talkdesk_interaction_"
  var baseOrderLink = baseERPLink + "Order/"
  var baseRGLink = baseERPLink + "Invoice/"
  var custName = enteredMail.split("@")[0].replace(".", " ")
  var customerSearchLink = baseERPLink + "Customer/SearchPersonAdvanced?&PersonAdvancedSearch.EMail=" + enteredMail
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
  /*
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
