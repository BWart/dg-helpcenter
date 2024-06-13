const userParams = JSON.parse(atob(userInfo))
console.log(userParams)


let customerTypeRocket = ""
if (userParams["isPrivate"]){
    customerTypeRocket = "private-customer"
} else {
    customerTypeRocket = "business-customer"
}



(function(w, d, s, u) {
    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; j.src = 'https://digitecgalaxus.demo-rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
    h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://digitecgalaxus.demo-rocket.chat/livechat');


RocketChat(function() {
    //this.setGuestEmail('sample@rocket.chat');
    console.log("SETTING PARAMETERS")
    this.setLanguage(getNormalizedLanguage())
    this.setDepartment(getDepartmentRocketChat());
    this.setGuestEmail(userParams["email"])
    this.maximizeWidget();

    this.setCustomField('customertype', customerTypeRocket);
    this.setCustomField('language', getNormalizedLanguage());
    this.setCustomField('ordernumber', userParams["order"].toString());
    this.setCustomField('portal', portal)
    this.setCustomField('requestreason', 'rocketfromhelpassist')
    this.setCustomField('tags', userParams["tags"])

});


function getDepartmentRocketChat(){
    let depString = "Chat"
    switch (portal) {
        case 'helpcenter.digitec.ch':
        case 'helpcenter.galaxus.ch':
            if (customerTypeRocket == "business-customer" && ['fr', 'en'].includes(getNormalizedLanguage())){
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
    console.log("depString is: " + depString)
    return depString;
}