
(function(w, d, s, u) {
    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; j.src = 'https://digitecgalaxus.demo-rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
    h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://digitecgalaxus.demo-rocket.chat/livechat');

    RocketChat(function() {
        //this.setGuestEmail('sample@rocket.chat');
        this.setLanguage(getNormalizedLanguage())
        this.setDepartment(getDepartmentRocketChat());
        this.maximizeWidget();
        this.setCustomField('customertype', customerType);
        this.setCustomField('language', getNormalizedLanguage());
        this.setCustomField('ordernumber', '999');
        this.setCustomField('portal', portal)
        this.setCustomField('requestreason', requestReasonTag)
        this.setCustomField('tags', '')
    });


function getDepartmentRocketChat(){
    let depString = "Chat"
    switch (portal) {
        case 'helpcenter.digitec.ch':
        case 'helpcenter.galaxus.ch':
            if (customerType == "business-customer" && ['fr', 'en'].includes(getNormalizedLanguage())){
                depString += " Business"
            } else {
                depString += " Private"
            }
            break;
        default:
            depString += " EU"
            break;
    }

    switch (getNormalizedLanguage()){
        case 'de':
            depString += ' DE'
            break;
        default:
            depString += ' Multilingual'
            break;
    }

    return depString;
}