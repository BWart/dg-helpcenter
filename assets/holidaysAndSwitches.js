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

// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording() {
  var topBannerWording = {
    "outputHeadingBanner": {
      'de': "Technische Probleme Safari",
      'fr': "Problèmes techniques Safari",
      'it': "Problemi tecnici Safari",
      'en-US': "Safari technical problems"
    },
    "outputTextBanner": {
      'de': "Aufgrund technischer Probleme funktioniert unser Chat aktuell leider auf Safari nicht. Falls du uns per Chat kontaktieren willst, verwende bitte einen anderen Browser wie Chrome oder Firefox.",
      'fr': "En raison de problèmes techniques, notre chat ne fonctionne malheureusement pas actuellement sur Safari. Si vous souhaitez nous contacter par chat, utilise un autre navigateur comme Chrome ou Firefox.",
      'it': "A causa di problemi tecnici, la nostra chat non funziona attualmente su Safari. Se volete contattarci via chat, utilizzate un altro browser come Chrome o Firefox.",
      'en-US': "Due to technical issues, our chat is currently unfortunately not working on Safari. If you want to contact us via chat, please use another browser like Chrome or Firefox."
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
      ['2023-04-27 00:00:00', '2023-06-30 22:00:00', 0]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
      'de' : '<br>Aufgrund unseres hohen Anfragevolumens sind wir zurzeit nur per E-Mail und Chat erreichbar',
      'fr' : "",
      'it' : '',
      'en-US' : ''
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00'], ['2023-05-17 14:00:00', '2023-05-18 22:00:00'], ['2023-05-29 00:00:00', '2023-05-29 22:00:00']
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
