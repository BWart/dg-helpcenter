// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---

//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactForm = false
//set to true if the phone number should be hidden, set to false if it should be displayed
var switchHidePhone = false
//set to true if the Chat should be hidden, set to false if it should be displayed
var switchHideChat = false


// --- ENTER HOLIDAYS HERE TO BE DISPLAYED IN THE HELPCENTER AND FOR THE WAITING TIMES TO BE REMOVED ---

//WHEN TO SHOW THE HOLIDAY INFORMATION TEXT (USUALLY STARTS SOME DAYS BEFORE THE ACTUAL HOLIDAY)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date to show the text', 'end date to stop showing the text', ID of the text to Display]
var showHolidays = {
    'ch' : [
        ['2022-06-03 00:00:00', '2022-06-06 22:00:00', 0]
    ],
    'eu' : [
        ['2022-06-03 00:00:00', '2022-06-06 22:00:00', 1]
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
        'de' : '<br>Pfingstmontag: 06.06. geschlossen',
        'fr' : '<br>Lundi de Pentecôte : 06.06. fermé',
        'it' : '<br>Lunedì di Pentecoste: 06.06. chiuso',
        'en-US' : '<br>Whit Monday: 06.06. closed',
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
        ['2022-06-06 00:00:00', '2022-06-06 22:00:00']
    ]
}