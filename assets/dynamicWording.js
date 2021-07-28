function filldynamicWording(){
    var portal = window.location.hostname;

    var uhrzeitPrivatkunde = "";
    var uhrzeitFirmenkunde = "";
    var uhrzeitPrivatkundeMobile = "";
    var uhrzeitFirmenkundeMobile = "";

    var telPrivatkunde = "";
    var telFirmenkunde = "";
    var telPrivatkundeText = "";
    var telFirmenkundeText = "";


    switch(portal){
      case'helpcenter.digitec.ch':
              uhrzeitPrivatkunde = "08:00 - 20:00";
              uhrzeitPrivatkundeMobile = "08:00 - 20:00";
              uhrzeitFirmenkunde = "08:00 - 20:00";
              uhrzeitFirmenkundeMobile = "08:00 - 20:00";

              telPrivatkunde = "+41445759500";
              telPrivatkundeText = "+41 44 575 95 00";
              telFirmenkunde = "+41445759600";
              telFirmenkundeText = "+41 44 575 96 00";    

              break;
      case'helpcenter.galaxus.ch':
              uhrzeitPrivatkunde = "08:00 - 20:00";
              uhrzeitPrivatkundeMobile = "08:00 - 20:00";
              uhrzeitFirmenkunde = "08:00 - 20:00";
              uhrzeitFirmenkundeMobile = "08:00 - 20:00";

              telPrivatkunde = "+41445759800";
              telPrivatkundeText = "+41 44 575 98 00";
              telFirmenkunde = "+41445759900";
              telFirmenkundeText = "+41 44 575 99 00";                
              break;
      case'helpcenter.galaxus.de':
              uhrzeitPrivatkunde = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";
              uhrzeitPrivatkundeMobile = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";
              uhrzeitFirmenkunde = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";
              uhrzeitFirmenkundeMobile = "08:00 - 20:00<br>Sa:<br>09:00 - 14:00";

              telPrivatkunde = "+4940334614747";
              telPrivatkundeText = "+49 (0)40 334 614 747";
              telFirmenkunde = "+4940334614748";
              telFirmenkundeText = "+49 (0)40 334 614 748";                    
              break;
      case'helpcenter.connect.digitec.ch':
              uhrzeitPrivatkunde = "08:00 - 20:00";
              uhrzeitPrivatkundeMobile = "08:00 - 20:00";

              telPrivatkunde = "+41445759700";
              telPrivatkundeText = "+41 44 575 97 00";
              break;
      default:
              uhrzeitPrivatkunde = "08:00 - 20:00";
              uhrzeitPrivatkundeMobile = "08:00 - 20:00";
              uhrzeitFirmenkunde = "08:00 - 20:00";
              uhrzeitFirmenkundeMobile = "08:00 - 20:00";

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
        'openingHoursPrivate' : 'Mo - Fr:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursPrivateMobile' : 'Telefon <font size = "2px">(Mo - Fr: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursBusiness' : 'Mo - Fr:<br>' + uhrzeitFirmenkunde +'',
        'openingHoursBusinessMobile' : 'Telefon <font size = "2px">(Mo - Fr: ' + uhrzeitFirmenkundeMobile + ')</font>',
        'phone' : 'Telefon',
        'chat' : 'Chat',
        'email' : 'Kontaktformular',
        'reactionMail' : 'Reaktionszeit: 1 Arbeitstag',
        'contact' : 'Kontaktiere uns',
        'questionNotAnswered' : 'Deine Frage ist nicht beantwortet?',
        'noAnswerFound' : 'Keine passende Antwort gefunden?',
        'writeUs' : 'Schreib uns',
        'openingHoursChat' : 'Mo - Fr:<br>' + uhrzeitPrivatkunde + '',
        'openingHoursChatMobile' : 'Chat <font size = "2px">(Mo - Fr: ' + uhrzeitPrivatkundeMobile + '</font>)',
        'openingHoursChatBusiness' : 'Mo - Fr:<br>' + uhrzeitFirmenkunde + '',
        'openingHoursChatBusinessMobile' : 'Chat <font size = "2px">(Mo - Fr: ' + uhrzeitFirmenkundeMobile + '</font>)',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Wartezeit: 15 Min',
        'recommendedChannel' : 'Empfohlener Kanal',
        'searchBoxText' : '<h2><font color=#00000>Wie können wir dir helfen?</font></h2>', 
        'infoNoteText' : '<br>Aufgrund der aktuellen Wetter- bzw. Strassensituation ist mit Verspätungen bei der Paketzustellung durch die Post zu rechnen. Besten Dank für dein Verständnis<br>&nbsp;',
        'contactFormInfoText' : 'Per Chat, Telefon oder Kontaktformular - wähle nur deine Kundengruppe und den passenden Anfragegrund.',
        'headerTitle' : 'Kontaktiere uns',
        'chatNotOnline': 'Nicht verfügbar',
        'recommendedChannel' : 'EMPFOHLEN',
        'backButtonText' : 'Zurück zur Kontaktauswahl'
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
        'openingHoursChatMobile' : 'Chat <font size = "2px">(Lu - Ve: ' + uhrzeitPrivatkundeMobile + '</font>)',
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
        'backButtonText' : 'Retour à la sélection des contacts'
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
        'backButtonText' : 'Torna alla selezione dei contatti'
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
        'backButtonText' : 'Back to contact selection'
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
    
    if (window.location.hostname == 'helpcenter.galaxus.de'){
        dynamicWording['de']['contactFormInfoText'] = 'Per Telefon oder Kontaktformular - wähle nur den passenden Anfragegrund.'
        dynamicWording['fr']['contactFormInfoText'] = 'Par téléphone ou formulaire de contact - choisissez simplement le motif de votre demande.'
        dynamicWording['it']['contactFormInfoText'] = 'Per telefono o modulo di contatto - basta scegliere il motivo appropriato per la sua richiesta.'
        dynamicWording['en-US']['contactFormInfoText'] = 'By phone or contact form - just choose the appropriate reason for your inquiry.'
    }
  return dynamicWording;  
}