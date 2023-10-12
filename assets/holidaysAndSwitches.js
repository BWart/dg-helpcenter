// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 2;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
// --- Removed for Connect, everything handled directly inside the NewRequestPage script as the logic is simple ---


// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
var bannerSwitchDE = true;
var bannerSwitchFR = true;
var bannerSwitchIT = true;
var bannerSwitchEN = true;
var bannerSwitchNL = false;

/*let userAgentString = navigator.userAgent;
console.log(userAgentString)
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv") > -1;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
if ((chromeAgent) && (safariAgent)) {safariAgent = false};

if (window.location.href.includes('requests') && safariAgent){
  //CH
  bannerSwitchDE = true;
  bannerSwitchFR = true;
  bannerSwitchIT = true;
  bannerSwitchEN = true;
  bannerSwitchNL = true;
}*/

/*let userAgentString = navigator.userAgent;
console.log(userAgentString)
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv") > -1;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
if ((chromeAgent) && (safariAgent)) {safariAgent = false};

if (safariAgent && window.location.href.includes('requests')){
  bannerSwitchDE = true;
  bannerSwitchFR = true;
  bannerSwitchIT = true;
  bannerSwitchEN = true;
}*/

//These currently only affect German language; if effecting other languages is needed edit function reorderContactChannels() in new_request_page.hbs
let switchHideContactFormDuringOpeningTimes = true;
let switchHideContactFormOutsideOpeningTimes = false;
let switchHidePhoneDuringOpeningTimes = false;
let switchHidePhoneOutsideOpeningTimes = false;
let switchHideChatDuringOpeningTimes = false;
let switchHideChatOutsideOpeningTimes = false;
//THESE ARE NOT NET IMPLEMENTED ON GALAXUS MOBILE; ADD TO FUNCTION REORDERCONTACTCHANNELS() IN NEW_REQUEST_PAGE.HBS IF FEATURE IS REQUESTED
/*let phoneWaitThreshholdToShowContactForm = 50000;
let chatWaitThreshholdToShowContactForm = 50000;
let chatAndPhoneWaitThreshholdToShowContactForm = 50000;*/



// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording() {
  var topBannerWording = {
    "outputHeadingBanner": {
      /*'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"*/
      /*'de' : "Netzwerkstörung in Andelfingen",
      'fr' : "Panne de réseau à Andelfingen",
      'it' : "Guasto di rete ad Andelfingen",
      'en-US' : "Network malfunction in Andelfingen",
      'nl' : "Netwerkstoring in Andelfingen"*/
      'de' : "Schon gewusst",
      'fr' : "Le saviez-vous",
      'it' : "Lo sapevi",
      'en-US' : "Did you know",
      'nl' : ""
    },
    "outputTextBanner": {
      /*'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."*/
     /*'de' : "In der Region Andelfingen und Kleinandelfingen ist der Service aktuell aufgrund einer Netzwerkstörung eingeschränkt. Das Problem ist bekannt und Techniker vor Ort. Die Störung dauert voraussichtlich bis zum Abend des 2. Septembers.<br>Alle Störungen auf dem Sunrise Netz findest du unter <a href='https://www.sunrise.ch/de/support/aktuelle-stoerungen' target='blank'>diesem Link</a>.",
     'fr' : "Le service est actuellement limité dans la région d'Andelfingen et de Kleinandelfingen en raison d'une défaillance du réseau. Le problème est connu et des techniciens sont sur place. La panne devrait durer jusqu'au 2 septembre au soir.<br>Vous trouverez toutes les pannes sur le réseau Sunrise sous <a href='https://www.sunrise.ch/fr/support/derangements-actuels' target='blank'>ce lien</a>.",
     'it' : "Il servizio è attualmente limitato nella regione di Andelfingen e Kleinandelfingen a causa di un guasto alla rete. Il problema è noto e i tecnici sono sul posto. Il guasto dovrebbe durare fino alla sera del 2 settembre.<br>Tutti i guasti della rete Sunrise sono disponibili a <a href='https://www.sunrise.ch/it/supporto/malfunzionamenti-attuali' target='blank'>questo link</a>.",
     'en-US' : "Service is currently limited in the Andelfingen and Kleinandelfingen region due to a network fault. The problem is known and technicians are on site. The disruption is expected to last until the evening of September 2.<br>You can find all disruptions on the Sunrise network under <a href='https://www.sunrise.ch/en/support/current-malfunctions' target='blank'>this link</a>.",
     'nl' : "De service is momenteel beperkt in de regio Andelfingen en Kleinandelfingen vanwege een netwerkstoring. Het probleem is bekend en technici zijn ter plaatse. De storing zal naar verwachting tot de avond van 2 september duren.<br>Je kunt alle storingen op het Sunrise-netwerk vinden onder <a href='https://www.sunrise.ch/en/support/current-malfunctions' target='blank'>deze link</a>."*/
     "de" : "Du kannst einen Wechsel deines Abonnemenets selber in deinem Cockpit vornehmen. Hast du Fragen dazu oder zu den Wechselfristen findest du <a href='https://helpcenter.mobile.galaxus.ch/hc/de/articles/14344381576466'>hier</a> alle Informationen.",
     "fr" : "Vous pouvez modifier votre abonnement vous-même dans votre cockpit. Si vous avez des questions à ce sujet ou sur les délais de changement, vous trouverez toutes les informations <a href='https://helpcenter.mobile.galaxus.ch/hc/fr/articles/14344381576466'>ici</a>.",
     "it" : "È possibile modificare il set di abbonamenti direttamente nel cockpit. Se avete domande su questo argomento o sulle scadenze per il cambio, potete trovare tutte le informazioni <a href='https://helpcenter.mobile.galaxus.ch/hc/it/articles/14344381576466'>qui</a>.",
     "en-US" : "You can change your subscription yourself in your Cockpit. If you have any questions about this or about the switching deadlines, you can find all the information <a href='https://helpcenter.mobile.galaxus.ch/hc/en-us/articles/14344381576466'>here</a>.",
      "nl" : ""
    }
  }
  return topBannerWording;
}



