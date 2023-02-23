// Waits until Page loaded and then calls basic Setup
let customerDepartment = "Chat Private DE"
function waitForChat(){
    window.addEventListener('load', function() {
        zE('webWidget:on', 'chat:connected', function() {
            openWidgetForUnreadMessages();
            hideWidgetWhenMinimized();
            listenDepartmentStatus(customerDepartment);
            if(isChatting()){
                openChat();
            }else{
                changeWebWidgetSettingInitial(getChatDepartment());
                hideChat();
            }
        });
    })
}

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
                    it: dynamicWording[getLanguage()]['chatUs']
                },
                prechatForm: {
                    greeting: {
                        '*': dynamicWording['en-US']['chatGreetingText'],
                        fr: dynamicWording[getLanguage()]['chatGreetingText'],
                        de: dynamicWording[getLanguage()]['chatGreetingText'],
                        it: dynamicWording[getLanguage()]['chatGreetingText']
                    }
                },
                offlineForm: {
                    greeting: {
                        '*': dynamicWording['en-US']['chatOfflineMessage'],
                        fr: dynamicWording[getLanguage()]['chatOfflineMessage'],
                        de: dynamicWording[getLanguage()]['chatOfflineMessage'],
                        it: dynamicWording[getLanguage()]['chatOfflineMessage']
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

    if(chatDepartmentType.includes('Yoummday')){
        var dep = 'Chat ' + chatDepartmentType + ' DE'; 
    }else{
        var dep = 'Chat ' + chatDepartmentType + ' ' + getChatDepartmentLanguage(); 
    }
 
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
        case 'EN':
            return chatWaitTimes['Chat Private EN'];
        case 'IT':
            return chatWaitTimes['Chat Private IT'];
        case 'FR':
            return chatWaitTimes['Chat Private FR'];
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
    if ((portal == "helpcenter.galaxus.ch" || portal == "helpcenter.digitec.ch") && chatDepartmentLanguage.toUpperCase() == "IT"){
        chatDepartmentLanguage = "EN"
    }
    return chatDepartmentLanguage.toUpperCase();
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
            chatDepartmentType = getDGChatDepartmentType();
            break;
        case('helpcenter.connect.digitec.ch'):
            chatDepartmentType = 'Private';
            break;
        case('helpcenter.galaxus.de'):
        case('helpcenter.galaxus.at'):
            chatDepartmentType = 'EU';
            break;
        default:
            chatDepartmentType = 'Private';
    }
    return chatDepartmentType;
}

//Unterteilung zwischen PE, Private & Business
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
            case(isPeEnFr()):
                DGChatDepartmentType = 'Pe';
                break;
            case(isYoummdayBasic()):
                DGChatDepartmentType = 'YoummdayBasic';
                break;
            case(isYoummdayAdvanced()):
                DGChatDepartmentType = 'YoummdayAdvanced';
                break;
            case(isYoummdayExpert()):
                DGChatDepartmentType = 'YoummdayExpert';
                break;
            case(isBusiness()):
                DGChatDepartmentType = 'Business';
                break;
            default:
                DGChatDepartmentType = 'Private';
        }
        return DGChatDepartmentType;  
    }else{
        return 'Private';
    }
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

//Special Routing for PeIt
function isPeIt(){
    if(requestReasonTag == 'webform_case_product_advice_it' && lang == 'de' /*&& isPeItAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if (requestReasonTag == 'webform_case_product_advice_it' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPeItAvailable(){
    if(isDepartmentAvailable('Chat PeIt '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeNetwork
function isPeNetwork(){
    if(requestReasonTag == 'webform_case_product_advice_network' && lang == 'de' /*&& isPeNetworkAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_network' && lang == 'de' && customerType == "private-customer"){
        return true
    }else{
        return false;
    }
}

function isPeNetworkAvailable(){
    if(isDepartmentAvailable('Chat PeNetwork '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PePhoto
function isPePhoto(){
    if(requestReasonTag == 'webform_case_product_advice_photo' && lang == 'de' /*&& isPePhotoAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_photo' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPePhotoAvailable(){
    if(isDepartmentAvailable('Chat PePhoto '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeConsumer
function isPeConsumer(){
    if(requestReasonTag == 'webform_case_product_advice_consumer' && lang == 'de' /*&& isPeConsumerAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_consumer' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPeConsumerAvailable(){
    if(isDepartmentAvailable('Chat PeConsumer '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PePhoto
function isPePhoto(){
    if(requestReasonTag == 'webform_case_product_advice_photo' && lang == 'de' /*&& isPePhotoAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_photo' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPePhotoAvailable(){
    if(isDepartmentAvailable('Chat PePhoto '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeHome
function isPeHome(){
    if(requestReasonTag == 'webform_case_product_advice_home' && lang == 'de' /*&& isPeHomeAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_home' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPeHomeAvailable(){
    if(isDepartmentAvailable('Chat PeHome '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for PeDiy
function isPeDiy(){
    if(requestReasonTag == 'webform_case_product_advice_diy' && lang == 'de' /*&& isPeDiyAvailable()*/ && customerType == "business-customer"){
        return true;
    }else if(requestReasonTag == 'webform_case_product_advice_diy' && lang == 'de' && customerType == "private-customer"){
        return true;
    }else{
        return false;
    }
}

