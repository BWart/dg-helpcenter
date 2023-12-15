// --- TIMEZONE OFFSET --- 
// 2 during summer time, 1 during winter time
var UTCHourOffset = 1;




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
var bannerSwitchDEDE = true;
var bannerSwitchDEFR = true;
var bannerSwitchDEIT = true;
var bannerSwitchDEEN = true;
var bannerSwitchDENL = true;
//Austria
var bannerSwitchATDE = true;
var bannerSwitchATFR = true;
var bannerSwitchATIT = true;
var bannerSwitchATEN = true;
var bannerSwitchATNL = true;
//France
var bannerSwitchFRDE = true;
var bannerSwitchFRFR = true;
var bannerSwitchFRIT = true;
var bannerSwitchFREN = true;
var bannerSwitchFRNL = true;
//Italy
var bannerSwitchITDE = true;
var bannerSwitchITFR = true;
var bannerSwitchITIT = true;
var bannerSwitchITEN = true;
var bannerSwitchITNL = true;
//Belgium
var bannerSwitchBEDE = true;
var bannerSwitchBEFR = true;
var bannerSwitchBEIT = true;
var bannerSwitchBEEN = true;
var bannerSwitchBENL = true;
//Netherlands
var bannerSwitchNLDE = true;
var bannerSwitchNLFR = true;
var bannerSwitchNLIT = true;
var bannerSwitchNLEN = true;
var bannerSwitchNLNL = true;
//Luxembourg
var bannerSwitchLUDE = true;
var bannerSwitchLUFR = true;
var bannerSwitchLUIT = true;
var bannerSwitchLUEN = true;
var bannerSwitchLUNL = true;




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
      'de' : "Verzögerungen bei Lieferungen",
      'fr' : "Retards dans les livraisons",
      'it' : "Ritardi nelle consegne",
      'en-US' : "Delays in deliveries",
      'nl' : "Vertragingen in leveringen"
      /*'de' : "Technische Probleme Call",
      'fr' : "Problèmes techniques Appel",
      'it' : "Problemi tecnici Chiamare",
      'en-US' : "Technical Issues Call",
      'nl' : "Technische problemen Bel"*/
      /*'de' : "Technische Probleme Bestellaufgabe im Webshop",
      'fr' : "Problèmes techniques Passation de commande dans la boutique en ligne",
      'it' : "Problemi tecnici Ordinare nel webshop",
      'en-US' : "Technical problems order placement in webshop",
      'nl' : "Technische problemen Bestellen in de webshop"*/
      /*'de' : "Technische Probleme Chat in Safari",
      'fr' : "Problèmes techniques Chat dans Safari",
      'it' : "Problemi tecnici Chat in Safari",
      'en-US' : "Technical Issues Chat with Safari",
      'nl' : "Technische problemen Chat in Safari"*/
    },
    "outputTextBannerCH" : {
      'de' : "Aufgrund aktuell hoher Paketmengen und erschwerter Wetterbedingungen kann es in einigen Fällen zu Verzögerungen bei der Auslieferung deiner Sendung kommen. Wir bitten dich in diesen Fällen um Geduld.<br>Einen Link zur Sendungsverfolgung findest du jeweils in der <a href='https://galaxus.ch/order' target='blank'>Bestellübersicht</a>.",
      'fr' : "En raison du volume élevé de colis et des conditions météorologiques difficiles, il se peut que la livraison de votre envoi soit retardée dans certains cas. Nous vous demandons de faire preuve de patience dans ces cas-là.<br>Vous trouverez un lien pour suivre votre envoi dans <a href='https://galaxus.ch/order' target='blank'>l'aperçu de votre commande</a>.",
      'it' : "A causa dell'attuale elevato volume di pacchi e delle difficili condizioni meteorologiche, in alcuni casi potrebbero verificarsi ritardi nella consegna del vostro pacco. Vi chiediamo di avere pazienza in questi casi.<br>Troverete un link per seguire il vostro pacco nella <a href='https://galaxus.ch/order' target='blank'>panoramica dell'ordine</a>.",
      'en-US' : "Due to the current high parcel volumes and difficult weather conditions, there may be delays in the delivery of your shipment in some cases. We ask for your patience in these cases.<br>You can  find a link to track your shipment in the <a href='https://galaxus.ch/order' target='blank'>order overview</a>.",
      'nl' : "Door de huidige grote hoeveelheid pakketten en moeilijke weersomstandigheden kan er in sommige gevallen vertraging optreden bij de bezorging van je pakket. We vragen om je geduld in deze gevallen.<br>Je vindt een link om je pakket te volgen in het <a href='https://galaxus.ch/order' target='blank'>besteloverzicht</a>."
  
      /*'de' : "Aktuell können einige Kunden in unserem Webshop keine Bestellungen aufgeben. Das Problem ist uns bekannt und wir arbeiten an einer Lösung. Leider können wir dir über unsere Kontaktkanäle hier aktuell keine Lösung anbieten. Bitte versuche es zu einem späteren Zeitpunkt noch einmal im Webshop. ",
      'fr' : "Actuellement, certains clients ne peuvent pas passer de commandes dans notre boutique en ligne. Nous sommes conscients du problème et nous travaillons à une solution. Malheureusement, nous ne pouvons pas vous proposer de solution par le biais de nos canaux de contact pour le moment. Veuillez réessayer dans la boutique en ligne ultérieurement. ",
      'it' : "Attualmente, alcuni clienti non possono effettuare ordini nel nostro negozio online. Siamo consapevoli del problema e stiamo lavorando a una soluzione. Purtroppo, al momento non possiamo offrire una soluzione attraverso i nostri canali di contatto. Vi invitiamo a riprovare a visitare il negozio online in un secondo momento.",
      'en-US' : "Currently, some customers can not place orders in our webshop. We are aware of the problem and are working on a solution. Unfortunately, we can't offer you a solution through our contact channels here at the moment. Please try again in the webshop at a later time.",
      'nl' : "Op dit moment kunnen sommige klanten geen bestellingen plaatsen in onze webshop. We zijn ons bewust van het probleem en werken aan een oplossing. Helaas kunnen we je op dit moment geen oplossing bieden via onze contactkanalen hier. Probeer het later nog eens in de webshop."
      */
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
      ['2023-08-01 00:00:00', '2023-08-01 22:00:00', 0]
    ],
    'de' : [
      ['2023-09-18 00:00:00', '2023-10-03 22:00:00', 1]
    ],
    'at' : [
      ['2023-09-18 00:00:00', '2023-10-03 22:00:00', 2]
    ],
    'fr' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 3]
    ],
    'it' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 4],
    ],
    'be' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 5],
    ],
    'nl' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 6],
    ],
    'lu' : [
      ['2022-10-02 15:00:00', '2022-10-03 22:00:00', 7],
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    // Switzerland
    0 : {
      'de' : '<br>01.08.2023: Feiertag, geschlossen',
      'fr' : "<br>01.08.2023 : Jour férié, fermé",
      'it' : '<br>01.08.2023: Giorno festivo, chiuso',
      'en-US' : '<br>01.08.2023: Holiday, closed',
      'nl': ''
    },
    //Germany
    1 : {
      'de' : '<br>03.10.2023: Tag der Deutschen Einheit, geschlossen',
      'fr' : "<br>03.10.2023 : Jour de l'Unité allemande , fermé",
      'it' : "<br>03.10.2023: Giorno dell'unità tedesca, chiuso",
      'en-US' : '<br>03.10.2023: German Unity Day, closed',
      'nl': ''
    },
    //Austria
    2 : {
      'de' : '<br>03.10.2023: Tag der Deutschen Einheit, geschlossen',
      'fr' : "<br>03.10.2023 : Jour de l'Unité allemande , fermé",
      'it' : "<br>03.10.2023: Giorno dell'unità tedesca, chiuso",
      'en-US' : '<br>03.10.2023: German Unity Day, closed',
      'nl': ''
    },
    //France
    3 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Italy
    4 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Belgium
    5 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Netherlands
    6 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    },
    //Luxembourg
    7 : {
      'de' : '<br>27.06.2022: Ab 16:00 geschlossen',
      'fr' : '<br>27.06.2022 16:00: fermé',
      'it' : '<br>27.06.2022 16:00: chiuso',
      'en-US' : '<br>27.06.2022: Closed from 16:00',
      'nl': ''
    }
}




//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
      ['2023-05-01 00:00:00', '2023-05-01 22:00:00']
    ],
    'de' : [
      ['2023-10-03 00:00:00', '2023-10-03 22:00:00']
    ],
    'at' : [
      ['2023-10-03 00:00:00', '2023-10-03 22:00:00']
    ],
    'fr' : [
      ['2022-04-06 15:00:00', '2022-04-10 22:00:00']
    ],
    'it' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'be' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'nl' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ],
    'lu' : [
      ['2023-04-06 15:00:00', '2023-04-10 22:00:00']
    ]
}




//Hiding waiting times in case of stuck calls/chats
//format aus waiting nehmen https://py-waittimes-web.prod.pub.devinite.com/waitTimes.js
let waitTimesToHideCall = ["callbackDE"]
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
