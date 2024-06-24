// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 2;





// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---
//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactFormDuringOpeningTimes = false;
var switchHideContactFormOutsideOpeningTimes = false;
var switchHideContactFormForPEDuringOpeningTimes = true;
var switchHideContactFormForPEOutsideOpeningTimes = true;
var switchHideContactFormForBusinessDuringOpeningTimes = false;
var switchHideContactFormForBusinessOutsideOpeningTimes = false;
var switchHideContactFormForEUDuringOpeningTimes = false;
var switchHideContactFormForEUOutsideOpeningTimes = false;
var switchHideContactFormForFRDuringOpeningTimes = false;
var switchHideContactFormForFROutsideOpeningTimes = false;
var switchHideContactFormForITDuringOpeningTimes = false;
var switchHideContactFormForITOutsideOpeningTimes = false;
var switchHideContactFormForBEDuringOpeningTimes = false;
var switchHideContactFormForBEOutsideOpeningTimes = false;
var switchHideContactFormForNLDuringOpeningTimes = false;
var switchHideContactFormForNLOutsideOpeningTimes = false;
var switchHideContactFormForLUDuringOpeningTimes = false;
var switchHideContactFormForLUOutsideOpeningTimes = false;
//set to true if the phone number should be hidden, set to false if it should be displayed
var switchHidePhoneDuringOpeningTimes = false;
var switchHidePhoneOutsideOpeningTimes = false;
var switchHidePhoneForPEDuringOpeningTimes = true;   //THIS IS CURRENTLY VALID ON ALL HELPCENTERS IN CH + EU
var switchHidePhoneForPEOutsideOpeningTimes = true;  //THIS IS CURRENTLY VALID ON ALL HELPCENTERS IN CH + EU
var switchHidePhoneForBusinessDuringOpeningTimes = false;
var switchHidePhoneForBusinessOutsideOpeningTimes = false;
var switchHidePhoneForEUDuringOpeningTimes = false;
var switchHidePhoneForEUOutsideOpeningTimes = false;
var switchHidePhoneForFRDuringOpeningTimes = true;
var switchHidePhoneForFROutsideOpeningTimes = true;
var switchHidePhoneForITDuringOpeningTimes = true;
var switchHidePhoneForITOutsideOpeningTimes = true;
var switchHidePhoneForBEDuringOpeningTimes = true;
var switchHidePhoneForBEOutsideOpeningTimes = true;
var switchHidePhoneForNLDuringOpeningTimes = true;
var switchHidePhoneForNLOutsideOpeningTimes = true;
var switchHidePhoneForLUDuringOpeningTimes = true;
var switchHidePhoneForLUOutsideOpeningTimes = true;
//set to true if the Chat should be hidden, set to false if it should be displayed
var switchHideChatDuringOpeningTimes = false;
var switchHideChatOutsideOpeningTimes = false;
var switchHideChatForPEDuringOpeningTimes = false;
var switchHideChatForPEOutsideOpeningTimes = false;
var switchHideChatForBusinessDuringOpeningTimes = false;
var switchHideChatForBusinessOutsideOpeningTimes = false;
var switchHideChatForEUDuringOpeningTimes = false;
var switchHideChatForEUOutsideOpeningTimes = false;
var switchHideChatForFRDuringOpeningTimes = false;
var switchHideChatForFROutsideOpeningTimes = false;
var switchHideChatForITDuringOpeningTimes = true;
var switchHideChatForITOutsideOpeningTimes = true;
var switchHideChatForBEDuringOpeningTimes = true;
var switchHideChatForBEOutsideOpeningTimes = true;
var switchHideChatForNLDuringOpeningTimes = true;
var switchHideChatForNLOutsideOpeningTimes = true;
var switchHideChatForLUDuringOpeningTimes = true;
var switchHideChatForLUOutsideOpeningTimes = true;
//If contact form is hidden, set threshhold to show it again when the waiting time for live contact channels get too high; set to 50000 if contact form should never be shown
var phoneWaitThreshholdToShowContactForm = 50000;
var phoneWaitThreshholdToShowContactFormPE = 50000;
var phoneWaitThreshholdToShowContactFormBusiness = 50000;
var phoneWaitThreshholdToShowContactFormEU = 50000;
var phoneWaitThreshholdToShowContactFormFR = 50000;
var phoneWaitThreshholdToShowContactFormIT = 50000;
var phoneWaitThreshholdToShowContactFormBE = 50000;
var phoneWaitThreshholdToShowContactFormBE = 50000;
var phoneWaitThreshholdToShowContactFormNL = 50000;
var chatWaitThreshholdToShowContactForm = 60;
var chatWaitThreshholdToShowContactFormPE = 50000;
var chatWaitThreshholdToShowContactFormBusiness = 50000;
var chatWaitThreshholdToShowContactFormEU = 50000;
var chatWaitThreshholdToShowContactFormFR = 50000;
var chatWaitThreshholdToShowContactFormIT = 50000;
var chatWaitThreshholdToShowContactFormBE = 50000;
var chatWaitThreshholdToShowContactFormNL = 50000;
var chatWaitThreshholdToShowContactFormLU = 50000;
var chatAndPhoneWaitThreshholdToShowContactForm = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormPE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBusiness = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormEU = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormFR = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormIT = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormBE = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormNL = 50000;
var chatAndPhoneWaitThreshholdToShowContactFormLU = 50000;






