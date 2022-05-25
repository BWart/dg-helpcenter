
//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to show holidays
//1. - ending date to stop showing holidays
//2. - ID of the text in textToDisplay 
var showHolidays = {
    'ch' : [
        ['2022-05-25 00:00:00', '2022-05-26 22:00:00', 0]
    ],
    'eu' : [
        ['2022-05-25 00:00:00', '2022-05-26 22:00:00', 1]
    ]
}
var textToDisplay = {
    0 : {
        'de' : '<br>Auffahrt: Geschlossen 25.5.2022 ab 16 Uhr & 26.5.2022',
        'fr' : "<br>Ascension : Fermé le 25.5.2022 à partir de 16h & le 26.5.2022",
        'it' : '<br>Ascensione: Chiuso il 25.5.2022 dalle ore 16:00 e il 26.5.2022',
        'en-US' : '<br>Ascension: Closed 25.5.2022 from 4pm & 26.5.2022',
    },
    1 : {
        'de' : '<br>Christi Himmelfahrt: 26.05.2022 geschlossen',
        'fr' : '<br>Ascension : 26.05.2022 fermé',
        'it' : '<br>Ascensione: 26.05.2022 chiuso',
        'en-US' : '<br>Ascension: 26.05.2022 closed',
    }
}

//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to hide waiting times
//1. - ending date to stop hiding waiting times
var hideWaitingTimes = {
    'ch' : [
        ['2022-05-25 14:00:00', '2022-05-26 22:00:00']
    ],
    'eu' : [
        ['2022-05-26 00:00:00', '2022-05-26 22:00:00']
    ]
}