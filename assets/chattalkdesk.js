
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
          webchat.init(configs);
          /*
           * Send custom data from your website to TalkDesk!
           * If you would like to do it, you need to remove the following commented code and
           * modify the webchat.setContextParam parameters to pass in the data you need.
           */
           /*function setContext() {
             webchat.setContextParam({ "var1": "value1", "var2": "value2", "var3": 100 })
           }
           // Send data when the chat conversation is initiated
           webchat.onConversationStart = function() {
             setContext()
           }
           // Send data when the chat widget is open
           webchat.onOpenWebchat = function() {
             setContext()
           }*/
        };
      })(
        window,
        document,
        "tdWebchat",
        { touchpointId: "aff514a814ee4a52bf1942f1902cbae1", accountId: "", region: "td-us-1" },
        { enableValidation: false, enableEmoji: true, enableUserInput: true, enableAttachments: true }
      );
    