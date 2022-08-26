// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 2;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactFormDuringOpeningTimes = true;
var switchHideContactFormOutsideOpeningTimes = false;
var switchHideContactFormForPEDuringOpeningTimes = true;
var switchHideContactFormForPEOutsideOpeningTimes = true;
var switchHideContactFormForBusinessDuringOpeningTimes = false;
var switchHideContactFormForBusinessOutsideOpeningTimes = false;
var switchHideContactFormForEUDuringOpeningTimes = true;
var switchHideContactFormForEUOutsideOpeningTimes = false;
//set to true if the phone number should be hidden, set to false if it should be displayed
var switchHidePhoneDuringOpeningTimes = false;
var switchHidePhoneOutsideOpeningTimes = false;
var switchHidePhoneForPEDuringOpeningTimes = true;
var switchHidePhoneForPEOutsideOpeningTimes = true;
var switchHidePhoneForBusinessDuringOpeningTimes = false;
var switchHidePhoneForBusinessOutsideOpeningTimes = false;
var switchHidePhoneForEUDuringOpeningTimes = false;
var switchHidePhoneForEUOutsideOpeningTimes = false;
//set to true if the Chat should be hidden, set to false if it should be displayed
var switchHideChatDuringOpeningTimes = false;
var switchHideChatOutsideOpeningTimes = false;
var switchHideChatForPEDuringOpeningTimes = false;
var switchHideChatForPEOutsideOpeningTimes = false;
var switchHideChatForBusinessDuringOpeningTimes = false;
var switchHideChatForBusinessOutsideOpeningTimes = false;
var switchHideChatForEUDuringOpeningTimes = false;
var switchHideChatForEUOutsideOpeningTimes = false;
//If contact form is hidden, set threshhold to show it again when the waiting time for live contact channels get too high; set to 50000 if contact form should never be shown
var phoneWaitThreshholdToShowContactForm = 50000;
var phoneWaitThreshholdToShowContactFormPE = 50000;
var phoneWaitThreshholdToShowContactFormBusiness = 50000;
var phoneWaitThreshholdToShowContactFormEU = 50000;
var chatWaitThreshholdToShowContactForm = 50000;
var chatWaitThreshholdToShowContactFormPE = 50000;
var chatWaitThreshholdToShowContactFormEU = 50000;
var chatWaitThreshholdToShowContactFormBusiness = 50000;
var chatAndPhoneWaitThreshholdToShowContactForm = 600;
var chatAndPhoneWaitThreshholdToShowContactFormPE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBusiness = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormEU = 600;


// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
var bannerSwitchCHDE = false;
var bannerSwitchCHFR = false;
var bannerSwitchCHIT = false;
var bannerSwitchCHEN = false;
var bannerSwitchConnectDE = false;
var bannerSwitchConnectFR = false;
var bannerSwitchConnectIT = false;
var bannerSwitchConnectEN = false;
var bannerSwitchDEDE = false;
var bannerSwitchDEFR = false;
var bannerSwitchDEIT = false;
var bannerSwitchDEEN = false;
var bannerSwitchATDE = false;
var bannerSwitchATFR = false;
var bannerSwitchATIT = false;
var bannerSwitchATEN = false;

// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording(){
    topBannerWording = {
    "outputHeadingBannerCH" : {
      'de' : "Technische Störung",
      'fr' : "Panne technique",
      'it' : "Guasto tecnico",
      'en-US' : "Attention"
    },
    "outputTextBannerCH" : {
      'de' : "Unsere Telefonleitung ist aufgrund einer technischen Störung zurzeit nicht verfügbar",
      'fr' : "Notre ligne téléphonique est actuellement indisponible en raison d'un problème technique.",
      'it' : "La nostra linea telefonica non è attualmente disponibile a causa di un guasto tecnico.",
      'en-US' : "Our telephone line is currently unavailable due to a technical fault"
    },
    "outputHeadingBannerDE" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerDE" : {
      'de' : "Unsere Telefonleitung ist aufgrund einer technischen Störung zurzeit nicht verfügbar",
      'fr' : "Notre ligne téléphonique est actuellement indisponible en raison d'un problème technique.",
      'it' : "La nostra linea telefonica non è attualmente disponibile a causa di un guasto tecnico.",
      'en-US' : "Our telephone line is currently unavailable due to a technical fault"
    },
    "outputHeadingBannerAT" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerAT" : {
      'de' : "Unsere Telefonleitung ist aufgrund einer technischen Störung zurzeit nicht verfügbar",
      'fr' : "Notre ligne téléphonique est actuellement indisponible en raison d'un problème technique.",
      'it' : "La nostra linea telefonica non è attualmente disponibile a causa di un guasto tecnico.",
      'en-US' : "Our telephone line is currently unavailable due to a technical fault"
    },
    }
      return topBannerWording;
}





// --- ENTER HOLIDAYS HERE TO BE DISPLAYED IN THE HELPCENTER AND FOR THE WAITING TIMES TO BE REMOVED ---
//WHEN TO SHOW THE HOLIDAY INFORMATION TEXT (USUALLY STARTS SOME DAYS BEFORE THE ACTUAL HOLIDAY)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date to show the text', 'end date to stop showing the text', ID of the text to Display]
var showHolidays = {
    'ch' : [
        ['2022-06-01 14:00:00', '2022-06-01 22:00:00', 0]
    ],
    'eu' : [
        ['2022-08-26 15:00:00', '2022-08-27 22:00:00', 1]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
        'de' : '<br>Pfingstmontag: 06.06. geschlossen',
        'fr' : "<br>Lundi de Pentecôte : 06.06. fermé",
        'it' : '<br>Lunedì di Pentecoste: 06.06. chiuso',
        'en-US' : '<br>Whit Monday: 06.06. closed',
    },
    1 : {
        'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
        'fr' : '<br>27.06.2022 16:00: fermé',
        'it' : '<br>27.06.2022 16:00: chiuso',
        'en-US' : '<br>27.06.2022: Closed from 16:00',
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
        ['2022-06-06 00:00:00', '2022-06-06 22:00:00']
    ],
    'eu' : [
        ['2022-08-27 14:00:00', '2022-08-27 22:00:00']
    ]
}


//OPENING HOURS
//EU
var euOpeningHourWeekday = 8;
var euClosingHourWeekday = 20;
var euOpeningHourSaturday = 9;
var euClosingHourSaturday = 17;
//Connect
var connectOpeningHourWeekday = 8;
var connectClosingHourWeekday = 17;
var connectOpeningHourSaturday = false;
var connectClosingHourSaturday = false;
//Business
var businessOpeningHourWeekday = 8;
var businessClosingHourWeekday = 17;
var businessOpeningHourSaturday = false;
var businessClosingHourSaturday = false;
//CH Regular
var chOpeningHourWeekday = 8;
var chClosingHourWeekday = 19;
var chOpeningHourSaturday = false;
var chClosingHourSaturday = false;
//CH PE
var chPEOpeningHourWeekday = 8;
var chPEClosingHourWeekday = 18;
var chPEOpeningHourSaturday = false;
var chPEClosingHourSaturday = false;