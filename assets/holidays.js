
//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to show holidays
//1. - ending date to stop showing holidays
//2. - ID of the text in textToDisplay 
var showHolidays = {
    'ch' : [
        ['2021-12-30 00:00:00', '2021-12-31 23:00:00', 0]
    ],
    'eu' : [
        ['2021-12-30 00:00:00', '2022-01-01 23:00:00', 1]
    ]
}
var textToDisplay = {
    0 : {
        'de' : '<br>31.12.2021: Ab 16:00 Uhr geschlossen',
        'fr' : '<br>31.12.2021 : fermé à partir de 16h00',
        'it' : '<br>31.12.2021: Chiuso dalle 16:00',
        'en-US' : '<br>31.12.2021: Closed from 16:00',
    },
    1 : {
        'de' : '<br>31.12.2021: Ab 16:00 Uhr geschlossen<br>01.01.2022: Geschlossen',
        'fr' : '<br>31.12.2021 : fermé à partir de 16h00<br>01.01.2022 : Fermé',
        'it' : '<br>31.12.2021: Chiuso dalle 16:00<br>01.01.2022: Chiuso',
        'en-US' : '<br>31.12.2021: Closed from 16:00<br>01.01.2022: Closed',
    }
}

//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to hide waiting times
//1. - ending date to stop hiding waiting times
var hideWaitingTimes = {
    'ch' : [
        ['2021-12-31 15:00:00', '2022-01-01 23:00:00']
    ],
    'eu' : [
        ['2021-12-31 13:00:00', '2022-01-01 23:00:00']
    ]
}