
//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to show holidays
//1. - ending date to stop showing holidays
//2. - ID of the text in textToDisplay 
var showHolidays = {
    'ch' : [
        ['2022-06-03 00:00:00', '2022-06-06 22:00:00', 0]
    ],
    'eu' : [
        ['2022-06-03 00:00:00', '2022-06-06 22:00:00', 1]
    ]
}
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

//ALL TIMES FOR VARIABLES MUST BE NOTED IN UTC
//Values per Array:
//0. - starting date to hide waiting times
//1. - ending date to stop hiding waiting times
var hideWaitingTimes = {
    'ch' : [
        ['2022-06-06 00:00:00', '2022-06-06 22:00:00']
    ],
    'eu' : [
        ['2022-06-06 00:00:00', '2022-06-06 22:00:00']
    ]
}