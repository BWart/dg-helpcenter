function filldynamicWording(){
    var portal = window.location.hostname;

    //Variabeln Öffnungszeiten Telefon
    var uhrzeitPrivatkunde = "";
    var uhrzeitPrivatkunde2 = "";
    var tagePrivatkundeDE = "";
    var tagePrivatkundeFR = "";
    var tagePrivatkundeIT = "";
    var tagePrivatkundeEN = "";
    var tagePrivatkunde2DE = "";
    var tagePrivatkunde2FR = "";
    var tagePrivatkunde2IT = "";
    var tagePrivatkunde2EN = "";
    var tagePrivatkunde2MobileDE = "";
    var tagePrivatkunde2MobileFR = "";
    var tagePrivatkunde2MobileIT = "";
    var tagePrivatkunde2MobileEN = "";
    var uhrzeitFirmenkunde = "";
    var uhrzeitFirmenkunde2 = "";
    var tageFirmenkundeDE = "";
    var tageFirmenkundeFR = "";
    var tageFirmenkundeIT = "";
    var tageFirmenkundeEN = "";
    var tageFirmenkunde2DE = "";
    var tageFirmenkunde2FR = "";
    var tageFirmenkunde2IT = "";
    var tageFirmenkunde2EN = "";
    var tageFirmenkunde2MobileDE = "";
    var tageFirmenkunde2MobileFR = "";
    var tageFirmenkunde2MobileIT = "";
    var tageFirmenkunde2MobileEN = "";
    var commaMultipleHoursPrivateCustomers = "";
    var commaMultipleHoursBusinessCustomers = "";

    //Variabeln Öffnungszeiten Chat
    var uhrzeitPrivatkundeChat = "";
    var uhrzeitPrivatkunde2Chat = "";
    var tagePrivatkundeChatDE = "";
    var tagePrivatkundeChatFR = "";
    var tagePrivatkundeChatIT = "";
    var tagePrivatkundeChatEN = "";
    var tagePrivatkunde2ChatDE = "";
    var tagePrivatkunde2ChatFR = "";
    var tagePrivatkunde2ChatIT = "";
    var tagePrivatkunde2ChatEN = "";
    var tagePrivatkunde2ChatMobileDE = "";
    var tagePrivatkunde2ChatMobileFR = "";
    var tagePrivatkunde2ChatMobileIT = "";
    var tagePrivatkunde2ChatMobileEN = "";
    var uhrzeitFirmenkundeChat = "";
    var uhrzeitFirmenkunde2Chat = "";
    var tageFirmenkundeChatDE = "";
    var tageFirmenkundeChatFR = "";
    var tageFirmenkundeChatIT = "";
    var tageFirmenkundeChatEN = "";
    var tageFirmenkunde2ChatDE = "";
    var tageFirmenkunde2ChatFR = "";
    var tageFirmenkunde2ChatIT = "";
    var tageFirmenkunde2ChatEN = "";
    var tageFirmenkunde2ChatMobileDE = "";
    var tageFirmenkunde2ChatMobileFR = "";
    var tageFirmenkunde2ChatMobileIT = "";
    var tageFirmenkunde2ChatMobileEN = "";
    var commaMultipleHoursPrivateCustomersChat = "";
    var commaMultipleHoursBusinessCustomersChat = "";


    var telPrivatkunde = "";
    var telFirmenkunde = "";
    var telPrivatkundeText = "";
    var telFirmenkundeText = "";
    var telCallbackKunde = "";
    var telCallbackKundeText = "";


    switch(portal){
        case'helpcenter.digitec.ch':
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = "Mo - Fr: ";
                tagePrivatkundeChatFR = "Lu - Ve: ";
                tagePrivatkundeChatIT = "Lun - Ven: ";
                tagePrivatkundeChatEN = "Mo - Fr: ";
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "08:00 - 20:00";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "Mo - Fr: ";
                tageFirmenkundeChatFR = "Lu - Ve: ";
                tageFirmenkundeChatIT = "Lun - Ven: ";
                tageFirmenkundeChatEN = "Mo - Fr: ";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "08:00 - 20:00";
                uhrzeitFirmenkunde2Chat = "";
                commaMultipleHoursPrivateCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";    
                telCallbackKunde = "+41445759504";
                telCallbackKundeText = "+41 44 575 95 04";
                break;
        case'helpcenter.galaxus.ch':
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = "Mo - Fr: ";
                tagePrivatkundeChatFR = "Lu - Ve: ";
                tagePrivatkundeChatIT = "Lun - Ven: ";
                tagePrivatkundeChatEN = "Mo - Fr: ";
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "08:00 - 20:00";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "Mo - Fr: ";
                tageFirmenkundeChatFR = "Lu - Ve: ";
                tageFirmenkundeChatIT = "Lun - Ven: ";
                tageFirmenkundeChatEN = "Mo - Fr: ";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "08:00 - 20:00";
                uhrzeitFirmenkunde2Chat = "";
                commaMultipleHoursPrivateCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";  
                telCallbackKunde = "+41445759505";
                telCallbackKundeText = "+41 44 575 95 05";              
                break;
        case'helpcenter.galaxus.de':
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "<br>Sab: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "Sab: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "09:00 - 14:00";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "<br>Sab: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2DE = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2FR = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2IT = "Sab: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2EN = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "09:00 - 14:00";
                commaMultipleHoursPrivateCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = ""; 
                tagePrivatkundeChatFR = ""; 
                tagePrivatkundeChatIT = ""; 
                tagePrivatkundeChatEN = ""; 
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "";
                tageFirmenkundeChatFR = "";
                tageFirmenkundeChatIT = "";
                tageFirmenkundeChatEN = "";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "";
                uhrzeitFirmenkunde2Chat = "";
                commaMultipleHoursPrivateCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+4940334614747";
                telPrivatkundeText = "+49 (0)40 334 614 747";
                telFirmenkunde = "+4940334614748";
                telFirmenkundeText = "+49 (0)40 334 614 748";
                telCallbackKunde = '';
                telCallbackKundeText = '';
                break;
        case'helpcenter.digitec.at':
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "<br>Sab: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "Sab: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "09:00 - 14:00";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "<br>Sab: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "<br>Sa: ";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2DE = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2FR = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2IT = "Sab: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2EN = "Sa: ";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "09:00 - 14:00";
                commaMultipleHoursPrivateCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = ", ";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = ""; 
                tagePrivatkundeChatFR = ""; 
                tagePrivatkundeChatIT = ""; 
                tagePrivatkundeChatEN = ""; 
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "";
                tageFirmenkundeChatFR = "";
                tageFirmenkundeChatIT = "";
                tageFirmenkundeChatEN = "";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+43800017837";
                telPrivatkundeText = "+43 800 017 837";
                telFirmenkunde = "+43800017837";
                telFirmenkundeText = "+43 800 017 837";
                telCallbackKunde = '';
                telCallbackKundeText = '';
                break;
        case'helpcenter.connect.digitec.ch':
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = "Mo - Fr: ";
                tagePrivatkundeChatFR = "Lu - Ve: ";
                tagePrivatkundeChatIT = "Lun - Ven: ";
                tagePrivatkundeChatEN = "Mo - Fr: ";
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "08:00 - 20:00";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "Mo - Fr: ";
                tageFirmenkundeChatFR = "Lu - Ve: ";
                tageFirmenkundeChatIT = "Lun - Ven: ";
                tageFirmenkundeChatEN = "Mo - Fr: ";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "08:00 - 20:00";
                uhrzeitFirmenkunde2Chat = "";
                commaMultipleHoursPrivateCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759700";
                telPrivatkundeText = "+41 41 44 575 97 00";
                telFirmenkunde = "+41445759700";
                telFirmenkundeText = "+41 44 575 97 00";
                telCallbackKunde = '+41445759504';
                telCallbackKundeText = '+41 44 575 95 04';
                break;
        default:
                //Telefon
                tagePrivatkundeDE = "Mo - Fr: "; 
                tagePrivatkundeFR = "Lu - Ve: "; 
                tagePrivatkundeIT = "Lun - Ven: "; 
                tagePrivatkundeEN = "Mo - Fr: "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "";
                tageFirmenkundeDE = "Mo - Fr: ";
                tageFirmenkundeFR = "Lu - Ve: ";
                tageFirmenkundeIT = "Lun - Ven: ";
                tageFirmenkundeEN = "Mo - Fr: ";
                tageFirmenkunde2DE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2FR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2IT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2EN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2MobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2MobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkunde = "08:00 - 20:00";
                uhrzeitFirmenkunde2 = "";
                commaMultipleHoursPrivateCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomers = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                //Chat
                tagePrivatkundeChatDE = "Mo - Fr: ";
                tagePrivatkundeChatFR = "Lu - Ve: ";
                tagePrivatkundeChatIT = "Lun - Ven: ";
                tagePrivatkundeChatEN = "Mo - Fr: ";
                tagePrivatkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tagePrivatkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitPrivatkundeChat = "08:00 - 20:00";
                uhrzeitPrivatkunde2Chat = "";
                tageFirmenkundeChatDE = "Mo - Fr";
                tageFirmenkundeChatFR = "Lu - Ve";
                tageFirmenkundeChatIT = "Lun - Ven";
                tageFirmenkundeChatEN = "Mo - Fr";
                tageFirmenkunde2ChatDE = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatFR = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatIT = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatEN = "";  //WICHTIG: braucht leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileDE = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileFR = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileIT = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                tageFirmenkunde2ChatMobileEN = "";  //WICHTIG: braucht KEIN leading <br> wenn befüllt
                uhrzeitFirmenkundeChat = "08:00 - 20:00";
                uhrzeitFirmenkunde2Chat = "";
                commaMultipleHoursPrivateCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden
                commaMultipleHoursBusinessCustomersChat = "";  //mit ', ' befüllen, wenn separate Öffnungszeiten für mehrere Tage vorhanden

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";
                telCallbackKunde = "+41445759504";
                telCallbackKundeText = "+41 44 575 95 04";
                break;
    }


    
    var dynamicWording = {

        de: {
        'privateCustomers' : 'Privatkunden',
        'businessCustomers' : 'Firmenkunden',
        'chatUs': 'Chatte mit uns',
        'callUsPrivate' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsCallback' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallback" href="tel:' + telCallbackKunde + '">' + telCallbackKundeText + '</a>',
        'callUsCallbackMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallbackMobile" href="tel:' + telCallbackKunde + '">' + telCallbackKundeText + '</a>',
        'contactFormNoteTitel' : 'Schon gewusst:',
        //Öffnungszeiten Telefon
        'openingDaysPrivate' : tagePrivatkundeDE,
        'openingHoursPrivate' : uhrzeitPrivatkunde,
        'openingDaysPrivate2' : tagePrivatkunde2DE,
        'openingDaysPrivate2Mobile' : tagePrivatkunde2MobileDE,
        'openingHoursPrivate2' : uhrzeitPrivatkunde2,
        'openingDaysBusiness' : tageFirmenkundeDE,
        'openingHoursBusiness' : uhrzeitFirmenkunde,
        'openingDaysBusiness2' : tageFirmenkunde2DE,
        'openingDaysBusiness2Mobile' : tageFirmenkunde2MobileDE,
        'openingHoursBusiness2' : uhrzeitFirmenkunde2,
        //Öffnungszeiten Chat
        'openingDaysPrivateChat' : tagePrivatkundeChatDE,
        'openingHoursPrivateChat' : uhrzeitPrivatkundeChat,
        'openingDaysPrivate2Chat' : tagePrivatkunde2ChatDE,
        'openingDaysPrivate2MobileChat' : tagePrivatkunde2ChatMobileDE,
        'openingHoursPrivate2Chat' : uhrzeitPrivatkunde2Chat,
        'openingDaysBusinessChat' : tageFirmenkundeChatDE,
        'openingHoursBusinessChat' : uhrzeitFirmenkundeChat,
        'openingDaysBusiness2Chat' : tageFirmenkunde2ChatDE,
        'openingDaysBusiness2MobileChat' : tageFirmenkunde2ChatMobileDE,
        'openingHoursBusiness2Chat' : uhrzeitFirmenkunde2Chat,
        'phone' : 'Telefon',
        'chat' : 'Chat',
        'email' : 'Kontaktformular',
        'emailDescription' : "Reaktionszeit: 1-2 Tage",
        'emailDescriptionMobile' : "Reaktionszeit: 1-2 Tage",
        'contact' : 'Kontaktiere uns',
        'questionNotAnswered' : 'Deine Frage ist nicht beantwortet?',
        'noAnswerFound' : 'Keine passende Antwort gefunden?',
        'writeUs' : 'Schreib uns',
        'recommendedChannel' : 'Empfohlener Kanal',
        'searchBoxText' : '<h2><font color=#00000>Wie können wir dir helfen?</font></h2>', 
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
        'commaMultipleHoursPrivateCustomers' : commaMultipleHoursPrivateCustomers,
        'commaMultipleHoursBusinessCustomers' : commaMultipleHoursBusinessCustomers,
        'callback' : 'Rückruf',
        'callbackText' : 'Wir rufen dich an',
        'callbackContactFormInfo' : 'Wir rufen dich innerhalb von 5 Minuten an. Mit deiner E-Mailadresse und deiner Auftragsnummer können wir deine Anfrage noch schneller bearbeiten. Der Rückruf ist natürlich kostenlos für dich.',
        'callbackTime' : 'Reaktionszeit: 3 min'
        },
        fr: {      
        'privateCustomers' : 'Clients privés',
        'businessCustomers' : 'Clients professionnels',
        'chatUs': 'Chattez avec nous',
        'callUsPrivate' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsCallback' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallback" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsCallbackMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallbackMobile" href="tel:' + telCallbackKunde + '">' + telCallbackKundeText + '</a>',
        'contactFormNoteTitel' : 'Le saviez-vous :',
        //Öffnungszeiten Telefon
        'openingDaysPrivate' : tagePrivatkundeFR,
        'openingHoursPrivate' : uhrzeitPrivatkunde,
        'openingDaysPrivate2' : tagePrivatkunde2FR,
        'openingDaysPrivate2Mobile' : tagePrivatkunde2MobileFR,
        'openingHoursPrivate2' : uhrzeitPrivatkunde2,
        'openingDaysBusiness' : tageFirmenkundeFR,
        'openingHoursBusiness' : uhrzeitFirmenkunde,
        'openingDaysBusiness2' : tageFirmenkunde2FR,
        'openingDaysBusiness2Mobile' : tageFirmenkunde2MobileFR,
        'openingHoursBusiness2' : uhrzeitFirmenkunde2,
        //Öffnungszeiten Chat
        'openingDaysPrivateChat' : tagePrivatkundeChatFR,
        'openingHoursPrivateChat' : uhrzeitPrivatkundeChat,
        'openingDaysPrivate2Chat' : tagePrivatkunde2ChatFR,
        'openingDaysPrivate2MobileChat' : tagePrivatkunde2ChatMobileFR,
        'openingHoursPrivate2Chat' : uhrzeitPrivatkunde2Chat,
        'openingDaysBusinessChat' : tageFirmenkundeChatFR,
        'openingHoursBusinessChat' : uhrzeitFirmenkundeChat,
        'openingDaysBusiness2Chat' : tageFirmenkunde2ChatFR,
        'openingDaysBusiness2MobileChat' : tageFirmenkunde2ChatMobileFR,
        'openingHoursBusiness2Chat' : uhrzeitFirmenkunde2Chat,
        'phone' : 'Téléphone',
        'chat' : 'Chat',
        'email' : 'Formulaire de contact',
        'emailDescription' : "Réponse : 1-2 jours",
        'emailDescriptionMobile' : "Réponse : 1-2 jours",
        'contact' : 'Contactez-nous',
        'questionNotAnswered' : 'Pas trouvé votre réponse ?',
        'noAnswerFound' : 'Vous n\'avez pas trouvé la bonne réponse ?',
        'writeUs' : 'Ecrivez-nous',
        'recommendedChannel' : 'Canal recommandé',
        'searchBoxText' : '<h2><font color=#00000>Comment pouvons-nous vous aider?</font></h2>',
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
        'commaMultipleHoursPrivateCustomers' : commaMultipleHoursPrivateCustomers,
        'commaMultipleHoursBusinessCustomers' : commaMultipleHoursBusinessCustomers,
        'callbackTime' : 'Reaktionszeit: 3 min'
        },
        it: {
        'privateCustomers' : 'Clienti privati',
        'businessCustomers' : 'Clienti commerciali',
        'chatUs': 'Chatta con noi',
        'callUsPrivate' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Chiamaci <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsCallback' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallback" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsCallbackMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallbackMobile" href="tel:' + telCallbackKunde + '">' + telCallbackKundeText + '</a>',
        'contactFormNoteTitel' : 'Lo sapevi:',
        //Öffnungszeiten Telefon
        'openingDaysPrivate' : tagePrivatkundeIT,
        'openingHoursPrivate' : uhrzeitPrivatkunde,
        'openingDaysPrivate2' : tagePrivatkunde2IT,
        'openingDaysPrivate2Mobile' : tagePrivatkunde2MobileIT,
        'openingHoursPrivate2' : uhrzeitPrivatkunde2,
        'openingDaysBusiness' : tageFirmenkundeIT,
        'openingHoursBusiness' : uhrzeitFirmenkunde,
        'openingDaysBusiness2' : tageFirmenkunde2IT,
        'openingDaysBusiness2Mobile' : tageFirmenkunde2MobileIT,
        'openingHoursBusiness2' : uhrzeitFirmenkunde2,
        //Öffnungszeiten Chat
        'openingDaysPrivateChat' : tagePrivatkundeChatIT,
        'openingHoursPrivateChat' : uhrzeitPrivatkundeChat,
        'openingDaysPrivate2Chat' : tagePrivatkunde2ChatIT,
        'openingDaysPrivate2MobileChat' : tagePrivatkunde2ChatMobileIT,
        'openingHoursPrivate2Chat' : uhrzeitPrivatkunde2Chat,
        'openingDaysBusinessChat' : tageFirmenkundeChatIT,
        'openingHoursBusinessChat' : uhrzeitFirmenkundeChat,
        'openingDaysBusiness2Chat' : tageFirmenkunde2ChatIT,
        'openingDaysBusiness2MobileChat' : tageFirmenkunde2ChatMobileIT,
        'openingHoursBusiness2Chat' : uhrzeitFirmenkunde2Chat,
        'phone' : 'Telefono',
        'chat' : 'Chat',
        'email' : 'Modulo di contatto',
        'emailDescription' : "Risposta: 1-2 giorni",
        'emailDescriptionMobile' : "Risposta: 1-2 giorni",
        'contact' : 'Contattaci',
        'questionNotAnswered' : 'Non risolve il tuo problema?',
        'noAnswerFound' : 'Non hai trovato la risposta giusta?',
        'writeUs' : 'Scrivici',
        'recommendedChannel' : 'Canale consigliato',
        'searchBoxText' : '<h2><font color=#00000>Come possiamo aiutarla?</font></h2>',
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
        'commaMultipleHoursPrivateCustomers' : commaMultipleHoursPrivateCustomers,
        'commaMultipleHoursBusinessCustomers' : commaMultipleHoursBusinessCustomers,
        'callbackTime' : 'Reaktionszeit: 3 min'
        },
        'en-US': {
        'privateCustomers' : 'Private customers',
        'businessCustomers' : 'Business customers',
        'chatUs': 'Chat with us',
        'callUsPrivate' : 'Call us <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Call us <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Call us <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Call us <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsCallback' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallback" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsCallbackMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberCallbackMobile" href="tel:' + telCallbackKunde + '">' + telCallbackKundeText + '</a>',
        'contactFormNoteTitel' : 'Did you know:',
        //Öffnungszeiten Telefon
        'openingDaysPrivate' : tagePrivatkundeEN,
        'openingHoursPrivate' : uhrzeitPrivatkunde,
        'openingDaysPrivate2' : tagePrivatkunde2EN,
        'openingDaysPrivate2Mobile' : tagePrivatkunde2MobileEN,
        'openingHoursPrivate2' : uhrzeitPrivatkunde2,
        'openingDaysBusiness' : tageFirmenkundeEN,
        'openingHoursBusiness' : uhrzeitFirmenkunde,
        'openingDaysBusiness2' : tageFirmenkunde2EN,
        'openingDaysBusiness2Mobile' : tageFirmenkunde2MobileEN,
        'openingHoursBusiness2' : uhrzeitFirmenkunde2,
        //Öffnungszeiten Chat
        'openingDaysPrivateChat' : tagePrivatkundeChatEN,
        'openingHoursPrivateChat' : uhrzeitPrivatkundeChat,
        'openingDaysPrivate2Chat' : tagePrivatkunde2ChatEN,
        'openingDaysPrivate2MobileChat' : tagePrivatkunde2ChatMobileEN,
        'openingHoursPrivate2Chat' : uhrzeitPrivatkunde2Chat,
        'openingDaysBusinessChat' : tageFirmenkundeChatEN,
        'openingHoursBusinessChat' : uhrzeitFirmenkundeChat,
        'openingDaysBusiness2Chat' : tageFirmenkunde2ChatEN,
        'openingDaysBusiness2MobileChat' : tageFirmenkunde2ChatMobileEN,
        'openingHoursBusiness2Chat' : uhrzeitFirmenkunde2Chat,
        'phone' : 'Phone',
        'chat' : 'Chat',
        'email' : 'Contact form',
        'emailDescription' : "Response time: 1-2 days",
        'emailDescriptionMobile' : "Response time: 1-2 days",
        'contact' : 'Contact us',
        'questionNotAnswered' : 'Your question is not answered?',
        'noAnswerFound' : 'Can\'t find what you\'re looking for?',
        'writeUs' : 'Write us',
        'recommendedChannel' : 'Recommended channel',
        'searchBoxText' : '<h2><font color=#00000>How can we help you?</font></h2>',
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
        'commaMultipleHoursPrivateCustomers' : commaMultipleHoursPrivateCustomers,
        'commaMultipleHoursBusinessCustomers' : commaMultipleHoursBusinessCustomers,
        'callbackTime' : 'Reaktionszeit: 3 min'
        }
    }

    if (window.location.hostname == 'helpcenter.connect.digitec.ch'){
        dynamicWording['de']['contactFormInfoText'] = 'Per Telefon oder Kontaktformular - wähle nur den passenden Anfragegrund.'
        dynamicWording['fr']['contactFormInfoText'] = 'Par téléphone ou formulaire de contact - choisissez simplement le motif de votre demande.'
        dynamicWording['it']['contactFormInfoText'] = 'Per telefono o modulo di contatto - basta scegliere il motivo appropriato per la sua richiesta.'
        dynamicWording['en-US']['contactFormInfoText'] = 'By phone or contact form - just choose the appropriate reason for your inquiry.'
        dynamicWording['de']['questionNotAnswered'] = 'Wähle deinen Kontaktkanal',
        dynamicWording['fr']['questionNotAnswered'] = 'Choisissez votre canal de contact',
        dynamicWording['it']['questionNotAnswered'] = 'Scegli il tuo canale di contatto',
        dynamicWording['en-US']['questionNotAnswered'] = 'Choose your contact channel'
    }
    
    if (window.location.hostname == 'helpcenter.galaxus.de' || window.location.hostname == 'helpcenter.galaxus.at'){
        dynamicWording['de']['contactFormInfoText'] = 'Per Telefon oder Kontaktformular - wähle nur deine Kundengruppe und den passenden Anfragegrund.'
        dynamicWording['fr']['contactFormInfoText'] = 'Par téléphone ou formulaire de contact - choisissez simplement votre groupe de clients et le motif de la demande.'
        dynamicWording['it']['contactFormInfoText'] = 'Per telefono o modulo di contatto - seleziona il tuo gruppo di clienti e il motivo della tua richiesta.'
        dynamicWording['en-US']['contactFormInfoText'] = 'By phone or contact form - just choose your customer group and the appropriate reason for inquiry.'
        dynamicWording['de']['openingDaysPrivate2'] = '<br>Sa: '
        dynamicWording['fr']['openingDaysPrivate2'] = '<br>:Sa: '
        dynamicWording['it']['openingDaysPrivate2'] = 'Sab: '
        dynamicWording['en-US']['openingDaysPrivate2'] = 'Sa: '
        dynamicWording['de']['openingDaysPrivate2Mobile'] = 'Sa: '
        dynamicWording['fr']['openingDaysPrivate2Mobile'] = 'Sa: '
        dynamicWording['it']['openingDaysPrivate2Mobile'] = 'Sab: '
        dynamicWording['en-US']['openingDaysPrivate2Mobile'] = 'Sa: '
        dynamicWording['de']['openingDaysBusiness2'] = '<br>Sa: '
        dynamicWording['fr']['openingDaysBusiness2'] = '<br>:Sa: '
        dynamicWording['it']['openingDaysBusiness2'] = 'Sab: '
        dynamicWording['en-US']['openingDaysBusiness2'] = 'Sa: '
        dynamicWording['de']['openingDaysBusiness2Mobile'] = 'Sa: '
        dynamicWording['fr']['openingDaysBusiness2Mobile'] = 'Sa: '
        dynamicWording['it']['openingDaysBusiness2Mobile'] = 'Sab: '
        dynamicWording['en-US']['openingDaysBusiness2Mobile'] = 'Sa: '
 
    }
  return dynamicWording;  
}