// --- ENTER HOLIDAYS HERE TO BE DISPLAYED IN THE HELPCENTER AND FOR THE WAITING TIMES TO BE REMOVED ---
//WHEN TO SHOW THE HOLIDAY INFORMATION TEXT (USUALLY STARTS SOME DAYS BEFORE THE ACTUAL HOLIDAY)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date to show the text', 'end date to stop showing the text', ID of the text to Display]
var showHolidays = {
    'ch' : [
      ['2023-08-01 00:00:00', '2023-08-01 22:00:00', 0]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
      'de' : '<br>Am 1.8.2023 - Aufgrund des Feiertags sind die Live-Kontaktkanäle geschlossen.',
      'fr' : "<br>Le 1.8.2023 - En raison du jour férié, les canaux de contact en direct sont fermés.",
      'it' : '<br>Il 1.8.2023 - A causa della festività, i canali di contatto sono chiusi.',
      'en-US' : '<br>On 1.8.2023 - Due to the holiday the live contact channels are closed.'
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2023-08-29 00:00:00', '2023-08-29 22:00:00']
    ]
}

//Hiding waiting times in case of stuck calls/chats
//format aus wiatiing nehmen https://py-waittimes-web.prod.pub.devinite.com/waitTimes.js
let waitTimesToHideCall = []
let waitTimesToHideChat = []


//OPENING HOURS
const openingHours = {
  "helpcenter.mobile.galaxus.ch": {"weekday": [[8, 0, 12, 0], [13, 0, 17, 0]], "saturday": []},
}


////////////////////////////////////////////////////////////////////////////////////////Chat Fallback///////////////////////////////////////////////////////////////////////////////////////
//Defines if the Language is used as Fallback 
var chatEnIsFallback = false;
var chatDeIsFallback = false;
var chatItIsFallback = false;
var chatFrIsFallback = false;

//Defines if the Language has a Fallback
var chatEnHasFallback = false;
var chatDeHasFallback = false;
var chatItHasFallback = false;
var chatFrHasFallback = false;

//Amount of Seconds for Fallback to trigger
var secondsToChatFallback = 300;
//Percentage of Waiting Time difference between the two languages
var percentageForChatFallback = 400;
