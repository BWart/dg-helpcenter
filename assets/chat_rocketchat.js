
(function(w, d, s, u) {
    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; j.src = 'https://digitecgalaxus.demo-rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
    h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://digitecgalaxus.demo-rocket.chat/livechat');

    RocketChat(function() {
        this.setGuestEmail('sample@rocket.chat');
        this.setDepartment('Chat EU Multilingual');
        this.maximizeWidget();
        this.setCustomField('ordernumber', '999');
    });
