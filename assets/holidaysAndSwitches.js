// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 2;

// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactFormDuringOpeningTimes = false;
var switchHideContactFormOutsideOpeningTimes = false;
var switchHideContactFormForPEDuringOpeningTimes = true;
var switchHideContactFormForPEOutsideOpeningTimes = true;
var switchHideContactFormForBusinessDuringOpeningTimes = false;
var switchHideContactFormForBusinessOutsideOpeningTimes = false;
var switchHideContactFormForEUDuringOpeningTimes = false;
var switchHideContactFormForEUOutsideOpeningTimes = false;
var switchHideContactFormForFRDuringOpeningTimes = false;
var switchHideContactFormForFROutsideOpeningTimes = false;
var switchHideContactFormForITDuringOpeningTimes = false;
var switchHideContactFormForITOutsideOpeningTimes = false;
var switchHideContactFormForBEDuringOpeningTimes = false;
var switchHideContactFormForBEOutsideOpeningTimes = false;
var switchHideContactFormForNLDuringOpeningTimes = false;
var switchHideContactFormForNLOutsideOpeningTimes = false;
var switchHideContactFormForLUDuringOpeningTimes = false;
var switchHideContactFormForLUOutsideOpeningTimes = false;
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
var switchHidePhoneForBEDuringOpeningTimes = true;
var switchHidePhoneForBEOutsideOpeningTimes = true;
var switchHidePhoneForNLDuringOpeningTimes = true;
var switchHidePhoneForNLOutsideOpeningTimes = true;
var switchHidePhoneForLUDuringOpeningTimes = true;
var switchHidePhoneForLUOutsideOpeningTimes = true;
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
var switchHideChatForBEDuringOpeningTimes = true;
var switchHideChatForBEOutsideOpeningTimes = true;
var switchHideChatForNLDuringOpeningTimes = true;
var switchHideChatForNLOutsideOpeningTimes = true;
var switchHideChatForLUDuringOpeningTimes = true;
var switchHideChatForLUOutsideOpeningTimes = true;
//If contact form is hidden, set threshhold to show it again when the waiting time for live contact channels get too high; set to 50000 if contact form should never be shown
var phoneWaitThreshholdToShowContactForm = 50000;
var phoneWaitThreshholdToShowContactFormPE = 50000;
var phoneWaitThreshholdToShowContactFormBusiness = 50000;
var phoneWaitThreshholdToShowContactFormEU = 50000;
var phoneWaitThreshholdToShowContactFormFR = 50000;
var phoneWaitThreshholdToShowContactFormIT = 50000;
var phoneWaitThreshholdToShowContactFormBE = 50000;
var phoneWaitThreshholdToShowContactFormBE = 50000;
var phoneWaitThreshholdToShowContactFormNL = 50000;
var chatWaitThreshholdToShowContactForm = 60;
var chatWaitThreshholdToShowContactFormPE = 50000;
var chatWaitThreshholdToShowContactFormBusiness = 50000;
var chatWaitThreshholdToShowContactFormEU = 50000;
var chatWaitThreshholdToShowContactFormFR = 50000;
var chatWaitThreshholdToShowContactFormIT = 50000;
var chatWaitThreshholdToShowContactFormBE = 50000;
var chatWaitThreshholdToShowContactFormNL = 50000;
var chatWaitThreshholdToShowContactFormLU = 50000;
var chatAndPhoneWaitThreshholdToShowContactForm = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormPE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBusiness = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormEU = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormFR = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormIT = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormNL = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormLU = 50000;


// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
//CH
var bannerSwitchCHDE = false;
var bannerSwitchCHFR = false;
var bannerSwitchCHIT = false;
var bannerSwitchCHEN = false;
var bannerSwitchCHNL = false;
var bannerSwitchConnectDE = false;
var bannerSwitchConnectFR = false;
var bannerSwitchConnectIT = false;
var bannerSwitchConnectEN = false;
var bannerSwitchConnectNL = false;
//Germany
var bannerSwitchDEDE = false;
var bannerSwitchDEFR = false;
var bannerSwitchDEIT = false;
var bannerSwitchDEEN = false;
var bannerSwitchDENL = false;
//Austria
var bannerSwitchATDE = false;
var bannerSwitchATFR = false;
var bannerSwitchATIT = false;
var bannerSwitchATEN = false;
var bannerSwitchATNL = false;
//France
var bannerSwitchFRDE = false;
var bannerSwitchFRFR = false;
var bannerSwitchFRIT = false;
var bannerSwitchFREN = false;
var bannerSwitchFRNL = false;
//Italy
var bannerSwitchITDE = false;
var bannerSwitchITFR = false;
var bannerSwitchITIT = false;
var bannerSwitchITEN = false;
var bannerSwitchITNL = false;
//Belgium
var bannerSwitchBEDE = false;
var bannerSwitchBEFR = false;
var bannerSwitchBEIT = false;
var bannerSwitchBEEN = false;
var bannerSwitchBENL = false;
//Netherlands
var bannerSwitchNLDE = false;
var bannerSwitchNLFR = false;
var bannerSwitchNLIT = false;
var bannerSwitchNLEN = false;
var bannerSwitchNLNL = false;
//Luxembourg
var bannerSwitchLUDE = false;
var bannerSwitchLUFR = false;
var bannerSwitchLUIT = false;
var bannerSwitchLUEN = false;
var bannerSwitchLUNL = false;

let userAgentString = navigator.userAgent;
console.log(userAgentString)
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv") > -1;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
if ((chromeAgent) && (safariAgent)) {safariAgent = false};

if (window.location.href.includes('requests') && safariAgent){
  //CH
bannerSwitchCHDE = true;
bannerSwitchCHFR = true;
bannerSwitchCHIT = true;
bannerSwitchCHEN = true;
bannerSwitchCHNL = true;
//Germany
bannerSwitchDEDE = true;
bannerSwitchDEFR = true;
bannerSwitchDEIT = true;
bannerSwitchDEEN = true;
bannerSwitchDENL = true;
//Austria
bannerSwitchATDE = true;
bannerSwitchATFR = true;
bannerSwitchATIT = true;
bannerSwitchATEN = true;
bannerSwitchATNL = true;
}

// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording(){
    topBannerWording = {
    "outputHeadingBannerCH" : {
      'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"
    },
    "outputTextBannerCH" : {
      'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."
    },
    "outputHeadingBannerDE" : {
      'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"
    },
    "outputTextBannerDE" : {
      'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."
    },
    "outputHeadingBannerAT" : {
      'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"
    },
    "outputTextBannerAT" : {
      'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."
    },
    "outputHeadingBannerFR" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue",
      'nl' : ""
    },
    "outputTextBannerFR" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request.",
      'nl' : ""
    },
    "outputHeadingBannerIT" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue",
      'nl' : ""
    },
    "outputTextBannerIT" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request.",
      'nl' : ""
    },
    "outputHeadingBannerBE" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue",
      'nl' : ""
    },
    "outputTextBannerBE" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request.",
      'nl' : ""
    },
    "outputHeadingBannerNL" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue",
      'nl' : ""
    },
    "outputTextBannerNL" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request.",
      'nl' : ""
    },
    "outputHeadingBannerLU" : {
      'de' : "Technische Störung",
      'fr' : "Panne techniqe",
      'it' : "Guasto tecnico",
      'en-US' : "Technical issue",
      'nl' : ""
    },
    "outputTextBannerLU" : {
      'de' : "Aufgrund einer technischer Störung unserer Systeme können wir Ihnen zurzeit nicht in jedem Anliegen weiterhelfen.",
      'fr' : "En raison d'une panne technique de nos systèmes, nous ne pouvons actuellement pas vous aider dans toutes vos demandes.",
      'it' : "A causa di un malfunzionamento tecnico dei nostri sistemi, non siamo attualmente in grado di assistervi per ogni richiesta.",
      'en-US' : "Due to a technical malfunction of our systems, we are currently unable to assist you with every request.",
      'nl' : ""
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
    ],
    'de' : [
      ['2023-04-27 00:00:00', '2023-05-29 22:00:00', 1]
    ],
    'at' : [
      ['2023-04-27 00:00:00', '2023-05-29 22:00:00', 2]
    ],
    'fr' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 3]
    ],
    'it' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 4],
    ],
    'be' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 5],
    ],
    'nl' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 6],
    ],
    'lu' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 7],
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    // Switzerland
    0 : {
      'de' : '<br>29.05.2023: Pfingstmontag, geschlossen',
      'fr' : "<br>29.05.2023 : Lundi de Pentecôte, fermé",
      'it' : '<br>29.05.2023: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>29.05.2023: Whit Monday, closed',
      'nl': ''
    },
    //Germany
    1 : {
      'de' : '<br>29.05.2023: Pfingstmontag, geschlossen',
      'fr' : "<br>29.05.2023 : Lundi de Pentecôte, fermé",
      'it' : '<br>29.05.2023: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>29.05.2023: Whit Monday, closed',
      'nl': ''
    },
    //Austria
    2 : {
      'de' : '<br>29.05.2023: Pfingstmontag, geschlossen',
      'fr' : "<br>29.05.2023 : Lundi de Pentecôte, fermé",
      'it' : '<br>29.05.2023: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>29.05.2023: Whit Monday, closed',
      'nl': ''
    },
    //France
    3 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Italy
    4 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Belgium
    5 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Netherlands
    6 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Luxembourg
    7 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00'], ['2023-05-17 15:00:00', '2023-05-18 22:00:00'], ['2023-05-29 00:00:00', '2023-05-29 22:00:00']
    ],
    'de' : [
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00'], ['2023-05-18 00:00:00', '2023-05-18 22:00:00'], ['2023-05-29 00:00:00', '2023-05-29 22:00:00']
    ],
    'at' : [
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00'], ['2023-05-18 00:00:00', '2023-05-18 22:00:00'], ['2023-05-29 00:00:00', '2023-05-29 22:00:00']
    ],
    'fr' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'it' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'be' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'nl' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'lu' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ]
}


//OPENING HOURS
const openingHours = {
  //Standard overall opening times
  "helpcenter.digitec.ch": {"weekday": [[8, 0, 19, 0]], "saturday": []},
  "helpcenter.galaxus.ch": {"weekday": [[8, 0, 19, 0]], "saturday": []},
  "helpcenter.galaxus.de": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.at": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.fr": {"weekday": [], "saturday": []},
  "helpcenter.galaxus.it": {"weekday": [], "saturday": []},
  "helpcenter.galaxus.be": {"weekday": [], "saturday": []},
  "helpcenter.galaxus.nl": {"weekday": [], "saturday": []},
  "helpcenter.galaxus.lu": {"weekday": [], "saturday": []},
  //special cases for CH Routing
  "helpcenter.connect.digitec.ch": {"weekday": [[8, 0, 17, 0]], "saturday": []},
  "chBusiness": {"weekday": [[8, 0, 17, 0]], "saturday": []},
  "chPE": {"weekday": [[8, 0, 18, 0]], "saturday": []}
}

//Connect
var connectOpeningHourWeekday = 8;
var connectClosingHourWeekday = 17;
var connectOpeningHourSaturday = false;
var connectClosingHourSaturday = false;


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

//Yoummday Shifts; [shiftHourStart, ShiftMinuteStart, ShiftHourEnd, ShiftMinutesEnd]
mondayYDShifts = [[8, 0, 11, 30]]
tuesdayYDShifts = [[8, 0, 11, 30]]
wednesdayYDShifts = [[8, 0, 11, 30]]
thursdayYDShifts = [[8, 0, 11, 30]]
fridayYDShifts = [[8, 0, 11, 30]]
fallbackYDShifts = [[8, 0, 11, 30]]
