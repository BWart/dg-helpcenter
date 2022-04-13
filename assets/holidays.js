
//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to show holidays
//1. - ending date to stop showing holidays
//2. - ID of the text in textToDisplay 
var showHolidays = {
    'ch' : [
        ['2022-04-13 00:00:00', '2022-04-18 22:00:00', 0]
    ],
    'eu' : [
        ['2022-04-14 00:00:00', '2022-04-18 22:00:00', 1]
    ]
}
var textToDisplay = {
    0 : {
        'de' : '<br>Ostern: 14.04.2022 ab 16:00 Uhr bis 18.04.2022 geschlossen',
        'fr' : "<br>Pâques : 14.04.2022 à partir de 16:00 heures jusqu'au 18.04.2022 fermé<br>",
        'it' : '<br>Pasqua: 14.04.2022 chiuso dalle 16:00 al 18.04.2022<br>',
        'en-US' : '<br>Easter: 14.04.2022 from 16:00 until 18.04.2022 closed<br>',
    },
    1 : {
        'de' : '<br>Ostern: 15.04.2022 & 18.04.2022 geschlossen',
        'fr' : '<br>Pâques : 15.04.2022 & 18.04.2022 fermé',
        'it' : '<br>Pasqua: 15.04.2022 & 18.04.2022 chiuso',
        'en-US' : '<br>Easter: 15.04.2022 & 18.04.2022 closed',
    }
}

//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to hide waiting times
//1. - ending date to stop hiding waiting times
var hideWaitingTimes = {
    'ch' : [
        ['2022-04-14 14:00:00', '2022-04-18 22:00:00']
    ],
    'eu' : [
        ['2022-04-15 00:00:00', '2022-04-15 22:00:00'], ['2022-04-18 00:00:00', '2022-04-18 22:00:00']
    ]
}