// Waits until Page loaded and then calls basic Setup
let customerDepartment = "Chat Private DE"



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncChatLoad(counter){
    await sleep(1000)
    if (counter > 10){
        return;
    }
    if (typeof zE == "undefined"){
        asyncChatLoad(counter+1);
        return;
    }
    hideChat();
    asyncChatStart()
}



async function asyncChatStart(counter){
    await sleep(1000)
    if (counter > 10){
        return;
    }
    if (typeof (zE('webWidget:get', 'chat:department', 'Chat Private DE')) == "undefined"){
        asyncChatStart(counter+1)
        return;
    }
    openWidgetForUnreadMessages();
    hideWidgetWhenMinimized();
    listenDepartmentStatus(customerDepartment);
    if(isChatting()){
        openChat();
    }else{
        changeWebWidgetSettingInitial(getChatDepartment());
        if (chatOpenFromHelpAssist == true) {
            setChatDepartmentForHelpAssist(JSON.parse(sessionStorage.getItem('user-info'))["requestReason"], JSON.parse(sessionStorage.getItem('user-info'))["isPrivate"]);
            //let languageTag = getNormalizedLanguage();
            let tagsArray = [];
            if (typeof JSON.parse(sessionStorage.getItem('user-info'))["tags"] == "string" || JSON.parse(sessionStorage.getItem('user-info'))["tags"] instanceof String){
                tagsArray = JSON.parse(sessionStorage.getItem('user-info'))["tags"].split("|")
                if (JSON.parse(sessionStorage.getItem('user-info'))["tags"].length < 1){
                    tagsArray.push("chatFromHAWithoutTags")
                }
            } else {
                tagsArray.push("chatFromHAWithoutTags")
            }
            //tagsArray.push(languageTag);
            tagsArray.push("chat_request")
            setZopimTags(tagsArray)
            openChat();
            setEventListenerForChatStart();
        }
    }
}



function waitForChat(){
    $(".recommendedChannel").css('display' , 'none');
    window.addEventListener('load', (event) => {
        if (typeof zE == "undefined") {
            asyncChatLoad(0)
        }
        else {
            hideChat();
            asyncChatStart(0)
        }
    })
}


function setChatDepartmentForHelpAssist(helpAssistRequestReason, isPrivate){
    let templang = getNormalizedLanguage();
    if (portal == "helpcenter.galaxus.ch" || portal == "helpcenter.digitec.ch") {
        if (templang == 'de'){
            zE('webWidget', 'updateSettings', getWebWidgetSettings("Chat Private DE"))
        } else {
            zE('webWidget', 'updateSettings', getWebWidgetSettings("Chat Private Multilingual"))
        }
    } else { //if portal not digitec or galaxus
        zE('webWidget', 'updateSettings', getWebWidgetSettings("Chat EU DE"))
    }
}



/*function waitForChat(){
    console.log("entering waitForChat")
    if (typeof zE == "undefined") {
        console.log("entering undefined if")
        if(gaSend){
            ga('send', 'event', 'Errors', 'ChatInitialLoad', 'undefined load');
          }
        window.addEventListener('load', (event) => {
            console.log("enter addEventListener")
            zE('webWidget:on', 'chat:connected', function() {
                console.log("enter weWidget on chatconnected")
                openWidgetForUnreadMessages();
                hideWidgetWhenMinimized();
                listenDepartmentStatus(customerDepartment);
                hideChat()
                if(isChatting()){
                    console.log("enter isChatting")
                    openChat();
                }else{
                    console.log("enter isChatting else")
                    changeWebWidgetSettingInitial(getChatDepartment());
                    hideChat();
                }
            });
        })
    } else {
        console.log("entering undefined else")
        if(gaSend){
            ga('send', 'event', 'Errors', 'ChatInitialLoad', 'defined load');
          }
        zE('webWidget:on', 'chat:connected', function() {
            console.log("enter weWidget on chatconnected")
            openWidgetForUnreadMessages();
            hideWidgetWhenMinimized();
            listenDepartmentStatus(customerDepartment);
            hideChat()
            if(isChatting()){
                console.log("enter isChatting")
                openChat();
            }else{
                console.log("enter isChatting else")
                changeWebWidgetSettingInitial(getChatDepartment());
                hideChat();
            }
        });
    }
}*/



