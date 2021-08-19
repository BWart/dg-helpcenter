function fillInfoBoxWording(){
  
    var shopURL = "";
    var helpcenterURL = "";
    
    var hp1 = "";
    var hp2 = "";
    var hp3 = "";
    var hp4 = "";
    var offerte = "";

    var rck = "";
    var seite = "";

    //Hostname korrekt in der JSON in den Links hinterlegen
    // Helpcenter Links richtig hinterlegen (Helpcenter-spezifische-Nummern); var "hp"
    // Textänderung bei Rückgabe - Ich möchte ein Produkt zurückgeben - weil bei Galaxus.de der Beitrag nicht existiert; var "rck"
    // Beitrag Seitennamen werden dynamisch angepasst, var "seite"
    switch (portal){
            case 'helpcenter.digitec.ch':
                  shopURL = "https://www.digitec.ch/"; 

                  helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                  seite = "digitec";
                   
                  hp1 = "/115005646225";
                  hp2 = "/360012370979";
                  hp3 = "/360000457949";
                  hp4 = "/360010272859";

                  offerte = "CHF 5'000.-";
                  rck = "Du kannst direkt von " + seite + " gekaufte Produkte innerhalb von 30 Tagen, oder von einem <a href='" + helpcenterURL + "articles" + hp2 + "-Angebote-von-Drittanbietern' target='blank'>Drittanbieter</a> gekaufte Produkte während 14 Tagen nach dem Erhalt zurückgeben. Du kannst in deinem Kundenkonto direkt deine <a href='" + shopURL + "after-sales' target='blank'>Rückgabe erfassen</a>.";
                  break;
            case 'helpcenter.galaxus.ch':
                  shopURL = "https://www.galaxus.ch/";
                  
                  helpcenterURL = "https://helpcenter.galaxus.ch/hc/";
                  seite = "Galaxus";
                    
                  hp1 = "/360007334359";
                  hp2 = "/360012372239";
                  hp3 = "/360007333839";
                  hp4 = "/360010180420";

                  offerte = "CHF 5'000.-";
                  rck = "Du kannst direkt von " + seite + " gekaufte Produkte innerhalb von 30 Tagen, oder von einem <a href='" + helpcenterURL + "articles" + hp2 + "-Angebote-von-Drittanbietern' target='blank'>Drittanbieter</a> gekaufte Produkte während 14 Tagen nach dem Erhalt zurückgeben. Du kannst in deinem Kundenkonto direkt deine <a href='" + shopURL + "after-sales' target='blank'>Rückgabe erfassen</a>.";
                  break;
            case 'helpcenter.galaxus.de':
                  shopURL = "https://www.galaxus.de/";

                  helpcenterURL = "https://helpcenter.galaxus.de/hc/";
                  seite = "Galaxus";
                    
                  hp1 = "/360008216899";
                  hp2 = "";
                  hp3 = "/360016850820";
                  hp4 = "/360010273099"

                  offerte = "EUR 2'000.-";
                  rck = "Du kannst von " + seite + " gekaufte Produkte innerhalb von 30 Tagen nach dem Erhalt zurückgeben. Du kannst in deinem Kundenkonto direkt deine <a href='" + shopURL + "after-sales' target='blank'>Rückgabe erfassen</a>.";
                  break;
            default:
                  shopURL = "https://www.digitec.ch/";

                  helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                  seite = "digitec";
                  
                  hp1 = "/115005646225";
                  hp2 = "/360012370979";
                  hp3 = "/360000457949";
                  hp4 = "/360010272859";

                  offerte = "CHF 5'000.-";
                  rck = "Du kannst direkt von " + seite + " gekaufte Produkte innerhalb von 30 Tagen, oder von einem <a href='" + helpcenterURL + "articles" + hp2 + "-Angebote-von-Drittanbietern' target='blank'>Drittanbieter</a> gekaufte Produkte während 14 Tagen nach dem Erhalt zurückgeben. Du kannst in deinem Kundenkonto direkt deine <a href='" + shopURL + "after-sales' target='blank'>Rückgabe erfassen</a>.";
                  break;
    }

    infoBoxWording = {
      //ALLE ANDERWEITIGEN ANFRAGEN
      "webform_case_other_request_order" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
            'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
      },
      "webform_case_other_request_returns" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
            'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
      },
      "webform_case_other_request_payment" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
            'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
      },
      "webform_case_other_request_account" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
            'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
      },

      //LEVEL 0: Wo ist meine Bestellung?
      "webform_case_shipping_status" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas länger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits. Vous y trouverez également le numéro de suivi de votre colis.<br><br>Malheureusement, un colis peut parfois rester plus longtemps en cours d'acheminement ou atterrir chez le voisin. Si le colis n'arrive pas, même après quelques jours, nous serons heureux d'ouvrir une enquête.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.<br><br>Purtroppo, a volte la consegna del pacco può avere ritardi oppure essere recapitato a un indirizzo errato. Se il pacco non dovesse arrivare dopo qualche giorno, avvieremo una ricerca.",
            'en-US' : "We'll keep the delivery status updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. You’ll also find the tracking number of your parcel there.<br><br>Sometimes it takes a little longer for a parcel to arrive – or it may end up at your neighbour's. If it still hasn’t arrived after a few days, we’re happy to initiate an investigation.",
            'deMailTemplate' : "Welche Artikel fehlen: \nSendungsnummer: ",
            'frMailTemplate' : "Quels sont les articles manquants : \nNuméro de suivi : ",
            'itMailTemplate' : "Quali articoli mancano: \nNumero di spedizione: ",
            'en-USMailTemplate' : "Which articles are missing: \nConsignment number: "
      },
      "webform_case_ready_for_shipment" : {
            'de' : "Erst wenn alle Produkte deiner Bestellung versandbereit sind, wird die Bestellung versendet. Soll es schneller gehen kannst du eine <a href='" + helpcenterURL + "articles" + hp1 + "-Wie-löse-ich-eine-Teillieferung-aus-' target='blank'>kostenlose Teillieferung aktivieren</a>.",
            'fr' : "La commande ne sera expédiée que lorsque tous les produits de votre commande seront prêts à être envoyés. Pour accélérer ce processus, vous pouvez activer la <a href='" + helpcenterURL + "articles" + hp1 + "-Comment-activer-une-livraison-partielle-' target='blank'>livraison partielle</a>.",
            'it' : "Solo quando tutti i prodotti del tuo ordine saranno pronti per essere spediti, l'ordine verrà inviato. Se vuoi che sia più veloce, puoi attivare gratuitamente la <a href='" + helpcenterURL + "articles" + hp1 + "-Come-faccio-a-richiedere-una-consegna-parziale-' target='blank'>consegna parziale</a>.",
            'en-US' : "We don't ship the order until all your products are in the warehouse and «ready for shipment». If you need any items sooner, please <a href='" + helpcenterURL + "articles" + hp1 + "-How-do-I-arrange-partial-delivery-' target='blank'>activate partial delivery</a>."
      },
      "webform_case_order_status" : {
            'de' : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.",
            'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits. Vous y trouverez également le numéro de suivi de votre colis.",
            'it' : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.",
            'en-US' : "We'll keep the delivery status updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. You’ll also find the tracking number of your parcel there."
      },

      //LEVEL 0: Probleme mit einer Bestellung
      "webform_case_damaged_product" : {
            'de' : "Für eine rasche Bearbeitung benötigen wir folgende Informationen von dir: <br><br>• Auftragsnummer deiner Bestellung<br>• Beschreibung des Schadens<br>• Fotos des Schadens und der Verpackung<br><br>Wir werden deine Anfrage zusammen mit unseren Logistikpartnern prüfen und dich so rasch als möglich über die weiteren Schritte informieren.",
            'fr' : "Pour un traitement rapide, nous avons besoin des informations suivantes de votre part : <br><br>• numéro de votre commande<br>• description du dommage<br>• photos du dommage et de l'emballage<br><br>Nous examinerons votre demande avec nos partenaires logistiques et vous informerons dès que possible des étapes suivantes.",
            'it' : "Per una rapida elaborazione abbiamo bisogno delle seguenti informazioni:<br><br>• Numero d’ordine<br>• Breve descrizione del danno<br>• Foto dell’articolo e dell’imballaggio danneggiati<br><br>Esamineremo la tua richiesta insieme ai nostri partner logistici e ti informeremo al più presto su come procedere.",
            'en-US' : "For quick processing, please send us the following details:<br><br>• Order number<br>• Description of the damage<br>• Photos of the damage and packaging<br><br>We'll then work together with the delivery company to check what happened to your order and will get back to you as quickly as possible with updates and next steps."
      },
      "webform_case_not_working_product" : {
            'de' : "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/559' target='blank'>Garantierichtlinien</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>.",
            'fr' : "Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.<br><br>Les dommages causés par une utilisation inappropriée ne sont pas couverts par la garantie. Vous trouverez un complément d'information concernant ce point dans nos <a href='" + shopURL + "wiki/559' target='blank'>conditions de garantie</a> et <a href='" + shopURL + "Wiki/478' target='blank'>CGV</a>.",
            'it' : "Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.<br><br>I danni dovuti ad un uso improprio non sono coperti dalla garanzia. Puoi trovare ulteriori informazioni nelle nostre <a href='" + shopURL + "wiki/559' target='blank'>condizioni di garanzia</a> e nelle <a href='" + shopURL + "Wiki/478' target='blank'>CGC</a>.",
            'en-US' : "Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>.<br><br>Damage caused by incorrect use is not covered by the warranty. For more information, see our <a href='" + shopURL + "wiki/559' target='blank'>warranty policy</a> and our <a href='" + shopURL + "Wiki/478' target='blank'>terms and conditions</a>."
      },
      "webform_case_wrong_product" : {
            'de' : "Damit wir dein Anliegen rasch prüfen können, wäre es hilfreich, wenn du uns die Herstellernummer oder den EAN-Code des falsch erhaltenen Produkt mitteilen könntest. Die Angaben dazu findest du auf der Produktverpackung.",
            'fr' : "Afin de pouvoir vérifier rapidement votre demande, il serait utile que vous nous communiquiez le numéro du fabricant ou le code EAN du produit reçu par erreur. Vous trouverez ces informations sur l'emballage du produit.",
            'it' : "Per poter verificare rapidamente la vostra richiesta, sarebbe utile che ci forniste il numero del produttore o il codice EAN del prodotto ricevuto in modo errato. Queste informazioni sono riportate sulla confezione del prodotto.",
            'en-US' : "To be able to check your request quickly, it would be helpful if you could provide us with the manufacturer's number or the EAN code of the incorrectly received product. You can find this information on the product packaging.",
            'deMailTemplate' : "Bitte beachte, dass wir nachfolgende Angaben zwingend benötigen.\nIch habe fälschlicherweise das folgende Produkt erhalten: \nMenge: \nEAN-Code (Strichcode auf der Verpackung): \nIch vermisse folgendes Produkt: ",
            'frMailTemplate' : "Veuillez noter que les informations suivantes sont obligatoires.\nJ'ai reçu le produit suivant par erreur : \nQuantité : \nCode EAN (code barre sur l'emballage) : \nIl me manque le produit suivant : ",
            'itMailTemplate' : "Si prega di notare che le seguenti informazioni sono obbligatorie.\nHo ricevuto il seguente prodotto per errore: \nQuantità: \nCodice EAN (codice a barre sulla confezione): \nMi manca il seguente prodotto: ",
            "en-USMailTemplate" : "Please note that the following information is mandatory.\nI have received the following product by mistake: \nQuantity: \nEAN code (bar code on the packaging): \nI am missing the following product: "
      },
      "webform_case_missing_product" : {
            'de' : "Nicht alle Produkte kommen direkt ab unserem eigenen Lager. Produkte von unseren Partnern werden dir somit direkt und in einem separaten Paket zugestellt. in deinem Kundenkonto kannst du unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> überprüfen, ob dein Paket bereits versendet wurde oder noch vorbereitet wird.",
            'fr' : "Tous les produits ne proviennent pas directement de notre entrepôt. Les produits de nos partenaires vous sont donc livrés directement et dans un colis séparé. Dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>, vous pouvez vérifier si votre colis a déjà été envoyé ou est encore en cours de préparation.",
            'it' : "Non tutti i prodotti provengono direttamente dal nostro magazzino. I prodotti dei nostri partner ti vengono consegnati direttamente in un pacchetto separato. Nel menu <a href='" + shopURL + "Order' target='blank'>ordini</a> puoi anche vedere se il tuo pacco è già stato spedito o se è ancora in fase di preparazione.",
            'en-US' : "Not all products are sent from our warehouse. When an item comes from one of our partner suppliers, it'll be sent to you directly in a separate parcel. Go to <a href='" + shopURL + "Order' target='blank'>orders</a> in your customer account to find your order status to check if it has been shipped or if it's not been processed yet."
      },
      "webform_case_cancel_order" : {
            'de' : "Solange deine Lieferung noch nicht für den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> das unerwünschte Produkt selbstständig stornieren. Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + shopURL + "Return' target='blank'>Rückgabe erfassen</a>.",
            'fr' : "Tant que votre commande n'a pas été préparée pour l'expédition, vous pouvez annuler le produit non désiré de manière indépendante en allant dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>. Si le produit a déjà été expédié, vous pouvez <a href='" + shopURL + "Return' target='blank'>enregistrer un retour</a> dans votre compte client .",
            'it' : "Finché il tuo ordine non è stato preparato per la spedizione, puoi stornare l’ordine del prodotto che non vuoi più acquistare direttamente nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Se il prodotto è già stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='" + shopURL + "Return' target='blank'>registra il reso</a>.",
            'en-US' : "As long as we haven’t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. If the product has already been shipped, you’ll have to <a href='" + shopURL + "Return' target='blank'>register a return</a> in your customer account."
      },

      //LEVEL 0: Rückgabe
      "webform_case_return" : {
            'de' : "" + rck + "",
            'fr' : "Les produits achetés directement chez " + seite + " peuvent être retournés dans les 30 jours, ceux achetés auprès d'un <a href='" + helpcenterURL + "articles" + hp2 + "-Offres-de-fournisseur-tiers' target='blank'>fournisseur tiers</a>, dans les 14 jours suivant leur réception. Vous pouvez <a href='" + shopURL + "after-sales' target='blank'>enregistrer un retour</a> directement dans votre compte client.",
            'it' : "Puoi restituire gli articoli acquistati direttamente da " + seite + " entro 30 giorni dal ricevimento, mentre gli articoli acquistati da un <a href='" + helpcenterURL + "articles" + hp2 + "-Offerte-da-parte-di-terzi' target='blank'>fornitore terzo</a> entro 14 giorni dal ricevimento. Puoi registrare il <a href='" + shopURL + "after-sales' target='blank'>reso</a> direttamente nel tuo conto cliente.",
            'en-US' : "You have 30 days to return products sold by " + seite + " and 14 days to return items sold by <a href='" + helpcenterURL + "articles" + hp2 + "-Buying-from-third-party-sellers' target='blank'>third parties</a> from the day you received them. <a href='" + shopURL + "after-sales' target='blank'>Register returns</a> in your customer account."
      },
      "webform_case_return_status" : {
            'de' : "Unter <a href='" + shopURL + "ServiceCase/List' target='blank'>\"Alle Rücksendungen\"</a> findest du eine Übersicht und den aktuellen Status zu allen von dir eingereichten Rückgaben und Garantiefällen.",
            'fr' : "Sous la rubrique « <a href='" + shopURL + "ServiceCase/List' target='blank'>Tous les retours</a> », vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",
            'it' : "Sotto <a href='" + shopURL + "ServiceCase/List' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",
            'en-US' : "Go to <a href='" + shopURL + "ServiceCase/List' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases."
      },
      "webform_case_creditnote" : {
            'de' : "Alle deine offenen und eingelösten Gutschriften findest du <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>hier</a>. Du kannst diese <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rückerstatten lassen</a> oder direkt in einer neuen Bestellung <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>einlösen</a>.",
            'fr' : "Vous pouvez trouver tous vos crédits ouverts et échangés <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>ici</a>. Vous pouvez vous les <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>faire rembourser</a> ou les <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>échanger</a> directement contre une nouvelle commande.",
            'it' : "Puoi trovare tutti i tuoi crediti aperti e riscattati <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>qui</a>. Potete farveli <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rimborsare</a> o <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>riscattarli</a> direttamente per un nuovo ordine.",
            'en-US' : "You can find all your open and redeemed credits <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>here</a>. You can have them <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>refunded</a> or <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>redeem</a> them directly in a new order."
      },

      //LEVEL 0: Zahlungen, Mahnungen und Rückestattungen
      "webform_case_refund" : {
            'de' : "Du kannst die Rückerstattung einer Gutschrift in wenigen Schritten selbst vornehmen. Das genaue Vorgehen beschreiben wir in diesem <a href='" + helpcenterURL +"articles" + hp3 + "-Rückerstattung-einer-Gutschrift' target='blank'>Artikel</a>.<br><br>Bitte beachte, dass die Geldüberweisung in der Regel 1-3 Werktage in Anspruch nimmt.<br><br>Rückerstattungen auf deine Kreditkarte werden auf deiner nächsten Kreditkartenabrechnung ersichtlich.",
            'fr' : "Vous pouvez effectuer vous-même le remboursement d'un avoir en quelques étapes. La procédure exacte est décrite dans le présent <a href='" + helpcenterURL + "articles" + hp3 + "-Que-faire-pour-lancer-le-processus-de-remboursement-' target='blank'>article</a>.<br><br>Veuillez noter que le virement prend habituellement entre 1 à 3 jours ouvrables.<br><br>Les remboursements sur votre carte de crédit figureront sur votre prochain relevé de carte de crédit.",
            'it' : "Puoi avviare il rimborso di un credito autonomamente. La procedura esatta è descritta in questo <a href='" + helpcenterURL + "articles" + hp3 + "-Come-faccio-a-richiedere-il-rimborso-' target='blank'>articolo</a>.<br><br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 3 giorni lavorativi.<br><br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",
            'en-US' : "To refund a credit note, please follow the simple steps described in this <a href='" + helpcenterURL + "articles" + hp3 + "-How-do-I-get-a-refund-' target='blank'>article</a>.<br><br>Please bear in mind that transfers usually take one to three working days.<br><br>Refunds to your credit card will appear on your next credit card statement."
      },
      "webform_case_receipt" : {
            'de' : "Sämtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Menüpunkt <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gewünschten Auftrag auswählst.<br><br>Rechnungsbelege für Bestellungen, welche du per Rechnung getätigt hast, findest du <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>.",
            'fr' : "Vous trouverez tous les reçus, certificats de garantie et autres à la rubrique <a href='" + shopURL + "Order' target='blank'>commandes</a> dans votre compte client en sélectionnant la commande souhaitée.<br><br>Vous trouverez <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes payées sur facture.",
            'it' : "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l’articolo desiderato.<br><br><a href='" + shopURL + "Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",
            'en-US' : "All sales receipts and warranty certificates are saved in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You’ll find the sales receipt for all orders you paid by invoice <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>here</a>."
      },
      "webform_case_payment_reminder" : {
            'de' : "Es kann bis zu fünf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung überschnitten hat. In diesem Fall musst du nichts weiter tun und kannst die Mahnung ignorieren.<br><br>Bitte beachte, dass Sammelüberweisungen nicht korrekt verbucht werden. überweise immer für jede Bestellung separat, damit wir deine Zahlung eindeutig zuordnen können.",
            'fr' : "Jusqu'à cinq jours ouvrables peuvent s'écouler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient croisés. Dans ce cas, vous n'avez rien à faire et pouvez simplement ignorer le rappel.<br><br>Veuillez noter que les virements groupés ne sont pas comptabilisés correctement. Réglez toujours une commande à la fois pour que nous puissions clairement attribuer votre paiement.",
            'it' : "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. È possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso non devi fare nulla e puoi ignorare il sollecito.<br><br>Si prega di notare che i pagamenti collettivi non vengono registrati correttamente. Effettua sempre un bonifico separato per ciascun ordine, in modo che possiamo assegnare il pagamento all’ordine corretto.",
            'en-US' : "It can take up to five working days until your payment arrives in our system. Therefore, it’s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br><br>Please note that collective transfers are not entered correctly. It’s important you pay for each order in a separate bank transfer to make sure we can clearly identify your payment."
      },
      "webform_case_no_bill" : {
            'de' : "Wenn der Wert deines Warenkorbs höher ist als dein individuelles Kreditlimit oder du dein Kreditlimit durch noch nicht bezahlte Bestellungen bereits ausgereizt hast, entfällt die Rechnung als Zahlungsoption.<br><br>Bitte beachte: Unser Kundenservice kann die verfügbaren Zahlungsarten sowie das Kreditlimit nicht beeinflussen.",
            'fr' : "Si la valeur de votre panier est supérieure à votre limite de crédit individuelle ou si vous avez déjà épuisé votre limite de crédit par des commandes non encore payées, le paiement sur facture n'est pas applicable.<br><br>Attention : notre service client n'a aucune influence sur les modes de paiement disponibles et sur votre limite de crédit.",
            'it' : "Se il valore del tuo carrello è superiore al tuo limite di credito individuale o se hai già esaurito il tuo limite di credito con ordini non ancora pagati, la modalità di pagamento tramite fattura viene disabilitata.<br><br>Nota bene: il nostro servizio clienti non ha alcun influsso sui metodi di pagamento disponibili o sul tuo limite di credito.",
            'en-US' : "Payment by invoice is not possible if your order costs more than your credit limit allows or if you have reached your credit limit with unpaid orders.<br><br>Please note: our customer service has no influence on the available payment methods and the credit limit."
      },
      "webform_case_dunning_block" : {
            'de' : "Die Zahlungsfrist beträgt 20 Tagen und kann generell nicht verlängert werden. Natürlich kann es passieren, dass eine Rechnung einmal übersehen wird. Aus diesem Grund versenden wir nach Ablauf der Zahlungsfrist eine Zahlungserinnerung. Auf der Zahlungserinnerung ist der Zeitraum der Fristerstreckung aufgeführt. Diese Nachfrist ist generell nicht verlängerbar.<br><br>Um zusätzliche Gebühren zu vermeiden, solltest du den ausstehenden Betrag umgehend begleichen. Eine Bestätigung von dir, dass du die Zahlung getätigt hast, ist nicht nötig.",
            'fr' : "Le délai de paiement s'élève à 20 jours et ne peut généralement pas être prolongé. Bien sûr, un oubli de facture peut arriver. C'est pourquoi nous vous enverrons un rappel après l'expiration du délai de paiement. Le rappel de paiement précise la période pour laquelle le délai est prolongé. Ce délai n'est généralement pas prorogeable.<br><br>Pour éviter des frais supplémentaires, vous devez régler le montant dû immédiatement. Une confirmation de votre part du paiement effectué n'est pas nécessaire.",
            'it' : "Il termine di pagamento è di 20 giorni e in generale non può essere prorogato. Naturalmente, può succedere che una fattura vada dimenticata. Per questo motivo, dopo la scadenza del termine di pagamento inviamo un sollecito. Sul sollecito di pagamento è indicato il periodo di proroga del termine. Questo periodo non è generalmente prorogabile.<br><br>Per evitare costi aggiuntivi, effettua immediatamente il pagamento.Non è necessaria una conferma da parte tua di effettuato pagamento.",
            'en-US' : "Our payment deadline is 20 days after the invoice is issued. Generally, this deadline cannot be extended. Of course, we understand that invoices are occasionally overlooked. For this reason, we send a reminder after the payment deadline has expired. The reminder will state the date of the new payment deadline. We cannot extend this final deadline.<br><br>The best way forward is to transfer the amount straight away to avoid any extra charges. There is no need for you to send us a confirmation of payment."
      },

      //LEVEL 0: Kundenkonto
      "webform_case_delete_account" : {
            'de' : "Nachdem dein Konto gelöscht wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch benötigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto löschen lässt.<br><br>Du kannst die Löschung direkt über dein <a href='" + shopURL + "DeleteAccount' target='blank'>Benutzerkonto</a> einleiten.",
            'fr' : "Une fois votre compte supprimé, vous n'aurez plus accès à vos reçus électroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>Vous pouvez initier la suppression directement à partir de votre <a href='" + shopURL + "DeleteAccount' target='blank'>compte d'utilisateur</a>.",
            'it' : "Una volta eliminato il conto, non avrai più accesso alle tue ricevute e documenti elettronici. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Potete avviare la cancellazione direttamente dal vostro <a href='" + shopURL + "DeleteAccount' target='blank'>conto utente</a>.",
            'en-US' : "Once your account is deleted, you will no longer have access to your sales receipts and other documents. That’s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>You can initiate the deletion directly from your <a href='" + shopURL + "DeleteAccount' target='blank'>user account</a>.",
            "deDescriptionLabel" : "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",
            "frDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",
            "itDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
            "en-USDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number"
      },
      "webform_case_cant_login" : {
            'de' : "Du kannst dein Passwort jederzeit zurücksetzen und ein neues zusenden lassen:<br><br>• Klicke im Login-Bereich auf <a href='" + shopURL + "Register/RequestPassword' target='blank'>Passwort vergessen?</a><br>• Gib deinen Benutzernamen oder die hinterlegte E-Mail-Adresse an und klicke auf \"Link anfordern\"",
            'fr' : "Vous pouvez à tout moment réinitialiser votre mot de passe pour qu'un nouveau vous soit envoyé : <br><br>• Cliquez dans la zone de connexion sur <a href='" + shopURL + "Register/RequestPassword' target='blank'>mot de passe oublié ?</a><br>• Saisissez votre nom d'utilisateur ou adresse électronique fournie et cliquez sur « Demander un lien »",
            'it' : "Puoi reimpostare la tua password in qualsiasi momento e fartene inviare una nuova:<br><br>• Nell'area di login, clicca su <a href='" + shopURL + "Register/RequestPassword' target='blank'>Hai dimenticato la password?</a><br>• Inserisci il tuo nome utente o l'indirizzo e-mail che hai registrato nel tuo conto e clicca poi su «Richiedi link».",
            'en-US' : "You can reset your password at any time:<br><br>• Go to the login screen and click <a href='" + shopURL + "Register/RequestPassword' target='blank'>forgot your password?</a><br>• Enter your username or e-mail address and click «Request link».",
            "deDescriptionLabel" : "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",
            "frDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",
            "itDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
            "en-USDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number"
      },

      //LEVEL 0: Produktberatung
      "webform_case_product_advice_it" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },
      "webform_case_product_advice_network" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },
      "webform_case_product_advice_consumer" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },
      "webform_case_product_advice_photo" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },
      "webform_case_product_advice_home" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },
      "webform_case_product_advice_diy" : {
            'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",
            'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",
            'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",
            'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)"
      },

      //LEVEL 0: Offerte
      "webform_case_offer" : {
            'de' : "Offerten mit einem Auftragsvolumen von bis zu " + offerte + " werden nicht gepriced. Es gelten die Preisangaben auf unserem Shop.",
            'fr' : "Remarque : pour une offre, le volume de la commande doit être d'au moins " + offerte + ". Les prix indiqués dans notre boutique s'appliquent.",
            'it' : "Attenzione: per un'offerta, il volume dell'ordine deve essere di almeno " + offerte + ". Si applicano i prezzi indicati nel nostro negozio.",
            'en-US' : "Please note: For a quotation, the minimum order volume must be " + offerte + ". The prices quoted in our store apply."
      },

      //Error-Meldungen für Attachment
      "attachment-errors" : {
            'de1' : 'Um dein Anliegen schnellstmöglich zu lösen, ist ein Foto des Schadens erforderlich. Bitte füge deshalb eine entsprechende Datei hinzu.',
            'fr1' : 'Afin de résoudre votre demande le plus rapidement possible, une photo des dommages est nécessaire. Veuillez donc ajouter un fichier correspondant.',
            'it1' : 'Per risolvere la vostra richiesta nel più breve tempo possibile, è necessaria una foto del danno. Pertanto si prega di aggiungere un file corrispondente.',
            'en-US1' : 'In order to solve your request as quickly as possible, a photo of the damage is required. Therefore please add a corresponding file.',
            'de2' : 'Um dein Anliegen schnellstmöglich zu lösen, benötigen wir ein Foto des falsch erhaltenen Produkts. Bitte füge deshalb eine entsprechende Datei hinzu.',
            'fr2' : "Afin de résoudre votre problème le plus rapidement possible, nous avons besoin d'une photo du produit mal reçu. Veuillez donc joindre un fichier approprié.",
            'it2' : 'Al fine di risolvere il suo problema il più rapidamente possibile, abbiamo bisogno di una foto del prodotto ricevuto in modo errato. Pertanto, si prega di allegare un file appropriato.',
            'en-US2' : 'In order to resolve your issue as soon as possible, we need a photo of the incorrectly received product. Therefore, please attach an appropriate file.'
      },

      //Feedback Formular Texte
      "outputFeedbackButtonText" : {
            'de' : "<br>Hast du Verbesserungsvorschläge für den Beitrag?<br><br>",
            'fr' : "<br>Avez-vous des suggestions pour améliorer le poste ?<br><br>",
            'it' : "<br>Hai qualche suggerimento per migliorare il post?<br><br>",
            'en-US' : "<br>Do you have any suggestions for improving the post?<br><br>"
      },
      "outputFeedbackLabelPart1" : {
            'de' : "Feedback zu Helpcenter Beitrag: ",
            'fr' : "Feed-back sur le post du Helpcenter : ",
            'it' : "Feedback sul post dell'Helpcenter: ",
            'en-US' : "Feedback to Helpcenter post: " 
      },
      "feedbackThanks" : {
            'de' : "Vielen Dank für dein Feedback!<br>",
            'fr' : "Merci pour vos commentaires!<br>",
            'it' : "Grazie per il tuo feedback!<br>",
            'en-US' : "Thank you for your feedback!<br>"
      },

      //LEVEL 0: Connect Tags
      "webform_case_connect_customer" : {
            'de' : "",
            'fr' : "",
            'it' : "",
            'en-US' : "" 
      },
      "webform_case_connect_payment" : {
            'de' : "",
            'fr' : "",
            'it' : "",
            'en-US' : "" 
      },
      "webform_case_connect_technical" : {
            'de' : "",
            'fr' : "",
            'it' : "",
            'en-US' : "" 
      },
      "webform_case_connect_b2b" : {
            'de' : "",
            'fr' : "",
            'it' : "",
            'en-US' : "" 
      }
    }

    if (portal == 'helpcenter.galaxus.de'){
      infoBoxWording['webform_case_not_working_product']['de'] = "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/5547' target='blank'>Gewährleistungsinformationen</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>."
      }  
 
      return infoBoxWording;
      
    
    /*  
    infoBoxWording = {
    //DEUTSCH
      de: {
        "-" : "inputNone",
        "outputNone" : "-",

        "Anderweitige Anfrage" : "inputOtherRequest" ,
        "outputOtherRequest" : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",

    //Level 0: Wo ist meine Bestellung?
        "Ich will den Status meiner Bestellung überprüfen" : "inputOrderStatus",
        "outputOrderStatus" : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.",

        "Der Versandstatus lautet \"versendet\", aber die Sendung ist nicht angekommen" : "inputShippingStatus",
        "outputShippingStatus": "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas länger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.",
        "Der Versandstatus lautet \"versendet\", aber die Sendung ist nicht angekommen descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Welche Artikel fehlen:\nSendungsnummer:",

        "Der Versandstatus lautet \"versandbereit\". Wann wird die Sendung verschickt?" : "inputReadyForShipment",
        "outputReadyForShipment" : "Erst wenn alle Produkte deiner Bestellung versandbereit sind, wird die Bestellung versendet. Soll es schneller gehen kannst du eine <a href='" + helpcenterURL + "articles" + hp1 + "-Wie-löse-ich-eine-Teillieferung-aus-' target='blank'>kostenlose Teillieferung aktivieren</a>.",

    //Level 0: Probleme mit einer Bestellung
        "Ich habe ein äusserlich beschädigtes Produkt erhalten" : "inputDamagedProduct",
        "outputDamagedProduct" : "Für eine rasche Bearbeitung benötigen wir folgende Informationen von dir: <br><br>• Auftragsnummer deiner Bestellung<br>• Beschreibung des Schadens<br>• Fotos des Schadens und der Verpackung<br><br>Wir werden deine Anfrage zusammen mit unseren Logistikpartnern prüfen und dich so rasch als möglich über die weiteren Schritte informieren.",

        "Mein Produkt funktioniert nicht" : "inputNotWorking",
        "outputNotWorking" : "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/559' target='blank'>Garantierichtlinien</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>.",

        "Ich habe ein falsches Produkt erhalten" : "inputWrongProduct",
        "outputWrongProduct" : "Damit wir dein Anliegen rasch prüfen können, wäre es hilfreich, wenn du uns die Herstellernummer oder den EAN-Code des falsch erhaltenen Produkt mitteilen könntest. Die Angaben dazu findest du auf der Produktverpackung.",
        "Ich habe ein falsches Produkt erhalten descriptionTemplate" : "inputWrongProductMailTemplate",
        "outputWrongProductMailTemplate" : "Bitte beachte, dass wir nachfolgende Angaben zwingend benötigen.\nIch habe fälschlicherweise das folgende Produkt erhalten: \nMenge: \nEAN-Code (Strichcode auf der Verpackung): \nIch vermisse folgendes Produkt: ",

        "Meine Bestellung wurde nicht komplett geliefert" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Nicht alle Produkte kommen direkt ab unserem eigenen Lager. Produkte von unseren Partnern werden dir somit direkt und in einem separaten Paket zugestellt. in deinem Kundenkonto kannst du unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> überprüfen, ob dein Paket bereits versendet wurde oder noch vorbereitet wird.",

        "Ich möchte eine Bestellung stornieren" : "inputCancelOrder",
        "outputCancelOrder" : "Solange deine Lieferung noch nicht für den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> das unerwünschte Produkt selbstständig stornieren. Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + shopURL + "Return' target='blank'>Rückgabe erfassen</a>.",

    //Level 0: Rückgabe
        "Status einer Rückgabe überprüfen" : "inputReturnStatus",
        "outputReturnStatus" : "Unter <a href='" + shopURL + "ServiceCase/List' target='blank'>\"Alle Rücksendungen\"</a> findest du eine Übersicht und den aktuellen Status zu allen von dir eingereichten Rückgaben und Garantiefällen.",

        "Ich möchte ein Produkt zurückgeben" : "inputReturn",
        "outputReturn" : "" + rck + "",

  //Level 0: Zahlung und Rückerstattung
        "Rückerstattung meiner Gutschrift" : "inputCreditReturn",
        "outputCreditReturn" : "Du kannst die Rückerstattung einer Gutschrift in wenigen Schritten selbst vornehmen. Das genaue Vorgehen beschreiben wir in diesem <a href='" + helpcenterURL +"articles" + hp3 + "-Rückerstattung-einer-Gutschrift' target='blank'>Artikel</a>.<br><br>Bitte beachte, dass die Geldüberweisung in der Regel 1-3 Werktage in Anspruch nimmt.<br><br>Rückerstattungen auf deine Kreditkarte werden auf deiner nächsten Kreditkartenabrechnung ersichtlich.",

        "Ich benötige eine/n Kaufbeleg/Rechnung" : "inputReceipt",
        "outputReceipt" : "Sämtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Menüpunkt <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gewünschten Auftrag auswählst.<br><br>Rechnungsbelege für Bestellungen, welche du per Rechnung getätigt hast, findest du <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>.",

        "Ich habe eine Mahnung erhalten, obwohl ich bezahlt habe" : "inputPaymentReminder",
        "outputPaymentReminder" : "Es kann bis zu fünf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung überschnitten hat. In diesem Fall musst du nichts weiter tun und kannst die Mahnung ignorieren.<br><br>Bitte beachte, dass Sammelüberweisungen nicht korrekt verbucht werden. überweise immer für jede Bestellung separat, damit wir deine Zahlung eindeutig zuordnen können.",

        "Ich kann nicht per Rechnung bestellen" : "inputNoBill",
        "outputNoBill": "Wenn der Wert deines Warenkorbs höher ist als dein individuelles Kreditlimit oder du dein Kreditlimit durch noch nicht bezahlte Bestellungen bereits ausgereizt hast, entfällt die Rechnung als Zahlungsoption.<br><br>Bitte beachte: Unser Kundenservice kann die verfügbaren Zahlungsarten sowie das Kreditlimit nicht beeinflussen.",

        "Ich benötige eine längere Zahlungsfrist" : "inputLongerPayment",
        "outputLongerPayment" : "Die Zahlungsfrist beträgt 20 Tagen und kann generell nicht verlängert werden. Natürlich kann es passieren, dass eine Rechnung einmal übersehen wird. Aus diesem Grund versenden wir nach Ablauf der Zahlungsfrist eine Zahlungserinnerung. Auf der Zahlungserinnerung ist der Zeitraum der Fristerstreckung aufgeführt. Diese Nachfrist ist generell nicht verlängerbar.<br><br>Um zusätzliche Gebühren zu vermeiden, solltest du den ausstehenden Betrag umgehend begleichen. Eine Bestätigung von dir, dass du die Zahlung getätigt hast, ist nicht nötig.",

  //Level 0: Kundenkonto
        "Ich möchte mein Kundenkonto löschen" : "inputDeleteAccount",
        "outputDeleteAccount" : "Nachdem dein Konto gelöscht wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch benötigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto löschen lässt.<br><br>Du kannst die Löschung direkt über dein <a href='" + shopURL + "DeleteAccount' target='blank'>Benutzerkonto</a> einleiten.",
        "Ich möchte mein Kundenkonto löschen descriptionLabel" : "inputDeleteAccountDescriptionLabel",
        "outputDeleteAccountDescriptionLabel" : "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",

        "Ich komme nicht auf mein Benutzerkonto" : "inputCantLogin",
        "outputCantLogin" : "Du kannst dein Passwort jederzeit zurücksetzen und ein neues zusenden lassen:<br><br>• Klicke im Login-Bereich auf <a href='" + shopURL + "Register/RequestPassword' target='blank'>Passwort vergessen?</a><br>• Gib deinen Benutzernamen oder die hinterlegte E-Mail-Adresse an und klicke auf \"Link anfordern\"",
        "Ich komme nicht auf mein Benutzerkonto descriptionLabel" : "inputCantLoginDescriptionLabel",
        "outputCantLoginDescriptionLabel" : "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",

  //Level 0: Produktberatung
      "Computer und Zubehör" : "inputProductAdvice",
      "Netzwerk und Server" : "inputProductAdvice",
      "Unterhaltungselektronik und Smartphone" : "inputProductAdvice", 
      "Fotografie und Drucker" : "inputProductAdvice",
      "Haushalt und Sport" : "inputProductAdvice",
      "Do it, Garden und alle weiteren Produkte" : "inputProductAdvice",
      "outputProductAdvice" : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",

  //Level 0: Offerte
        "Offerte" : "inputOffer",
        "outputOffer" : "Offerten mit einem Auftragsvolumen von bis zu " + offerte + " werden nicht gepriced. Es gelten die Preisangaben auf unserem Shop.",

  //Feedback
        "outputFeedbackButtonText":"<br>Hast du Verbesserungsvorschläge für den Beitrag?<br><br>",
        "outputFeedbackHeader":"Feedbackformular",
        "outputFeedbackBeschreibung":"<br><div id = 'FeedbackText' class = 'contactFormText'><h2>Hinweis</h2>Bitte verwende das Formular lediglich für Verbesserungsvorschläge zu unseren Beiträgen.<br>Leider können wir nicht auf dein Feedback antworten. Für deine Kundenanfragen kannst du gerne das <a href='/hc/requests/new'>Kontaktformular</a> verwenden.</div>",
        "outputFeedbackLabelPart1":"Feedback zu Helpcenter Beitrag: ",
        "outputFeedbackLabelPart2":"<br><b>Achtung: Auf Kundenanfragen über das Feedbackformular wird nicht geantwortet!</b>",
        "outputFeedbackTextFieldTemplate":"",
        "feedbackThanks":"<h4>Vielen Dank für dein Feedback!</h4>"
      },



    //FRANZÖSISCH
      fr: {   
        "-" : "inputNone",
        "outputNone" : "-",

        "Autre demande" : "inputOtherRequest" ,
        "outputOtherRequest" : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.",

        //Level 0: Ou est ma commande?
        "Vérifier l'état de ma commande" : "inputOrderStatus",
        "outputOrderStatus" : "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits. Vous y trouverez également le numéro de suivi de votre colis.",

        "Le statut de l'envoi est « expédié », mais l'envoi n'est pas arrivarrivé" : "inputShippingStatus",
        "outputShippingStatus": "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits. Vous y trouverez également le numéro de suivi de votre colis.<br><br>Malheureusement, un colis peut parfois rester plus longtemps en cours d'acheminement ou atterrir chez le voisin. Si le colis n'arrive pas, même après quelques jours, nous serons heureux d'ouvrir une enquête.",
        "Le statut de l'envoi est « expédié », mais l'envoi n'est pas arrivé descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Quels sont les articles manquants :\nNuméro de suivi :",

        "Le statut d'expédition est « prêt à être expédié ». Quand l'envoi sera-t-il effectué ?" : "inputReadyForShipment",
        "outputReadyForShipment" : "La commande ne sera expédiée que lorsque tous les produits de votre commande seront prêts à être envoyés. Pour accélérer ce processus, vous pouvez activer la <a href='" + helpcenterURL + "articles" + hp1 + "-Comment-activer-une-livraison-partielle-' target='blank'>livraison partielle</a>.",

    //Level 0: Problème avec la commande
        "J'ai reçu un produit endommagé à l'extérieur" : "inputDamagedProduct",
        "outputDamagedProduct" : "Pour un traitement rapide, nous avons besoin des informations suivantes de votre part : <br><br>• numéro de votre commande<br>• description du dommage<br>• photos du dommage et de l'emballage<br><br>Nous examinerons votre demande avec nos partenaires logistiques et vous informerons dès que possible des étapes suivantes.",

        "Mon produit ne fonctionne pas" : "inputNotWorking",
        "outputNotWorking" : "Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un défaut</a>.<br><br>Les dommages causés par une utilisation inappropriée ne sont pas couverts par la garantie. Vous trouverez un complément d'information concernant ce point dans nos <a href='" + shopURL + "wiki/559' target='blank'>conditions de garantie</a> et <a href='" + shopURL + "Wiki/478' target='blank'>CGV</a>.",

        "J'ai reçu le mauvais produit" : "inputWrongProduct",
        "outputWrongProduct" : "Afin de pouvoir vérifier rapidement votre demande, il serait utile que vous nous communiquiez le numéro du fabricant ou le code EAN du produit reçu par erreur. Vous trouverez ces informations sur l'emballage du produit.",
        "J'ai reçu le mauvais produit descriptionTemplate" : "inputWrongProductMailTemplate",
        "outputWrongProductMailTemplate" : "Veuillez noter que les informations suivantes sont obligatoires.\nJ'ai reçu le produit suivant par erreur : \nQuantité : \nCode EAN (code barre sur l'emballage) : \nIl me manque le produit suivant : ",

        "Ma commande n'a pas été entièrement livrée" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Tous les produits ne proviennent pas directement de notre entrepôt. Les produits de nos partenaires vous sont donc livrés directement et dans un colis séparé. Dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>, vous pouvez vérifier si votre colis a déjà été envoyé ou est encore en cours de préparation.",

        "Je souhaite annuler une commande" : "inputCancelOrder",
        "outputCancelOrder" : "Tant que votre commande n'a pas été préparée pour l'expédition, vous pouvez annuler le produit non désiré de manière indépendante en allant dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>. Si le produit a déjà été expédié, vous pouvez <a href='" + shopURL + "Return' target='blank'>enregistrer un retour</a> dans votre compte client .",

    //Level 0: Retour
        "Vérifier le statut d'un retour" : "inputReturnStatus",
        "outputReturnStatus" : "Sous la rubrique « <a href='" + shopURL + "ServiceCase/List' target='blank'>Tous les retours</a> », vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",

        "Je souhaite retourner un produit" : "inputReturn",
        "outputReturn" : "Les produits achetés directement chez " + seite + " peuvent être retournés dans les 30 jours, ceux achetés auprès d'un <a href='" + helpcenterURL + "articles" + hp2 + "-Offres-de-fournisseur-tiers' target='blank'>fournisseur tiers</a>, dans les 14 jours suivant leur réception. Vous pouvez <a href='" + shopURL + "after-sales' target='blank'>enregistrer un retour</a> directement dans votre compte client.",

  //Level 0: Paiement et remboursement
        "Remboursement de mon avoir" : "inputCreditReturn",
        "outputCreditReturn" : "Vous pouvez effectuer vous-même le remboursement d'un avoir en quelques étapes. La procédure exacte est décrite dans le présent <a href='" + helpcenterURL + "articles" + hp3 + "-Que-faire-pour-lancer-le-processus-de-remboursement-' target='blank'>article</a>.<br><br>Veuillez noter que le virement prend habituellement entre 1 à 3 jours ouvrables.<br><br>Les remboursements sur votre carte de crédit figureront sur votre prochain relevé de carte de crédit.",

        "J'ai besoin d'un reçu/une facture" : "inputReceipt",
        "outputReceipt" : "Vous trouverez tous les reçus, certificats de garantie et autres à la rubrique <a href='" + shopURL + "Order' target='blank'>commandes</a> dans votre compte client en sélectionnant la commande souhaitée.<br><br>Vous trouverez <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes payées sur facture.",

        "J'ai reçu un rappel même si j'ai payé" : "inputPaymentReminder",
        "outputPaymentReminder" : "Jusqu'à cinq jours ouvrables peuvent s'écouler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient croisés. Dans ce cas, vous n'avez rien à faire et pouvez simplement ignorer le rappel.<br><br>Veuillez noter que les virements groupés ne sont pas comptabilisés correctement. Réglez toujours une commande à la fois pour que nous puissions clairement attribuer votre paiement.",

        "Je n'arrive pas à effectuer de commande avec paiement sur facture" : "inputNoBill",
        "outputNoBill": "Si la valeur de votre panier est supérieure à votre limite de crédit individuelle ou si vous avez déjà épuisé votre limite de crédit par des commandes non encore payées, le paiement sur facture n'est pas applicable.<br><br>Attention : notre service client n'a aucune influence sur les modes de paiement disponibles et sur votre limite de crédit.",

        "J'ai besoin d'un délai de paiement plus long" : "inputLongerPayment",
        "outputLongerPayment" : "Le délai de paiement s'élève à 20 jours et ne peut généralement pas être prolongé. Bien sûr, un oubli de facture peut arriver. C'est pourquoi nous vous enverrons un rappel après l'expiration du délai de paiement. Le rappel de paiement précise la période pour laquelle le délai est prolongé. Ce délai n'est généralement pas prorogeable.<br><br>Pour éviter des frais supplémentaires, vous devez régler le montant dû immédiatement. Une confirmation de votre part du paiement effectué n'est pas nécessaire.",

  //Level 0: Compte client
        "Je souhaite supprimer mon compte client" : "inputDeleteAccount",
        "outputDeleteAccount" : "Une fois votre compte supprimé, vous n'aurez plus accès à vos reçus électroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>Vous pouvez initier la suppression directement à partir de votre <a href='" + shopURL + "DeleteAccount' target='blank'>compte d'utilisateur</a>.",
        "Je souhaite supprimer mon compte client descriptionLabel" : "inputDeleteAccountDescriptionLabel",
        "outputDeleteAccountDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",

        "Je n'arrive pas à accéder à mon compte d'utilisateur" : "inputCantLogin",
        "outputCantLogin" : "Vous pouvez à tout moment réinitialiser votre mot de passe pour qu'un nouveau vous soit envoyé : <br><br>• Cliquez dans la zone de connexion sur <a href='" + shopURL + "Register/RequestPassword' target='blank'>mot de passe oublié ?</a><br>• Saisissez votre nom d'utilisateur ou adresse électronique fournie et cliquez sur « Demander un lien »",
        "Je n'arrive pas à accéder à mon compte d'utilisateur descriptionLabel" : "inputCantLoginDescriptionLabel",
        "outputCantLoginDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",

  //Level 0: Conseil produits
      "Ordinateurs et accessoires" : "inputProductAdvice",
      "Réseau et serveur" : "inputProductAdvice",
      "Electronique grand public et smartphone" : "inputProductAdvice", 
      "Photographie et imprimantes" : "inputProductAdvice",
      "Ménage et sport" : "inputProductAdvice",
      "Faites-le, jardin et tous les autres produits" : "inputProductAdvice",
      "outputProductAdvice" : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)",

  //Level 0: Offre
        "Offre" : "inputOffer",
        "outputOffer" : "Remarque : pour une offre, le volume de la commande doit être d'au moins " + offerte + ". Les prix indiqués dans notre boutique s'appliquent.",
  //Feedback
        "outputFeedbackButtonText":"<br>Avez-vous des suggestions pour améliorer le poste ?<br><br>",
        "outputFeedbackHeader":"Formulaire de commentaires",
        "outputFeedbackBeschreibung":"<br><div id = 'FeedbackText' class = 'contactFormText'><h2>Note</h2>Veuillez utiliser le formulaire uniquement pour suggérer des améliorations à nos articles.<br>Malheureusement, nous ne pouvons pas répondre à vos commentaires. Pour les demandes de vos clients, vous pouvez utiliser le <a href='/requests/new'>formulaire de contact</a>.</div>",
        "outputFeedbackLabelPart1":"Feed-back sur le post du Helpcenter : ",
        "outputFeedbackLabelPart2":"<br><b>Attention : Nous ne répondons pas aux demandes des clients via le formulaire de feed-back !>/b>",
        "outputFeedbackTextFieldTemplate":"",
        "feedbackThanks" :"<h4>Merci pour vos commentaires !</h4>"
      },




    //ITALIENISCH
      it: {
        "-" : "inputNone",
        "outputNone" : "-",

        "Altre domande" : "inputOtherRequest" ,
        "outputOtherRequest" : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",

    //Level 0: Dove si trova il mio ordine?
        "Verificare lo stato del mio ordine" : "inputOrderStatus",
        "outputOrderStatus" : "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.",

        "Sullo stato della spedizione è indicato «spedito», ma la spedizione non è arrivata" : "inputShippingStatus",
        "outputShippingStatus": "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.<br><br>Purtroppo, a volte la consegna del pacco può avere ritardi oppure essere recapitato a un indirizzo errato. Se il pacco non dovesse arrivare dopo qualche giorno, avvieremo una ricerca.",
        "Sullo stato della spedizione è indicato «spedito», ma la spedizione non è arrivata descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Quali articoli mancano:\nNumero di spedizione:",

        "Sullo stato della spedizione è indicato «pronto per la spedizione». Quando verrà inviata la spedizione?" : "inputReadyForShipment",
        "outputReadyForShipment" : "Solo quando tutti i prodotti del tuo ordine saranno pronti per essere spediti, l'ordine verrà inviato. Se vuoi che sia più veloce, puoi attivare gratuitamente la <a href='" + helpcenterURL + "articles" + hp1 + "-Come-faccio-a-richiedere-una-consegna-parziale-' target='blank'>consegna parziale</a>.",

    //Level 0: Problemi con un ordine
        "Ho ricevuto un prodotto danneggiato esternamente" : "inputDamagedProduct",
        "outputDamagedProduct" : "Per una rapida elaborazione abbiamo bisogno delle seguenti informazioni:<br><br>• Numero d’ordine<br>• Breve descrizione del danno<br>• Foto dell’articolo e dell’imballaggio danneggiati<br><br>Esamineremo la tua richiesta insieme ai nostri partner logistici e ti informeremo al più presto su come procedere.",

        "Il mio prodotto non funziona" : "inputNotWorking",
        "outputNotWorking" : "Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.<br><br>I danni dovuti ad un uso improprio non sono coperti dalla garanzia. Puoi trovare ulteriori informazioni nelle nostre <a href='" + shopURL + "wiki/559' target='blank'>condizioni di garanzia</a> e nelle <a href='" + shopURL + "Wiki/478' target='blank'>CGC</a>.",

        "Ho ricevuto un prodotto sbagliato" : "inputWrongProduct",
        "outputWrongProduct" : "Per poter verificare rapidamente la vostra richiesta, sarebbe utile che ci forniste il numero del produttore o il codice EAN del prodotto ricevuto in modo errato. Queste informazioni sono riportate sulla confezione del prodotto.",
        "Ho ricevuto un prodotto sbagliato descriptionTemplate" : "inputWrongProductMailTemplate",
        "outputWrongProductMailTemplate" : "Si prega di notare che le seguenti informazioni sono obbligatorie.\nHo ricevuto il seguente prodotto per errore: \nQuantità: \nCodice EAN (codice a barre sulla confezione): \nMi manca il seguente prodotto: ",

        "Il mio ordine non è stato consegnato completamente" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Non tutti i prodotti provengono direttamente dal nostro magazzino. I prodotti dei nostri partner ti vengono consegnati direttamente in un pacchetto separato. Nel menu <a href='" + shopURL + "Order' target='blank'>ordini</a> puoi anche vedere se il tuo pacco è già stato spedito o se è ancora in fase di preparazione.",

        "Desidero stornare un ordine" : "inputCancelOrder",
        "outputCancelOrder" : "Finché il tuo ordine non è stato preparato per la spedizione, puoi stornare l’ordine del prodotto che non vuoi più acquistare direttamente nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>. Se il prodotto è già stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='" + shopURL + "Return' target='blank'>registra il reso</a>.",

    //Level 0: Resi
        "Verificare lo stato di un reso" : "inputReturnStatus",
        "outputReturnStatus" : "Sotto <a href='" + shopURL + "ServiceCase/List' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",

        "Vorrei restituire un prodotto" : "inputReturn",
        "outputReturn" : "Puoi restituire gli articoli acquistati direttamente da " + seite + " entro 30 giorni dal ricevimento, mentre gli articoli acquistati da un <a href='" + helpcenterURL + "articles" + hp2 + "-Offerte-da-parte-di-terzi' target='blank'>fornitore terzo</a> entro 14 giorni dal ricevimento. Puoi registrare il <a href='" + shopURL + "after-sales' target='blank'>reso</a> direttamente nel tuo conto cliente.",

  //Level 0: Pagamento e rimborso
        "Rimborso di un credito" : "inputCreditReturn",
        "outputCreditReturn" : "Puoi avviare il rimborso di un credito autonomamente. La procedura esatta è descritta in questo <a href='" + helpcenterURL + "articles" + hp3 + "-Come-faccio-a-richiedere-il-rimborso-' target='blank'>articolo</a>.<br><br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 3 giorni lavorativi.<br><br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",

        "Necessito di una ricevuta/fattura" : "inputReceipt",
        "outputReceipt" : "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l’articolo desiderato.<br><br><a href='" + shopURL + "Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",

        "Ho ricevuto un richiamo, nonostante io abbia già effettuato il pagamento" : "inputPaymentReminder",
        "outputPaymentReminder" : "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. È possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso non devi fare nulla e puoi ignorare il sollecito.<br><br>Si prega di notare che i pagamenti collettivi non vengono registrati correttamente. Effettua sempre un bonifico separato per ciascun ordine, in modo che possiamo assegnare il pagamento all’ordine corretto.",

        "Non posso effettuare ordini su fattura" : "inputNoBill",
        "outputNoBill" : "Se il valore del tuo carrello è superiore al tuo limite di credito individuale o se hai già esaurito il tuo limite di credito con ordini non ancora pagati, la modalità di pagamento tramite fattura viene disabilitata.<br><br>Nota bene: il nostro servizio clienti non ha alcun influsso sui metodi di pagamento disponibili o sul tuo limite di credito.",

        "Ho bisogno di un termine di pagamento più lungo" : "inputLongerPayment",
        "outputLongerPayment" : "Il termine di pagamento è di 20 giorni e in generale non può essere prorogato. Naturalmente, può succedere che una fattura vada dimenticata. Per questo motivo, dopo la scadenza del termine di pagamento inviamo un sollecito. Sul sollecito di pagamento è indicato il periodo di proroga del termine. Questo periodo non è generalmente prorogabile.<br><br>Per evitare costi aggiuntivi, effettua immediatamente il pagamento.Non è necessaria una conferma da parte tua di effettuato pagamento.",

  //Level 0: Conto cliente
        "Desidero cancellare il mio conto cliente" : "inputDeleteAccount",
        "outputDeleteAccount" : "Una volta eliminato il conto, non avrai più accesso alle tue ricevute e documenti elettronici. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Potete avviare la cancellazione direttamente dal vostro <a href='" + shopURL + "DeleteAccount' target='blank'>conto utente</a>.",
        "Desidero cancellare il mio conto cliente descriptionLabel" : "inputDeleteAccountDescriptionLabel",
        "outputDeleteAccountDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",

        "Non riesco ad accedere al mio conto utente" : "inputCantLogin",
        "outputCantLogin" : "Puoi reimpostare la tua password in qualsiasi momento e fartene inviare una nuova:<br><br>• Nell'area di login, clicca su <a href='" + shopURL + "Register/RequestPassword' target='blank'>Hai dimenticato la password?</a><br>• Inserisci il tuo nome utente o l'indirizzo e-mail che hai registrato nel tuo conto e clicca poi su «Richiedi link».",
        "Non riesco ad accedere al mio conto utente descriptionLabel" : "inputCantLoginDescriptionLabel",
        "outputCantLoginDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",

  //Level 0: Consigli sui prodotti
      "Computer e accessori" : "inputProductAdvice",
      "Rete e server" : "inputProductAdvice",
      "Elettronica di consumo e smartphone" : "inputProductAdvice", 
      "Fotografia e stampanti" : "inputProductAdvice",
      "Casa e sport" : "inputProductAdvice",
      "Do it, garden e tutti gli altri prodotti" : "inputProductAdvice",
      "outputProductAdvice" : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",

  //Level 0: Offerta
        "Offerta" : "inputOffer",
        "outputOffer" : "Attenzione: per un'offerta, il volume dell'ordine deve essere di almeno " + offerte + ". Si applicano i prezzi indicati nel nostro negozio.",
  //Feedback
        "outputFeedbackButtonText":"<br>Hai qualche suggerimento per migliorare il post?<br><br>",
        "outputFeedbackHeader":"Modulo di feedback",
        "outputFeedbackBeschreibung":"<br><div id = 'FeedbackText' class = 'contactFormText'><h2>Nota</h2>Si prega di utilizzare il modulo solo per suggerire miglioramenti ai nostri post.<br>Purtroppo, non possiamo rispondere al tuo feedback. Per le richieste dei tuoi clienti puoi usare il <a href='/requests/new'>formulario di contatto</a>.</div>",
        "outputFeedbackLabelPart1":"Feedback sul post dell'Helpcenter: ",
        "outputFeedbackLabelPart2":"<br><b>Attenzione: non rispondiamo alle richieste dei clienti tramite il modulo di feedback!</b>",
        "outputFeedbackTextFieldTemplate":"",
        "feedbackThanks":"<h4>Grazie per il tuo feedback!</h4>"
},




    //ENGLISCH
      'en-US': {
        "-" : "inputNone",
        "outputNone" : "-",

        "Other requests" : "inputOtherRequest" ,
        "outputOtherRequest" : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>.",

    //Level 0: Where is my order?
        "I’d like to check the status of my order" : "inputOrderStatus",
        "outputOrderStatus" : "We'll keep the delivery status updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. You’ll also find the tracking number of your parcel there.",

        "The shipment status is «sent», but the parcel hasn’t arrived" : "inputShippingStatus",
        "outputShippingStatus": "We'll keep the delivery status updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. You’ll also find the tracking number of your parcel there.<br><br>Sometimes it takes a little longer for a parcel to arrive – or it may end up at your neighbour's. If it still hasn’t arrived after a few days, we’re happy to initiate an investigation.",
        "The shipment status is «sent», but the parcel hasn’t arrived descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Which articles are missing:\nConsignment number:",

        "The shipment status is «ready for shipment». When will the order be sent?" : "inputReadyForShipment",
        "outputReadyForShipment" : "We don't ship the order until all your products are in the warehouse and «ready for shipment». If you need any items sooner, please <a href='" + helpcenterURL + "articles" + hp1 + "-How-do-I-arrange-partial-delivery-' target='blank'>activate partial delivery</a>.",

    //Level 0: Problems with an order
        "I've received an externally damaged product" : "inputDamagedProduct",
        "outputDamagedProduct" : "For quick processing, please send us the following details:<br><br>• Order number<br>• Description of the damage<br>• Photos of the damage and packaging<br><br>We'll then work together with the delivery company to check what happened to your order and will get back to you as quickly as possible with updates and next steps.",

        "My product isn’t working" : "inputNotWorking",
        "outputNotWorking" : "Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>.<br><br>Damage caused by incorrect use is not covered by the warranty. For more information, see our <a href='" + shopURL + "wiki/559' target='blank'>warranty policy</a> and our <a href='" + shopURL + "Wiki/478' target='blank'>terms and conditions</a>.",

        "I’ve received the wrong product" : "inputWrongProduct",
        "outputWrongProduct" : "To be able to check your request quickly, it would be helpful if you could provide us with the manufacturer's number or the EAN code of the incorrectly received product. You can find this information on the product packaging.",
        "I’ve received the wrong product descriptionTemplate" : "inputWrongProductMailTemplate",
        "outputWrongProductMailTemplate" : "Please note that the following information is mandatory.\nI have received the following product by mistake: \nQuantity: \nEAN code (bar code on the packaging): \nI am missing the following product: ",

        "There are items missing in my order" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Not all products are sent from our warehouse. When an item comes from one of our partner suppliers, it'll be sent to you directly in a separate parcel. Go to <a href='" + shopURL + "Order' target='blank'>orders</a> in your customer account to find your order status to check if it has been shipped or if it's not been processed yet.",

        "I’d like to cancel my order" : "inputCancelOrder",
        "outputCancelOrder" : "As long as we haven’t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. If the product has already been shipped, you’ll have to <a href='" + shopURL + "Return' target='blank'>register a return</a> in your customer account.",

    //Level 0: Returns
        "I’d like to check the status of a return" : "inputReturnStatus",
        "outputReturnStatus" : "Go to <a href='" + shopURL + "ServiceCase/List' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases.",

        "I need to return a product" : "inputReturn",
        "outputReturn" : "You have 30 days to return products sold by " + seite + " and 14 days to return items sold by <a href='" + helpcenterURL + "articles" + hp2 + "-Buying-from-third-party-sellers' target='blank'>third parties</a> from the day you received them. <a href='" + shopURL + "after-sales' target='blank'>Register returns</a> in your customer account.",

  //Level 0: Payment and refund
        "I want to refund my credit" : "inputCreditReturn",
        "outputCreditReturn" : "To refund a credit note, please follow the simple steps described in this <a href='" + helpcenterURL + "articles" + hp3 + "-How-do-I-get-a-refund-' target='blank'>article</a>.<br><br>Please bear in mind that transfers usually take one to three working days.<br><br>Refunds to your credit card will appear on your next credit card statement.",

        "I need a receipt/invoice" : "inputReceipt",
        "outputReceipt" : "All sales receipts and warranty certificates are saved in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You’ll find the sales receipt for all orders you paid by invoice <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>here</a>.",

        "I’ve received a reminder even though I paid for my order" : "inputPaymentReminder",
        "outputPaymentReminder" : "It can take up to five working days until your payment arrives in our system. Therefore, it’s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br><br>Please note that collective transfers are not entered correctly. It’s important you pay for each order in a separate bank transfer to make sure we can clearly identify your payment.",

        "I can’t pay by invoice" : "inputNoBill",
        "outputNoBill": "Payment by invoice is not possible if your order costs more than your credit limit allows or if you have reached your credit limit with unpaid orders.<br><br>Please note: our customer service has no influence on the available payment methods and the credit limit.",

        "I need to extend the payment deadline" : "inputLongerPayment",
        "outputLongerPayment" : "Our payment deadline is 20 days after the invoice is issued. Generally, this deadline cannot be extended. Of course, we understand that invoices are occasionally overlooked. For this reason, we send a reminder after the payment deadline has expired. The reminder will state the date of the new payment deadline. We cannot extend this final deadline.<br><br>The best way forward is to transfer the amount straight away to avoid any extra charges. There is no need for you to send us a confirmation of payment.",

  //Level 0: Customer account
        "I’d like to delete my customer account" : "inputDeleteAccount",
        "outputDeleteAccount" : "Once your account is deleted, you will no longer have access to your sales receipts and other documents. That’s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>You can initiate the deletion directly from your <a href='" + shopURL + "DeleteAccount' target='blank'>user account</a>.",
        "I’d like to delete my customer account descriptionLabel" : "inputDeleteAccountDescriptionLabel",
        "outputDeleteAccountDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number",

        "I can’t access my customer account" : "inputCantLogin",
        "outputCantLogin" : "You can reset your password at any time:<br><br>• Go to the login screen and click <a href='" + shopURL + "Register/RequestPassword' target='blank'>forgot your password?</a><br>• Enter your username or e-mail address and click «Request link».",
        "I can’t access my customer account descriptionLabel" : "inputCantLoginDescriptionLabel",
        "outputCantLoginDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number",

  //Level 0: Product advice
      "Product information" : "inputProductAdvice",
      "Computers and accessories" : "inputProductAdvice",
      "Network and server" : "inputProductAdvice", 
      "Consumer electronics and smartphone" : "inputProductAdvice",
      "Photography and printer" : "inputProductAdvice",
      "Household and sport" : "inputProductAdvice",
      "Do it, garden and all other products" : "inputProductAdvice",
      "outputProductAdvice" : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)",

      //Level 0: Offer
        "Offer" : "inputOffer",
        "outputOffer" : "Please note: For a quotation, the minimum order volume must be " + offerte + ". The prices quoted in our store apply.",        
  //Feedback
        "outputFeedbackButtonText":"<br>Do you have any suggestions for improving the post?<br><br>",
        "outputFeedbackHeader":"Feedback form",
        "outputFeedbackBeschreibung":"<br><div id = 'FeedbackText' class = 'contactFormText'><h2>Note</h2>Please use the form only to suggest improvements to our posts.<br>Unfortunately, we cannot respond to your feedback. For your customer inquiries, feel free to use the <a href='/requests/new'>contact form</a>.</div>",
        "outputFeedbackLabelPart1":"Feedback to Helpcenter post: ",
        "outputFeedbackLabelPart2":"<br><b>Attention: Customer inquiries via the feedback form will not be answered!</b>",
        "outputFeedbackTextFieldTemplate":"",
        "feedbackThanks":"<h4>Thank you for your feedback!</h4>"
            }
      }
*/
      
}

