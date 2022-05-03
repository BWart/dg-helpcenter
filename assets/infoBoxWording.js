function fillInfoBoxWording(){
  
      var shopURL = "";
      var helpcenterURL = "";
      
      var hp1 = "";
      var hp2 = "";
      var hp3 = "";
      var hp4 = "";
      var hp5 = "";
      var hp6 = "";
      var offerte = "";
  
      var seite = "";
  
      // Hostname korrekt in der JSON in den Links hinterlegen
      // Helpcenter Links richtig hinterlegen (Helpcenter-spezifische-Nummern); var "hp"
      // Beitrag Seitennamen werden dynamisch angepasst, var "seite"
      switch (portal){
              case 'helpcenter.digitec.ch':
                    shopURL = "https://www.digitec.ch/"; 
  
                    helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                    seite = "digitec";
                     
                    hp1 = "/115005646225";
                    hp2 = "/360012370979";
                    hp3 = "/360014638579";
                    hp4 = "/360010272859";
                    hp5 = "/360012795199";
                    hp6 = "/115005646085";
                    hp7 = "/360000452549";
  
                    offerte = "CHF 5'000.-";
                    break;
              case 'helpcenter.galaxus.ch':
                    shopURL = "https://www.galaxus.ch/";
                    
                    helpcenterURL = "https://helpcenter.galaxus.ch/hc/";
                    seite = "Galaxus";
                      
                    hp1 = "/360007334359";
                    hp2 = "/360012372239";
                    hp3 = "/360007333839";
                    hp4 = "/360010180420";
                    hp5 = "/360012690580";
                    hp6 = "/360007334059";
                    hp7 = "/360014471940";
  
                    offerte = "CHF 5'000.-";
                    break;
              case 'helpcenter.galaxus.de':
                    shopURL = "https://www.galaxus.de/";
  
                    helpcenterURL = "https://helpcenter.galaxus.de/hc/";
                    seite = "Galaxus";
                      
                    hp1 = "/360008216899";
                    hp2 = "";
                    hp3 = "/360016850820";
                    hp4 = "/360010273099";
                    hp5 = "";
                    hp6 = "/360010182760";
                    hp7 = "/360008226499";
  
                    offerte = "EUR 2'000.-";
                    break;
              case 'helpcenter.galaxus.at':
                    shopURL = "https://www.galaxus.at/"
  
                    helpcenterURL = "https://helpcenter.galaxus.at/hc/";
                    seite = "Galaxus";
  
                    hp1 = "/4403441880850";
                    hp2 = "";
                    hp3 = "/4407053718930";  
                    hp4 = "/4407061056530";
                    hp5 = "";
                    hp6 = "/4407011198994";
                    hp7 = "/4407007830674";
  
                    offerte = "EUR 2'000.-";
                    break;
              default:
                    shopURL = "https://www.digitec.ch/";
  
                    helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                    seite = "digitec";
                    
                    hp1 = "/115005646225";
                    hp2 = "/360012370979";
                    hp3 = "/360014638579";
                    hp4 = "/360010272859";
                    hp5 = "/360012795199";
                    hp6 = "/115005646085";
                    hp7 = "/360000452549";
  
                    offerte = "CHF 5'000.-";
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
              'de' : "Leider kann eine Sendung auch mal etwas länger unterwegs sein oder sie erfolgt in mehreren Paketen. Sollte die Sendung auch nach fünf Tagen nach Versand nicht auftauchen, leiten wir gerne eine Nachforschung ein.<br>Aktuelle Informationen zum Lieferstatus findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.",
              'fr' : "Malheureusement, un envoi peut prendre un peu plus de temps pour arriver ou il peut être envoyé en plusieurs colis. Si l'envoi ne se présente pas au bout de cinq jours après l'expédition, nous serons heureux d'ouvrir une enquête.<br>Vous trouverez des informations actualisées sur l'état de la livraison dans le <a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> dans votre compte client.",
              'it' : "Sfortunatamente, una spedizione può richiedere un po' più di tempo per arrivare o può essere inviata in più pacchi. Se la spedizione non si presenta entro cinque giorni dalla spedizione, saremo lieti di indagare.<br>Si possono trovare informazioni aggiornate sullo stato della consegna nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente.",
              'en-US' : "Unfortunately, a shipment can sometimes be a little longer on the road or it takes place in several packages. If the shipment does not appear after five days after shipment, we will gladly initiate an investigation.<br>You can find current information on the delivery status in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.",
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
              'de' : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Mehr Informationen zu den Versandstatus, findest du unter <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Wo ist mein Paket und wann erhalte ich meine Bestellung?</a>",
              'fr' : "Vous pouvez trouver les informations actuelles sur l'état de la livraison de vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aperçu de la commande</a> dans votre compte client.<br><br>Pour plus d'informations sur l'état d'expédition, voir <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Où est mon colis et quand vais-je recevoir ma commande ?</a>",
              'it' : "Potete trovare le informazioni attuali sullo stato di consegna dei vostri prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente.<br><br>Per maggiori informazioni sullo stato della spedizione, vedi <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Quando riceverò il mio ordine?</a>",
              'en-US' : "You can find the latest information on the delivery status of your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>You can find more information about the shipping status at <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Where’s my order and when will I receive it?</a>",
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
              'de' : "Damit wir dein Anliegen rasch prüfen können, stelle uns die Herstellernummer oder den EAN-Code (Strichcode) des falsch erhaltenen Produkt zur Verfügung. Der EAN-Code befindet sich auf der Produktverpackung und dient dazu ein Produkt zweifelsfrei zu identifizieren. Er besteht aus einem Strichcode, respektive Barcode, und 13 Ziffern:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'fr' : "Afin que nous puissions vérifier rapidement votre demande, veuillez nous fournir le numéro du fabricant ou le code EAN (code-barres) du produit reçu de manière incorrecte.  Le code EAN se trouve sur l'emballage du produit et permet d'identifier un produit sans aucun doute. Il se compose d'un code-barres et de 13 chiffres :<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'it' : "Affinché possiamo controllare rapidamente la sua richiesta, la preghiamo di fornirci il numero del produttore o il codice EAN (codice a barre) del prodotto ricevuto in modo errato. Il codice EAN si trova sulla confezione del prodotto e serve per identificare un prodotto senza alcun dubbio. Consiste in un codice a barre e 13 cifre:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'en-US' : "To enable us to quickly check your request, please provide us with the manufacturer number or EAN code (barcode) of the incorrectly received product. The EAN code can be found on the product packaging and is used to identify a product without any doubt. It consists of a barcode and 13 digits:<div style='width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'deMailTemplate' : "Bitte beachte, dass wir nachfolgende Angaben zwingend benötigen.\nIch habe fälschlicherweise das folgende Produkt erhalten: \nMenge: \nEAN-Code (Strichcode auf der Verpackung): \nIch vermisse folgendes Produkt: ",
              'frMailTemplate' : "Veuillez noter que les informations suivantes sont obligatoires.\nJ'ai reçu le produit suivant par erreur : \nQuantité : \nCode EAN (code barre sur l'emballage) : \nIl me manque le produit suivant : ",
              'itMailTemplate' : "Si prega di notare che le seguenti informazioni sono obbligatorie.\nHo ricevuto il seguente prodotto per errore: \nQuantità: \nCodice EAN (codice a barre sulla confezione): \nMi manca il seguente prodotto: ",
              "en-USMailTemplate" : "Please note that the following information is mandatory.\nI have received the following product by mistake: \nQuantity: \nEAN code (bar code on the packaging): \nI am missing the following product: "
        },
        "webform_case_missing_product" : {
              'de' : "Nicht immer werden alle Produkte in einem Paket geliefert. Die aktuellen Informationen zum Lieferstatus und deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem erhälst du für jede Lieferung eine separate Versandbestätigung",
              'fr' : "Tous les produits ne sont pas toujours livrés en un seul colis. Vous pouvez trouver les informations actuelles sur l'état de la livraison et vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aperçu de la commande</a> dans votre compte client. En outre, vous recevrez une confirmation d'expédition distincte pour chaque livraison.",
              'it' : "Non tutti i prodotti sono sempre consegnati in un unico pacco. Puoi trovare le informazioni attuali sullo stato di consegna e i tuoi prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente. Inoltre, riceverai una conferma di spedizione separata per ogni consegna.",
              'en-US' : "Not all products are always delivered in one package. You can find the latest information about the delivery status and your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. In addition, you will receive a separate shipping confirmation for each delivery."
        },
        "webform_case_cancel_order" : {
              'de' : "Solange deine Lieferung noch nicht für den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> das unerwünschte Produkt selbstständig stornieren.<br><br>Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + shopURL + "Return' target='blank'>Rückgabe erfassen</a>.",
              'fr' : "Tant que votre commande n'a pas été préparée pour l'expédition, vous pouvez annuler le produit non désiré de manière indépendante en allant dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>.<br><br>Si le produit a déjà été expédié, vous pouvez <a href='" + shopURL + "Return' target='blank'>enregistrer un retour</a> dans votre compte client .",
              'it' : "Finché il tuo ordine non è stato preparato per la spedizione, puoi stornare l’ordine del prodotto che non vuoi più acquistare direttamente nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se il prodotto è già stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='" + shopURL + "Return' target='blank'>registra il reso</a>.",
              'en-US' : "As long as we haven’t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account.<br><br>If the product has already been shipped, you’ll have to <a href='" + shopURL + "Return' target='blank'>register a return</a> in your customer account."
        },
  
        //LEVEL 0: Rückgabe
        "webform_case_return" : {
            'de' : "Die Rückgabe für ein Produkt kannst du direkt in deinem Kundenkonto unter <a href='" + shopURL + "order' target='blank'>Bestellungen</a> oder auf der <a href='" + shopURL + "after-sales' target='blank'>Rückgabeseite</a> erfassen.",
            'fr' : "Vous pouvez saisir le retour d'un produit directement dans votre compte client sous les <a href='" + shopURL + "order' target='blank'>commandes</a> ou sur la <a href='" + shopURL + "after-sales' target='blank'>page des retours</a>.",
            'it' : "Puoi inserire il reso di un prodotto direttamente nel tuo account cliente sotto gli <a href='" + shopURL + "order' target='blank'>ordini</a> o nella <a href='" + shopURL + "after-sales' target='blank'>pagina dei resi</a>.",
            'en-US' : "You can enter the return for a product directly in your customer account under <a href='" + shopURL + "order' target='blank'>orders</a> or on the <a href='" + shopURL + "after-sales' target='blank'>returns page</a>."
        },
        "webform_case_return_status" : {
              'de' : "Unter <a href='" + shopURL + "after-sales/service-cases' target='blank'>\"Alle Rücksendungen\"</a> findest du eine Übersicht und den aktuellen Status zu allen von dir eingereichten Rückgaben und Garantiefällen.",
              'fr' : "Sous la rubrique « <a href='" + shopURL + "after-sales/service-cases' target='blank'>Tous les retours</a> », vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",
              'it' : "Sotto <a href='" + shopURL + "after-sales/service-cases' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",
              'en-US' : "Go to <a href='" + shopURL + "after-sales/service-cases' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases."
        },
        "webform_case_creditnote" : {
              'de' : "Alle deine offenen und eingelösten Gutschriften findest du <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>hier</a>. Du kannst diese <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rückerstatten lassen</a> oder direkt in einer neuen Bestellung <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>einlösen</a>.",
              'fr' : "Vous pouvez trouver tous vos crédits ouverts et échangés <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>ici</a>. Vous pouvez vous les <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>faire rembourser</a> ou les <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>échanger</a> directement contre une nouvelle commande.",
              'it' : "Puoi trovare tutti i tuoi crediti aperti e riscattati <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>qui</a>. Potete farveli <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rimborsare</a> o <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>riscattarli</a> direttamente per un nuovo ordine.",
              'en-US' : "You can find all your open and redeemed credits <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>here</a>. You can have them <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>refunded</a> or <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>redeem</a> them directly in a new order."
        },
  
        //LEVEL 0: Zahlungen, Mahnungen und Rückestattungen
        "webform_case_refund" : {
              'de' : "Du kannst die Rückerstattung einer Gutschrift <a href='" + helpcenterURL +"articles" + hp3 + "-Rückerstattung-einer-Gutschrift' target='blank'>in wenigen Schritten selbst vornehmen</a>.<br>Bitte beachte, dass die Geldüberweisung in der Regel 1-5 Werktage in Anspruch nimmt.<br>Rückerstattungen auf deine Kreditkarte werden auf deiner nächsten Kreditkartenabrechnung ersichtlich.",
              'fr' : "Vous pouvez effectuer vous-même le remboursement <a href='" + helpcenterURL + "articles" + hp3 + "-Que-faire-pour-lancer-le-processus-de-remboursement-' target='blank'>d'un avoir en quelques étapes</a>.<br>Veuillez noter que le virement prend habituellement entre 1 à 5 jours ouvrables.<br>Les remboursements sur votre carte de crédit figureront sur votre prochain relevé de carte de crédit.",
              'it' : "Puoi avviare <a href='" + helpcenterURL + "articles" + hp3 + "-Come-faccio-a-richiedere-il-rimborso-' target='blank'>il rimborso di un credito autonomamente</a>.<br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 5 giorni lavorativi.<br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",
              'en-US' : "To refund a credit note, <a href='" + helpcenterURL + "articles" + hp3 + "-How-do-I-get-a-refund-' target='blank'>please follow the simple steps described in this article</a>.<br>Please bear in mind that transfers usually take one to five working days.<br>Refunds to your credit card will appear on your next credit card statement."
        },
        "webform_case_receipt" : {
              'de' : "Sämtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Menüpunkt <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gewünschten Auftrag auswählst.<br><br>Rechnungsbelege für Bestellungen, welche du per Rechnung getätigt hast, findest du <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>.",
              'fr' : "Vous trouverez tous les reçus, certificats de garantie et autres à la rubrique <a href='" + shopURL + "Order' target='blank'>commandes</a> dans votre compte client en sélectionnant la commande souhaitée.<br><br>Vous trouverez <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes payées sur facture.",
              'it' : "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l’articolo desiderato.<br><br><a href='" + shopURL + "Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",
              'en-US' : "All sales receipts and warranty certificates are saved in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You’ll find the sales receipt for all orders you paid by invoice <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>here</a>."
        },
        "webform_case_payment_reminder" : {
              'de' : "Es kann bis zu fünf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung überschnitten hat. In diesem Fall kannst du die Mahnung ignorieren.<br>Weitere Möglichkeiten woran es liegen kann findest du unter <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Ich habe eine Mahnung erhalten, obwohl ich bezahlt habe</a>.",
              'fr' : "Jusqu'à cinq jours ouvrables peuvent s'écouler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient croisés. Dans ce cas, vous pouvez ignorer le rappel.<br>Vous trouverez d'autres raisons possibles sous <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Pourquoi ai-je reçu un rappel de paiement alors que ma commande est réglée ?</a>",
              'it' : "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. È possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso puoi ignorare il promemoria.<br>Puoi trovare altri possibili motivi sotto <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Perché ho ricevuto un sollecito nonostante abbia già pagato?</a>",
              'en-US' : "It can take up to five working days until your payment arrives in our system. Therefore, it’s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br>You can find more possibilities under <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>I have received a reminder even though I paid for my order</a>."
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
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_network" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_consumer" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_photo" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_home" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_diy" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>",
              'it' : "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
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
        "outputUpvoteFeedbackButtonText" : {
            'de' : "Vielen Dank für Dein Feedback.<br><br>",
            'fr' : "Merci pour vos commentaires.<br><br>",
            'it' : "Grazie per il vostro feedback.<br><br>",
            'en-US' : "Thank you for your feedback.<br><br>"
      },
      "outputDownvoteFeedbackButtonText" : {
          'de' : "Warum war die Information nicht hilfreich?<br><br>",
          'fr' : "Pourquoi les informations n'ont-elles pas été utiles ?<br><br>",
          'it' : "Perché le informazioni non sono state utili?<br><br>",
          'en-US' : "Why was the information not helpful?<br><br>"
    },
    "outputDownvoteFeedbackButtonText2" : {
          'de' : "<br>Vielen Dank für deinen Verbesserungsvorschlag.<br><br>",
          'fr' : "<br>Merci pour votre suggestion d'amélioration.<br><br>",
          'it' : "<br>Grazie per il vostro suggerimento di miglioramento.<br><br>",
          'en-US' : "<br>Thank you for your suggestion for improvement.<br><br>"
    },
    "outputRadiobuttonFeedback1" : {
          'de' : " Die Informationen sind falsch oder verwirrend.",
          'fr' : " Les informations sont erronées ou confuses.",
          'it' : " Le informazioni sono sbagliate o confuse.",
          'en-US' : " The information is incorrect or confusing."
    },
    "outputRadiobuttonFeedback2" : {
          'de' : " Die Informationen sind unvollständig.",
          'fr' : " L'information est incomplète.",
          'it' : " Le informazioni sono incomplete.",
          'en-US' : " The information is incomplete."
    },
    "outputRadiobuttonFeedback3" : {
          'de' : " Ich wünsche mir einen besseren Service.",
          'fr' : " J'aimerais voir un meilleur service.",
          'it' : " Vorrei vedere un servizio migliore.",
          'en-US' : " I would like to see better service."
    },
    "outputRadiobuttonFeedback4" : {
          'de' : " Es gibt einen fehlerhaften Link, ein fehlendes Bild oder einen Tippfehler.",
          'fr' : " Il y a un lien brisé, une image manquante ou une faute de frappe.",
          'it' : " C'è un link rotto, un'immagine mancante o un errore di battitura.",
          'en-US' : " There is a broken link, missing image, or typo."
    },
    "outputButtonFeedback" : {
          'de' : "Senden",
          'fr' : "Envoyer",
          'it' : "Invia",
          'en-US' : "Send"
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
  
        //TODO: Galaxus AT links prüfen
      if (portal == 'helpcenter.galaxus.de' || portal == 'helpcenter.galaxus.at'){
        infoBoxWording['webform_case_not_working_product']['de'] = "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/5547' target='blank'>Gewährleistungsinformationen</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>.";
        infoBoxWording['webform_case_shipping_status']['de'] = "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas länger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.";
        infoBoxWording['webform_case_order_status']['de'] = "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.";
        infoBoxWording['webform_case_payment_reminder']['de'] = "Es kann bis zu fünf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung überschnitten hat. In diesem Fall kannst du die Mahnung ignorieren.<br>Weitere Möglichkeiten woran es liegen kann findest du unter <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Warum habe ich eine Zahlungserinnerung erhalten, obwohl ich bezahlt habe?</a>.";
        }
      if (typeof customerType !== 'undefined') {  
      if (customerType == 'business-customer') {
        infoBoxWording['webform_case_delete_account']['de'] = 'Nachdem dein Konto gelöscht wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch benötigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto löschen lässt.<br><br>Kontaktiere unseren Kundendienst, um die Löschung deines Kontos einzuleiten.';
        infoBoxWording['webform_case_delete_account']['fr'] = "Une fois votre compte supprimé, vous n'aurez plus accès à vos reçus électroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>Contactez notre service clientèle pour entamer la suppression de votre compte.";
        infoBoxWording['webform_case_delete_account']['it'] = 'Una volta eliminato il conto, non avrai più accesso alle tue ricevute e documenti elettronici. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Contatta il nostro servizio clienti per avviare la cancellazione del tuo account.';
        infoBoxWording['webform_case_delete_account']['en-US'] = 'Once your account is deleted, you will no longer have access to your sales receipts and other documents. That’s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>Contact our customer service to initiate the deletion of your account.';
    }}


        return infoBoxWording;
  }
  
  