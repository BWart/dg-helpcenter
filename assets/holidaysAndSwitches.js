// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 1;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactFormDuringOpeningTimes = false;
var switchHideContactFormOutsideOpeningTimes = false;
var switchHideContactFormForPEDuringOpeningTimes = true;
var switchHideContactFormForPEOutsideOpeningTimes = true;
var switchHideContactFormForBusinessDuringOpeningTimes = false;
var switchHideContactFormForBusinessOutsideOpeningTimes = false;
var switchHideContactFormForEUDuringOpeningTimes = true;
var switchHideContactFormForEUOutsideOpeningTimes = false;
var switchHideContactFormForFRDuringOpeningTimes = false;
var switchHideContactFormForFROutsideOpeningTimes = false;
var switchHideContactFormForITDuringOpeningTimes = false;
var switchHideContactFormForITOutsideOpeningTimes = false;
//set to true if the phone number should be hidden, set to false if it should be displayed
var switchHidePhoneDuringOpeningTimes = false;
var switchHidePhoneOutsideOpeningTimes = false;
var switchHidePhoneForPEDuringOpeningTimes = true;   //THIS IS CURRENTLY VALID ON ALL HELPCENTERS IN CH + EU
var switchHidePhoneForPEOutsideOpeningTimes = true;  //THIS IS CURRENTLY VALID ON ALL HELPCENTERS IN CH + EU
var switchHidePhoneForBusinessDuringOpeningTimes = false;
var switchHidePhoneForBusinessOutsideOpeningTimes = false;
var switchHidePhoneForEUDuringOpeningTimes = false;
var switchHidePhoneForEUOutsideOpeningTimes = false;
var switchHidePhoneForFRDuringOpeningTimes = true;
var switchHidePhoneForFROutsideOpeningTimes = true;
var switchHidePhoneForITDuringOpeningTimes = true;
var switchHidePhoneForITOutsideOpeningTimes = true;
//set to true if the Chat should be hidden, set to false if it should be displayed
var switchHideChatDuringOpeningTimes = false;
var switchHideChatOutsideOpeningTimes = false;
var switchHideChatForPEDuringOpeningTimes = false;
var switchHideChatForPEOutsideOpeningTimes = false;
var switchHideChatForBusinessDuringOpeningTimes = false;
var switchHideChatForBusinessOutsideOpeningTimes = false;
var switchHideChatForEUDuringOpeningTimes = false;
var switchHideChatForEUOutsideOpeningTimes = false;
var switchHideChatForFRDuringOpeningTimes = true;
var switchHideChatForFROutsideOpeningTimes = true;
var switchHideChatForITDuringOpeningTimes = true;
var switchHideChatForITOutsideOpeningTimes = true;
//If contact form is hidden, set threshhold to show it again when the waiting time for live contact channels get too high; set to 50000 if contact form should never be shown
var phoneWaitThreshholdToShowContactForm = 50000;
var phoneWaitThreshholdToShowContactFormPE = 50000;
var phoneWaitThreshholdToShowContactFormBusiness = 50000;
var phoneWaitThreshholdToShowContactFormEU = 50000;
var phoneWaitThreshholdToShowContactFormFR = 50000;
var phoneWaitThreshholdToShowContactFormIT = 50000;
var chatWaitThreshholdToShowContactForm = 60;
var chatWaitThreshholdToShowContactFormPE = 50000;
var chatWaitThreshholdToShowContactFormBusiness = 50000;
var chatWaitThreshholdToShowContactFormEU = 420;
var chatWaitThreshholdToShowContactFormFR = 50000;
var chatWaitThreshholdToShowContactFormIT = 50000;
var chatAndPhoneWaitThreshholdToShowContactForm = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormPE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBusiness = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormEU = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormFR = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormIT = 50000;


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
var bannerSwitchFRDE = false;
var bannerSwitchFRFR = false;
var bannerSwitchFRIT = false;
var bannerSwitchFREN = false;
var bannerSwitchITDE = false;
var bannerSwitchITFR = false;
var bannerSwitchITIT = false;
var bannerSwitchITEN = false;

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
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
    },
    "outputHeadingBannerDE" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerDE" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
    },
    "outputHeadingBannerAT" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerAT" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
    },
    "outputHeadingBannerFR" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerFR" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
    },
    "outputHeadingBannerIT" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue"
    },
    "outputTextBannerIT" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request."
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
      ['2022-12-20 00:00:00', '2022-12-26 22:00:00', 0]
    ],
    'de' : [
      ['2022-12-20 00:00:00', '2022-12-26 22:00:00', 1]
    ],
    'at' : [
      ['2022-12-20 00:00:00', '2022-12-26 22:00:00', 2]
    ],
    'it' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 3]
    ],
    'fr' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 4]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
        'de' : '<br>26.12.2022: Geschlossen',
        'fr' : "<br>26.12.2022: Fermé",
        'it' : '<br>26.12.2022: Chiuso',
        'en-US' : '<br>26.12.2022: Closed',
    },
    1 : {
        'de' : '<br>24.12.2022: Ab 14:00 geschlossen<br>26.12.2022: Geschlossen',
        'fr' : '<br>27.06.2022 16:00: fermé',
        'it' : '<br>27.06.2022 16:00: chiuso',
        'en-US' : '<br>27.06.2022: Closed from 16:00',
    },
    2 : {
      'de' : '<br>24.12.2022: Ab 14:00 geschlossen<br>26.12.2022: Geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
    },
    3 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
    },
    4 : {
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
      ['2022-12-26 00:00:00', '2022-12-26 22:00:00']
    ],
    'de' : [
      ['2022-12-24 13:00:00', '2022-12-26 22:00:00']
    ],
    'at' : [
      ['2022-12-24 13:00:00', '2022-12-26 22:00:00']
    ],
    'it' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00']
    ],
    'fr' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00']
    ]
}


//OPENING HOURS
//EU (DE + AT)
var euOpeningHourWeekday = 8;
var euClosingHourWeekday = 18;
var euOpeningHourSaturday = 9;
var euClosingHourSaturday = 17;
//FR
var frOpeningHourWeekday = false;
var frClosingHourWeekday = false;
var frOpeningHourSaturday = false;
var frClosingHourSaturday = false;
//IT
var itOpeningHourWeekday = false;
var itClosingHourWeekday = false;
var itOpeningHourSaturday = false;
var itClosingHourSaturday = false;
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
var chOpeningMinuteWeekday = 0;
var chClosingHourWeekday = 17;
var chClosingMinuteWeekday = 30;
var chOpeningHourSaturday = false;
var chClosingHourSaturday = false;
//CH PE
var chPEOpeningHourWeekday = 8;
var chPEOpeningMinuteWeekday = 0;
var chPEClosingHourWeekday = 17;
var chPEClosingMinuteWeekday = 30;
var chPEOpeningHourSaturday = false;
var chPEClosingHourSaturday = false;

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

