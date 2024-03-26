function getTalkeskChatTouchpointId(){
  if (window.location.hostname == "helpcenter.galaxus.de"){
    return "4a65e5943cc944538eb262962650d463"
  }else{
    return "aff514a814ee4a52bf1942f1902cbae1"
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
      /*
        * Send custom data from your website to TalkDesk!
        * If you would like to do it, you need to remove the following commented code and
        * modify the webchat.setContextParam parameters to pass in the data you need.
        */
        /*
      console.log("sprache: " + getTalkdeskChatLanguage())
        function setContext() {
          //webchat.setContextParam({ "field_name1": "Olaf", "field_email1": "bastian.wartmann@sunrise.ch", "custom_dorpdown1": "Ring1"})
          webchat.setContextParam({"order_number": "", "webform_case": getTalkdeskChatWebformCase(), "brand_id": getTalkdeskChatBrandId(), "ticket_tags": "talkdesk_chat_test " + getTalkdeskChatWebformCase(), "customer_language": getTalkdeskChatLanguage(), "group_id": getTalkdeskChatGroupId(), "customer_locale": getTalkdeskChatCustomerLocale(), "brand_name": getTalkdeskChatBrandName(), "webform_case_text": getTalkdeskChatSubjectText()})
        }
  
        // Send data when the chat conversation is initiated
        webchat.onConversationStart = function() {
          setContext()
        }
        // Send data when the chat widget is open
        webchat.onOpenWebchat = function() {
          setContext()
        }//*/
  
        webchat.init(configs).then(() => {
          webchat.selfHostedApp.open();
        });
    };
  })(
    window,
    document,
    "tdWebchat",
    { touchpointId: getTalkeskChatTouchpointId(), accountId: "", region: "td-us-1" },
    { enableValidation: false, enableEmoji: true, enableUserInput: true, enableAttachments: true }
  );
  