function filldynamicWording(){
    var portal = window.location.hostname;

    var uhrzeitPrivatkunde = "";
    var uhrzeitPrivatkunde2 = "";
    var uhrzeitFirmenkunde = "";
    var uhrzeitFirmenkunde2 = "";
    var uhrzeitPrivatkundeMobile = "";
    var uhrzeitFirmenkundeMobile = "";
    var tagePrivatkunde = "";
    var tagePrivatkunde2 = "";
    var tagePrivatkunde2Mobile = "";
    var tageFirmenkunde = "";
    var tageFirmenkunde2 = "";
    var tageFirmenkunde2Mobile = "";
    var commaMultipleHoursPrivateCustomers = "";
    var commaMultipleHoursBusinessCustomers = "";

    var telPrivatkunde = "";
    var telFirmenkunde = "";
    var telPrivatkundeText = "";
    var telFirmenkundeText = "";


    switch(portal){
        case'helpcenter.digitec.ch':
                tagePrivatkunde = "Mo - Fr:";
                tagePrivatkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2Mobile = "";  //WICHTIG: KEIN leading <br> wenn befüllt
                tageFirmenkunde = "Mo - Fr:";
                tageFirmenkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2Mobile = "";  //WICHTIG: KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";    

                break;
        case'helpcenter.galaxus.ch':
                tagePrivatkunde = "Mo - Fr:";
                tagePrivatkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2Mobile = "";  //WICHTIG: KEIN leading <br> wenn befüllt
                tageFirmenkunde = "Mo - Fr:";
                tageFirmenkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2Mobile = "";  //WICHTIG: KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";                
                break;
        case'helpcenter.galaxus.de':
                tagePrivatkunde = "Mo - Fr:";
                tagePrivatkunde2 = "<br>Sa:";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2Mobile = "Sa:";  //WICHTIG: KEIN leading <br> wenn befüllt
                tageFirmenkunde = "Mo - Fr:";
                tageFirmenkunde2 = "<br>Sa:";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2Mobile = "Sa:";  //WICHTIG: KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "09:00 - 14:00";
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "09:00 - 14:00";
                commaMultipleHoursPrivateCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+4940334614747";
                telPrivatkundeText = "+49 (0)40 334 614 747";
                telFirmenkunde = "+4940334614748";
                telFirmenkundeText = "+49 (0)40 334 614 748";                    
                break;
        case'helpcenter.digitec.at':
                uhrzeitPrivatkunde = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";  //TODO: Galaxus AT Öffnungszeiten prüfen
                uhrzeitPrivatkundeMobile = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";  //TODO: Galaxus AT Öffnungszeiten prüfen
                uhrzeitFirmenkunde = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";  //TODO: Galaxus AT Öffnungszeiten prüfen
                uhrzeitFirmenkundeMobile = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";  //TODO: Galaxus AT Öffnungszeiten prüfen

                telPrivatkunde = "+4312345678901";  //TODO: Tel-Nr. Galaxus AT prüfen
                telPrivatkundeText = "+43 (0)12 345 678 901";  //TODO: Tel-Nr. Galaxus AT prüfen
                telFirmenkunde = "+4312345678901";  //TODO: Tel-Nr. Galaxus AT prüfen
                telFirmenkundeText = "+43 (0)12 345 678 901";  //TODO: Tel-Nr. Galaxus AT prüfen
                break;
        case'helpcenter.connect.digitec.ch':
                tagePrivatkunde = "Mo - Fr:";
                tagePrivatkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde = "Mo - Fr:";
                tageFirmenkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759700";
                telPrivatkundeText = "+41 44 575 97 00";
                break;
        default:
                tagePrivatkunde = "Mo - Fr:";
                tagePrivatkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde = "Mo - Fr:";
                tageFirmenkunde2 = "";  //WICHTIG: braucht leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";   
                break;
    }


    
    var dynamicWording = {

        de: {
        'privateCustomers' : 'Privatkunden',
        'businessCustomers' : 'Firmenkunden',
        'chatUs': 'Chatte mit uns',
        'callUsPrivate' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Schon gewusst:',
        'openingDaysPrivate' : tagePrivatkunde,
        'openingHoursPrivate' : uhrzeitPrivatkunde,
        'openingDaysPrivate2' : tagePrivatkunde2,
        'openingDaysPrivate2Mobile' : tagePrivatkunde2Mobile,
        'openingHoursPrivate2' : uhrzeitPrivatkunde2,
        'openingDaysBusiness' : tageFirmenkunde,
        'openingHoursBusiness' : uhrzeitFirmenkunde,
        'openingDaysBusiness2' : tageFirmenkunde2,
        'openingDaysBusiness2Mobile' : tageFirmenkunde2Mobile,
        'openingHoursBusiness2' : uhrzeitFirmenkunde2,
        'phone' : 'Telefon',
        'chat' : 'Chat',
        'email' : 'Kontaktformular',
        'emailDescription' : "Wir antworten innerhalb von 1-2 Tagen",
        'reactionMail' : 'Reaktionszeit: 1 Arbeitstag',
        'contact' : 'Kontaktiere uns',
        'questionNotAnswered' : 'Deine Frage ist nicht beantwortet?',
        'noAnswerFound' : 'Keine passende Antwort gefunden?',
        'writeUs' : 'Schreib uns',
        'openingHoursChat' : 'Mo - Fr:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursChatBusiness' : 'Mo - Fr:<br>' + uhrzeitFirmenkunde + '',
        'openingHoursChatBusinessMobile' : '<b>Chat</b> <font size = "2px">(Mo - Fr: ' + uhrzeitFirmenkundeMobile + '</font>)',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Wartezeit: 15 Min',
        'recommendedChannel' : 'Empfohlener Kanal',
        'searchBoxText' : '<h2><font color=#00000>Wie können wir dir helfen?</font></h2>', 
        'infoNoteText' : '<br>Aufgrund der aktuellen Wetter- bzw. Strassensituation ist mit Verspätungen bei der Paketzustellung durch die Post zu rechnen. Besten Dank für dein Verständnis<br>&nbsp;',
        'contactFormInfoText' : 'Per Chat, Telefon oder Kontaktformular - wähle nur deine Kundengruppe und den passenden Anfragegrund.<br><br>',
        'headerTitle' : 'Kontaktiere uns',
        'chatNotOnline': 'Nicht verfügbar',
        'recommendedChannel' : 'EMPFOHLEN',
        'backButtonText' : 'Zurück zur Kontaktauswahl',
        'feedbackHeader' : 'Feedbackformular',
        'feedbackDescription' : 'Bitte verwende das Formular lediglich für Verbesserungsvorschläge zu unseren Beiträgen.<br>Leider können wir nicht auf dein Feedback antworten. Für deine Kundenanfragen kannst du gerne das <a href="/hc/requests/new">Kontaktformular</a> verwenden.<br>Achtung: Auf Kundenanfragen über das Feedbackformular wird nicht geantwortet!',
        'chooseCustomerGroup' : 'Wähle deine Kundengruppe',
        'chooseRequestReason' : 'Wähle deinen Anfragegrund',
        'contactOptions' : 'Deine Kontaktmöglichkeiten',
        'chatLanguage' : 'Sprache:',
        'chatLanguage2' : 'Deutsch',
        'commaMultipleHoursPrivateCustomers' : commaMultipleHoursPrivateCustomers,
        'commaMultipleHoursBusinessCustomers' : commaMultipleHoursBusinessCustomers
        },
        fr: {      
        'privateCustomers' : 'Clients privés',
        'businessCustomers' : 'Clients professionnels',
        'chatUs': 'Chattez avec nous',
        'callUsPrivate' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Le saviez-vous :',
        'openingHoursPrivate' : 'Lu - Ve:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursPrivateMobile' : 'Téléphone <font size = "2px">(Lu - Ve: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursBusiness' : 'Lu - Ve:<br>' + uhrzeitFirmenkunde +'',
        'openingHoursBusinessMobile' : 'Téléphone <font size = "2px">(Lu - Ve: ' + uhrzeitFirmenkundeMobile + ')</font>',
        'phone' : 'Téléphone',
        'chat' : 'Chat',
        'email' : 'Formulaire de contact',
        'reactionMail' : 'Le temps de réponse: 1 jour de travail',
        'contact' : 'Contactez-nous',
        'questionNotAnswered' : 'Pas trouvé votre réponse ?',
        'noAnswerFound' : 'Vous n\'avez pas trouvé la bonne réponse ?',
        'writeUs' : 'Ecrivez-nous',
        'openingHoursChat' : 'Lu - Ve :<br>' + uhrzeitPrivatkunde + '',
        'openingHoursChatMobile' : '&nbsp;&nbsp;Chat <font size = "2px">(Lu - Ve: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursChatBusiness' : 'Lu - Ve:<br>' + uhrzeitFirmenkunde + '',
        'openingHoursChatBusinessMobile' : 'Chat <font size = "2px">(Lu - Ve: ' + uhrzeitFirmenkundeMobile + '</font>)',
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Temps d\'attente: 15 Min',
        'recommendedChannel' : 'Canal recommandé',
        'searchBoxText' : '<h2><font color=#00000>Comment pouvons-nous vous aider?</font></h2>',
        'infoNoteText' : '<br>En raison des conditions météorologiques et de la situation routière actuelles, il faut s\'attendre à des retards dans la livraison des colis par la Poste suisse. Merci de votre compréhension<br>&nbsp;',
        'contactFormInfoText' : 'Par chat, téléphone ou formulaire - choisissez simplement votre groupe de clients et le motif de la demande.',
        'headerTitle' : 'Contactez-nous',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RECOMMANDE',
        'backButtonText' : 'Retour à la sélection des contacts',
        'feedbackHeader' : 'Formulaire de commentaires',
        'feedbackDescription' : 'Veuillez utiliser le formulaire uniquement pour suggérer des améliorations à nos articles.<br>Malheureusement, nous ne pouvons pas répondre à vos commentaires. Pour les demandes de vos clients, vous pouvez utiliser le <a href="/requests/new">formulaire de contact</a>.<br>Attention : Nous ne répondons pas aux demandes des clients via le formulaire de feed-back!'
        },
        it: {
        'privateCustomers' : 'Clienti privati',
        'businessCustomers' : 'Clienti commerciali',
        'chatUs': 'Chatta con noi',
        'callUsPrivate' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Chiamaci <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Lo sapevi:',
        'openingHoursPrivate' : 'Lun - Ven:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursPrivateMobile' : 'Telefono <font size = "2px">(Lun - Ven: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursBusiness' : 'Lun - Ven:<br>' + uhrzeitFirmenkunde +'',
        'openingHoursBusinessMobile' : 'Telefono <font size = "2px">(Lun - Ven: ' + uhrzeitFirmenkundeMobile + ')</font>',
        'phone' : 'Telefono',
        'chat' : 'Chat',
        'email' : 'Modulo di contatto',
        'reactionMail' : 'Tempo di reazione: 1 giorno lavorativo',
        'contact' : 'Contattaci',
        'questionNotAnswered' : 'Non risolve il tuo problema?',
        'noAnswerFound' : 'Non hai trovato la risposta giusta?',
        'writeUs' : 'Scrivici',
        'openingHoursChat' : 'Lun - Ven:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursChatMobile' : 'Chat <font size = "2px">(Lun - Ven: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursChatBusiness' : 'Lun - Ven:<br>' + uhrzeitFirmenkunde + '',
        'openingHoursChatBusinessMobile' : 'Chat <font size = "2px">(Lun - Ven: ' + uhrzeitFirmenkundeMobile + '</font>)',
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Tempo di attesa: 15 min',
        'recommendedChannel' : 'Canale consigliato',
        'searchBoxText' : '<h2><font color=#00000>Come possiamo aiutarla?</font></h2>',
        'infoNoteText' : '<br>A causa dell\'attuale situazione meteorologica e stradale, si prevedono ritardi nella consegna dei pacchi da parte della Posta Svizzera. Grazie per la vostra comprensione<br>&nbsp;',
        'contactFormInfoText' : 'Tramite telefono, chat o modulo di contatto – seleziona il tuo gruppo di clienti e il motivo della tua richiesta.',
        'headerTitle' : 'Contattaci',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RACCOMANDATO',
        'backButtonText' : 'Torna alla selezione dei contatti',
        'feedbackHeader' : 'Modulo di feedback',
        'feedbackDescription' : 'Si prega di utilizzare il modulo solo per suggerire miglioramenti ai nostri post.<br>Purtroppo, non possiamo rispondere al tuo feedback. Per le richieste dei tuoi clienti puoi usare il <a href="/requests/new">formulario di contatto</a>.<br>Attenzione: non rispondiamo alle richieste dei clienti tramite il modulo di feedback!'
        },
        'en-US': {
        'privateCustomers' : 'Private customers',
        'businessCustomers' : 'Business customers',
        'chatUs': 'Chat with us',
        'callUsPrivate' : 'Call us <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Call us <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Call us <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Call us <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Did you know:',
        'openingHoursPrivate' : 'Mo - Fr:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursPrivateMobile' : 'Phone <font size = "2px">(Mo - Fr: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursBusiness' : 'Mo - Fr:<br>' + uhrzeitFirmenkunde +'',
        'openingHoursBusinessMobile' : 'Phone <font size = "2px">(Mo - Fr: ' + uhrzeitFirmenkundeMobile + ')</font>',
        'phone' : 'Phone',
        'chat' : 'Chat',
        'email' : 'Contact form',
        'reactionMail' : 'Response time: 1 working day',
        'contact' : 'Contact us',
        'questionNotAnswered' : 'Your question is not answered?',
        'noAnswerFound' : 'Can\'t find what you\'re looking for?',
        'writeUs' : 'Write us',
        'openingHoursChat' : 'Mo - Fr:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursChatMobile' : 'Chat <font size = "2px">(Mo - Fr: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursChatBusiness' : 'Mo - Fr:<br>' + uhrzeitFirmenkunde + '',
        'openingHoursChatBusinessMobile' : 'Chat <font size = "2px">(Mo - Fr: ' + uhrzeitFirmenkundeMobile + '</font>)',
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Waiting time: 15 min',
        'recommendedChannel' : 'Recommended channel',
        'searchBoxText' : '<h2><font color=#00000>How can we help you?</font></h2>',
        'infoNoteText' : '<br>Due to the current weather and road situation, delays in parcel delivery by Swiss Post are to be expected. Thank you for your understanding<br>&nbsp;',
        'contactFormInfoText' : 'By phone, chat or via form - just choose your customer group and the appropriate reason for inquiry.',
        'headerTitle' : 'Contact us',
        'chatNotOnline': 'Not available',
        'recommendedChannel' : 'RECOMMENDED',
        'backButtonText' : 'Back to contact selection',
        'feedbackHeader' : 'Feedback form',
        'feedbackDescription' : 'Please use the form only to suggest improvements to our posts.<br>Unfortunately, we cannot respond to your feedback. For your customer inquiries, feel free to use the <a href="/requests/new">contact form</a>.<br>Attention: Customer inquiries via the feedback form will not be answered!'
        }
    }

    if (window.location.hostname == 'helpcenter.connect.digitec.ch'){
        dynamicWording['de']['contactFormInfoText'] = 'Per Telefon oder Kontaktformular - wähle nur den passenden Anfragegrund.'
        dynamicWording['fr']['contactFormInfoText'] = 'Par téléphone ou formulaire de contact - choisissez simplement le motif de votre demande.'
        dynamicWording['it']['contactFormInfoText'] = 'Per telefono o modulo di contatto - basta scegliere il motivo appropriato per la sua richiesta.'
        dynamicWording['en-US']['contactFormInfoText'] = 'By phone or contact form - just choose the appropriate reason for your inquiry.'
        dynamicWording['de']['questionNotAnswered'] = 'Wähle deinen Kontaktkanal',
        dynamicWording['fr']['questionNotAnswered'] = 'Choisissez votre canal de contact',
        dynamicWording['it']['questionNotAnswered'] = 'Scegli il tuo canale di contatto',
        dynamicWording['en-US']['questionNotAnswered'] = 'Choose your contact channel'
    }
    
    if (window.location.hostname == 'helpcenter.galaxus.de' || window.location.hostname == 'helpcenter.galaxus.at'){
        dynamicWording['de']['contactFormInfoText'] = 'Per Telefon oder Kontaktformular - wähle nur den passenden Anfragegrund.'
        dynamicWording['fr']['contactFormInfoText'] = 'Par téléphone ou formulaire de contact - choisissez simplement le motif de votre demande.'
        dynamicWording['it']['contactFormInfoText'] = 'Per telefono o modulo di contatto - basta scegliere il motivo appropriato per la sua richiesta.'
        dynamicWording['en-US']['contactFormInfoText'] = 'By phone or contact form - just choose the appropriate reason for your inquiry.'
    }
  return dynamicWording;  
}