// --- VARIABLES TO TOGGLE THE INFORMATION TOP BANNER ---
//Switch per Portal and Language combination, whethe the top banner should be shown. Set to false to have it hidden, true if it should be shown.
//CH
var bannerSwitchCHDE = false;
var bannerSwitchCHFR = false;
var bannerSwitchCHIT = false;
var bannerSwitchCHEN = false;
var bannerSwitchCHNL = false;
var bannerSwitchConnectDE = false;
var bannerSwitchConnectFR = false;
var bannerSwitchConnectIT = false;
var bannerSwitchConnectEN = false;
var bannerSwitchConnectNL = false;
//Germany
var bannerSwitchDEDE = false;
var bannerSwitchDEFR = false;
var bannerSwitchDEIT = false;
var bannerSwitchDEEN = false;
var bannerSwitchDENL = false;
//Austria
var bannerSwitchATDE = false;
var bannerSwitchATFR = false;
var bannerSwitchATIT = false;
var bannerSwitchATEN = false;
var bannerSwitchATNL = false;
//France
var bannerSwitchFRDE = false;
var bannerSwitchFRFR = false;
var bannerSwitchFRIT = false;
var bannerSwitchFREN = false;
var bannerSwitchFRNL = false;
//Italy
var bannerSwitchITDE = false;
var bannerSwitchITFR = false;
var bannerSwitchITIT = false;
var bannerSwitchITEN = false;
var bannerSwitchITNL = false;
//Belgium
var bannerSwitchBEDE = false;
var bannerSwitchBEFR = false;
var bannerSwitchBEIT = false;
var bannerSwitchBEEN = false;
var bannerSwitchBENL = false;
//Netherlands
var bannerSwitchNLDE = false;
var bannerSwitchNLFR = false;
var bannerSwitchNLIT = false;
var bannerSwitchNLEN = false;
var bannerSwitchNLNL = false;
//Luxembourg
var bannerSwitchLUDE = false;
var bannerSwitchLUFR = false;
var bannerSwitchLUIT = false;
var bannerSwitchLUEN = false;
var bannerSwitchLUNL = false;





