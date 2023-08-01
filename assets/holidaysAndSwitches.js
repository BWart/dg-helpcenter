// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 2;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
// --- Removed for Connect, everything handled directly inside the NewRequestPage script as the logic is simple ---


// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
var bannerSwitchDE = false;
var bannerSwitchFR = false;
var bannerSwitchIT = false;
var bannerSwitchEN = false;
var bannerSwitchNL = false;

let userAgentString = navigator.userAgent;
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
}

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
let switchHideContactFormDuringOpeningTimes = false;
let switchHideContactFormOutsideOpeningTimes = false;
let switchHidePhoneDuringOpeningTimes = true;
let switchHidePhoneOutsideOpeningTimes = false;
let switchHideChatDuringOpeningTimes = true;
let switchHideChatOutsideOpeningTimes = false;
//THESE ARE NOT NET IMPLEMENTED ON GALAXUS MOBILE; ADD TO FUNCTION REORDERCONTACTCHANNELS() IN NEW_REQUEST_PAGE.HBS IF FEATURE IS REQUESTED
/*let phoneWaitThreshholdToShowContactForm = 50000;
let chatWaitThreshholdToShowContactForm = 50000;
let chatAndPhoneWaitThreshholdToShowContactForm = 50000;*/



// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording() {
  var topBannerWording = {
    "outputHeadingBanner": {
      'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"
      /*'de' : "Technische Probleme Call",
      'fr' : "Problèmes techniques Appel",
      'it' : "Problemi tecnici Chiamare",
      'en-US' : "Technical Issues Call",
      'nl' : "Technische problemen Bel"*/
    },
    "outputTextBanner": {
      'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."
     /*'de' : "Aufgrund technischer Probleme steht unsere Telefonleitung temporär nicht zur Verfügung.",
     'fr' : "En raison de problèmes techniques, notre ligne téléphonique est temporairement indisponible.",
     'it' : "A causa di problemi tecnici, la nostra linea telefonica non è temporaneamente disponibile.",
     'en-US' : "Due to technical problems our phone line is temporarily unavailable.",
     'nl' : "Door technische problemen is onze telefoonlijn tijdelijk niet beschikbaar."*/
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
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00'], ['2023-05-17 14:00:00', '2023-05-18 22:00:00'], ['2023-05-29 00:00:00', '2023-05-29 22:00:00'], ['2023-08-01 00:00:00', '2023-08-01 22:00:00']
    ]
}


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
