//General function for all opening times
function isInOpeningTimes(){
    const d = new Date();
    let dayOfWeek = d.getUTCDay();
    let currentMinutes = 60*(d.getUTCHours() + UTCHourOffset) + d.getUTCMinutes();
    timesToCheck = []
    openChecker = false
    if (dayOfWeek >=1 && dayOfWeek <= 5){
        timesToCheck = openingHours[portal]["weekday"]
    } else if (dayOfWeek == 6){
        timesToCheck = openingHours[portal]["saturday"]
    } else {
        return false;
    }
    timesToCheck.forEach((timeSet) => {
        if (currentMinutes >= (60*timeSet[0] + timeSet[1]) && currentMinutes < (60*timeSet[2] + timeSet[3])){
            openChecker = true
        }
    })
    return openChecker
}

function isInOpeningTimesWithoutSaturday(){
    const d = new Date();
    let dayOfWeek = d.getUTCDay();
    let currentMinutes = 60*(d.getUTCHours() + UTCHourOffset) + d.getUTCMinutes();
    timesToCheck = []
    openChecker = false
    if (dayOfWeek >=1 && dayOfWeek <= 5){
        timesToCheck = openingHours[portal]["weekday"]
    } else {
        return false;
    }
    timesToCheck.forEach((timeSet) => {
        if (currentMinutes >= (60*timeSet[0] + timeSet[1]) && currentMinutes < (60*timeSet[2] + timeSet[3])){
            openChecker = true
        }
    })
    return openChecker
}


function isInBusinessOpeningTimes() {
    const d = new Date();
    let dayOfWeek = d.getUTCDay();
    let currentMinutes = 60*(d.getUTCHours() + UTCHourOffset) + d.getUTCMinutes();
    timesToCheck = []
    openChecker = false
    if (dayOfWeek >=1 && dayOfWeek <= 5){
        timesToCheck = openingHours["chBusiness"]["weekday"]
    } else if (dayOfWeek == 6){
        timesToCheck = openingHours["chBusiness"]["saturday"]
    } else {
        return false;
    }
    timesToCheck.forEach((timeSet) => {
        if (currentMinutes >= (60*timeSet[0] + timeSet[1]) && currentMinutes < (60*timeSet[2] + timeSet[3])){
            openChecker = true
        }
    })
    return openChecker
}


function isInCHPEOpeningTimes() {
    const d = new Date();
    let dayOfWeek = d.getUTCDay();
    let currentMinutes = 60*(d.getUTCHours() + UTCHourOffset) + d.getUTCMinutes();
    timesToCheck = []
    openChecker = false
    if (dayOfWeek >=1 && dayOfWeek <= 5){
        timesToCheck = openingHours["chPE"]["weekday"]
    } else if (dayOfWeek == 6){
        timesToCheck = openingHours["chPE"]["saturday"]
    } else {
        return false;
    }
    timesToCheck.forEach((timeSet) => {
        if (currentMinutes >= (60*timeSet[0] + timeSet[1]) && currentMinutes < (60*timeSet[2] + timeSet[3])){
            openChecker = true
        }
    })
    return openChecker
}