function isPeDiyAvailable(){
    if(isDepartmentAvailable('Chat PeDiy '+getChatDepartmentLanguage())){
        return true;
    }else{isBusiness
        return false;
    }
}

//Special Routing for PE EN/FR
function isPeEnFr(){
    if((lang == 'fr' || lang == 'en') && (requestReasonTag == 'webform_case_product_advice_it' || requestReasonTag == 'webform_case_product_advice_network' || requestReasonTag == 'webform_case_product_advice_consumer' || requestReasonTag == 'webform_case_product_advice_photo') && isPeEnFrAvailable()){
        return true;
    }else{
        return false;
    }
}

function isPeEnFrAvailable(){
    if(isDepartmentAvailable('Chat Pe '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}


//Special Routing for B2B
function isBusiness(){
    if(customerType == 'business-customer' && (lang == 'de' || lang == 'fr' || lang =='en') && isBusinessAvailable()){
        return true;
    }else{
        return false;
    }
}

function isBusinessAvailable(){
    if(isDepartmentAvailable('Chat Business '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for YoummdayBasic
function isYoummdayBasic(){
       if(/*lang == 'de' && */isInYoummdayShift() && (requestReasonTag == 'webform_case_shipping_status' || requestReasonTag == 'webform_case_ready_for_shipment' || requestReasonTag == 'webform_case_order_status') && isYoummdayBasicAvailable() && isYoummdayWaitingTimeSmall('Chat YoummdayBasic DE')){
        return true;
    }else{
        return false;
    }
}

function isYoummdayBasicAvailable(){
    if(isDepartmentAvailable('Chat YoummdayBasic DE')){
        return true;
    }else{
        return false;
    }
}

function isYoummdayWaitingTimeSmall(yoummdayDepartment){
    if(typeof chatWaitTimes != 'undefined'){   
        if(chatWaitTimes['Chat Private ' + getChatDepartmentLanguage()] < chatWaitTimes[yoummdayDepartment] && chatWaitTimes[yoummdayDepartment] > 300){
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}

//Special Routing for YoummdayAdvanced
function isYoummdayAdvanced(){
    if(/*lang == 'de' && */isInYoummdayShift() && (requestReasonTag == 'webform_case_return' || requestReasonTag == 'webform_case_receipt') && isYoummdayAdvancedAvailable() && isYoummdayWaitingTimeSmall('Chat YoummdayAdvanced DE') ){
        return true;
    }else{
        return false;
    }
}

function isYoummdayAdvancedAvailable(){
    if(isDepartmentAvailable('Chat YoummdayAdvanced DE')){
        return true;
    }else{
        return false;
    }
}

//Special Routing for YoummdayExpert
function isYoummdayExpert(){
    if(/*lang == 'de' && */isInYoummdayShift() && (requestReasonTag == 'webform_case_wrong_product') && isYoummdayExpertAvailable() && isYoummdayWaitingTimeSmall('Chat YoummdayExpert DE')){
        return true;
    }else{
        return false;
    }
}

function isYoummdayExpertAvailable(){
    if(isDepartmentAvailable('Chat YoummdayExpert DE')){
        return true;
    }else{
        return false;
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
    setZopimTags([languageTag, requestReasonTag]); // Alle neuen Tags werden gesetzt
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
function setEventListernerForChatStart(){
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
            zE('webWidget', 'hide');
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
    zE('webWidget', 'show');
    document.getElementById('launcher').contentWindow.document.getElementById('Embed').getElementsByTagName('button')[0].click();
}

function hideChat(){
    zE('webWidget', 'hide');
}