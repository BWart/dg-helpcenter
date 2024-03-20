function getTalkdeskChatLanguage(){
  let tempLang = $('html').attr('lang');
  return tempLang;
}

function getTalkdeskEverythingTemplatel(){
  switch(portal){
    case 'helpcenter.digitec.ch':
      brandID = "263412"
      brandName = "digitec"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      break;
    case 'helpcenter.galaxus.ch':
      brandID = "486521"
      brandName = "galaxus CH"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      break;
    case 'helpcenter.connect.digitec.ch':
      brandID = "360002520320"
      brandName = "digitec CONNECT"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      break;
    case 'helpcenter.galaxus.de':
      brandID = "360000002879"
      brandName = "galaxus DE"
      baseERPLink = "https://erp.galaxus.eu/"
      break;
    case 'helpcenter.galaxus.at':
      brandID = "360002535479"
      brandName = "galaxus AT"
      baseERPLink = "https://erp.galaxus.eu/"
      break;
    case 'helpcenter.galaxus.fr':
      brandId = ""
      brandName = "galaxus FR"
      baseERPLink = "https://erp.galaxus.eu/"
      break;
    default:
      brandID = "486521"
      brandName = "Brand unknown"
      baseERPLink = "https://erp.digitecgalaxus.ch/"
      break;
  }
}

function getTalkdeskChatBrandId(){
  switch(portal){
    case 'helpcenter.digitec.ch':
      return "263412"
      break;
    case 'helpcenter.galaxus.ch':
      return "486521"
      break;
    case 'helpcenter.connect.digitec.ch':
      return "360002520320"
      break;
    case 'helpcenter.galaxus.de':
      return "360000002879"
      break;
    case 'helpcenter.galaxus.at':
      return "360002535479"
      break;
    case 'helpcenter.galaxus.fr':
      return "7609918317458"
      break;
    default:
      return "486521"
      break;
  }
}

function getTalkdeskChatGroupId(){
  switch(portal){
    case 'helpcenter.digitec.ch':
    case 'helpcenter.galaxus.ch':
      groupID = "17792456160914"
      break;
    case 'helpcenter.galaxus.de':
    case 'helpcenter.galaxus.at':
    case 'helpcenter.galaxus.fr':
      groupID = "17792456160914"
      break;
    default:
      groupID = "17792456160914"
      break;
  }
}

function getTalkdeskChatCustomerLocale(){
  switch(getTalkdeskChatLanguage()){
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
}
      
      
      
var webchat;
(function(window, document, node, props, configs) {
  if (window.TalkdeskChatSDK) {
    console.error("TalkdeskChatSDK already included");
    return;
  }
  var divContainer = document.createElement("div");
  divContainer.id = node;
  document.body.appendChild(divContainer);
  var src = "https://talkdeskchatsdk.talkdeskapp.com/talkdeskchatsdk.js";
  var script = document.createElement("script");
  var firstScriptTag = document.getElementsByTagName("script")[0];
  script.type = "text/javascript";
  script.charset = "UTF-8";
  script.id = "tdwebchatscript";
  script.src = src;
  script.async = true;
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  script.onload = function() {
    webchat = TalkdeskChatSDK(node, props);
    webchat.init(configs).then(() => {
      webchat.selfHostedApp.open();
    });
    /*
      * Send custom data from your website to TalkDesk!
      * If you would like to do it, you need to remove the following commented code and
      * modify the webchat.setContextParam parameters to pass in the data you need.
      */
      function setContext() {
        //webchat.setContextParam({ "field_name1": "Olaf", "field_email1": "bastian.wartmann@sunrise.ch", "custom_dorpdown1": "Ring1"})
        webchat.setContextParam({"order_number": "", "webform_case": "", "brand_id": getTalkdeskChatBrandId(), "ticket_tags": "", "customer_language": getTalkdeskChatLanguage(), "group_id": getTalkdeskChatGroupId(), "customer_locale": getTalkdeskChatCustomerLocale()})
      }

      // Send data when the chat conversation is initiated
      webchat.onConversationStart = function() {
        setContext()
      }
      // Send data when the chat widget is open
      webchat.onOpenWebchat = function() {
        setContext()
      }//*/
  };
})(
  window,
  document,
  "tdWebchat",
  { touchpointId: "aff514a814ee4a52bf1942f1902cbae1", accountId: "", region: "td-us-1" },
  { enableValidation: false, enableEmoji: true, enableUserInput: true, enableAttachments: true }
);