/*Safari nicht mehr benötigt unten





let userAgentString = navigator.userAgent;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv") > -1;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
if ((chromeAgent) && (safariAgent)) {safariAgent = false};
safariAgent = false;





if (window.location.href.includes('requests') && safariAgent){
  //CH
bannerSwitchCHDE = true;
bannerSwitchCHFR = true;
bannerSwitchCHIT = true;
bannerSwitchCHEN = true;
bannerSwitchCHNL = true;
//Germany
bannerSwitchDEDE = true;
bannerSwitchDEFR = true;
bannerSwitchDEIT = true;
bannerSwitchDEEN = true;
bannerSwitchDENL = true;
//Austria
bannerSwitchATDE = true;
bannerSwitchATFR = true;
bannerSwitchATIT = true;
bannerSwitchATEN = true;
bannerSwitchATNL = true;
}
*/
// --- TEXT TO BE DISPLAYED IN THE TOP BANNER ---
function fillTopBannerWording(){
    topBannerWording = {
      //heading setzt den Titel 
    "outputHeadingBannerCH" : {
      /*
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
      /*
      /*'de' : "Technische Probleme Call",
      'fr' : "Problèmes techniques Appel",
      'it' : "Problemi tecnici Chiamare",
      'en-US' : "Technical Issues Call",
      'nl' : "Technische problemen Bel"*/
      'de' : "Technische Probleme Bestellaufgabe im Webshop",
      'fr' : "Problèmes techniques Passation de commande dans la boutique en ligne",
      'it' : "Problemi tecnici Ordinare nel webshop",
      'en-US' : "Technical problems order placement in webshop",
      'nl' : "Technische problemen Bestellen in de webshop"
      /*'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"*/
    },
    "outputTextBannerCH" : {
      /*
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.ch/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.ch/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.ch/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.ch/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.ch/order' target='blank'>besteloverzicht</a>."
  */
      'de' : "Aktuell können einige Kunden in unserem Webshop keine Bestellungen aufgeben. Das Problem ist uns bekannt und wir arbeiten an einer Lösung. Leider können wir dir über unsere Kontaktkanäle hier aktuell keine Lösung anbieten. Bitte versuche es zu einem späteren Zeitpunkt noch einmal im Webshop. ",
      'fr' : "Actuellement, certains clients ne peuvent pas passer de commandes dans notre boutique en ligne. Nous sommes conscients du problème et nous travaillons à une solution. Malheureusement, nous ne pouvons pas vous proposer de solution par le biais de nos canaux de contact pour le moment. Veuillez réessayer dans la boutique en ligne ultérieurement. ",
      'it' : "Attualmente, alcuni clienti non possono effettuare ordini nel nostro negozio online. Siamo consapevoli del problema e stiamo lavorando a una soluzione. Purtroppo, al momento non possiamo offrire una soluzione attraverso i nostri canali di contatto. Vi invitiamo a riprovare a visitare il negozio online in un secondo momento.",
      'en-US' : "Currently, some customers can not place orders in our webshop. We are aware of the problem and are working on a solution. Unfortunately, we can't offer you a solution through our contact channels here at the moment. Please try again in the webshop at a later time.",
      'nl' : "Op dit moment kunnen sommige klanten geen bestellingen plaatsen in onze webshop. We zijn ons bewust van het probleem en werken aan een oplossing. Helaas kunnen we je op dit moment geen oplossing bieden via onze contactkanalen hier. Probeer het later nog eens in de webshop."
      
     /*'de' : "Aktuell funktioniert unser Chat im Safari-Browser leider nicht korrekt. Du kannst mit einem anderen Browser wie Chrome oder Firefox unseren Chat verwenden. Wir arbeiten an einer Lösung.",
      'fr' : "Malheureusement, notre chat ne fonctionne pas correctement dans le navigateur Safari. Vous pouvez utiliser un autre navigateur comme Chrome ou Firefox pour utiliser notre chat. Nous travaillons à une solution.",
      'it' : "Purtroppo la nostra chat non funziona correttamente con il browser Safari. È possibile utilizzare la chat con un altro browser come Chrome o Firefox. Stiamo lavorando a una soluzione.",
      'en-US' : "Unfortunately, our chat is currently not working correctly in the Safari browser. You can use another browser like Chrome or Firefox to use our chat. We are working on a solution.",
      'nl' : "Helaas werkt onze chat momenteel niet goed in de browser Safari. Je kunt onze chat gebruiken met een andere browser zoals Chrome of Firefox. We werken aan een oplossing."
      */
    },
    "outputHeadingBannerDE" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerDE" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.de/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.de/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.de/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.de/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.de/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerAT" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerAT" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.at/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.at/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.at/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.at/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.at/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerFR" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerFR" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.fr/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.fr/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.fr/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.fr/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.fr/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerIT" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerIT" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.it/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.it/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.it/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.it/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.it/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerBE" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerBE" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.be/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.be/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.be/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.be/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.be/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerNL" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerNL" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.nl/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.nl/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.nl/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.nl/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.nl/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerLU" : {
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
    },
    "outputTextBannerLU" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.lu/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.lu/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.lu/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.lu/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.lu/order' target='blank'>besteloverzicht</a>."
    },
    "outputHeadingBannerChat" : {
      'de' : "Vielen Dank für deine Chat-Anfrage",
      'fr' : "Merci pour votre demande de chat",
      'it' : "Grazie per la sua richiesta di chat",
      'en-US' : "Thank you for your chat request",
      'nl' : "Bedankt voor uw chataanvraag"
    },
    "outputTextBannerChat" : {
      'de' : "Das Chat-Fenster öffnet sich gleich unten rechts.",
      'fr' : "La fenêtre de chat s'ouvre en bas à droite.",
      'it' : "La finestra di chat si aprirà in basso a destra.",
      'en-US' : "The chat window will open at the bottom right.",
      'nl' : "Het chatvenster wordt rechtsonder geopend."
    },
    "outputTextBannerChatSafari" : {
      'de' : "Das Chat-Fenster öffnet sich gleich unten rechts.<br><br><strong>Technische Probleme Safari:</strong><br>Falls das Chat-Fenster in deinem Safari-Browser sich nicht öffnet, versuche es mit einem anderen Browser über unseren Shop.",
      'fr' : "La fenêtre de chat s'ouvre en bas à droite.<br><br><strong>Problèmes techniques Safari :</strong><br>Si la fenêtre de chat ne s'ouvre pas dans votre navigateur Safari, essayez un autre navigateur via notre boutique.",
      'it' : "La finestra di chat si aprirà in basso a destra.<br><br><strong>Problemi tecnici Safari:</strong><br>Se la finestra di chat non si apre nel browser Safari, provare un altro browser tramite il nostro negozio.",
      'en-US' : "The chat window will open at the bottom right.<br><br><strong>Technical problems Safari:</strong><br>If the chat window does not open in your Safari browser, try another browser via our store.",
      'nl' : "Het chatvenster wordt rechtsonder geopend.<br><br><strong>Technische problemen Safari:</strong><br>Als het chatvenster niet opent in je Safari browser, probeer dan een andere browser via onze shop."
    }
    }
  return topBannerWording;
}