///////////////////////////////////////////////////////////Widget/////////////////////////////////////////////////////////
//Initial WebWebidget Settings
function changeWebWidgetSettingInitial(department){
    window.zESettings = getWebWidgetSettings(department); // Widget Settings Initiales Setup
    zE('webWidget', 'setLocale', getNormalizedLanguage()); // Setzt die Widget Sprache   
}



// Updated die Widget Settings - Update Soll nur bei Dropdown Change im Request Form und beim Reconnect passieren. Ansonsten soll die Einstellung nicht überschrieben werden
function changeWebWidgetSettingsOnChange(department){
    zE('webWidget', 'updateSettings', getWebWidgetSettings(department));
    zE('webWidget', 'setLocale', getNormalizedLanguage()); // Setzt die Widget Sprache
}



// Definiert die Widget Settings
function getWebWidgetSettings(department){
    dynamicWording = filldynamicWording();
    console.log('Department Set: '+ department);



    var zeSettings = {
        webWidget: {
            chat: {
                suppress: false,
                departments: {
                    select: department,
                    enabled: []
                },
                title: {
                    '*': dynamicWording['en-US']['chatUs'],
                    fr: dynamicWording[getLanguage()]['chatUs'],
                    de: dynamicWording[getLanguage()]['chatUs'],
                    it: dynamicWording[getLanguage()]['chatUs'],
                    nl: dynamicWording[getLanguage()]['chatUs']
                },
                prechatForm: {
                    greeting: {
                        '*': dynamicWording['en-US']['chatGreetingText'],
                        fr: dynamicWording[getLanguage()]['chatGreetingText'],
                        de: dynamicWording[getLanguage()]['chatGreetingText'],
                        it: dynamicWording[getLanguage()]['chatGreetingText'],
                        nl: dynamicWording[getLanguage()]['chatGreetingText']
                    }
                },
                offlineForm: {
                    greeting: {
                        '*': dynamicWording['en-US']['chatOfflineMessage'],
                        fr: dynamicWording[getLanguage()]['chatOfflineMessage'],
                        de: dynamicWording[getLanguage()]['chatOfflineMessage'],
                        it: dynamicWording[getLanguage()]['chatOfflineMessage'],
                        nl: dynamicWording[getLanguage()]['chatOfflineMessage']
                    }
                }
            },
            contactForm: {
                suppress: true
            },
            helpCenter: {
                suppress: true
            },
            talk: {
                suppress: true
            },
            answerBot: {
                suppress: true
            }
        }
    }
    return zeSettings;
}



/////////////////////////////////////////////////////////////Departments///////////////////////////////////////////////////////////////////////////
// Gibt das Chat Department anhand der Sprache und des Kundentyps zurück
function getChatDepartment(){
    var chatDepartmentType = getChatDepartmentType();
    var dep = 'Chat ' + chatDepartmentType + ' ' + getChatDepartmentLanguage(); 
 
    if(dep.includes('Private') && typeof chatWaitTimes != 'undefined'){        
        try {
            dep = getDepartmentWithOverflowCheck(dep);
        }catch (e) {
            console.error(e);
            if(gaSend){
                ga('send', 'event', 'Errors', 'ChatOverflow', String(e));
            }
        }
    }



    console.log('Expected Department :' + dep)
    //return("Chat Testgroup DE")
    if(typeof getDepartmentInfo(dep) != 'undefined'){
        return dep;
    }else{
        return 'Chat Private ' + getChatDepartmentLanguage();
    }
}



function getDepartmentWithOverflowCheck(selectedDepartment){
    overflowDepartmentArray = checkForOverflow();
    var departmenWaitingTime = getDepartmentWaitingTime();
        
    if(isDepartmentAvailable(selectedDepartment) && departmenWaitingTime > secondsToChatFallback && isOverflowDepartmentTresholdReached(departmenWaitingTime, overflowDepartmentArray[0][1])){
        return 'Chat Private ' + overflowDepartmentArray[0][0];
    }else{
        return selectedDepartment;
    }
}



