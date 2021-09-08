// Hauptfunktion, wartet bis chat geladen ist und ruft danach die anderen Funktionen auf
function waitForChat(){
    window.addEventListener('load', function() {
        console.log('TADAAAA')
        changeWebWidgetSettingInitial();
        openWidgetForUnreadMessages();
        hideWidgetWhenMinimized();
        if(isChatting()){
            openChat();
        }else{
            hideChat();
        }
    })
}

///////////////////////////////////////////////////////////Widget/////////////////////////////////////////////////////////

// Updated die Widget Settings - Update Soll nur bei Dropdown Change im Request Form passieren. Ansonsten soll die Einstellung nicht überschrieben werden
function changeWebWidgetSettingInitial(){
    window.zESettings = getWebWidgetSettings(); // Widget Settings Initiales Setup
    zE('webWidget', 'setLocale', getLanguage()); // Setzt die Widget Sprache   
}

function changeWebWidgetSettingsOnChange(){
    zE('webWidget', 'updateSettings', getWebWidgetSettings());
    zE('webWidget', 'setLocale', getLanguage()); // Setzt die Widget Sprache
}

// Definiert die Widget Settings
function getWebWidgetSettings(){
    var dep = getChatDepartment();
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
                        '*': 'Please have your order, service or invoice number ready so that we can help you even faster.',
                        fr: "Veuillez préparer votre numéro de commande, de service ou de facture afin que nous puissions vous aider encore plus rapidement. ",
                        de: "Bitte halte deine Bestell-, Service- oder Rechnungsnummer bereit, damit wir dir noch schneller helfen können. ",
                        it: "Tieni pronto il tuo numero d'ordine, di servizio o di fattura in modo che possiamo aiutarti ancora più velocemente. "
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
    return 'Chat ' + getChatDepartmentType()+ ' ' + getChatDepartmentLanguage(); 
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

// Gibt den Kundentyp für das Chat Department anhand des Kundentyps im Kuntaktformular zurück
function getChatDepartmentType(){
    if(typeof customerType != 'undefined'){
        var businessCustomerDepartment = getBusinessCustomerDepartment();
        var departmentType;
        switch(customerType) {
            case ('private-customer'):
                departmentType = 'Private';
                break;
            case ('business-customer'):
                departmentType = businessCustomerDepartment;
                break;
            case ('connect-customer'):
                departmentType = 'Private';
                break;
            default:
                departmentType = 'Private';
        }
        return departmentType; 
    }else{
        return 'Private';
    }
}


//SpecialRoutingForBusinessCustomers Deutsch - Produktberatungen gehen zu den Privatkunden/PE sowie alle Chats nach 17:00
function getBusinessCustomerDepartment(){
    if(getLanguage() == 'de'){
        if(isInBusinessChatHours()){
            return getBusinessChatDepartmentCheckedForProductAdvice();
        }else{
            return 'Private';
        }
    }else{
        return 'Business';
    }
}


// Gibt Privatkunde zurück, insofern Produktberatung und ansonsten Business
function getBusinessChatDepartmentCheckedForProductAdvice(){
    var businessCustomerDepartment;
    if(typeof requestReasonTag != 'undefined'){
        switch(requestReasonTag) {
            case ('webform_case_product_advice_it'):
                businessCustomerDepartment = 'Private';
                break;
            case ('webform_case_product_advice_network'):
                businessCustomerDepartment = 'Private';
                break;
            case ('webform_case_product_advice_consumer'):
                businessCustomerDepartment = 'Private';
                break;
            case ('webform_case_product_advice_photo'):
                businessCustomerDepartment = 'Private';
                break;
            case ('webform_case_product_advice_home'):
                businessCustomerDepartment = 'Private';
                break;
            case ('webform_case_product_advice_diy'):
                businessCustomerDepartment = 'Private';
                break;
            default:
                businessCustomerDepartment = 'Business';
        }
        return businessCustomerDepartment;
    }else{
        return ('Business');
    }   
}

//Returns true when hours < 17
function isInBusinessChatHours(){
    var today = new Date();
    if((today.getHours() == 16 && today.getMinutes() >= 55)){
        return false;
    }
    if(today.getHours()< 17){
        return true;
    }else{
        return false;
    }   
}

  
///////////////////////////////////////////////////////////New Request Page Events/////////////////////////////////////////////////////////////

function updateChatConnectionAfterDropdownChange(){
    if(!isChatting()){
        var chatDepartment = getChatDepartment();                                                                                 
        checkDepartmentforInitialButtonChange(chatDepartment);                                                                                          
        listenDepartmentStatus(chatDepartment);
        changeWebWidgetSettingsOnChange(); 
    }else{
        showChatButton();
    }
}

function checkDepartmentforInitialButtonChange(selectedDepartment){
    var dep = zE('webWidget:get', 'chat:department', selectedDepartment);
    if(dep.status == 'online'){
        showChatButton();
    }
}


// Hide or Shows Button if Status Changes
 
function listenDepartmentStatus(selectedDepartment){
    zE('webWidget:on', 'chat:departmentStatus', function(department) {
        if(department.name == selectedDepartment){
            changeButtonVisibility(department.status);
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
    removeZopimTags(['chat_pe_consumer', 'standard_request', 'chat_pe_home', 'chat_connect']); // entfernt initial alle Skills
}

//Fügt die neuen Tags für Skill, WebformCase und Sprache hinzu.
function addNewZopimTags(){
    var languageTag = getLanguage();
    var skill = getChatSkill(requestReasonTag);
    setZopimTags([skill, languageTag, requestReasonTag]); // Alle neuen Tags werden gesetzt
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

// Setzt für definierte Anfragegründe spezifische Skills und retourniert ansonsten den Standardskill
function getChatSkill(webFormCase){
    var skill;
    var department = getChatDepartment();
    switch(true) {
  	case ('Chat Private DE' && webFormCase === 'webform_case_product_advice_consumer'):
    	skill = 'chat_pe_consumer';
        break;
  	case (department === 'Chat Private DE' && webFormCase === 'webform_case_product_advice_home'):
    	skill = 'chat_pe_home';
        break;
    case(customerType == 'connect-customer'):
        skill = 'chat_connect'
        break;
  	default:
    	skill = 'standard_request';
	}
    return skill;    
}

// Gibt Callback, wenn der Chat gestartet wird und ruft den Event Listener für den Chat Recconect auf
function setEventListernerForChatStart(){
    zE('webWidget:on', 'chat:start', function() {
        setTagsAtReconnect();
    });
}

//Setzt die Tags, wenn der Chat neu verbunden wird
function setTagsAtReconnect(){
    zE('webWidget:on', 'chat:connected', function() {
        checkForTagChanges();
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