// --- ENTER HOLIDAYS HERE TO BE DISPLAYED IN THE HELPCENTER AND FOR THE WAITING TIMES TO BE REMOVED ---
//WHEN TO SHOW THE HOLIDAY INFORMATION TEXT (USUALLY STARTS SOME DAYS BEFORE THE ACTUAL HOLIDAY)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date to show the text', 'end date to stop showing the text', ID of the text to Display]
var showHolidays = {
    'ch' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 0], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 1], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 2], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 3], ['2024-07-18 23:00:00', '2024-08-01 23:00:00', 4]
    ],
    'de' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 10], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 11], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 12], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 13]
    ],
    'at' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 20], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 21], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 22], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 23]
    ],
    'fr' : [
      ['2024-06-24 13:00:00', '2024-06-25 23:00:00', 30]
    ],
    'it' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 40], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 41], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 42], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 43]
    ],
    'be' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 50], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 51], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 52], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 53]
    ],
    'nl' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 60], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 61], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 62], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 63]
    ],
    'lu' : [
      ['2024-04-17 01:00:00', '2024-04-23 23:00:00', 70], ['2024-04-23 23:00:00', '2024-05-01 23:00:00', 71], ['2024-05-01 23:00:00', '2024-05-09 23:00:00', 72], ['2024-05-09 23:00:00', '2024-05-20 23:00:00', 73]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    // Switzerland
    0 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    1 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>08.05.2024: Ab 17 Uhr geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>08.05.2024 : fermé à partir de 17 heures<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>08.05.2024: Chiuso dalle 17:00<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>08.05.2024: Closed from 17:00<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>08.05.2024: Gesloten vanaf 17:00<br>09.05.2024: Hemelvaart, gesloten'
    },
    2 : {
      'de' : '<br>08.05.2024: Ab 16 Uhr geschlossen<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>08.05.2024 : fermé à partir de 16 heures<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>08.05.2024: Chiuso dalle 16:00<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>08.05.2024: Closed from 16:00<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>08.05.2024: Gesloten vanaf 16:00<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    3 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    4 : {
      'de' : '<br>01.08.2024: 1. August, geschlossen',
      'fr' : '<br>01.08.2024 : 1er août, fermé',
      'it' : '<br>01.08.2024: 1 agosto, chiuso',
      'en-US' : '<br>01.08.2024: August 1, closed',
      'nl': '<br>01.08.2024: 1 augustus, gesloten'
    },
    //Germany
    10 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    11 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    12 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    13 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    //Austria
    20 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    21 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    22 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    23 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    //France
    30 : {
      'de' : '<br>24.06.2024 - 25.06.2024: Wartungsarbeiten an unserem Chat',
      'fr' : '<br>24.06.2024 - 25.06.2024: Travaux de maintenance sur notre chat',
      'it' : '<br>24.06.2024 - 25.06.2024: Interventi di manutenzione sulla nostra chat',
      'en-US' : '<br>24.06.2024 - 25.06.2024: Maintenance work on our chat',
      'nl': '<br>24.06.2024 - 25.06.2024: Onderhoudswerk aan onze chat',
    },
    //Italy
    40 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    41 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    42 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    43 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    //Belgium
    50 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    51 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    52 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    53 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    //Netherlands
    60 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    61 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    62 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    63 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    //Luxembourg
    70 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten'
    },
    71 : {
      'de' : '<br>01.05.2024: Tag der Arbeit, geschlossen<br>09.05.2024: Auffahrt, geschlossen',
      'fr' : '<br>01.05.2024 : Fête du travail, fermé<br>09.05.2024 : Ascension, fermé',
      'it' : '<br>01.05.2024: Festa del lavoro, chiuso<br>09.05.2024: Ascensione, chiuso',
      'en-US' : '<br>01.05.2024: Labor Day, closed<br>09.05.2024: Ascension, closed',
      'nl': '<br>01.05.2024: Dag van de Arbeid, gesloten<br>09.05.2024: Hemelvaart, gesloten'
    },
    72 : {
      'de' : '<br>09.05.2024: Auffahrt, geschlossen<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>09.05.2024 : Ascension, fermé<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>09.05.2024: Ascensione, chiuso<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>09.05.2024: Ascension, closed<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>09.05.2024: Hemelvaart, gesloten<br>20.05.2024: Pinkstermaandag, gesloten'
    },
    73 : {
      'de' : '<br>20.05.2024: Pfingstmontag, geschlossen',
      'fr' : '<br>20.05.2024 : Lundi de Pentecôte, fermé',
      'it' : '<br>20.05.2024: Lunedì di Pentecoste, chiuso',
      'en-US' : '<br>20.05.2024: Whit Monday, closed',
      'nl': '<br>20.05.2024: Pinkstermaandag, gesloten'
    }
}





