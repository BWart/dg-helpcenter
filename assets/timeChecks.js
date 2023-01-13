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


function isInYoummdayShift() {
    const d = new Date();
    let dayOfWeek = d.getUTCDay();
    let currentMinutes = 60*(d.getUTCHours() + UTCHourOffset) + d.getUTCMinutes();
    timesToCheck = []
    shiftChecker = false
    switch (dayOfWeek){
        case 1:
            timesToCheck = mondayYDShifts
            break;
        case 2:
            timesToCheck = tuesdayYDShifts
            break;
        case 3:
            timesToCheck = wednesdayYDShifts
            break;
        case 4:
            timesToCheck = thursdayYDShifts
            break;
        case 5:
            timesToCheck = fridayYDShifts
            break;
        default:
            timesToCheck = fallbackYDShifts
            break;
    }
    timesToCheck.forEach((timeSet) => {
        if (currentMinutes >= (60*timeSet[0] + timeSet[1]) && currentMinutes < (60*timeSet[2] + timeSet[3])){
            shiftChecker = true
        }
    })
    return shiftChecker
}
