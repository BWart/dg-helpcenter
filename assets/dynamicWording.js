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
              uhrzeitFirmenkunde = "10:00 - 18:00";
              uhrzeitFirmenkundeMobile = "10:00 - 18:00";

              telPrivatkunde = "+4940334614747";
              telPrivatkundeText = "+49 (0)40 334 614 747";
              telFirmenkunde = "+4940334614748";
              telFirmenkundeText = "+49 (0)40 334 614 748";                    
              break;
      default:
              uhrzeitPrivatkunde = "09:00 - 18:00";
              uhrzeitPrivatkundeMobile = "09:00 - 18:00";
              uhrzeitFirmenkunde = "09:00 - 12:00<br>13:30 - 17:00";
              uhrzeitFirmenkundeMobile = "09:00 - 12:00, 13:30 - 17:00";

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
        'openingHoursChat' : '&nbsp',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Wartezeit: 15 Min',
        'recommendedChannel' : 'Empfohlener Kanal',
        'searchBoxText' : '<h2><font color=#00000>Wie können wir dir helfen?</font></h2>', 
        'infoNoteText' : '<br>Aufgrund der aktuellen Wetter- bzw. Strassensituation ist mit Verspätungen bei der Paketzustellung durch die Post zu rechnen. Besten Dank für dein Verständnis<br>&nbsp;',
        'contactFormInfoText' : 'Suchst du unsere Kontaktangaben? Füll das Formular aus, damit wir dein Anliegen rasch bearbeiten können und wähle dann, ob du per Telefon, Chat oder via Formular mit uns in Kontakt treten willst.',
        'chatNotOnline': 'Nicht verfügbar'
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
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Temps d\'attente: 15 Min',
        'recommendedChannel' : 'Canal recommandé',
        'searchBoxText' : '<h2><font color=#00000>Comment pouvons-nous vous aider?</font></h2>',
        'infoNoteText' : '<br>En raison des conditions météorologiques et de la situation routière actuelles, il faut s\'attendre à des retards dans la livraison des colis par la Poste suisse. Merci de votre compréhension<br>&nbsp;',
        'contactFormInfoText' : 'Vous cherchez nos coordonnées ? Remplissez le formulaire afin que nous puissions traiter votre demande rapidement. Choisissez ensuite si vous souhaitez nous contacter par téléphone, par chat ou par formulaire.',
        'chatNotOnline': 'Non disponible'
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
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Tempo di attesa: 15 min',
        'recommendedChannel' : 'Canale consigliato',
        'searchBoxText' : '<h2><font color=#00000>Come possiamo aiutarla?</font></h2>',
        'infoNoteText' : '<br>A causa dell\'attuale situazione meteorologica e stradale, si prevedono ritardi nella consegna dei pacchi da parte della Posta Svizzera. Grazie per la vostra comprensione<br>&nbsp;',
        'contactFormInfoText' : 'Stai cercando i nostri contatti? Compila il modulo in modo che possiamo elaborare rapidamente la tua richiesta e poi scegli se vuoi contattarci per telefono, chat o tramite modulo.',
        'chatNotOnline': 'Non disponible'
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
        'openingHoursChat' : '&nbsp;',
        'placeholder' : '&nbsp;',
        'placeholder2' : '&nbsp;',
        'waitingTime' : 'Waiting time: 15 min',
        'recommendedChannel' : 'Recommended channel',
        'searchBoxText' : '<h2><font color=#00000>How can we help you?</font></h2>',
        'infoNoteText' : '<br>Due to the current weather and road situation, delays in parcel delivery by Swiss Post are to be expected. Thank you for your understanding<br>&nbsp;',
        'contactFormInfoText' : 'Are you looking for our contact details? Fill out the form so that we can quickly process your request and then choose whether you want to contact us by phone, chat or via form.',
        'chatNotOnline': 'Not available'
        }
    }
  return dynamicWording;  
}