function getDepartmentWaitingTime(){
    switch(getChatDepartmentLanguage()){
        case 'DE':
            return chatWaitTimes['Chat Private DE'];
            break;
        case 'EN':
            //return chatWaitTimes['Chat Private EN'];
            return chatWaitTimes['Chat Private Multilingual'];
            break;
        case 'IT':
            //return chatWaitTimes['Chat Private IT'];
            return chatWaitTimes['Chat Private Multilingual'];
            //return chatWaitTimes['Chat Private EN'];
            break;
        case 'FR':
            //return chatWaitTimes['Chat Private FR'];
            return chatWaitTimes['Chat Private Multilingual'];
            //return chatWaitTimes['Chat Private EN'];
            break;
        default:
            return 0;
    }
}



function isOverflowDepartmentTresholdReached(selectedDepartmentWaitingTime, overflowDepartmentWaitingTime){
    if(selectedDepartmentWaitingTime > (overflowDepartmentWaitingTime /100 * percentageForChatFallback)){
        return true;
    }else{
        return false;
    }
}



//Gets language and changes to uppercase
function getChatDepartmentLanguage(){
    var chatDepartmentLanguage = getNormalizedLanguage();
    if ((portal == "helpcenter.galaxus.ch" || portal == "helpcenter.digitec.ch") && chatDepartmentLanguage.toUpperCase() != "DE"){
        //return "EN"
        return "Multilingual"
    }
    else {
        return "DE"
    }
}



//Normalisiert die HTML Sprache
function getNormalizedLanguage(){
    var normalizedLanguage;
    switch(getLanguage()) {
        case ('de'):
            normalizedLanguage = 'de';
            break;
        case ('fr'):
            normalizedLanguage = 'fr';
            break;
        case ('it'):
            normalizedLanguage = 'it';
            break;
        case ('en-US'):
            normalizedLanguage = 'en';
            break;
        case ('nl'):
            normalizedLanguage = 'nl';
            break;
        default:
            normalizedLanguage = 'de';
    }
    return normalizedLanguage;
}



function getLanguage(){
    return $('html').attr('lang');
}



//Department Type wird anhand der Domain gesetzt
function getChatDepartmentType(){
    var href = window.location.hostname;
    var chatDepartmentType;
    switch(href){
        case('helpcenter.digitec.ch'):
        case('helpcenter.galaxus.ch'):
            //chatDepartmentType = 'Private';
            chatDepartmentType = getDGChatDepartmentType();
            break;
        case('helpcenter.connect.digitec.ch'):
            chatDepartmentType = 'Private';
            break;
        case('helpcenter.galaxus.de'):
        case('helpcenter.galaxus.at'):
        case('helpcenter.galaxus.fr'):
        case('helpcenter.galaxus.it'):
        case('helpcenter.galaxus.nl'):
        case('helpcenter.galaxus.be'):
            chatDepartmentType = 'EU';
            break;
        default:
            chatDepartmentType = 'Private';
    }
    return chatDepartmentType;
}




/////////////////////////////////////////////////////////////Special Routing Conditions///////////////////////////////////////////////////////////////////////////
//Special Overflow Routing for big Workload
function checkForOverflow(){
    if(isOverflowActive(getChatDepartmentLanguage())){
        return getOverflowDepartmentLanguage();
    }else{
        return getChatDepartmentLanguage();
    }
}



function isOverflowActive(chatDepartmentLanguage){
    switch(chatDepartmentLanguage){
        case 'DE':
            return chatDeHasFallback;
        case 'EN':
            return chatEnHasFallback;
        case 'IT':
            return chatItHasFallback;
        case 'FR':
            return chatFrHasFallback;
        default:
            return false;
    }
}



