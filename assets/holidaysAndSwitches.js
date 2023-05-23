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

// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording() {
  var topBannerWording = {
    "outputHeadingBanner": {
      'de': "Digitec Connect ist neu Galaxus Mobile",
      'fr': "Galaxus Mobile remplace digitec connect",
      'it': "digitec connect è ora Galaxus Mobile",
      'en-US': "digitec connect is now Galaxus Mobile"
    },
    "outputTextBanner": {
      'de': "Falls du Fragen zu deinen gekauften digitec connect Gutscheinen aus Promotionen hast findest du Informationen dazu in folgenden Artikeln:<br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639614908562' target='blank'>Was passiert mit gekauften Gutscheinen?</a><br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639683064722' target='blank'>Was passiert mit geschenkten Gutscheinen aus Promotionen?</a>",
      'fr': "Si vous avez des questions sur les bons d'achat digitec connect que vous avez achetés dans le cadre de promotions, vous trouverez des informations à ce sujet dans les articles suivants :<br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639614908562' target='blank'>Que se passe-t-il avec les bons d'achat achetés ?</a><br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639683064722' target='blank'>Que se passe-t-il avec les bons d'achat issus de promotions ?</a>",
      'it': "Se avete domande sui buoni digitec connect acquistati con le promozioni, potete trovare informazioni nei seguenti articoli:<br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639614908562' target='blank'>Cosa succede ai voucher acquistati?</a><br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639683064722' target='blank'>Cosa succede ai buoni regalo delle promozioni?</a>",
      'en-US': "If you have questions about your purchased digitec connect vouchers from promotions, you can find information about them in the following articles:<br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639614908562' target='blank'>What happens to purchased vouchers?</a><br><a href='https://helpcenter.mobile.galaxus.ch/hc/articles/10639683064722' target='blank'>What happens to gift vouchers from promotions?</a>"
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
      ['2023-04-27 00:00:00', '2023-05-29 22:00:00', 0]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
      'de' : '<br>Aufgrund unseres hohen Anfragevolumens sind wir zurzeit nur per E-Mail und Chat erreichbar<br>29.05.2023: Pfingstmontag, geschlossen',
      'fr' : "<br>29.05.2023 : Lundi de Pentecôte, fermé",
      'it' : '<br>29.05.2023: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>29.05.2023: Whit Monday, closed'
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
