const userParams = JSON.parse(atob(userInfo))


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
    this.setLanguage(getNormalizedLanguage())
    this.setDepartment(getDepartmentRocketChat());
    this.setGuestEmail(userParams["email"])

    let ordernumberrocket = ''

    if (Object.keys(userParams).includes("order")){
        ordernumberrocket = userParams["order"].toString()
    } else {
        ordernumberrocket = ''
    }

    this.setCustomField('customertype', customerTypeRocket);
    this.setCustomField('language', getNormalizedLanguage());
    this.setCustomField('ordernumber', ordernumberrocket);
    this.setCustomField('portal', portal)
    this.setCustomField('requestreason', 'rocketfromhelpassist')
    this.setCustomField('tags', userParams["tags"])

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