function getOverflowDepartmentLanguage(){
    var overflowDepartments = [];
    if(chatDeIsFallback && isDepartmentAvailable('Chat Private DE') && getChatDepartmentLanguage() != 'DE'){
        overflowDepartments.push(['DE', chatWaitTimes['privateDE']]);
    }
    if(chatFrIsFallback && isDepartmentAvailable('Chat Private FR') && getChatDepartmentLanguage() != 'FR'){
        overflowDepartments.push(['FR', chatWaitTimes['privateFR']]);
    }
    if(chatEnIsFallback && isDepartmentAvailable('Chat Private EN') && getChatDepartmentLanguage() != 'EN'){
        overflowDepartments.push(['EN', chatWaitTimes['privateEN']]);
    }
    if(chatItIsFallback && isDepartmentAvailable('Chat Private IT') && getChatDepartmentLanguage() != 'IT'){
        overflowDepartments.push(['IT', chatWaitTimes['privateIT']]);
    }
    return getOverflowDepartment(overflowDepartments);
}



function getOverflowDepartment(overflowDepartments){
    if(overflowDepartments.length > 0){
        return overflowDepartments.sort(sortArray)[0];
    }else{
        return getChatDepartmentLanguage();
    }
}



function sortArray(a, b){
    if (a[1] === b[1]){
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}



function isDepartmentAvailable(depName){
    var dep = getDepartmentInfo(depName)
    if(typeof dep != 'undefined'){
        if(dep.status == 'online'){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}



function getDepartmentInfo(departmentName){
    return zE('webWidget:get', 'chat:department', departmentName)
}
  
///////////////////////////////////////////////////////////New Request Page Events/////////////////////////////////////////////////////////////
function updateChatDepartment(){
    if(!isChatting()){
        var chatDepartment = getChatDepartment();
        customerDepartment = chatDepartment;
        changeWebWidgetSettingsOnChange(chatDepartment);
        checkDepartmentforInitialButtonChange(chatDepartment);
        addExternalScriptForWaitingTimes(false);
        //listenDepartmentStatus(chatDepartment);
    }else{
        if (isInOpeningTimes()){
            showChatButton();
        }
    }
}



function checkDepartmentforInitialButtonChange(selectedDepartment){
    if(isDepartmentAvailable(selectedDepartment) && isInOpeningTimes()){
        showChatButton();
    }else{
        hideChatButton();
    }
}



// Hide or Shows Button if Chosen Department Status Changes 
function listenDepartmentStatus(){
    zE('webWidget:on', 'chat:departmentStatus', function(department) {
        if(department.name == customerDepartment){
            changeButtonVisibility(department.status);
            updateChatDepartment();
        }
    });
}



// Shows Chat button if anyone is available and inside opening hours
function changeButtonVisibility(status){
    if(status == 'online' && isInOpeningTimes()){
        showChatButton();
    }else{
        hideChatButton();
    }
  }



/////////////////////////////////////////////////////////////////Zopim Tags/////////////////////////////////////////////////////////////////////////
//Nach dem Klick auf den Chat Button werden vorhandene Skills entfernt und neue gesetzt
function checkForTagChanges(){
    removeOldWebformCaseTag();
    removeOldTags();
    addNewZopimTags();    
}



//Entfert Tags für Sprache sowie Skills -> Es sind danach keine Tags mehr vorhanden und können neu gesetzt werden
function removeOldTags(){
    removeZopimTags(['de', 'fr', 'it', 'en']); // entfernt initial alle Sprachen
}



//Fügt die neuen Tags für Skill, WebformCase und Sprache hinzu.
function addNewZopimTags(){
    var languageTag = getNormalizedLanguage();
    setZopimTags([languageTag, requestReasonTag, getCustomerTypeTag()]); // Alle neuen Tags werden gesetzt
}

function getCustomerTypeTag(){
    if (customerType == "business-customer") {
        return "customer_type_business";
    } else {
        return "customer_type_private";
    }
}



// Wenn ein Webform Case im Session Storage vorhanden ist, wird dieser von den Chat Tags entfernt -> Wenn User die Auswahl im Dropdown ändern, sind ansonsten mehrere Tags vorhanden
function removeOldWebformCaseTag(){
    var oldWebformCase = sessionStorage.getItem('requestReason');
    if(!oldWebformCase !== null){
        removeZopimTags(oldWebformCase);// Wenn das Dropdown gewechselt wird, ist der "alte" Webform Case noch im Session Storage vorhanden und muss beim Chat entfernt werden   
    }
    sessionStorage.setItem('requestReason', requestReasonTag);
}



// Setzt den Chat Tag - Einzeln oder Array
function setZopimTags(tags){
    zE('webWidget', 'chat:addTags', tags);                                                                                    
}

  
// Entfernt Tags - Einzelne oder Array
function removeZopimTags(tags){
    zE('webWidget', 'chat:removeTags', tags);  
}



// Callback for Start and Adds Event Listeners
function setEventListenerForChatStart(){
    zE('webWidget:on', 'chat:start', function() {
        setTagsAndDepartmentAtReconnect();
        setEventListenerForChatEnd();
    });
}



function setEventListenerForChatEnd(){
    zE('webWidget:on', 'chat:end', function() {
        updateChatDepartment();
    });
}



//Set tags when Chat Reconnects
function setTagsAndDepartmentAtReconnect(){
    zE('webWidget:on', 'chat:connected', function() {
        checkForTagChanges();
        changeWebWidgetSettingsOnChange();
    });
}



//////////////////////////////////////////////////////////Globale Chat Functions////////////////////////////////////////////////////////////////
function openWidgetForUnreadMessages(){
    zE('webWidget:on', 'chat:unreadMessages', function(number) {
        openChat();
    });
}



function hideWidgetWhenMinimized(){
    zE('webWidget:on', 'userEvent', function(event) {
        if(event.action == 'Web Widget Minimised'){
            if (!(sessionStorage.getItem('chatOpenFromHelpAssist') == 'yes' && isInOpeningTimes())){
                zE('webWidget', 'hide');
            }
        }
    });
}



function isChatting(){
    if(zE('webWidget:get', 'chat:isChatting')){
        return true;
    }else{
        return false;
    }
}



function openChat(){
    //webWidgetDiv.show()
    zE('webWidget', 'show');
    document.getElementById('launcher').contentWindow.document.getElementById('Embed').getElementsByTagName('button')[0].click();
}



function hideChat(){
    //webWidgetDiv.hide()
    zE('webWidget', 'hide');
}



/////////// "ALTES" PE ROUTING ///////////

//Unterteilung zwischen PE & Private
function getDGChatDepartmentType(){
    lang = getNormalizedLanguage();
    var DGChatDepartmentType;
    if(typeof customerType != 'undefined' && typeof requestReasonTag != 'undefined'){
        switch(true){
            case(isPeIt()):
                DGChatDepartmentType = 'PeIt';
                break;
            case(isPeNetwork()):
                DGChatDepartmentType = 'PeNetwork';
                break;
            case(isPeConsumer()):
                DGChatDepartmentType = 'PeConsumer';
                break;
            case(isPePhoto()):
                DGChatDepartmentType = 'PePhoto';
                break;
            case(isPeHome()):
                DGChatDepartmentType = 'PeHome';
                break;
            case(isPeDiy()):
                DGChatDepartmentType = 'PeDiy';
                break;  
            default:
                DGChatDepartmentType = 'Private';
        }
        return DGChatDepartmentType;  
    }else{
        return 'Private';
    }
}
//Special Routing for PeIt
function isPeIt(){
    if(requestReasonTag == 'webform_case_product_advice_it' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}


//Special Routing for PeNetwork
function isPeNetwork(){
    if(requestReasonTag == 'webform_case_product_advice_network' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PePhoto
function isPePhoto(){
    if(requestReasonTag == 'webform_case_product_advice_photo' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeConsumer
function isPeConsumer(){
    if(requestReasonTag == 'webform_case_product_advice_consumer' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PePhoto
function isPePhoto(){
    if(requestReasonTag == 'webform_case_product_advice_photo' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeHome
function isPeHome(){
    if(requestReasonTag == 'webform_case_product_advice_home' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeDiy
function isPeDiy(){
    if(requestReasonTag == 'webform_case_product_advice_diy' && localStorage.getItem("PEABTestGroup3") == "B"){
        return true;
    }else{
        return false;
    }
}