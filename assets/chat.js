// Hauptfunktion, wartet bis chat geladen ist und ruft danach die anderen Funktionen auf
function waitForChat(){
    window.addEventListener('load', function() {
        zE('webWidget:on', 'chat:connected', function() {
           console.log("waitForChat")
           changeWebWidgetSetting(true);
           openWidgetForUnreadMessages();
           hideWidgetWhenMinimized();
           if(isChatting){
               openChat();
           }else{
               hideChat();
           }
        });
    })
}

///////////////////////////////////////////////////////////Widget/////////////////////////////////////////////////////////

// Updated die Widget Settings - Update Soll nur bei Dropdown Change im Request Form passieren. Ansonsten soll die Einstellung nicht überschrieben werden
function changeWebWidgetSetting(initialLoad){
    console.log('changeWebWidgetSetting')
    if(initialLoad){
        window.zESettings = getWebWidgetSettings(); // Widget Settings Initiales Setup
    }else{
        zE('webWidget', 'updateSettings', getWebWidgetSettings()); // Widget Settings Update
    }
    zE('webWidget', 'setLocale', getChatLanguage(language)); // Setzt die Widget Sprache
}

// Definiert die Widget Settings
function getWebWidgetSettings(){
    console.log('getWebWidgetSettings')
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
    console.log(zeSettings);
    return zeSettings;
}

/////////////////////////////////////////////////////////////Departments///////////////////////////////////////////////////////////////////////////

// Gibt das Chat Department anhand der Sprache und des Kundentyps zurück
function getChatDepartment(){
    console.log('getChatDepartment');
    console.log('thedepartmentis: ' + getChatDepartmentType() + getChatLanguage('department'))
    return 'Chat ' + getChatDepartmentType() + getChatLanguage('department'); 
}

// Dictionary wo die HTML Sprache für Department und allgemein zurückgibt
function getChatLanguage(type){
    console.log('getChatLanguage');
    var chatLanguage = {
        de: {
            'language' : 'de',
            'department' : 'DE'
        },  
        fr: {
            'language' : 'fr',
            'department' : 'FR'
        },
        it: {
            'language' : 'it',
            'department' : 'IT'
        },
        'en-US': {
            'language' : 'en',
            'department' : 'EN'
        }
    }
    if(typeof currentLanguage != 'undefined'){
        console.log('its in the correct spot');
        console.log(chatLanguage[currentLanguage][type])
        return chatLanguage[currentLanguage][type];
    }else{
        console.log('its in the wrong spot');
        console.log(chatLanguage['de'][type])
        return chatLanguage['de'][type];
    }
}

// Gibt den Kundentyp für das Chat Department anhand des Kundentyps im Kuntaktformular zurück
function getChatDepartmentType(){
    try{
    console.log('getChatDepartmentType');
    if(typeof customerType != 'undefined'){
        var departmentType;
        switch(customerType) {
            case ('private-customer'):
            departmentType = 'Private ';
            break;
            case ('business-customer'):
                departmentType = 'Business ';
            break;
            case ('connect-customer'):
                departmentType = 'Connect ';
            break;
            default:
                departmentType = 'Private ';
        }
        console.log('end of the switch')
        return departmentType; 
    }else{
        console.log('its in private')
        return 'Private';
    }
}catch(e){
    console.log(e);
}
}
  
///////////////////////////////////////////////////////////New Request Page Events/////////////////////////////////////////////////////////////

function updateChatConnectionAfterDropdownChange(){
    if(!isChatting()){
        var chatDepartment = getChatDepartment();                                                                                 
        checkDepartmentforInitialButtonChange(chatDepartment);                                                                                          
        listenDepartmentStatus(chatDepartment); 
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

// CSS Change für Chat Button Offline
function hideChatButton(){
    $(".button-chat").removeClass("button-offline");
    $(".button-chat").html(getButtonText('chatUs'));
    $(".contactDataChat").show();
    $(".chatLabel").addClass("chatLabelVisible");
    $(".recommendedChannel").css('display' , 'inline-block');
}

// CSS Change für Chat Button Offline
function showChatButton(){
    $(".button-chat").removeClass("button-offline");
    $(".button-chat").html(getButtonText('chatUs'));
    $(".contactDataChat").show();
    $(".chatLabel").addClass("chatLabelVisible");
    $(".recommendedChannel").css('display' , 'inline-block');
}

function getButtonText(buttonText){
    var currentLanguage = $('html').attr('lang');
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
          'en-US': {
                  'chatUs': 'Chat with us',
                  'chatNotOnline' : 'Not available'
        }
    }
    return chatText[currentLanguage][buttonText];
}

/////////////////////////////////////////////////////////////////Zopim Tags/////////////////////////////////////////////////////////////////////////

function checkForTagChanges(){
    var oldWebformCase = sessionStorage.getItem('requestReason');
    if(!oldWebformCase !== null){
        removeZopimTags(oldWebformCase);// Wenn das Dropdown gewechselt wird, ist der "alte" Webform Case noch im Session Storage vorhanden und muss beim Chat entfernt werden   
    }
    var webformCase = requestReasonDropdownContents.attr('value');
    sessionStorage.setItem('requestReason', webformCase);
    var skill = getChatSkill(webformCase);
    var languageTag = getChatLanguage('language');
    removeZopimTags(['de', 'fr', 'it', 'en']); // entfernt initial alle Sprachen
    removeZopimTags(['chat_pe_consumer', 'standard_request', 'chat_pe_home']); // entfernt initial alle Skills
    setZopimTags([webformCase, languageTag, skill]);
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
  	case (department === 'Chat Private DE' && webFormCase === 'webform_case_product_advice_consumer'):
    	skill = 'chat_pe_consumer';
    	break;
  	case (department === 'Chat Private DE' && webFormCase === 'webform_case_product_advice_home'):
    	skill = 'chat_pe_home';
    	break;
  	default:
    	skill = 'standard_request';
	}
    return skill;    
}

//////////////////////////////////////////////////////////Global Chat Funktionen////////////////////////////////////////////////////////////////

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

