function waitForChat(){
    window.addEventListener('load', function() {
        zE('webWidget:on', 'chat:connected', function() {
           console.log("ChatConnected")
           changeWebWidgetSetting('set');
        });
    })
}


///////////////////////////////////////////////////////////Widget/////////////////////////////////////////////////////////

// Wechselt widget anhand des Typs (Set & Update)
function changeWebWidgetSetting(type){
    console.log('beforwebwidgetsettings')
    console.log(getWebWidgetSettings())
    if (type == 'set'){
        window.zESettings = getWebWidgetSettings();
    }else{
        zE('webWidget', 'updateSettings', getWebWidgetSettings());
    }
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
    console.log('Chat ' + getChatDepartmentType() + getChatDepartmentLanguage());
    return 'Chat ' + getChatDepartmentType() + getChatDepartmentLanguage();
  }

// Gibt die Sprache des Chat Departments anhand der HTML Sprache zurück
function getChatDepartmentLanguage(){
    switch(currentLanguage) {
        case ('de'):
          chatDepartment = 'DE';
          break;
        case ('fr'):
          chatDepartment = 'FR';
          break;
        case ('it'):
          chatDepartment = 'IT';
          break;
        case ('en-US'):
          chatDepartment = 'EN';
          break;
        default:
          chatDepartment = 'DE';
      }
      return chatDepartment; 
}

// Gibt den Kundentyp für das Chat Department anhand des Kundentyps im Kuntaktformular zurück
function getChatDepartmentType(){
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
      return departmentType; 
}

