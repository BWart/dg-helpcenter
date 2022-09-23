// Hauptfunktion, wartet bis chat geladen ist und ruft danach die anderen Funktionen auf
function waitForChat(){
    window.addEventListener('load', function() {
        openWidgetForUnreadMessages();
        hideWidgetWhenMinimized();
        if(isChatting()){
            openChat();
        }else{
            changeWebWidgetSettingInitial();
            hideChat();
        }
    })
}

///////////////////////////////////////////////////////////Widget/////////////////////////////////////////////////////////
//Initiales Setting des Web Widgets beim Laden der Seite
function changeWebWidgetSettingInitial(){
    window.zESettings = getWebWidgetSettings(); // Widget Settings Initiales Setup
    zE('webWidget', 'setLocale', getLanguage()); // Setzt die Widget Sprache   
}

// Updated die Widget Settings - Update Soll nur bei Dropdown Change im Request Form und beim Reconnect passieren. Ansonsten soll die Einstellung nicht überschrieben werden
function changeWebWidgetSettingsOnChange(){
    zE('webWidget', 'updateSettings', getWebWidgetSettings());
    zE('webWidget', 'setLocale', getLanguage()); // Setzt die Widget Sprache
}

// Definiert die Widget Settings
function getWebWidgetSettings(){
    var greetingTextDE = "Damit wir dir rasch helfen können, teile uns bitte deine Auftrags- oder Rechnungsnummer mit."
    var greetingTextFR = "Pour que nous puissions vous aider rapidement, veuillez nous communiquer votre numéro de commande ou de facture."
    var greetingTextIT = "Per potervi aiutare rapidamente, vi preghiamo di comunicarci il vostro numero d'ordine o di fattura."
    var greetingTextEN = "So that we can help you quickly, please let us know your order or invoice number."
    if (portal == "helpcenter.connect.digitec.ch"){
        greetingTextDE = "Damit wir dir rasch helfen können, teile uns bitte deine Mobiltelefonnummer mit."
        greetingTextFR = "Pour que nous puissions vous aider rapidement, veuillez nous communiquer votre numéro de téléphone portable."
        greetingTextIT = "Per potervi aiutare rapidamente, vi preghiamo di comunicarci il vostro numero di cellulare."
        greetingTextEN = "So that we can help you quickly, please let us know your cell phone number."
    }
    var dep = getChatDepartment();
    console.log('Department Set: '+ dep);
    var zeSettings = {
        webWidget: {
            chat: {
                suppress: false,
                departments: {
                    select: dep,
                    enabled: []
                },
                title: {
                    '*': 'Chat with us',
                    fr: 'Chattez avec nous',
                    de: "Chatte mit uns",
                    it: "Chattata con noi"
                },
                prechatForm: {
                    greeting: {
                        '*': greetingTextEN,
                        fr: greetingTextFR,
                        de: greetingTextDE,
                        it: greetingTextIT
                    }
                },
                offlineForm: {
                    greeting: {
                        '*': "We aren't online right now",
                        fr: "Nous ne sommes pas en ligne pour le moment",
                        en: "We aren't online right now",
                        de: "Wir sind im Moment nicht online",
                        it: "Non siamo online in questo momento"
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
    dep = 'Chat ' + getChatDepartmentType()+ ' ' + getChatDepartmentLanguage(); 
    if(typeof getDepartmentInfo(dep) != 'undefined'){
        return dep;
    }else{
        return 'Chat Private ' + getChatDepartmentLanguage();
    }
}

//Gets language and changes to uppercase
function getChatDepartmentLanguage(){
    var chatDepartmentLanguage = getLanguage();
    return chatDepartmentLanguage.toUpperCase();
}

//Normalisiert die HTML Sprache
function getLanguage(){
    var normalizedLanguage;
    switch($('html').attr('lang')) {
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

//Department Type wird anhand der Domain gesetzt
function getChatDepartmentType(){
    var href = window.location.hostname;
    var chatDepartmentType;
    switch(href){
        case('helpcenter.digitec.ch'):
            chatDepartmentType = getDGChatDepartmentType();
            break;
        case('helpcenter.galaxus.ch'):
            chatDepartmentType = getDGChatDepartmentType();
            break;
        case('helpcenter.connect.digitec.ch'):
            chatDepartmentType = 'Connect';
            break;
        case('helpcenter.galaxus.de'):
        case('helpcenter.galaxus.at'):
            chatDepartmentType = 'Ger'
            break;
        default:
            chatDepartmentType = 'Private';
    }
    return chatDepartmentType;
}

//Unterteilung zwischen PE, Private & Business
function getDGChatDepartmentType(){
    lang = getLanguage();
    var DGChatDepartmentType;
    if(typeof customerType != 'undefined' && typeof requestReasonTag != 'undefined'){
        switch(true){
            case(requestReasonTag == 'webform_case_product_advice_it' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PeIt'
                break;
            case(requestReasonTag == 'webform_case_product_advice_network' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PeNetwork'
                break;
            case(requestReasonTag == 'webform_case_product_advice_consumer' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PeConsumer';
                break;
            case(requestReasonTag == 'webform_case_product_advice_photo' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PePhoto'
                break;
            case(requestReasonTag == 'webform_case_product_advice_home' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PeHome';
                break;
            case(requestReasonTag == 'webform_case_product_advice_diy' && isInCHPEOpeningTimes() && lang == 'de'):
                DGChatDepartmentType = 'PeDiy'
                break;  
            case(isPeEnFr(lang)):
                DGChatDepartmentType = 'Pe';
                break;
            case(isYoummdayBasic()):
                DGChatDepartmentType = 'YoummdayBasic';
                break;
            case(isYoummdayAdvanced()):
                DGChatDepartmentType = 'YoummdayAdvanced';
                break;
            case(customerType == 'business-customer' && (lang == 'de' || lang == 'fr' || lang =='en')):
                DGChatDepartmentType = getBusinessCustomerDepartmentType();
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
//Special Routing for PE EN/FR
function isPeEnFr(lang){
    if((lang == 'fr' || lang == 'en') && (requestReasonTag == 'webform_case_product_advice_it' || requestReasonTag == 'webform_case_product_advice_network' || requestReasonTag == 'webform_case_product_advice_consumer' || requestReasonTag == 'webform_case_product_advice_photo') && peEnFrisAvailable()){
        return true;
    }else{
        return false;
    }
}

function peEnFrisAvailable(){
    if(isDepartmentAvailable('Chat Pe '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for YoummdayBasic
function isYoummdayBasic(){
    if(lang == 'de'  && (requestReasonTag == 'webform_case_shipping_status' || requestReasonTag == 'webform_case_ready_for_shipment' || requestReasonTag == 'webform_case_order_status') && yoummdayBasicIsAvailable()){
        return true;
    }else{
        return false;
    }
}

function yoummdayBasicIsAvailable(){
    if(isDepartmentAvailable('Chat YoummdayBasic '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//Special Routing for YoummdayAdvanced
function isYoummdayAdvanced(){
    if(lang == 'de'  && (requestReasonTag == 'webform_case_return' || requestReasonTag == 'webform_case_receipt') && yoummdayAdvancedIsAvailable()){
        return true;
    }else{
        return false;
    }
}

function yoummdayAdvancedIsAvailable(){
    if(isDepartmentAvailable('Chat YoummdayAdvanced '+getChatDepartmentLanguage())){
        return true;
    }else{
        return false;
    }
}

//SpecialRoutingForBusinessCustomers Deutsch - Produktberatungen gehen zu den Privatkunden/PE sowie alle Chats nach 17:00
function getBusinessCustomerDepartmentType(){
    if(isInBusinessOpeningTimes()){
        return 'Business';
    }else{
        return 'Private';
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
        changeWebWidgetSettingsOnChange();                                                                                    
        checkDepartmentforInitialButtonChange(chatDepartment);                                                                                        
        listenDepartmentStatus(chatDepartment);
    }else{
        showChatButton();
    }
}

function checkDepartmentforInitialButtonChange(selectedDepartment){
    var dep = getDepartmentInfo(selectedDepartment);
    if(dep.status == 'online'){
        showChatButton();
    } else {
        hideChatButton();
    }
}

// Hide or Shows Button if Chosen Department Status Changes 
function listenDepartmentStatus(selectedDepartment){
    zE('webWidget:on', 'chat:departmentStatus', function(department) {
        if(department.name == selectedDepartment){
            changeButtonVisibility(department.status);
            updateChatDepartment();
        }
    });
}

// Shows Chat button if anyone is available and inside opening hours
function changeButtonVisibility(status){
    if(status == 'online'){
        showChatButton();
    }else{
        hideChatButton();
    }
  }

//Gibt den Text für den ChatButton im Kontaktforumar zurück offen/geschlossen
function getButtonText(buttonText){
        chatText = {
          de: {
                  'chatUs': 'Chatte mit uns',
                  'chatNotOnline' : 'Nicht verfügbar'
          },
          fr: {      
                  'chatUs': 'Chattez avec nous',
                  'chatNotOnline' : 'Non disponible'
          },
          it:{  
                  'chatUs': 'Chatta con noi',
                  'chatNotOnline' : 'Non disponibile'
          },
          en: {
                  'chatUs': 'Chat with us',
                  'chatNotOnline' : 'Not available'
        }
    }
    return chatText[getLanguage()][buttonText];
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
    var languageTag = getLanguage();
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

// Gibt Callback, wenn der Chat gestartet wird und ruft den Event Listener für den Chat Recconect auf
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

//Setzt  Tags und Department, wenn der Chat neu verbunden wird
function setTagsAndDepartmentAtReconnect(){
    zE('webWidget:on', 'chat:connected', function() {
        checkForTagChanges();
        changeWebWidgetSettingsOnChange();
    });
}

//////////////////////////////////////////////////////////Globale Chat Funktionen////////////////////////////////////////////////////////////////
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