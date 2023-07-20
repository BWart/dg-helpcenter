/*TODOS
- PrivacyNoticeNL: Privacybeleid korrekt oder haben wir anderes Wording auf der Homeepage? Wiki ID korrekt?
- Wiki IDs für NL + BE + LU allgemein korrekt?
*/


function filldynamicWording(extraPrivateNumber, extraPrivateNumberText){
    let portal = window.location.hostname;

    //Variabeln Öffnungszeiten Telefon
    let uhrzeitPrivatkunde = "";
    let uhrzeitPrivatkunde2 = "";
    let uhrzeitPrivatkundePe = ""
    let uhrzeitPrivatkunde2Pe = ""
    let tagePrivatkundeDE = "";
    let tagePrivatkundeFR = "";
    let tagePrivatkundeIT = "";
    let tagePrivatkundeEN = "";
    let tagePrivatkundeNL = "";
    let tagePrivatkunde2DE = "";
    let tagePrivatkunde2FR = "";
    let tagePrivatkunde2IT = "";
    let tagePrivatkunde2EN = "";
    let tagePrivatkunde2NL = "";

    //Datenschutzerklärung
    let privacynoticeDE = '';
    let privacynoticeEN = '';
    let privacynoticeFR = '';
    let privacynoticeIT = '';
    let privacynoticeNL = '';

    //Telefonnummern
    let telPrivatkunde = "";
    let telFirmenkunde = "";
    let telPrivatkundeText = "";
    let telFirmenkundeText = "";

    //Callback Fehlermeldungen
    let callbackPhoneError1DE = "";
    let callbackPhoneError2DE = "";
    let callbackPhoneError1FR = "";
    let callbackPhoneError2FR = "";
    let callbackPhoneError1IT = "";
    let callbackPhoneError2IT = "";
    let callbackPhoneError1EN = "";
    let callbackPhoneError2EN = "";
    let callbackPhoneError1NL = "";
    let callbackPhoneError2NL = "";

    //Anzahl Tage Wartezeit beim Mailform
    let mailWaitDays = "";

    //shopLink
    let shopLink = ""

    switch(portal){
        case 'helpcenter.digitec.ch':
                shopLink = "https://www.digitec.ch/"

                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkundeNL = "Ma - Vr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "08:00 - 18:00";
                uhrzeitPrivatkunde2Pe = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacybeleid</a>';

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";

                if (typeof extraPrivateNumber !== 'undefined' && extraPrivateNumberText !== 'undefined'){
                    telPrivatkunde = extraPrivateNumber;
                    telPrivatkundeText = extraPrivateNumberText;
                }

                callbackPhoneError1DE = 'Bitte gib eine gültige Telefonnummer ein. Nur Schweizer Telefonnummern werden akzeptiert.';
                callbackPhoneError2DE = 'Folgende Vorwahlen werden nicht akzeptiert: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1FR = 'Veuillez saisir un numéro de téléphone valide. Seuls les numéros de téléphone suisses sont acceptés.';
                callbackPhoneError2FR = 'Les préfixes suivants ne sont pas acceptés : (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1IT = 'Inserire un numero di telefono valido. Si accettano solo numeri di telefono svizzeri.';
                callbackPhoneError2IT = 'I seguenti codici di zona non sono accettati: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1EN = 'Please enter a valid phone number. Only Swiss phone numbers are accepted.';
                callbackPhoneError2EN = 'The following area codes are not accepted: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1NL = 'Voer een geldig telefoonnummer in. Alleen Zwitserse telefoonnummers worden geaccepteerd.';
                callbackPhoneError2NL = 'De volgende voorvoegsels worden niet aanvaard: (0)800, (0)84, (0)900, (0)901, (0)906';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.ch':
                shopLink = "https://www.galaxus.ch/"

                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkundeNL = "Ma - Vr ";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "08:00 - 18:00";
                uhrzeitPrivatkunde2Pe = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Privacybeleid</a>';

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";  
                if (typeof extraPrivateNumber !== 'undefined' && extraPrivateNumberText !== 'undefined'){
                    telPrivatkunde = extraPrivateNumber;
                    telPrivatkundeText = extraPrivateNumberText;
                }

                callbackPhoneError1DE = 'Bitte gib eine gültige Telefonnummer ein. Nur Schweizer Telefonnummern werden akzeptiert.';
                callbackPhoneError2DE = 'Folgende Vorwahlen werden nicht akzeptiert: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1FR = 'Veuillez saisir un numéro de téléphone valide. Seuls les numéros de téléphone suisses sont acceptés.';
                callbackPhoneError2FR = 'Les préfixes suivants ne sont pas acceptés : (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1IT = 'Inserire un numero di telefono valido. Si accettano solo numeri di telefono svizzeri.';
                callbackPhoneError2IT = 'I seguenti codici di zona non sono accettati: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1EN = 'Please enter a valid phone number. Only Swiss phone numbers are accepted.';
                callbackPhoneError2EN = 'The following area codes are not accepted: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1NL = 'Voer een geldig telefoonnummer in. Alleen Zwitserse telefoonnummers worden geaccepteerd.';
                callbackPhoneError2NL = 'De volgende voorvoegsels worden niet aanvaard: (0)800, (0)84, (0)900, (0)901, (0)906';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.de':
                shopLink = "https://www.galaxus.de/"

                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr ";
                tagePrivatkundeFR = "Lu - Ve ";
                tagePrivatkundeIT = "Lun - Ven ";
                tagePrivatkundeEN = "Mo - Fr ";
                tagePrivatkundeNL = "Ma - Vr ";
                tagePrivatkunde2DE = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2FR = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2IT = " | Sat ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2EN = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2NL = " | Za ";  //WICHTIG: braucht leading " | " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "09:00 - 17:00 (Chat)";
                uhrzeitPrivatkundePe = "08:00 - 19:00";
                uhrzeitPrivatkunde2Pe = "09:00 - 17:00 (Chat)";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Privacybeleid</a>';

                telPrivatkunde = "+4940334614747";
                telPrivatkundeText = "+49 (0)40 334 614 747";
                telFirmenkunde = "+4940334614748";
                telFirmenkundeText = "+49 (0)40 334 614 748";

                callbackPhoneError1DE = 'Bitte gib eine gültige Telefonnummer ein. Nur Deutsche Telefonnummern werden akzeptiert.';
                callbackPhoneError2DE = 'Folgende Vorwahlen werden nicht akzeptiert: (0)700, (0)800, (0)900';
                callbackPhoneError1FR = 'Veuillez saisir un numéro de téléphone valide. Seuls les numéros de téléphone allemands sont acceptés.';
                callbackPhoneError2FR = 'Les préfixes suivants ne sont pas acceptés : (0)700, (0)800, (0)900';
                callbackPhoneError1IT = 'Inserire un numero di telefono valido. Si accettano solo numeri di telefono tedeschi.';
                callbackPhoneError2IT = 'I seguenti codici di zona non sono accettati: (0)700, (0)800, (0)900';
                callbackPhoneError1EN = 'Please enter a valid phone number. Only German phone numbers are accepted.';
                callbackPhoneError2EN = 'The following area codes are not accepted: (0)700, (0)800, (0)900';
                callbackPhoneError1NL = 'Voer een geldig telefoonnummer in. Alleen Duitse telefoonnummers worden geaccepteerd.';
                callbackPhoneError2NL = 'De volgende voorvoegsels worden niet aanvaard: (0)700, (0)800, (0)900';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.at':
                shopLink = "https://www.galaxus.at/"

                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr ";
                tagePrivatkundeFR = "Lu - Ve ";
                tagePrivatkundeIT = "Lun - Ven ";
                tagePrivatkundeEN = "Mo - Fr ";
                tagePrivatkundeNL = "Ma - Vr ";
                tagePrivatkunde2DE = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2FR = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2IT = " | Sat ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2EN = " | Sa ";  //WICHTIG: braucht leading " | " wenn befüllt
                tagePrivatkunde2NL = " | Za ";  //WICHTIG: braucht leading " | " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "09:00 - 17:00 (Chat)";
                uhrzeitPrivatkundePe = "08:00 - 19:00";
                uhrzeitPrivatkunde2Pe = "09:00 - 17:00 (Chat)";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Privacybeleid</a>';

                telPrivatkunde = "+43800017837";
                telPrivatkundeText = "+43 800 017 837";
                telFirmenkunde = "+43800017837";
                telFirmenkundeText = "+43 800 017 837";

                callbackPhoneError1DE = 'Bitte gib eine gültige Telefonnummer ein. Nur Österreichische Telefonnummern werden akzeptiert.';
                callbackPhoneError2DE = 'Folgende Vorwahlen werden nicht akzeptiert: (0)700, (0)800, (0)900';
                callbackPhoneError1FR = 'Veuillez saisir un numéro de téléphone valide. Seuls les numéros de téléphone autrichiens sont acceptés.';
                callbackPhoneError2FR = 'Les préfixes suivants ne sont pas acceptés : (0)700, (0)800, (0)900';
                callbackPhoneError1IT = 'Inserire un numero di telefono valido. Si accettano solo numeri di telefono austriaci.';
                callbackPhoneError2IT = 'I seguenti codici di zona non sono accettati: (0)700, (0)800, (0)900';
                callbackPhoneError1EN = 'Please enter a valid phone number. Only Austrian phone numbers are accepted.';
                callbackPhoneError2EN = 'The following area codes are not accepted: (0)700, (0)800, (0)900';
                callbackPhoneError1NL = 'Voer een geldig telefoonnummer in. Alleen Oostenrijkse telefoonnummers worden geaccepteerd.';
                callbackPhoneError2NL = 'De volgende voorvoegsels worden niet aanvaard: (0)700, (0)800, (0)900';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.fr':
                shopLink = "https://www.galaxus.fr/"

                //Öffnungszeiten
                tagePrivatkundeDE = "";
                tagePrivatkundeFR = "";
                tagePrivatkundeIT = "";
                tagePrivatkundeEN = "";
                tagePrivatkundeNL = "";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "";
                uhrzeitPrivatkunde2Pe = "";
                // TODO: LINKS AUF KORREKTHEIT PRÜFEN
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.fr/wiki/6182" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.fr/wiki/6182" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.fr/wiki/6182" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.fr/wiki/6182" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.galaxus.fr/wiki/6182" target="blank">Privacybeleid</a>';

                telPrivatkunde = "";
                telPrivatkundeText = "";
                telFirmenkunde = "";
                telFirmenkundeText = "";

                callbackPhoneError1DE = '';
                callbackPhoneError2DE = '';
                callbackPhoneError1FR = '';
                callbackPhoneError2FR = '';
                callbackPhoneError1IT = '';
                callbackPhoneError2IT = '';
                callbackPhoneError1EN = '';
                callbackPhoneError2EN = '';
                callbackPhoneError1NL = '';
                callbackPhoneError2NL = '';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.it':
                shopLink = "https://www.galaxus.it/"

                //Öffnungszeiten
                tagePrivatkundeDE = "";
                tagePrivatkundeFR = "";
                tagePrivatkundeIT = "";
                tagePrivatkundeEN = "";
                tagePrivatkundeNL = "";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "";
                uhrzeitPrivatkunde2Pe = "";
                // TODO: LINKS AUF KORREKTHEIT PRÜFEN
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Privacybeleid</a>';

                telPrivatkunde = "";
                telPrivatkundeText = "";
                telFirmenkunde = "";
                telFirmenkundeText = "";

                callbackPhoneError1DE = '';
                callbackPhoneError2DE = '';
                callbackPhoneError1FR = '';
                callbackPhoneError2FR = '';
                callbackPhoneError1IT = '';
                callbackPhoneError2IT = '';
                callbackPhoneError1EN = '';
                callbackPhoneError2EN = '';
                callbackPhoneError1NL = '';
                callbackPhoneError2NL = '';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.be':
                shopLink = "https://www.galaxus.be/"

                //Öffnungszeiten
                tagePrivatkundeDE = "";
                tagePrivatkundeFR = "";
                tagePrivatkundeIT = "";
                tagePrivatkundeEN = "";
                tagePrivatkundeNL = "";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "";
                uhrzeitPrivatkunde2Pe = "";
                // TODO: LINKS AUF KORREKTHEIT PRÜFEN
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/6182" target="blank">Privacybeleid</a>';

                telPrivatkunde = "";
                telPrivatkundeText = "";
                telFirmenkunde = "";
                telFirmenkundeText = "";

                callbackPhoneError1DE = '';
                callbackPhoneError2DE = '';
                callbackPhoneError1FR = '';
                callbackPhoneError2FR = '';
                callbackPhoneError1IT = '';
                callbackPhoneError2IT = '';
                callbackPhoneError1EN = '';
                callbackPhoneError2EN = '';
                callbackPhoneError1NL = '';
                callbackPhoneError2NL = '';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.nl':
                shopLink = "https://www.galaxus.nl/"

                //Öffnungszeiten
                tagePrivatkundeDE = "";
                tagePrivatkundeFR = "";
                tagePrivatkundeIT = "";
                tagePrivatkundeEN = "";
                tagePrivatkundeNL = "";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "";
                uhrzeitPrivatkunde2Pe = "";
                // TODO: LINKS AUF KORREKTHEIT PRÜFEN
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/6182" target="blank">Privacybeleid</a>';

                telPrivatkunde = "";
                telPrivatkundeText = "";
                telFirmenkunde = "";
                telFirmenkundeText = "";

                callbackPhoneError1DE = '';
                callbackPhoneError2DE = '';
                callbackPhoneError1FR = '';
                callbackPhoneError2FR = '';
                callbackPhoneError1IT = '';
                callbackPhoneError2IT = '';
                callbackPhoneError1EN = '';
                callbackPhoneError2EN = '';
                callbackPhoneError1NL = '';
                callbackPhoneError2NL = '';

                mailWaitDays = "1-2"

                break;
        case 'helpcenter.galaxus.lu':
                shopLink = "https://www.galaxus.lu/"

                //Öffnungszeiten
                tagePrivatkundeDE = "";
                tagePrivatkundeFR = "";
                tagePrivatkundeIT = "";
                tagePrivatkundeEN = "";
                tagePrivatkundeNL = "";
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "";
                uhrzeitPrivatkunde2Pe = "";
                // TODO: LINKS AUF KORREKTHEIT PRÜFEN
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.it/wiki/6182" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/6182" target="blank">Privacybeleid</a>';

                telPrivatkunde = "";
                telPrivatkundeText = "";
                telFirmenkunde = "";
                telFirmenkundeText = "";

                callbackPhoneError1DE = '';
                callbackPhoneError2DE = '';
                callbackPhoneError1FR = '';
                callbackPhoneError2FR = '';
                callbackPhoneError1IT = '';
                callbackPhoneError2IT = '';
                callbackPhoneError1EN = '';
                callbackPhoneError2EN = '';
                callbackPhoneError1NL = '';
                callbackPhoneError2NL = '';

                mailWaitDays = "1-2"

                break;
        default:
                shopLink = "https://www.digitec.ch/"

                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkundeNL = "Ma - Vr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2NL = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                uhrzeitPrivatkundePe = "08:00 - 18:00";
                uhrzeitPrivatkunde2Pe = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacy statement</a>';
                privacynoticeNL = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacybeleid</a>';

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";   
                
                callbackPhoneError1DE = 'Bitte gib eine gültige Telefonnummer ein. Nur Schweizer Telefonnummern werden akzeptiert.';
                callbackPhoneError2DE = 'Folgende Vorwahlen werden nicht akzeptiert: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1FR = 'Veuillez saisir un numéro de téléphone valide. Seuls les numéros de téléphone suisses sont acceptés.';
                callbackPhoneError2FR = 'Les préfixes suivants ne sont pas acceptés : (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1IT = 'Inserire un numero di telefono valido. Si accettano solo numeri di telefono svizzeri.';
                callbackPhoneError2IT = 'I seguenti codici di zona non sono accettati: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1EN = 'Please enter a valid phone number. Only Swiss phone numbers are accepted.';
                callbackPhoneError2EN = 'The following area codes are not accepted: (0)800, (0)84, (0)900, (0)901, (0)906';
                callbackPhoneError1NL = 'Voer een geldig telefoonnummer in. Alleen Zwitserse telefoonnummers worden geaccepteerd.';
                callbackPhoneError2NL = 'De volgende voorvoegsels worden niet aanvaard: (0)800, (0)84, (0)900, (0)901, (0)906';

                mailWaitDays = "1-2"

                break;
    }


    
    let dynamicWording = {

        de: {
        'privateCustomers' : 'Privatkunden',
        'businessCustomers' : 'Firmenkunden',
        'chatUs': 'Chatte mit uns',
        'callUsPrivate' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callYouCallback' : 'Ruft mich an',
        'callYouCallbackMobile' : 'Ruft mich an',
        'callbackOffline' : 'Nicht verfügbar',
        'callbackOfflineMobile' : 'Nicht verfügbar',
        'callbackTitleText' : 'Wir rufen Dich an',
        'contactFormNoteTitel' : 'Schon gewusst:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeDE,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2DE,
        'openingHours2' : uhrzeitPrivatkunde2,
        'openingHoursPe' : uhrzeitPrivatkundePe,
        'openingHours2Pe' : uhrzeitPrivatkunde2Pe,
        'phone' : 'Telefon',
        'chat' : 'Live-Chat',
        'email' : 'Kontaktformular',
        'emailDescription' : 'Wartezeit ' + mailWaitDays + ' Tage',
        'emailDescriptionMobile' : 'Wartezeit ' + mailWaitDays + ' Tage',
        'callbackTitle' : 'Wir rufen Dich an',
        'demandCallback' : 'Anruf anfordern',
        //'callbackPhoneNumberHint' : 'Hinweis: Nur Schweizer Telefonnummern werden akzeptiert.',
        'callbackPhoneNumberHint' : '',
        'callbackMailHint' : 'Mithilfe der E-Mail Adresse können wir dein Kundenkonto bereits identifizieren.',
        'callbackAgentHint' : 'Sobald ein Agent verfügbar ist, rufen wir Dich umgehend an.<br><b>Aktuelle Wartezeit: ca. <font class="callbackWaitTime"></font> min</b>',
        'callbackPhoneNumber' : 'Telefonnummer <font color="red">*</font>',
        'callbackOrderNumber' : 'Auftragsnummer (optional)',
        'callbackRGNumber' : 'Rechnungsnummer (optional)', 
        'callbackEmailLabel' : 'E-Mail Adresse <font color="red">*</font>',
        'callbackRecordingLabel' : 'Dein Gespräch wird zur Qualitätssicherung und zu Schulungszwecken aufgezeichnet',
        'callbackRecordingLabelEU' : 'Mein Gespräch darf zur Qualitätssicherung und zu Schulungszwecken aufgezeichnet werden. Die Aufnahmen werden nach 30 Tagen gelöscht.',
        'callbackCsatLabelEU' : 'Nach dem Abschluss meiner Anfrage möchte ich eine Zufriedenheitsumfrage per E-Mail erhalten.',
        'callbackEmailError' : 'Bitte gib eine gültige E-Mail Adresse ein',
        'callbackPhoneError' : callbackPhoneError1DE,
        'callbackPhoneError2' : callbackPhoneError2DE,
        'callbackFormError' : 'Bitte überprüfe Deine Eingaben<br>',
        'callbackAPIError' : 'Deine Anfrage konnte nicht übermittelt werden. Bitte verwende einen unserer anderen Kontaktkanäle.',
        'contact' : 'Kontaktiere uns',
        'questionNotAnswered' : 'Deine Frage ist nicht beantwortet?',
        'noAnswerFound' : 'Keine passende Antwort gefunden?',
        'writeUs' : 'Schreib uns',
        'searchBoxText' : 'Wie können wir dir helfen?', 
        'infoNoteText' : '<br>Aufgrund der aktuellen Wetter- bzw. Strassensituation ist mit Verspätungen bei der Paketzustellung durch die Post zu rechnen. Besten Dank für dein Verständnis<br>&nbsp;',
        'contactFormInfoText' : 'Per Chat, Telefon oder Kontaktformular - wähle nur deine Kundengruppe und den passenden Anfragegrund.',
        'headerTitle' : 'Kontaktiere uns',
        'chatNotOnline': 'Nicht verfügbar',
        'recommendedChannel' : 'EMPFOHLEN',
        'backButtonText' : 'Zurück zur Kontaktauswahl',
        'feedbackHeader' : 'Feedbackformular',
        'feedbackDescription' : 'Bitte verwende das Formular lediglich für Verbesserungsvorschläge zu unseren Beiträgen.<br>Leider können wir nicht auf dein Feedback antworten. Für deine Kundenanfragen kannst du gerne das <a href="/hc/requests/new">Kontaktformular</a> verwenden.<br>Achtung: Auf Kundenanfragen über das Feedbackformular wird nicht geantwortet!',
        'chooseCustomerGroup' : 'Wähle deine Kundengruppe',
        'chooseRequestReason' : 'Wähle deinen Anfragegrund',
        'contactOptions' : 'Deine Kontaktmöglichkeiten',
        'chatLanguage' : 'Sprache:',
        'chatLanguage2' : 'Deutsch',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Jetzt kontaktieren',
        'chatWaitTime': 'Wartezeit <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Wartezeit <font class="callWaitTime"></font> min',
        'callbackWaitTime': 'Wartezeit <font class="callbackWaitTime"></font> min',
        'toShop' : '<a href="' + shopLink + '" target="blank">Zum Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Vielen Dank für deine Anfrage!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Deine Anfrage wurde erfolgreich übermittelt.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Wir senden dir eine Kopie deiner Anfrage an ',
        'ticketSubmintConfirmationTextPt3' : '. Falls sich dein Anliegen in der Zwischenzeit geklärt hat, antworte mit #closeticket auf die E-Mail.<br><br>',
        'callbackSubmitConfirmationTitle' : 'Wir rufen dich gleich an!',
        'callbackSubmintConfirmationTextPt1' : '&#10003 Deine Anfrage wurde erfolgreich übermittelt.<br><br>',
        'callbackSubmintConfirmationTextPt2' : 'Sobald ein Agent verfügbar ist, rufen wir Dich umgehend unter ',
        'callbackSubmintConfirmationTextPt3' : ' an.<br><br>',
        'backToHelpcenter' : 'Zurück zum Helpcenter',
        'privacynotice' : privacynoticeDE,
        'chatGreetingText' : 'Damit wir dir rasch helfen können, teile uns bitte deine Auftrags- oder Rechnungsnummer mit.',
        'chatOfflineMessage' : 'Wir sind im Moment nicht online',
        'chatNotOnline' : 'Nicht verfügbar',
        'countryCH' : '&nbsp;&nbsp;Schweiz', // benötigt immer Leading &nbsp;&nbsp;
        'countryLI' : '&nbsp;&nbsp;Liechtenstein', // benötigt immer Leading &nbsp;&nbsp;
        'chatClosedMessage' : 'Leider ist unser Chat nicht mehr verfügbar, gerne stehen wir innerhalb der Öffnungszeiten zur Verfügung. Ausserhalb der Öffnungszeiten kann das Kontaktformular verwendet werden.',
        'callbackClosedMessage' : 'Leider ist unsere Telefonleitung geschlossen, gerne stehen wir innerhalb der Öffnungszeiten zur Verfügung. Ausserhalb der Öffnungszeiten kann das Kontaktformular verwendet werden.',
        'liveChannelsClosedMessage' : 'Leider sind unsere live-Kanäle geschlossen, gerne stehen wir innerhalb der Öffnungszeiten zur Verfügung. Ausserhalb der Öffnungszeiten kann das Kontaktformular verwendet werden.'
    },
        fr: {      
        'privateCustomers' : 'Clients privés',
        'businessCustomers' : 'Clients professionnels',
        'chatUs': 'Chattez avec nous',
        'callUsPrivate' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callYouCallback' : 'Appelez-moi',
        'callYouCallbackMobile' : 'Appelez-moi',
        'callbackOffline' : 'Non disponible',
        'callbackOfflineMobile' : 'Non disponible',
        'callbackTitleText' : 'Nous vous appelons',
        'contactFormNoteTitel' : 'Le saviez-vous :',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeFR,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2FR,
        'openingHours2' : uhrzeitPrivatkunde2,
        'openingHoursPe' : uhrzeitPrivatkundePe,
        'openingHours2Pe' : uhrzeitPrivatkunde2Pe,
        'phone' : 'Téléphone',
        'chat' : 'Chat en direct',
        'email' : 'Formulaire de contact',
        'emailDescription' : "Réponse dans " + mailWaitDays + " jours",
        'emailDescriptionMobile' : "Réponse dans " + mailWaitDays + " jours",
        'callbackTitle' : 'Nous vous appelons',
        'demandCallback' : 'Demander un appel',
        //'callbackPhoneNumberHint' : 'Remarque : seuls les numéros de téléphone suisses sont acceptés.',
        'callbackPhoneNumberHint' : '',
        'callbackMailHint' : 'L\'adresse e-mail nous permet déjà d\identifier votre compte client.',
        'callbackAgentHint' : 'Dès qu\'un agent est disponible, nous vous appelons immédiatement.<br><b>Temps d\'attente actuel : env. <font class="callbackWaitTime"></font> min</b>',
        'callbackPhoneNumber' : 'Numéro de téléphone <font color="red">*</font>',
        'callbackOrderNumber' : 'Numéro de commande (facultatif)',
        'callbackRGNumber' : 'Numéro de facture (facultatif)',
        'callbackEmailLabel' : 'Adresse électronique <font color="red">*</font>',
        'callbackRecordingLabel' : 'Votre entretien est enregistré à des fins de formation et d\'assurance qualité',
        'callbackRecordingLabelEU' : 'Mon entretien peut être enregistré à des fins d\'assurance qualité et de formation. Les enregistrements seront effacés après 30 jours.',
        'callbackCsatLabelEU' : 'Une fois ma demande terminée, je souhaite recevoir une enquête de satisfaction par e-mail.',
        'callbackEmailError' : 'Veuillez saisir une adresse e-mail valide',
        'callbackPhoneError' : callbackPhoneError1FR,
        'callbackPhoneError2' : callbackPhoneError2FR,
        'callbackFormError' : 'Veuillez vérifier vos saisies<br>',
        'callbackAPIError' : 'Votre demande n\'a pas pu être transmise. Veuillez utiliser l\'un de nos autres canaux de contact.',
        'contact' : 'Contactez-nous',
        'questionNotAnswered' : 'Pas trouvé votre réponse ?',
        'noAnswerFound' : 'Vous n\'avez pas trouvé la bonne réponse ?',
        'writeUs' : 'Ecrivez-nous',
        'searchBoxText' : 'Comment pouvons-nous vous aider?',
        'infoNoteText' : '<br>En raison des conditions météorologiques et de la situation routière actuelles, il faut s\'attendre à des retards dans la livraison des colis par la Poste suisse. Merci de votre compréhension<br>&nbsp;',
        'contactFormInfoText' : 'Par chat, téléphone ou formulaire - choisissez simplement votre groupe de clients et le motif de la demande.',
        'headerTitle' : 'Contactez-nous',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RECOMMANDE',
        'backButtonText' : 'Retour à la sélection des contacts',
        'feedbackHeader' : 'Formulaire de commentaires',
        'feedbackDescription' : 'Veuillez utiliser le formulaire uniquement pour suggérer des améliorations à nos articles.<br>Malheureusement, nous ne pouvons pas répondre à vos commentaires. Pour les demandes de vos clients, vous pouvez utiliser le <a href="/requests/new">formulaire de contact</a>.<br>Attention : Nous ne répondons pas aux demandes des clients via le formulaire de feed-back!',
        'chooseCustomerGroup' : 'Choisissez votre groupe de clients',
        'chooseRequestReason' : 'Choisissez le motif de votre demande',
        'contactOptions' : 'Vos options de contact',
        'chatLanguage' : 'Langue:',
        'chatLanguage2' : 'Français',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contacter maintenant',
        'chatWaitTime': 'Réponse en <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Réponse en <font class="callWaitTime"></font> min',
        'callbackWaitTime': 'Réponse en <font class="callbackWaitTime"></font> min',
        'toShop' : '<a href="' + shopLink + '" target="blank">Vers le Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Merci pour votre demande !',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Votre demande a été transmise avec succès.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Nous vous enverrons une copie de votre demande à ',
        'ticketSubmintConfirmationTextPt3' : '. Si votre demande a été résolue entre-temps, répondez à l\'e-mail avec #closeticket.<br><br>',
        'callbackSubmitConfirmationTitle' : 'Nous vous appelons tout de suite !',
        'callbackSubmintConfirmationTextPt1' : '&#10003 Votre demande a été transmise avec succès.<br><br>',
        'callbackSubmintConfirmationTextPt2' : 'Dès qu\'un agent sera disponible, nous vous appellerons immédiatement au ',
        'callbackSubmintConfirmationTextPt3' : '.<br><br>',
        'backToHelpcenter': 'Retour au Helpcenter',
        'privacynotice' : privacynoticeFR,
        'chatGreetingText' : 'Pour que nous puissions vous aider rapidement, veuillez nous communiquer votre numéro de commande ou de facture.',
        'chatOfflineMessage' : 'Nous ne sommes pas en ligne pour le moment',
        'chatNotOnline' : 'Non disponible',
        'countryCH' : '&nbsp;&nbsp;Suisse', // benötigt immer Leading &nbsp;&nbsp;
        'countryLI' : '&nbsp;&nbsp;Liechtenstein', // benötigt immer Leading &nbsp;&nbsp;
        'chatClosedMessage' : 'Malheureusement, notre chat n\'est plus disponible. Nous restons volontiers à votre disposition pendant les heures d\'ouverture. En dehors des heures d\'ouverture, le formulaire de contact peut être utilisé.',
        'callbackClosedMessage' : 'Malheureusement, notre ligne téléphonique n\'est plus disponible. Nous restons volontiers à votre disposition pendant les heures d\'ouverture. En dehors des heures d\'ouverture, le formulaire de contact peut être utilisé.',        
        'liveChannelsClosedMessage' : 'Malheureusement, nos chaînes en direct ne sont plus disponibles. Nous restons volontiers à votre disposition pendant les heures d\'ouverture. En dehors des heures d\'ouverture, le formulaire de contact peut être utilisé.'
    },
        it: {
        'privateCustomers' : 'Clienti privati',
        'businessCustomers' : 'Clienti commerciali',
        'chatUs': 'Chatta con noi',
        'callUsPrivate' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Chiamaci <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callYouCallback' : 'Chiamatemi',
        'callYouCallbackMobile' : 'Chiamatemi',
        'callbackOffline' : 'Non disponible',
        'callbackOfflineMobile' : 'Non disponible',
        'callbackTitleText' : 'Vi chiamiamo',
        'contactFormNoteTitel' : 'Lo sapevi:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeIT,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2IT,
        'openingHours2' : uhrzeitPrivatkunde2,
        'openingHoursPe' : uhrzeitPrivatkundePe,
        'openingHours2Pe' : uhrzeitPrivatkunde2Pe,
        'phone' : 'Telefono',
        'chat' : 'Live-Chat',
        'email' : 'Modulo di contatto',
        'emailDescription' : "Risposta in " + mailWaitDays + " giorni",
        'emailDescriptionMobile' : "Risposta in " + mailWaitDays + " giorni",
        'callbackTitle' : 'Vi chiamiamo',
        'demandCallback' : 'Richiedi una chiamata',
        //'callbackPhoneNumberHint' : 'Nota: sono accettati solo i numeri di telefono svizzeri.',
        'callbackPhoneNumberHint' : '',
        'callbackMailHint' : 'Possiamo già identificare il vostro account cliente con l\'aiuto dell\'indirizzo e-mail.',
        'callbackAgentHint' : 'Non appena sarà disponibile un agente, vi chiameremo immediatamente.<br><b>Tempo di attesa attuale: circa <font class="callbackWaitTime"></font> min</b>',
        'callbackPhoneNumber' : 'Numero di telefono <font color="red">*</font>',
        'callbackOrderNumber' : 'Numero d\'ordine (opzionale)',
        'callbackRGNumber' : 'Numero di fattura (opzionale)',
        'callbackEmailLabel' : 'Indirizzo e-mail <font color="red">*</font>',
        'callbackRecordingLabel' : 'La conversazione verrà registrata per garantire la qualità e la formazione',
        'callbackRecordingLabelEU' : 'La mia conversazione può essere registrata a fini di garanzia della qualità e di formazione. Le registrazioni saranno cancellate dopo 30 giorni.',
        'callbackCsatLabelEU' : 'Dopo aver completato la mia richiesta, desidero ricevere un sondaggio di soddisfazione via e-mail.',
        'callbackEmailError' : 'Inserire un indirizzo e-mail valido',
        'callbackPhoneError' : callbackPhoneError1IT,
        'callbackPhoneError2' : callbackPhoneError2IT,
        'callbackFormError' : 'Controllate le vostre iscrizioni<br>',
        'callbackAPIError' : 'Non è stato possibile inviare la richiesta. Si prega di utilizzare uno degli altri canali di contatto.',
        'contact' : 'Contattaci',
        'questionNotAnswered' : 'Non risolve il tuo problema?',
        'noAnswerFound' : 'Non hai trovato la risposta giusta?',
        'writeUs' : 'Scrivici',
        'searchBoxText' : 'Come possiamo aiutarti?',
        'infoNoteText' : '<br>A causa dell\'attuale situazione meteorologica e stradale, si prevedono ritardi nella consegna dei pacchi da parte della Posta Svizzera. Grazie per la vostra comprensione<br>&nbsp;',
        'contactFormInfoText' : 'Tramite telefono, chat o modulo di contatto – seleziona il tuo gruppo di clienti e il motivo della tua richiesta.',
        'headerTitle' : 'Contattaci',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RACCOMANDATO',
        'backButtonText' : 'Torna alla selezione dei contatti',
        'feedbackHeader' : 'Modulo di feedback',
        'feedbackDescription' : 'Si prega di utilizzare il modulo solo per suggerire miglioramenti ai nostri post.<br>Purtroppo, non possiamo rispondere al tuo feedback. Per le richieste dei tuoi clienti puoi usare il <a href="/requests/new">formulario di contatto</a>.<br>Attenzione: non rispondiamo alle richieste dei clienti tramite il modulo di feedback!',
        'chooseCustomerGroup' : 'Scegli il tuo gruppo di clienti',
        'chooseRequestReason' : 'Scegli il motivo della tua richiesta',
        'contactOptions' : 'Le sue opzioni di contatto',
        'chatLanguage' : 'Lingua:',
        'chatLanguage2' : 'Italiano',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contatta ora',
        'chatWaitTime': 'Risposta in <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Risposta in <font class="callWaitTime"></font> min',
        'callbackWaitTime': 'Risposta in <font class="callbackWaitTime"></font> min',
        'toShop' : '<a href="' + shopLink + '" target="blank">Al negozio</a>',
        'ticketSubmitConfirmationTitle' : 'Grazie per la tua richiesta!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 La tua richiesta è stata inviata con successo.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Vi invieremo una copia della vostra richiesta a ',
        'ticketSubmintConfirmationTextPt3' : '. Se la tua richiesta è stata risolta nel frattempo, rispondi all\'email con #closeticket.<br><br>',
        'callbackSubmitConfirmationTitle' : 'Vi chiameremo subito!',
        'callbackSubmintConfirmationTextPt1' : '&#10003 La richiesta è stata inoltrata con successo. <br><br>',
        'callbackSubmintConfirmationTextPt2' : 'Non appena sarà disponibile un agente, vi chiameremo immediatamente al numero ',
        'callbackSubmintConfirmationTextPt3' : '.<br><br>',
        'backToHelpcenter': 'Ritorna al Centro assistenza',
        'privacynotice' : privacynoticeIT,
        'chatGreetingText' : 'Per potervi aiutare rapidamente, vi preghiamo di comunicarci il vostro numero d\'ordine o di fattura.',
        'chatOfflineMessage' : "Non siamo online in questo momento",
        'chatNotOnline' : 'Non disponibile',
        'countryCH' : '&nbsp;&nbsp;Svizzera', // benötigt immer Leading &nbsp;&nbsp;
        'countryLI' : '&nbsp;&nbsp;Liechtenstein', // benötigt immer Leading &nbsp;&nbsp;
        'chatClosedMessage' : 'Purtroppo la nostra chat non è più disponibile, ma saremo lieti di aiutarvi durante gli orari di apertura. Al di fuori degli orari di apertura è possibile utilizzare il modulo di contatto.',
        'callbackClosedMessage' : 'Purtroppo la nostra linea telefonica non è più disponibile, ma saremo lieti di aiutarvi durante gli orari di apertura. Al di fuori degli orari di apertura è possibile utilizzare il modulo di contatto.',
        'liveChannelsClosedMessage' : 'Purtroppo i nostri canali live non sono più disponibili, ma saremo lieti di aiutarvi durante gli orari di apertura. Al di fuori degli orari di apertura è possibile utilizzare il modulo di contatto.'
        },
        'en-US': {
        'privateCustomers' : 'Private customers',
        'businessCustomers' : 'Business customers',
        'chatUs': 'Chat with us',
        'callUsPrivate' : 'Call us <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Call us <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Call us <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Call us <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callYouCallback' : 'Call me',
        'callYouCallbackMobile' : 'Call me',
        'callbackOffline' : 'Not available',
        'callbackOfflineMobile' : 'Not available',
        'callbackTitleText' : 'We call you',
        'contactFormNoteTitel' : 'Did you know:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeEN,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2EN,
        'openingHours2' : uhrzeitPrivatkunde2,
        'openingHoursPe' : uhrzeitPrivatkundePe,
        'openingHours2Pe' : uhrzeitPrivatkunde2Pe,
        'phone' : 'Phone',
        'chat' : 'Live-Chat',
        'email' : 'Contact form',
        'emailDescription' : "Reply time " + mailWaitDays + " days",
        'emailDescriptionMobile' : "Reply time " + mailWaitDays + " days",
        'callbackTitle' : 'We call you',
        'demandCallback' : 'Request call',
        //'callbackPhoneNumberHint' : 'Note: Only Swiss phone numbers are accepted.',
        'callbackPhoneNumberHint' : '',
        'callbackMailHint' : 'With the help of the email address we can already identify your customer account.',
        'callbackAgentHint' : 'As soon as an agent is available, we will call you immediately.<br><b>Current waiting time: approx. <font class="callbackWaitTime"></font> min</b>',
        'callbackPhoneNumber' : 'Phone number <font color="red">*</font>',
        'callbackOrderNumber' : 'Order number (optional)',
        'callbackRGNumber' : 'Invoice number (optional)',
        'callbackEmailLabel' : 'E-Mail address <font color="red">*</font>',
        'callbackRecordingLabel' : 'Your call will be recorded for quality assurance and training purposes',
        'callbackRecordingLabelEU' : 'My call may be recorded for quality assurance and training purposes. The recordings will be deleted after 30 days.',
        'callbackCsatLabelEU' : 'After completion of my request, I would like to receive a satisfaction survey via email.',
        'callbackEmailError' : 'Please enter a valid e-mail address',
        'callbackPhoneError' : callbackPhoneError1EN,
        'callbackPhoneError2' : callbackPhoneError2EN,
        'callbackFormError' : 'Please check your entries<br>',
        'callbackAPIError' : 'There was a problem submitting your request. Please contact us under another contact channel',
        'contact' : 'Contact us',
        'questionNotAnswered' : 'Your question is not answered?',
        'noAnswerFound' : 'Can\'t find what you\'re looking for?',
        'writeUs' : 'Write us',
        'searchBoxText' : 'How can we help you?',
        'infoNoteText' : '<br>Due to the current weather and road situation, delays in parcel delivery by Swiss Post are to be expected. Thank you for your understanding<br>&nbsp;',
        'contactFormInfoText' : 'By phone, chat or via form - just choose your customer group and the appropriate reason for inquiry.',
        'headerTitle' : 'Contact us',
        'chatNotOnline': 'Not available',
        'recommendedChannel' : 'RECOMMENDED',
        'backButtonText' : 'Back to contact selection',
        'feedbackHeader' : 'Feedback form',
        'feedbackDescription' : 'Please use the form only to suggest improvements to our posts.<br>Unfortunately, we cannot respond to your feedback. For your customer inquiries, feel free to use the <a href="/requests/new">contact form</a>.<br>Attention: Customer inquiries via the feedback form will not be answered!',
        'chooseCustomerGroup' : 'Choose your customer group',
        'chooseRequestReason' : 'Choose your reason for request',
        'contactOptions' : 'Your contact options',
        'chatLanguage' : 'Language:',
        'chatLanguage2' : 'English',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contact now',
        'chatWaitTime': 'Reply time <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Reply time <font class="callWaitTime"></font> min',
        'callbackWaitTime': 'Reply time <font class="callbackWaitTime"></font> min',
        'toShop' : '<a href="' + shopLink + '" target="blank">To Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Thank you for your request!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Your request has been successfully submitted.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'We will send you a copy of your request to ',
        'ticketSubmintConfirmationTextPt3' : '. If your request has been resolved in the meantime, reply to the email with #closeticket.<br><br>',
        'callbackSubmitConfirmationTitle' : 'We will call you right away!',
        'callbackSubmintConfirmationTextPt1' : '&#10003 Your request has been successfully submitted. <br><br>',
        'callbackSubmintConfirmationTextPt2' : 'As soon as an agent is available, we will call you immediately on ',
        'callbackSubmintConfirmationTextPt3' : '.<br><br>',
        'backToHelpcenter': 'Back to the Helpcenter',
        'privacynotice' : privacynoticeEN,
        'chatGreetingText' : 'So that we can help you quickly, please let us know your order or invoice number.',
        'chatOfflineMessage' : 'We aren\'t online right now',
        'chatNotOnline' : 'Not available',
        'countryCH' : '&nbsp;&nbsp;Switzerland', // benötigt immer Leading &nbsp;&nbsp;
        'countryLI' : '&nbsp;&nbsp;Liechtenstein', // benötigt immer Leading &nbsp;&nbsp;
        'chatClosedMessage' : 'Unfortunately, our chat is no longer available, gladly we are available within the opening hours. Outside the opening hours you can use the contact form.',
        'callbackClosedMessage' : 'Unfortunately, our phone line is no longer available, gladly we are available within the opening hours. Outside the opening hours you can use the contact form.',
        'liveChannelsClosedMessage' : 'Unfortunately, our live channels are longer available, gladly we are available within the opening hours. Outside the opening hours you can use the contact form.'
        },
        'nl': {
            'privateCustomers' : 'Private klanten',
            'businessCustomers' : 'Zakelijke klanten',
            'chatUs': 'Chat met ons',
            'callUsPrivate' : 'Bel ons <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
            'callUsPrivateMobile' : 'Bel ons <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
            'callUsBusiness' : 'Bel ons <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
            'callUsBusinessMobile' : 'Bel ons <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
            'callYouCallback' : 'Bel me',
            'callYouCallbackMobile' : 'Bel me',
            'callbackOffline' : 'Niet beschikbaar',
            'callbackOfflineMobile' : 'Niet beschikbaar',
            'callbackTitleText' : 'We bellen je',
            'contactFormNoteTitel' : 'Wist u dat',
            //Öffnungszeiten
            'openingDays' : tagePrivatkundeNL,
            'openingHours' : uhrzeitPrivatkunde,
            'openingDays2' : tagePrivatkunde2NL,
            'openingHours2' : uhrzeitPrivatkunde2,
            'openingHoursPe' : uhrzeitPrivatkundePe,
            'openingHours2Pe' : uhrzeitPrivatkunde2Pe,
            'phone' : 'Telefoon',
            'chat' : 'Live chat',
            'email' : 'Contactformulier',
            'emailDescription' : 'Wachttijd ' + mailWaitDays + ' dagen',
            'emailDescriptionMobile' : 'Wachttijd ' + mailWaitDays + ' dagen',
            'callbackTitle' : 'We bellen je',
            'demandCallback' : 'Een gesprek aanvragen',
            //'callbackPhoneNumberHint' : 'Hinweis: Nur Schweizer Telefonnummern werden akzeptiert.',
            'callbackPhoneNumberHint' : '',
            'callbackMailHint' : 'Aan de hand van het e-mailadres kunnen wij uw klantenrekening al identificeren.',
            'callbackAgentHint' : 'Zodra er een agent beschikbaar is, bellen wij u direct op.<br><b>Huidige wachttijd: ongeveer <font class="callbackWaitTime"></font> min</b>',
            'callbackPhoneNumber' : 'Telefoonnummer <font color="red">*</font>',
            'callbackOrderNumber' : 'Bestelnummer (facultatief)',
            'callbackRGNumber' : 'Factuurnummer (facultatief)', 
            'callbackEmailLabel' : 'E-mailadres <font color="red">*</font>',
            'callbackRecordingLabel' : 'Uw interview wordt opgenomen voor kwaliteitsborging en opleidingsdoeleinden.',
            'callbackRecordingLabelEU' : 'Mijn interview kan worden opgenomen voor kwaliteitsborging en opleidingsdoeleinden. De opnames worden na 30 dagen gewist.',
            'callbackCsatLabelEU' : 'Na het invullen van mijn aanvraag wil ik graag een tevredenheidsonderzoek per e-mail ontvangen.',
            'callbackEmailError' : 'Voer een geldig e-mailadres in',
            'callbackPhoneError' : callbackPhoneError1NL,
            'callbackPhoneError2' : callbackPhoneError2NL,
            'callbackFormError' : 'Controleer uw inzendingen<br>',
            'callbackAPIError' : 'Uw verzoek kon niet worden ingediend. Gebruik een van onze andere contactkanalen.',
            'contact' : 'Contacteer ons',
            'questionNotAnswered' : 'Uw vraag is niet beantwoord?',
            'noAnswerFound' : 'Geen geschikt antwoord gevonden?',
            'writeUs' : 'Schrijf ons',
            'searchBoxText' : 'Hoe kunnen we u helpen?', 
            'infoNoteText' : '<br>Vanwege de huidige weers- en wegsituatie zijn vertragingen in de pakketbezorging door Swiss Post te verwachten. Hartelijk dank voor uw begrip<br>&nbsp;',
            'contactFormInfoText' : 'Per chat, telefoon of contactformulier - kies gewoon uw klantengroep en de juiste reden voor uw vraag.',
            'headerTitle' : 'Contacteer ons',
            'chatNotOnline': 'Niet beschikbaar',
            'recommendedChannel' : 'AANBEVOLEN',
            'backButtonText' : 'Terug naar de contactselectie',
            'feedbackHeader' : 'Terugkoppelingsformulier',
            'feedbackDescription' : 'Gebruik het formulier alleen voor suggesties ter verbetering van onze bijdragen.<br>Wij kunnen helaas niet reageren op uw feedback. Voor uw vragen kunt u gebruik maken van het <a href="/hc/requests/new">contactformulier</a>.<br>Opgelet: Vragen van klanten via het feedbackformulier worden niet beantwoord!',
            'chooseCustomerGroup' : 'Kies uw klantengroep',
            'chooseRequestReason' : 'Kies uw reden voor het verzoek',
            'contactOptions' : 'Uw contactmogelijkheden',
            'chatLanguage' : 'Taal:',
            'chatLanguage2' : 'Nederlands',
            'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
            'contactNow' : 'Nu contact opnemen',
            'chatWaitTime': 'Wachttijd <font class="chatWaitTime"></font> min',
            'callWaitTime': 'Wachttijd <font class="callWaitTime"></font> min',
            'callbackWaitTime': 'Wachttijd <font class="callbackWaitTime"></font> min',
            'toShop' : '<a href="' + shopLink + '" target="blank">Naar de winkel</a>',
            'ticketSubmitConfirmationTitle' : 'Dank u voor uw verzoek!',
            'ticketSubmintConfirmationTextPt1' : '&#10003 Uw verzoek is succesvol ingediend.<br><br>',
            'ticketSubmintConfirmationTextPt2' : 'Wij sturen een kopie van uw verzoek naar ',
            'ticketSubmintConfirmationTextPt3' : '. Als uw probleem inmiddels is opgelost, beantwoord dan de e-mail met #closeticket.<br><br>',
            'callbackSubmitConfirmationTitle' : 'We bellen je meteen!',
            'callbackSubmintConfirmationTextPt1' : '&#10003 Uw verzoek is succesvol ingediend.<br><br>',
            'callbackSubmintConfirmationTextPt2' : 'Zodra er een agent beschikbaar is, bellen wij u onmiddellijk op ',
            'callbackSubmintConfirmationTextPt3' : '.<br><br>',
            'backToHelpcenter' : 'Terug naar het Helpcenter',
            'privacynotice' : privacynoticeNL,
            'chatGreetingText' : 'Zodat we u snel kunnen helpen, laat ons uw bestel- of factuurnummer weten.',
            'chatOfflineMessage' : 'We zijn momenteel niet online',
            'chatNotOnline' : 'Niet beschikbaar',
            'countryCH' : '&nbsp;&nbsp;Zwitserland', // benötigt immer Leading &nbsp;&nbsp;
            'countryLI' : '&nbsp;&nbsp;Liechtenstein', // benötigt immer Leading &nbsp;&nbsp;
            'chatClosedMessage' : 'Helaas is onze chat niet meer beschikbaar. Wij helpen u graag tijdens openingstijden. Buiten de openingstijden kunt u het contactformulier gebruiken.',
            'callbackClosedMessage' : 'Helaas is onze telefoonlijn gesloten. Wij helpen u graag tijdens openingstijden. Buiten de openingstijden kunt u het contactformulier gebruiken.',
            'liveChannelsClosedMessage' : 'Helaas zijn onze live kanalen gesloten, wij zijn graag bereikbaar binnen openingstijden. Buiten de openingstijden kunt u het contactformulier gebruiken.'
        },
    }

  return dynamicWording;  
}