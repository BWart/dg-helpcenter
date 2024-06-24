
//DEMO space
(function(w, d, s, u) {
    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; j.src = 'https://digitecgalaxus.demo-rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
    h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://digitecgalaxus.demo-rocket.chat/livechat');//*/

//SAS Trial
/*(function(w, d, s, u) {
    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; j.src = 'https://digitecgalaxus.rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
    h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://digitecgalaxus.rocket.chat/livechat');//*/
    console.log("normalized languate is: ")
    console.log(getNormalizedLanguage())
    RocketChat(function() {
        //this.setGuestEmail('sample@rocket.chat');
        console.log("SETTING PARAMETERS")
        this.setLanguage(getNormalizedLanguage())
        this.setDepartment(getDepartmentRocketChat());

        this.setCustomField('customertype', customerType);
        this.setCustomField('language', getNormalizedLanguage());
        this.setCustomField('ordernumber', '');
        this.setCustomField('portal', portal)
        this.setCustomField('requestreason', requestReasonTag)
        this.setCustomField('tags', '')

        this.maximizeWidget();
    });

function getDepartmentRocketChat(){
    let depString = ""
    switch (getNormalizedLanguage()){
        case 'de':
            depString += 'Galaxus Chat Deutsch'
            break;
        default:
            depString += 'Galaxus Chat English'
            break;
    }
    return depString;
}