//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 15:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00'], ['2024-08-01 14:00:00', '2024-08-01 23:00:00']
    ],
    'de' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ],
    'at' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ],
    'fr' : [
      ['2024-06-24 13:00:00', '2024-06-25 23:00:00']
    ],
    'it' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ],
    'be' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ],
    'nl' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ],
    'lu' : [
      ['2024-05-01 01:00:00', '2024-05-01 23:00:00'], ['2024-05-08 23:00:00', '2024-05-09 23:00:00'], ['2024-05-20 01:00:00', '2024-05-20 23:00:00']
    ]
}





//Hiding waiting times in case of stuck calls/chats
//format aus waiting nehmen https://py-waittimes-web.prod.pub.devinite.com/waitTimes.js
let waitTimesToHideCall = []
let waitTimesToHideChat = []





//OPENING HOURS
const openingHours = {
  //Standard overall opening times
  "helpcenter.digitec.ch": {"weekday": [[8, 0, 19, 0]], "saturday": []},
  "helpcenter.galaxus.ch": {"weekday": [[8, 0, 19, 0]], "saturday": []},
  "helpcenter.galaxus.de": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.at": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.fr": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.it": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.be": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.nl": {"weekday": [[8, 0, 19, 0]], "saturday": [[9, 0, 17, 0]]},
  "helpcenter.galaxus.lu": {"weekday": [], "saturday": []},
  //special cases for CH Routing
  "helpcenter.connect.digitec.ch": {"weekday": [[8, 0, 17, 0]], "saturday": []},
  "chBusiness": {"weekday": [[8, 0, 17, 0]], "saturday": []},
  "chPE": {"weekday": [[8, 0, 18, 0]], "saturday": []}
}





//Connect
var connectOpeningHourWeekday = 8;
var connectClosingHourWeekday = 17;
var connectOpeningHourSaturday = false;
var connectClosingHourSaturday = false;






////////////////////////////////////////////////////////////////////////////////////////Chat Fallback///////////////////////////////////////////////////////////////////////////////////////
//Defines if the Language is used as Fallback 
var chatEnIsFallback = false;
var chatDeIsFallback = false;
var chatItIsFallback = false;
var chatFrIsFallback = false;





//Defines if the Language has a Fallback
var chatEnHasFallback = false;
var chatDeHasFallback = false;
var chatItHasFallback = false;
var chatFrHasFallback = false;





//Amount of Seconds for Fallback to trigger
var secondsToChatFallback = 300;
//Percentage of Waiting Time difference between the two languages
var percentageForChatFallback = 400;
