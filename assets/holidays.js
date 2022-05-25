
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
        'de' : '<br>Auffahrt: 25.05. 08:00 bis 16:00, 26.05. geschlossen',
        'fr' : "<br>Ascension : 25.05. 08:00 à 16:00, 26.05. fermé",
        'it' : '<br>Ascensione: 25.05. dalle 08:00 alle 16:00, 26.05. chiuso',
        'en-US' : '<br>Ascension: 25.05. 08:00 to 16:00, 26.05. closed',
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