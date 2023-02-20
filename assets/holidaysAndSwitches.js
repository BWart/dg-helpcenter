// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 1;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
// --- Removed for Connect, everything handled directly inside the NewRequestPage script as the logic is simple ---


// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
var bannerSwitchDE = false;
var bannerSwitchFR = false;
var bannerSwitchIT = false;
var bannerSwitchEN = false;

// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording() {
  var topBannerWording = {
    "outputHeadingBanner": {
      'de': "Technische Störung",
      'fr': "Panne technique",
      'it': "Guasto tecnico",
      'en-US': "Attention"
    },
    "outputTextBanner": {
      'de': "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr': "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it': "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US': "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
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
      ['2023-02-20 00:00:00', '2023-02-20 22:00:00', 0]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
        'de' : '<br>20.02.2023: Ab 16:00 geschlossen',
        'fr' : "<br>20.02.2023: Fermé à partir de 16:00",
        'it' : '<br>20.02.2023: Dalle 16:00 chiuso',
        'en-US' : '<br>20.02.2023: From 16:00 closed',
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2023-02-20 15:00:00', '2023-02-20 22:00:00']
    ]
}


//OPENING HOURS
const openingHours = {
  "helpcenter.connect.digitec.ch": {"weekday": [[8, 0, 12, 0], [13, 0, 17, 0]], "saturday": []},
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
