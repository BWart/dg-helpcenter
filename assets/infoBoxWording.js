function fillInfoBoxWording() {

      let shopURL = "";
      let helpcenterURL = "";

      let hp1 = "";
      let hp2 = "";
      let hp3 = "";
      let hp4 = "";
      let hp5 = "";
      let hp6 = "";
      let hp7 = "";
      let hp8 = "";
      let hp = "";
      let offerte = "";
      let agbWikiNumber = "";

      let seite = "";
      let shopLinkName = "";

      // Hostname korrekt in der JSON in den Links hinterlegen
      // Helpcenter Links richtig hinterlegen (Helpcenter-spezifische-Nummern); var "hp"
      // Beitrag Seitennamen werden dynamisch angepasst, var "seite"
      switch (portal) {
            case 'helpcenter.digitec.ch':
                  shopURL = "https://www.digitec.ch/";

                  helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                  seite = "digitec";
                  shopLinkName = "digitec.ch"

                  hp1 = "/115005646225";
                  hp2 = "/360012370979";
                  hp3 = "/360014638579";
                  hp4 = "/360010272859";
                  hp5 = "/360012795199";
                  hp6 = "/115005646085";
                  hp7 = "/360000452549";
                  hp8 = "/9229492228114";
                  hp9 = "/360000010699";

                  agbWikiNumber = "478";

                  offerte = "CHF 5'000.-";
                  break;
            case 'helpcenter.galaxus.ch':
                  shopURL = "https://www.galaxus.ch/";

                  helpcenterURL = "https://helpcenter.galaxus.ch/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.ch"

                  hp1 = "/360007334359";
                  hp2 = "/360012372239";
                  hp3 = "/360007333839";
                  hp4 = "/360010180420";
                  hp5 = "/360012690580";
                  hp6 = "/360007334059";
                  hp7 = "/360014471940";
                  hp8 = "/9229468573714";
                  hp9 = "/360007333959";

                  agbWikiNumber = "478";

                  offerte = "CHF 5'000.-";
                  break;
            case 'helpcenter.galaxus.de':
                  shopURL = "https://www.galaxus.de/";

                  helpcenterURL = "https://helpcenter.galaxus.de/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.de"

                  hp1 = "/360008216899";
                  hp2 = "";
                  hp3 = "/360016850820";
                  hp4 = "/360010273099";
                  hp5 = "/360008151740";
                  hp6 = "/360010182760";
                  hp7 = "/360008226499";
                  hp8 = "/9229681720466";
                  hp9 = "/360008142520";

                  agbWikiNumber = "5589";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.at':
                  shopURL = "https://www.galaxus.at/"

                  helpcenterURL = "https://helpcenter.galaxus.at/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.at"

                  hp1 = "/4403441880850";
                  hp2 = "";
                  hp3 = "/4407053718930";
                  hp4 = "/4407061056530";
                  hp5 = "/4406990238482";
                  hp6 = "/4407011198994";
                  hp7 = "/4407007830674";
                  hp8 = "/9229717842962";
                  hp9 = "/4407067390610";

                  agbWikiNumber = "6031";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.fr':
                  shopURL = "https://www.galaxus.fr/"

                  helpcenterURL = "https://helpcenter.galaxus.fr/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.fr"

                  hp1 = "/7699726055314";
                  hp2 = "";
                  hp3 = "/7976197781522";
                  hp4 = "/7976051973010";
                  hp5 = "/7699523560466";
                  hp6 = "/7971569619602";
                  hp7 = "/7706724974866";
                  hp8 = "/9232516283026";
                  hp9 = "/7971613275794";

                  agbWikiNumber = "6123";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.it':
                  shopURL = "https://www.galaxus.it/"

                  helpcenterURL = "https://helpcenter.galaxus.it/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.it"

                  hp1 = "/8177762057234";
                  hp2 = "";
                  hp3 = "/8177762652306";
                  hp4 = "/8177794568722";
                  hp5 = "/8177760246418";
                  hp6 = "/8177762450066";
                  hp7 = "/8177794011666";
                  hp8 = "/9249985259154";
                  hp9 = "/8177794311954";

                  agbWikiNumber = "6135";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.be':
                  shopURL = "https://www.galaxus.be/"

                  helpcenterURL = "https://helpcenter.galaxus.be/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.be"

                  hp1 = "/8471528270994";
                  hp2 = "";
                  hp3 = "/8471529178002";
                  hp4 = "/8471545059218";
                  hp5 = "/8471528046994";
                  hp6 = "/8471544448530";
                  hp7 = "/8471528329618";
                  hp8 = "/9979919377810";
                  hp9 = "/8471544580754";

                  agbWikiNumber = "6141";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.nl':
                  shopURL = "https://www.galaxus.nl/"

                  helpcenterURL = "https://helpcenter.galaxus.nl/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.nl"

                  hp1 = "/8178022883090";
                  hp2 = "";
                  hp3 = "/8178008370706";
                  hp4 = "/8178008399634";
                  hp5 = "/8178022714130";
                  hp6 = "/8178008143634";
                  hp7 = "/8178022947858";
                  hp8 = "/9979883676818";
                  hp9 = "/8178023245586";

                  agbWikiNumber = "6141";

                  offerte = "EUR 5'000.-";
                  break;
            case 'helpcenter.galaxus.lu':
                  shopURL = "https://www.galaxus.lu/"

                  helpcenterURL = "https://helpcenter.galaxus.lu/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.lu"

                  hp1 = "/10145044378386";
                  hp2 = "";
                  hp3 = "/10145019716626";
                  hp4 = "/10145019750674";
                  hp5 = "/10145018917138";
                  hp6 = "/10145019437202";
                  hp7 = "/10145019165970";
                  hp8 = "/10145019814674";
                  hp9 = ""

                  agbWikiNumber = "6141";

                  offerte = "EUR 5'000.-";
                  break;
            default:
                  shopURL = "https://www.galaxus.ch/";

                  helpcenterURL = "https://helpcenter.galaxus.ch/hc/";
                  seite = "Galaxus";
                  shopLinkName = "galaxus.ch"

                  hp1 = "/360007334359";
                  hp2 = "/360012372239";
                  hp3 = "/360007333839";
                  hp4 = "/360010180420";
                  hp5 = "/360012690580";
                  hp6 = "/360007334059";
                  hp7 = "/360014471940";
                  hp8 = "/9229468573714";
                  hp9 = "/360007333959";

                  agbWikiNumber = "478";

                  offerte = "CHF 5'000.-";
                  break;
      }

      var infoBoxWording = {
            //ALLE ANDERWEITIGEN ANFRAGEN
            "webform_case_other_request_order": {
                  'de': "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein oder möchtest du ein Produkt zurückgeben, kannst du dies in deinem Kundenkonto <a href='" + shopURL + "after-sales' target='blank'>anmelden</a>.",
                  'fr': "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux ou si vous souhaitez retourner un produit, vous pouvez l'<a href='" + shopURL + "after-sales' target='blank'>enregistrer</a> dans votre compte client.",
                  'it': "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br> Se un prodotto è difettoso o se si desidera restituire un prodotto, è possibile <a href='" + shopURL + "after-sales' target='blank'>registrare</a> questa operazione nel proprio account cliente.",
                  'en-US': "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br> If a product is defective or should you want to return a product, you can <a href='" + shopURL + "after-sales' target='blank'>register</a> this in your customer account.",
                  'nl': "Actuele informatie over de leveringsstatus, aankoopbewijzen, garantiebewijzen en meer vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount.<br><br>Is een product defect of wilt u een product retourneren, dan kunt u dit <a href='" + shopURL + "after-sales' target='blank'>registreren</a> in uw klantenaccount."
            },
            "webform_case_other_request_returns": {
                  'de': "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein oder möchtest du ein Produkt zurückgeben, kannst du dies in deinem Kundenkonto <a href='" + shopURL + "after-sales' target='blank'>anmelden</a>.",
                  'fr': "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux ou si vous souhaitez retourner un produit, vous pouvez l'<a href='" + shopURL + "after-sales' target='blank'>enregistrer</a> dans votre compte client.",
                  'it': "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso o se si desidera restituire un prodotto, è possibile <a href='" + shopURL + "after-sales' target='blank'>registrare</a> questa operazione nel proprio account cliente.",
                  'en-US': "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>If a product is defective or should you want to return a product, you can <a href='" + shopURL + "after-sales' target='blank'>register</a> this in your customer account.",
                  'nl': "Actuele informatie over de leveringsstatus, aankoopbewijzen, garantiebewijzen en meer vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount.<br><br>Is een product defect of wilt u een product retourneren, dan kunt u dit <a href='" + shopURL + "after-sales' target='blank'>registreren</a> in uw klantenaccount."
            },
            "webform_case_other_request_payment": {
                  'de': "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein oder möchtest du ein Produkt zurückgeben, kannst du dies in deinem Kundenkonto <a href='" + shopURL + "after-sales' target='blank'>anmelden</a>.",
                  'fr': "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux ou si vous souhaitez retourner un produit, vous pouvez l'<a href='" + shopURL + "after-sales' target='blank'>enregistrer</a> dans votre compte client.",
                  'it': "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso o se si desidera restituire un prodotto, è possibile <a href='" + shopURL + "after-sales' target='blank'>registrare</a> questa operazione nel proprio account cliente.",
                  'en-US': "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>If a product is defective or should you want to return a product, you can <a href='" + shopURL + "after-sales' target='blank'>register</a> this in your customer account.",
                  'nl': "Actuele informatie over de leveringsstatus, aankoopbewijzen, garantiebewijzen en meer vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount.<br><br>Is een product defect of wilt u een product retourneren, dan kunt u dit <a href='" + shopURL + "after-sales' target='blank'>registreren</a> in uw klantenaccount."
            },
            "webform_case_other_request_account": {
                  'de': "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein oder möchtest du ein Produkt zurückgeben, kannst du dies in deinem Kundenkonto <a href='" + shopURL + "after-sales' target='blank'>anmelden</a>.",
                  'fr': "Dans l'<a href='" + shopURL + "Order' target='blank'>aperçu des commandes</a> de votre compte client, vous pouvez consulter les dernières informations relatives au statut de livraison de vos produits et tous les reçus, certificats de garantie.<br><br>Si un produit est défectueux ou si vous souhaitez retourner un produit, vous pouvez l'<a href='" + shopURL + "after-sales' target='blank'>enregistrer</a> dans votre compte client.",
                  'it': "Trovi informazioni più dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto è difettoso o se si desidera restituire un prodotto, è possibile <a href='" + shopURL + "after-sales' target='blank'>registrare</a> questa operazione nel proprio account cliente.",
                  'en-US': "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>If a product is defective or should you want to return a product, you can <a href='" + shopURL + "after-sales' target='blank'>register</a> this in your customer account.",
                  'nl': "Actuele informatie over de leveringsstatus, aankoopbewijzen, garantiebewijzen en meer vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount.<br><br>Is een product defect of wilt u een product retourneren, dan kunt u dit <a href='" + shopURL + "after-sales' target='blank'>registreren</a> in uw klantenaccount."
            },

            //LEVEL 0: Wo ist meine Bestellung?
            "webform_case_shipping_status": {
                  'de': "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas länger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.",
                  'fr': "Vous trouverez les informations actuelles sur l'état de livraison de vos produits dans l'<a href='" + shopURL + "Order' target='blank'>aperçu de la commande</a> dans votre compte client. Vous y trouverez également le numéro de suivi de votre colis.<br><br>Malheureusement, il se peut qu'un colis reste en route un peu plus longtemps ou qu'il atterrisse chez votre voisin. Si le colis ne se présente pas après quelques jours, nous nous ferons un plaisir d'ouvrir une enquête.",
                  'it': "Le informazioni aggiornate sullo stato di consegna dei prodotti sono disponibili nella <a href='" + shopURL + "Order' target='blank'>panoramica degli ordini</a> del vostro conto cliente. Lì troverete anche il numero di spedizione del vostro pacco.<br><br>Purtroppo, a volte un pacco può tardare ad arrivare o finire a casa del vicino. Se il pacco non arriva dopo alcuni giorni, saremo lieti di avviare un'indagine.",
                  'en-US': "You can find the current information about the delivery status of your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. There you will also find the tracking number of your package.<br><br>Unfortunately, a package may be on the way a little longer or it may end up with your neighbor. If the package does not show up after a few days, we will gladly initiate an investigation.",
                  'nl': "De actuele informatie over de leveringsstatus van uw producten vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount. Daar vindt u ook het trackingnummer van uw pakket.<br><br>Helaas kan een pakket soms wat langer op zich laten wachten of bij de buren terechtkomen. Als het pakket na enkele dagen niet is aangekomen, stellen wij graag een onderzoek in.",
                  'deMailTemplate': "Welche Artikel fehlen: \nSendungsnummer: ",
                  'frMailTemplate': "Quels sont les articles manquants : \nNuméro de suivi : ",
                  'itMailTemplate': "Quali articoli mancano: \nNumero di spedizione: ",
                  'en-USMailTemplate': "Which articles are missing: \nConsignment number: ",
                  'nlMailTemplate': "Welke items ontbreken: \nZendingnummer: "
            },
            "webform_case_ready_for_shipment": {
                  'de': "Erst wenn alle Produkte deiner Bestellung ab Lager verfügbar sind, wird die Bestellung versendet. Soll es schneller gehen kannst du eine <a href='" + helpcenterURL + "articles" + hp1 + "' target='blank'>kostenlose Teillieferung aktivieren</a>.",
                  'fr': "La commande ne sera expédiée que lorsque tous les produits de votre commande seront prêts à être envoyés. Pour accélérer ce processus, vous pouvez activer la <a href='" + helpcenterURL + "articles" + hp1 + "' target='blank'>livraison partielle</a>.",
                  'it': "Solo quando tutti i prodotti del tuo ordine saranno pronti per essere spediti, l'ordine verrà inviato. Se vuoi che sia più veloce, puoi attivare gratuitamente la <a href='" + helpcenterURL + "articles" + hp1 + "' target='blank'>consegna parziale</a>.",
                  'en-US': "We don't ship the order until all your products are in the warehouse and «ready for shipment». If you need any items sooner, please <a href='" + helpcenterURL + "articles" + hp1 + "' target='blank'>activate partial delivery</a>.",
                  'nl': "Pas als alle producten van uw bestelling op voorraad zijn, wordt de bestelling verzonden. Als u wilt dat het sneller gaat, kunt u een <a href='" + helpcenterURL + "articles" + hp1 + "' target='blank'>gratis deellevering activeren</a>."
            },
            "webform_case_order_status": {
                  'de': "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto.<br><br>Mehr Informationen zu den Versandstatus, findest du unter <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Wo ist mein Paket und wann erhalte ich meine Bestellung?</a>",
                  'fr': "Vous pouvez trouver les informations actuelles sur l'état de la livraison de vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aperçu de la commande</a> dans votre compte client.<br><br>Pour plus d'informations sur l'état d'expédition, voir <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Où est mon colis et quand vais-je recevoir ma commande ?</a>",
                  'it': "Potete trovare le informazioni attuali sullo stato di consegna dei vostri prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente.<br><br>Per maggiori informazioni sullo stato della spedizione, vedi <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Quando riceverò il mio ordine?</a>",
                  'en-US': "You can find the latest information on the delivery status of your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>You can find more information about the shipping status at <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Where’s my order and when will I receive it?</a>",
                  'nl': "De actuele informatie over de leveringsstatus van uw producten vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount.<br><br>Meer informatie over de verzendstatus vindt u onder <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Waar is mijn pakket en wanneer ontvang ik mijn bestelling?</a>"
            },

            //LEVEL 0: Probleme mit einer Bestellung
            "webform_case_damaged_product": {
                  'de': "Du kannst deinen Transportschaden innerhalb von 8 Tagen nach Erhalt als <a href='" + shopURL + "after-sales' target='blank'>defektes Produkt anmelden</a>.",
                  'fr': "Dans les 8 jours suivant la réception, vous pouvez <a href='" + shopURL + "after-sales' target='blank'>faire enregistrer</a> les dommages causés par le transport <a href='" + shopURL + "after-sales' target='blank'>comme un produit défectueux.</a>",
                  'it': "Entro 8 giorni dal ricevimento, è possibile <a href='" + shopURL + "after-sales' target='blank'>segnalare</a> il danno da trasporto <a href='" + shopURL + "after-sales' target='blank'>come prodotto difettoso</a>.",
                  'en-US': "Within 8 days after receipt, you can <a href='" + shopURL + "after-sales' target='blank'>register</a> your transport damage <a href='" + shopURL + "after-sales' target='blank'>as a defective product.</a>",
                  'nl': "U kunt uw transportschade binnen 8 dagen na ontvangst <a href='" + shopURL + "after-sales' target='blank'>aanmelden als defect product</a>."
            },
            "webform_case_not_working_product": {
                  'de': "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "guide/14' target='blank'>Garantierichtlinien</a> sowie in unseren <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>AGBs</a>.",
                  'fr': "Si un produit est défectueux et s'il peut être pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales' target='blank'>signaler un défaut</a>.<br><br>Les dommages causés par une utilisation inappropriée ne sont pas couverts par la garantie. Vous trouverez un complément d'information concernant ce point dans nos <a href='" + shopURL + "guide/14' target='blank'>conditions de garantie</a> et <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>CGV</a>.",
                  'it': "Se un prodotto è difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales' target='blank'>segnala un difetto</a>.<br><br>I danni dovuti ad un uso improprio non sono coperti dalla garanzia. Puoi trovare ulteriori informazioni nelle nostre <a href='" + shopURL + "guide/14' target='blank'>condizioni di garanzia</a> e nelle <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>CGC</a>.",
                  'en-US': "Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales' target='blank'>report a defect</a>.<br><br>Damage caused by incorrect use is not covered by the warranty. For more information, see our <a href='" + shopURL + "guide/14' target='blank'>warranty policy</a> and our <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>terms and conditions</a>.",
                  'nl': "Als een product defect is en het een garantiegeval betreft, moet u een <a href='" + shopURL + "after-sales' target='blank'>defect registreren</a> in uw klantenaccount.<br><br>Schade veroorzaakt door oneigenlijk gebruik valt niet onder de garantie. Meer informatie vindt u in ons <a href='" + shopURL + "guide/14' target='blank'>garantiebeleid</a> en in onze <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>algemene voorwaarden</a>."
            },
            "webform_case_wrong_product": {
                  'de': "Damit wir dein Anliegen rasch prüfen können, stelle uns die Herstellernummer oder den EAN-Code (Strichcode) des falsch erhaltenen Produkt zur Verfügung. Der EAN-Code befindet sich auf der Produktverpackung und dient dazu ein Produkt zweifelsfrei zu identifizieren. Er besteht aus einem Strichcode, respektive Barcode, und 13 Ziffern:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
                  'fr': "Afin que nous puissions vérifier rapidement votre demande, veuillez nous fournir le numéro du fabricant ou le code EAN (code-barres) du produit reçu de manière incorrecte.  Le code EAN se trouve sur l'emballage du produit et permet d'identifier un produit sans aucun doute. Il se compose d'un code-barres et de 13 chiffres :<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
                  'it': "Affinché possiamo controllare rapidamente la sua richiesta, la preghiamo di fornirci il numero del produttore o il codice EAN (codice a barre) del prodotto ricevuto in modo errato. Il codice EAN si trova sulla confezione del prodotto e serve per identificare un prodotto senza alcun dubbio. Consiste in un codice a barre e 13 cifre:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
                  'en-US': "To enable us to quickly check your request, please provide us with the manufacturer number or EAN code (barcode) of the incorrectly received product. The EAN code can be found on the product packaging and is used to identify a product without any doubt. It consists of a barcode and 13 digits:<div style='width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
                  'nl': "Opdat wij uw aanvraag snel kunnen controleren, verzoeken wij u ons het nummer van de fabrikant of de EAN-code (barcode) van het verkeerd ontvangen product mee te delen. De EAN-code staat op de verpakking van het product en dient om een product zonder enige twijfel te identificeren. Hij bestaat uit een streepjescode en 13 cijfers:<div style='width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
                  'deMailTemplate': "Bitte beachte, dass wir nachfolgende Angaben zwingend benötigen.\nIch habe fälschlicherweise das folgende Produkt erhalten: \nMenge: \nEAN-Code (Strichcode auf der Verpackung): \nIch vermisse folgendes Produkt: ",
                  'frMailTemplate': "Veuillez noter que les informations suivantes sont obligatoires.\nJ'ai reçu le produit suivant par erreur : \nQuantité : \nCode EAN (code barre sur l'emballage) : \nIl me manque le produit suivant : ",
                  'itMailTemplate': "Si prega di notare che le seguenti informazioni sono obbligatorie.\nHo ricevuto il seguente prodotto per errore: \nQuantità: \nCodice EAN (codice a barre sulla confezione): \nMi manca il seguente prodotto: ",
                  "en-USMailTemplate": "Please note that the following information is mandatory.\nI have received the following product by mistake: \nQuantity: \nEAN code (bar code on the packaging): \nI am missing the following product: ",
                  "nlMailTemplate": "De volgende informatie is verplicht.\nIk heb per ongeluk het volgende product ontvangen: \nHoeveelheid: \nEAN code (barcode op de verpakking): \nIk mis het volgende product: "
            },
            "webform_case_missing_product": {
                  'de': "Nicht immer werden alle Produkte in einem Paket geliefert. Die aktuellen Informationen zum Lieferstatus und deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestellübersicht</a> in deinem Kundenkonto. Zudem erhälst du für jede Lieferung eine separate Versandbestätigung.",
                  'fr': "Tous les produits ne sont pas toujours livrés en un seul colis. Vous pouvez trouver les informations actuelles sur l'état de la livraison et vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aperçu de la commande</a> dans votre compte client. En outre, vous recevrez une confirmation d'expédition distincte pour chaque livraison.",
                  'it': "Non tutti i prodotti sono sempre consegnati in un unico pacco. Puoi trovare le informazioni attuali sullo stato di consegna e i tuoi prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente. Inoltre, riceverai una conferma di spedizione separata per ogni consegna.",
                  'en-US': "Not all products are always delivered in one package. You can find the latest information about the delivery status and your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. In addition, you will receive a separate shipping confirmation for each delivery.",
                  'nl': "Niet alle producten worden altijd in één pakket geleverd. De actuele informatie over de leveringsstatus en uw producten vindt u in het <a href='" + shopURL + "Order' target='blank'>besteloverzicht</a> in uw klantenaccount. Ook ontvangt u voor elke levering een aparte verzendbevestiging."
            },
            "webform_case_cancel_order": {
                  'de': "Solange deine Lieferung noch nicht für den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> das unerwünschte Produkt selbstständig stornieren.<br><br>Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + shopURL + "Return' target='blank'>Rückgabe erfassen</a>.",
                  'fr': "Tant que votre commande n'a pas été préparée pour l'expédition, vous pouvez annuler le produit non désiré de manière indépendante en allant dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>.<br><br>Si le produit a déjà été expédié, vous pouvez <a href='" + shopURL + "Return' target='blank'>enregistrer un retour</a> dans votre compte client .",
                  'it': "Finché il tuo ordine non è stato preparato per la spedizione, puoi stornare l’ordine del prodotto che non vuoi più acquistare direttamente nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se il prodotto è già stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='" + shopURL + "Return' target='blank'>registra il reso</a>.",
                  'en-US': "As long as we haven’t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account.<br><br>If the product has already been shipped, you’ll have to <a href='" + shopURL + "Return' target='blank'>register a return</a> in your customer account.",
                  'nl': "Zolang uw levering nog niet verzendklaar is gemaakt, kunt u het ongewenste product zelf annuleren in uw klantenaccount onder <a href='" + shopURL + "Order' target='blank'>Bestellingen</a>.<br><br>Als het product al verzonden is, kunt u in uw klantenaccount een <a href='" + shopURL + "Return' target='blank'>retour invoeren</a>."
            },

            //LEVEL 0: Rückgabe
            "webform_case_return": {
                  'de': "Die Rückgabe für ein Produkt kannst du direkt in deinem Kundenkonto auf der <a href='" + shopURL + "after-sales' target='blank'>Rückgabeseite</a> erfassen.",
                  'fr': "Vous pouvez saisir le retour d'un produit directement dans votre compte client sur la <a href='" + shopURL + "after-sales' target='blank'>page des retours</a>.",
                  'it': "Puoi inserire il reso di un prodotto direttamente nel tuo account cliente nella <a href='" + shopURL + "after-sales' target='blank'>pagina dei resi</a>.",
                  'en-US': "You can enter the return for a product directly in your customer account on the <a href='" + shopURL + "after-sales' target='blank'>returns page</a>.",
                  'nl': "U kunt de retourzending voor een product rechtstreeks in uw klantenaccount invoeren op de <a href='" + shopURL + "after-sales' target='blank'>retourpagina</a>."
            },
            "webform_case_return_status": {
                  'de': "Unter <a href='" + shopURL + "after-sales/service-cases' target='blank'>\"Alle Rücksendungen\"</a> findest du eine Übersicht und den aktuellen Status zu allen von dir eingereichten Rückgaben und Garantiefällen.",
                  'fr': "Sous la rubrique « <a href='" + shopURL + "after-sales/service-cases' target='blank'>Tous les retours</a> », vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",
                  'it': "Sotto <a href='" + shopURL + "after-sales/service-cases' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",
                  'en-US': "Go to <a href='" + shopURL + "after-sales/service-cases' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases.",
                  'nl': "Onder <a href='" + shopURL + "after-sales/service-cases' target='blank'>\"Alle retouren\"</a> vindt u een overzicht en de huidige status van alle door u ingediende retouren en garantiegevallen."
            },
            "webform_case_creditnote": {
                  'de': "Alle deine offenen und eingelösten Gutschriften findest du <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>hier</a>. Du kannst diese <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rückerstatten lassen</a> oder direkt in einer neuen Bestellung <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>einlösen</a>.",
                  'fr': "Vous pouvez trouver tous vos crédits ouverts et échangés <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>ici</a>. Vous pouvez vous les <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>faire rembourser</a> ou les <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>échanger</a> directement contre une nouvelle commande.",
                  'it': "Puoi trovare tutti i tuoi crediti aperti e riscattati <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>qui</a>. Potete farveli <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rimborsare</a> o <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>riscattarli</a> direttamente per un nuovo ordine.",
                  'en-US': "You can find all your open and redeemed credits <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>here</a>. You can have them <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>refunded</a> or <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>redeem</a> them directly in a new order.",
                  'nl': "<a href='" + shopURL + "invoice/listcreditnotes' target='blank'>Hier</a> vindt u al uw openstaande en ingewisselde credits. U kunt ze <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>laten terugbetalen</a> of direct <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>inwisselen</a> voor een nieuwe bestelling."
            },

            //LEVEL 0: Zahlungen, Mahnungen und Rückestattungen
            "webform_case_refund": {
                  'de': "Du kannst die Rückerstattung einer Gutschrift <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>in wenigen Schritten selbst vornehmen</a>.<br>Bitte beachte, dass die Geldüberweisung in der Regel 1-5 Werktage in Anspruch nimmt.<br>Rückerstattungen auf deine Kreditkarte werden auf deiner nächsten Kreditkartenabrechnung ersichtlich.",
                  'fr': "Vous pouvez effectuer vous-même le remboursement <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>d'un avoir en quelques étapes</a>.<br>Veuillez noter que le virement prend habituellement entre 1 à 5 jours ouvrables.<br>Les remboursements sur votre carte de crédit figureront sur votre prochain relevé de carte de crédit.",
                  'it': "Puoi avviare <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>il rimborso di un credito autonomamente</a>.<br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 5 giorni lavorativi.<br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",
                  'en-US': "To refund a credit note, <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>please follow the simple steps described in this article</a>.<br>Please bear in mind that transfers usually take one to five working days.<br>Refunds to your credit card will appear on your next credit card statement.",
                  'nl': "U <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>kunt zelf in een paar stappen</a> een creditnota terugbetalen.<br>Houd er rekening mee dat de overschrijving meestal 1-5 werkdagen in beslag neemt.<br>Terugbetalingen op uw creditcard verschijnen op uw volgende creditcardafschrift."
            },
            "webform_case_receipt": {
                  'de': "Sämtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Menüpunkt <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gewünschten Auftrag auswählst.<br><br>Rechnungsbelege für Bestellungen, welche du per Rechnung getätigt hast, findest du <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>.",
                  'fr': "Vous trouverez tous les reçus, certificats de garantie et autres à la rubrique <a href='" + shopURL + "Order' target='blank'>commandes</a> dans votre compte client en sélectionnant la commande souhaitée.<br><br>Vous trouverez <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes payées sur facture.",
                  'it': "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l’articolo desiderato.<br><br><a href='" + shopURL + "Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",
                  'en-US': "All sales receipts and warranty certificates are saved in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You’ll find the sales receipt for all orders you paid by invoice <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>here</a>.",
                  'nl': "U kunt alle aankoopbewijzen, garantiebewijzen en meer vinden onder het menu-item <a href='" + shopURL + "Order' target='blank'>Bestellingen</a> in uw klantenaccount door de gewenste bestelling te selecteren.<br><br>Factuurbewijzen voor bestellingen die u per factuur heeft geplaatst vindt u <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>."
            },
            "webform_case_payment_reminder": {
                  'de': "Es kann bis zu fünf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung überschnitten hat. In diesem Fall kannst du die Mahnung ignorieren.<br>Weitere Möglichkeiten woran es liegen kann findest du unter <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Ich habe eine Mahnung erhalten, obwohl ich bezahlt habe</a>.",
                  'fr': "Jusqu'à cinq jours ouvrables peuvent s'écouler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient croisés. Dans ce cas, vous pouvez ignorer le rappel.<br>Vous trouverez d'autres raisons possibles sous <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Pourquoi ai-je reçu un rappel de paiement alors que ma commande est réglée ?</a>",
                  'it': "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. È possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso puoi ignorare il promemoria.<br>Puoi trovare altri possibili motivi sotto <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Perché ho ricevuto un sollecito nonostante abbia già pagato?</a>",
                  'en-US': "It can take up to five working days until your payment arrives in our system. Therefore, it’s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br>You can find more possibilities under <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>I have received a reminder even though I paid for my order</a>.",
                  'nl': "Het kan tot vijf werkdagen duren voordat uw betaling in ons systeem staat. Het is dus mogelijk dat de herinnering samenvalt met uw betaling. In dat geval kunt u de aanmaning negeren.<br>Andere mogelijke redenen vind je onder <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Ik heb een herinnering ontvangen terwijl ik wel betaald heb</a>."
            },
            "webform_case_no_bill": {
                  'de': "Wenn der Wert deines Warenkorbs höher ist als dein individuelles Kreditlimit oder du dein Kreditlimit durch noch nicht bezahlte Bestellungen bereits ausgereizt hast, entfällt die Rechnung als Zahlungsoption.<br><br>Bitte beachte: Unser Kundenservice kann die verfügbaren Zahlungsarten sowie das Kreditlimit nicht beeinflussen.",
                  'fr': "Si la valeur de votre panier est supérieure à votre limite de crédit individuelle ou si vous avez déjà épuisé votre limite de crédit par des commandes non encore payées, le paiement sur facture n'est pas applicable.<br><br>Attention : notre service client n'a aucune influence sur les modes de paiement disponibles et sur votre limite de crédit.",
                  'it': "Se il valore del tuo carrello è superiore al tuo limite di credito individuale o se hai già esaurito il tuo limite di credito con ordini non ancora pagati, la modalità di pagamento tramite fattura viene disabilitata.<br><br>Nota bene: il nostro servizio clienti non ha alcun influsso sui metodi di pagamento disponibili o sul tuo limite di credito.",
                  'en-US': "Payment by invoice is not possible if your order costs more than your credit limit allows or if you have reached your credit limit with unpaid orders.<br><br>Please note: our customer service has no influence on the available payment methods and the credit limit.",
                  'nl': "Als de waarde van uw winkelmandje hoger is dan uw individuele kredietlimiet of als u uw kredietlimiet al hebt opgebruikt vanwege onbetaalde bestellingen, is de factuur niet langer beschikbaar als betalingsmogelijkheid.<br><br>Let op: Onze klantenservice kan geen invloed uitoefenen op de beschikbare betaalmethoden of de kredietlimiet."
            },
            "webform_case_dunning_block": {
                  'de': "Die Zahlungsfrist beträgt 20 Tagen und kann generell nicht verlängert werden. Natürlich kann es passieren, dass eine Rechnung einmal übersehen wird. Aus diesem Grund versenden wir nach Ablauf der Zahlungsfrist eine Zahlungserinnerung. Auf der Zahlungserinnerung ist der Zeitraum der Fristerstreckung aufgeführt. Diese Nachfrist ist generell nicht verlängerbar.<br><br>Um zusätzliche Gebühren zu vermeiden, solltest du den ausstehenden Betrag umgehend begleichen. Eine Bestätigung von dir, dass du die Zahlung getätigt hast, ist nicht nötig.",
                  'fr': "Le délai de paiement s'élève à 20 jours et ne peut généralement pas être prolongé. Bien sûr, un oubli de facture peut arriver. C'est pourquoi nous vous enverrons un rappel après l'expiration du délai de paiement. Le rappel de paiement précise la période pour laquelle le délai est prolongé. Ce délai n'est généralement pas prorogeable.<br><br>Pour éviter des frais supplémentaires, vous devez régler le montant dû immédiatement. Une confirmation de votre part du paiement effectué n'est pas nécessaire.",
                  'it': "Il termine di pagamento è di 20 giorni e in generale non può essere prorogato. Naturalmente, può succedere che una fattura vada dimenticata. Per questo motivo, dopo la scadenza del termine di pagamento inviamo un sollecito. Sul sollecito di pagamento è indicato il periodo di proroga del termine. Questo periodo non è generalmente prorogabile.<br><br>Per evitare costi aggiuntivi, effettua immediatamente il pagamento.Non è necessaria una conferma da parte tua di effettuato pagamento.",
                  'en-US': "Our payment deadline is 20 days after the invoice is issued. Generally, this deadline cannot be extended. Of course, we understand that invoices are occasionally overlooked. For this reason, we send a reminder after the payment deadline has expired. The reminder will state the date of the new payment deadline. We cannot extend this final deadline.<br><br>The best way forward is to transfer the amount straight away to avoid any extra charges. There is no need for you to send us a confirmation of payment.",
                  'nl': "De betalingstermijn bedraagt 20 dagen en kan over het algemeen niet worden verlengd. Natuurlijk kan het voorkomen dat een factuur een keer over het hoofd wordt gezien. Daarom sturen wij na het verstrijken van de betalingstermijn een betalingsherinnering. De betalingsherinnering vermeldt de periode waarvoor de termijn is verlengd. Deze termijn kan over het algemeen niet worden verlengd.<br><br>Om extra kosten te voorkomen, moet u het openstaande bedrag onmiddellijk betalen. U hoeft de betaling niet te bevestigen."
            },
            "webform_case_voucher": {
                  'de': "Du hast Fragen zum Einlösen eines Gutscheins? Detaillierte Informationen findest du <a href='" + helpcenterURL + "articles" + hp9 + "' target='blank'>hier</a>.<br><br>Brauchst du weitere Hilfe oder Unterstützung, kontaktiere unseren Kundendienst.",
                  'fr': "Vous avez des questions sur l'utilisation d'un bon ? Vous trouverez des informations détaillées <a href='" + helpcenterURL + "articles" + hp9 + "' target='blank'>ici</a>.<br><br>Si vous avez besoin d'aide ou d'assistance, veuillez contacter notre service clientèle.",
                  'it': "Avete domande sul riscatto di un buono? Potete trovare informazioni dettagliate <a href='" + helpcenterURL + "articles" + hp9 + "' target='blank'>qui</a>.<br><br>Se avete bisogno di ulteriore aiuto o assistenza, contattate il nostro servizio clienti.",
                  'en-US': "Do you have questions about redeeming a voucher? You can find detailed information <a href='" + helpcenterURL + "articles" + hp9 + "' target='blank'>here</a>.<br><br>If you need further help or assistance, please contact our customer service.",
                  'nl': "Heb je vragen over het inwisselen van een voucher? <a href='" + helpcenterURL + "articles" + hp9 + "' target='blank'>Hier</a> vindt u gedetailleerde informatie.<br><br>Als u verdere hulp of assistentie nodig heeft, neem dan contact op met onze klantenservice.",
                  'deMailTemplate': "",
                  'frMailTemplate': "",
                  'itMailTemplate': "",
                  "en-USMailTemplate": "",
                  "nlMailTemplate": ""
            },

            //LEVEL 0: Kundenkonto
            "webform_case_delete_account": {
                  'de': "Nachdem dein Konto gelöscht oder deaktiviert wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch benötigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto löschen lässt.<br><br>Als Privatkunde kannst du die Löschung direkt über dein <a href='" + shopURL + "DeleteAccount' target='blank'>Benutzerkonto</a> einleiten.",
                  'fr': "Une fois que ton compte a été supprimé ou désactivé, tu n'as plus accès à tes preuves d'achat électroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>En tant que client privé, vous pouvez initier la suppression directement via votre <a href='" + shopURL + "DeleteAccount' target='blank'>compte d'utilisateur</a>.",
                  'it': "Dopo la cancellazione o la disattivazione del vostro account, non avrete più accesso alle vostre ricevute di acquisto elettroniche e ad altri documenti. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Come cliente privato, potete avviare la cancellazione direttamente tramite il vostro <a href='" + shopURL + "DeleteAccount' target='blank'>conto utente</a>.",
                  'en-US': "After your account is deleted or deactivated, you will no longer have access to your electronic purchase receipts and other records. That’s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>As a private customer you can initiate the deletion directly via your <a href='" + shopURL + "DeleteAccount' target='blank'>user account</a>.",
                  'nl': "Nadat uw account is verwijderd of gedeactiveerd, hebt u geen toegang meer tot uw elektronische aankoopbewijzen en andere documenten. Wij raden u daarom aan een kopie van de formulieren die u nog nodig hebt af te drukken of op te slaan voordat u uw account verwijdert.<br><br>Als particuliere klant kunt u de verwijdering rechtstreeks via uw <a href='" + shopURL + "DeleteAccount' target='blank'>gebruikersaccount</a> in gang zetten.",
                  "deDescriptionLabel": "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",
                  "frDescriptionLabel": "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",
                  "itDescriptionLabel": "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
                  "en-USDescriptionLabel": "Description<br>Note: For quick processing we need your customer number",
                  "nlDescriptionLabel": "Beschrijving<br>Opmerking: Voor een snelle verwerking hebben we uw klantnummer nodig."
            },
            "webform_case_cant_login": {
                  'de': "Du kannst dein Passwort jederzeit zurücksetzen und ein neues zusenden lassen:<br><br>• Klicke im Login-Bereich auf <a href='" + shopURL + "Register/RequestPassword' target='blank'>Passwort vergessen?</a><br>• Gib deinen Benutzernamen oder die hinterlegte E-Mail-Adresse an und klicke auf \"Link anfordern\"",
                  'fr': "Vous pouvez à tout moment réinitialiser votre mot de passe pour qu'un nouveau vous soit envoyé : <br><br>• Cliquez dans la zone de connexion sur <a href='" + shopURL + "Register/RequestPassword' target='blank'>mot de passe oublié ?</a><br>• Saisissez votre nom d'utilisateur ou adresse électronique fournie et cliquez sur « Demander un lien »",
                  'it': "Puoi reimpostare la tua password in qualsiasi momento e fartene inviare una nuova:<br><br>• Nell'area di login, clicca su <a href='" + shopURL + "Register/RequestPassword' target='blank'>Hai dimenticato la password?</a><br>• Inserisci il tuo nome utente o l'indirizzo e-mail che hai registrato nel tuo conto e clicca poi su «Richiedi link».",
                  'en-US': "You can reset your password at any time:<br><br>• Go to the login screen and click <a href='" + shopURL + "Register/RequestPassword' target='blank'>forgot your password?</a><br>• Enter your username or e-mail address and click «Request link».",
                  'nl': "U kunt te allen tijde uw wachtwoord opnieuw instellen en een nieuw wachtwoord laten toesturen:<br><br>• Klik op <a href='" + shopURL + "Register/RequestPassword' target='blank'>\"Wachtwoord vergeten?\"</a> in het inloggedeelte.<br>• Voer uw gebruikersnaam of het door u ingevoerde e-mailadres in en klik op \"Link aanvragen\".",
                  "deDescriptionLabel": "Beschreibung<br>Hinweis: Für eine rasche Bearbeitung benötigen wir deine Kundennummer",
                  "frDescriptionLabel": "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre numéro de client",
                  "itDescriptionLabel": "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
                  "en-USDescriptionLabel": "Description<br>Note: For quick processing we need your customer number",
                  "nlDescriptionLabel": "Beschrijving<br>Opmerking: Voor een snelle verwerking hebben we uw klantnummer nodig"
            },
            "webform_case_data_request": {
                  'de': "Du hast ein Auskunftsrecht, was deine bei uns gespeicherten Daten betrifft. Auskunftsbegehren, die du an uns stellst, beantworten wir innerhalb der gesetzlichen Frist (im Normalfall innerhalb von 30 Tagen).<br><br><b>Wichtig: Wenn wir nicht alle nötigen Angaben erhalten können wir keine Datenauskunft gewähren. Mehr Informationen dazu findest du in <a href='" + helpcenterURL + "articles" + hp8 + "' target='blank'>diesem Artikel</a>.</b>",
                  'fr': "Vous avez un droit d'accès à vos données que nous avons enregistrées. Nous répondrons à ces demandes dans le délai légal (normalement dans les 30 jours).<br><br><b>Important : Si nous ne recevons pas toutes les informations nécessaires, nous ne pouvons pas fournir les données. Vous pouvez trouver plus d'informations dans <a href='" + helpcenterURL + "articles" + hp8 + "' target='blank'>cet article</a>.</b>",
                  'it': "L'utente ha il diritto di ricevere informazioni sui propri dati memorizzati da noi. Risponderemo alle richieste d'informazioni che ci sottoporrete entro i termini previsti dalla legge (normalmente entro 30 giorni).<br><br><b>Importante: se non riceviamo tutte le informazioni necessarie, non possiamo fornire alcun dato. Per ulteriori informazioni al riguardo, consultare <a href='" + helpcenterURL + "articles" + hp8 + "' target='blank'>questo articolo</a>.</b>",
                  'en-US': "You have a right to access regarding your data stored by us. We will respond to such requests within the statutory period (normally within 30 days).<br><br><b>Important: If we don't receive all the necessary information, we can not provide the data. You can find more information in <a href='" + helpcenterURL + "articles" + hp8 + "' target='blank'>this article</a>.</b>",
                  'nl': "U hebt recht op toegang tot uw door ons opgeslagen gegevens. Wij zullen binnen de wettelijke termijn (normaal gesproken binnen 30 dagen) reageren op verzoeken om informatie die u bij ons indient.<br><br><b>Belangrijk: Als wij niet alle benodigde informatie ontvangen, kunnen wij geen gegevens verstrekken. Meer informatie hierover vindt u in <a href='" + helpcenterURL + "articles" + hp8 + "' target='blank'>dit artikel</a>.</b>",
                  'deMailTemplate': "Ich bitte um schriftliche Auskunft über meine bei galaxus.ch bzw. digitec.ch gespeicherten Daten innerhalb von 30 Tagen.\nDie Nummer zu meinem Benutzerkonto lautet: \n",
                  'frMailTemplate': "Veuillez nous communiquer par écrit, dans un délai de 30 jours, les données personnelles que galaxus.ch ou digitec.ch détient à mon sujet.\nLe numéro de mon compte d'utilisateur est : \n",
                  'itMailTemplate': "Chiedo che mi vengano fornite informazioni sui miei dati memorizzati su galaxus.ch o digitec.ch, per iscritto, entro 30 giorni.\nIl numero del mio conto utente è: \n",
                  "en-USMailTemplate": "Please supply the personal data galaxus.ch or digitec.ch hold about me in writing within 30 days.\nThe number of my user account is: \n",
                  "nlMailTemplate": "Ik verzoek om schriftelijke informatie over mijn bij galaxus.ch of digitec.ch opgeslagen gegevens binnen 30 dagen.\nHet nummer van mijn gebruikersaccount is: \n"
            },

            //LEVEL 0: Produktberatung
            "webform_case_product_advice_it": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },
            "webform_case_product_advice_network": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },
            "webform_case_product_advice_consumer": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },
            "webform_case_product_advice_photo": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },
            "webform_case_product_advice_home": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },
            "webform_case_product_advice_diy": {
                  'de': "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'fr': "Les questions concernant un produit déjà disponible sur " + seite + " peuvent être posées directement sur la page du produit concerné. Notre communauté vous répondra dans les heures qui suivent. La meilleure chose : tout le monde bénéficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communauté</a>.",
                  'it': "Le domande su un prodotto già disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunità vi risponderà entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunità</a>.",
                  'en-US': "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>.",
                  'nl': "U kunt vragen stellen over een product dat al beschikbaar is op " + seite + " direct op de betreffende productpagina. Onze gemeenschap zal u binnen enkele uren antwoorden. Bovendien profiteert iedereen van uw bijdrage :-)<br><br>Klik hier om <a href='" + shopURL + "community' target='blank'>naar de community te gaan</a>."
            },

            //LEVEL 0: Offerte
            "webform_case_offer": {
                  'de': "Für Auftragsvolumen unter " + offerte + " werden keine Offerten erstellt. Es gelten die Preisangaben in unserem Onlineshop.",
                  'fr': "Nous n'établissons pas d'offres pour les volumes de commande inférieurs à " + offerte + ". Les prix indiqués dans notre boutique en ligne font foi.",
                  'it': "Non verranno emesse quotazioni per volumi d'ordine inferiori a " + offerte + ". Si applicano i prezzi del nostro negozio online.",
                  'en-US': "For order volumes below " + offerte + ", no quotations will be issued. The prices in our online store apply.",
                  'nl': "Wij verstrekken geen offertes voor bestelvolumes van minder dan " + offerte + ". De prijzen in onze online shop zijn van toepassing."
            },

            //Error-Meldungen für Attachment
            "attachment-errors": {
                  'de1': 'Um dein Anliegen schnellstmöglich zu lösen, ist ein Foto des Schadens erforderlich. Bitte füge deshalb eine entsprechende Datei hinzu.',
                  'fr1': 'Afin de résoudre votre demande le plus rapidement possible, une photo des dommages est nécessaire. Veuillez donc ajouter un fichier correspondant.',
                  'it1': 'Per risolvere la vostra richiesta nel più breve tempo possibile, è necessaria una foto del danno. Pertanto si prega di aggiungere un file corrispondente.',
                  'en-US1': 'In order to solve your request as quickly as possible, a photo of the damage is required. Therefore please add a corresponding file.',
                  'nl1': 'Om uw probleem zo snel mogelijk op te lossen is een foto van de schade nodig. Voeg daarom een geschikt bestand bij.',
                  'de2': 'Um dein Anliegen schnellstmöglich zu lösen, benötigen wir ein Foto des falsch erhaltenen Produkts. Bitte füge deshalb eine entsprechende Datei hinzu.',
                  'fr2': "Afin de résoudre votre problème le plus rapidement possible, nous avons besoin d'une photo du produit mal reçu. Veuillez donc joindre un fichier approprié.",
                  'it2': 'Al fine di risolvere il suo problema il più rapidamente possibile, abbiamo bisogno di una foto del prodotto ricevuto in modo errato. Pertanto, si prega di allegare un file appropriato.',
                  'en-US2': 'In order to resolve your issue as soon as possible, we need a photo of the incorrectly received product. Therefore, please attach an appropriate file.',
                  'nl2': 'Om uw probleem zo snel mogelijk op te lossen, hebben wij een foto nodig van het verkeerd ontvangen product. Voeg daarom een geschikt bestand bij.',
                  'de3': "Für eine Datenauskunftsbegehren wird ein Scan oder Foto eines amtlichen Ausweises benötigt. Bitte füge eine entsprechende Datei hinzu. Für andere Anfragen, wähle bitte einen anderen Anfragegrund.",
                  'fr3': "Pour une demande d'information sur les données, un scan ou une photo d'une pièce d'identité officielle est nécessaire. Veuillez donc ajouter un fichier correspondant. Pour les autres demandes, veuillez sélectionner un autre motif de demande.",
                  'it3': "Per la richiesta di divulgazione dei dati è necessaria una scansione o una foto di un documento d'identità ufficiale. Allegare un file appropriato. Per altre richieste, selezionare un motivo diverso.",
                  'en-US3': "For a data information request, a scan or photo of an official ID is required. Therefore, please add a corresponding file. For other requests, please select another request reason.",
                  'nl3': "Een scan of foto van een officieel identiteitsbewijs is vereist voor een verzoek om openbaarmaking van gegevens. Gelieve een geschikt bestand bij te voegen. Selecteer voor andere verzoeken een andere reden."
            },

            //Feedback Formular Texte
            "outputUpvoteFeedbackButtonText": {
                  'de': "Vielen Dank für Dein Feedback.<br><br>",
                  'fr': "Merci pour vos commentaires.<br><br>",
                  'it': "Grazie per il vostro feedback.<br><br>",
                  'en-US': "Thank you for your feedback.<br><br>",
                  'nl': "Dank u voor uw feedback.<br><br>"
            },
            "outputDownvoteFeedbackButtonText": {
                  'de': "Warum war die Information nicht hilfreich?<br><br>",
                  'fr': "Pourquoi les informations n'ont-elles pas été utiles ?<br><br>",
                  'it': "Perché le informazioni non sono state utili?<br><br>",
                  'en-US': "Why was the information not helpful?<br><br>",
                  'nl': "Waarom was de informatie niet nuttig?<br><br>"
            },
            "outputDownvoteFeedbackButtonText2": {
                  'de': "<br>Vielen Dank für deinen Verbesserungsvorschlag.<br><br>",
                  'fr': "<br>Merci pour votre suggestion d'amélioration.<br><br>",
                  'it': "<br>Grazie per il vostro suggerimento di miglioramento.<br><br>",
                  'en-US': "<br>Thank you for your suggestion for improvement.<br><br>",
                  'nl': "<br>Dank u voor uw suggestie voor verbetering.<br><br>"
            },
            "outputRadiobuttonFeedback1": {
                  'de': " Die Informationen sind falsch oder verwirrend.",
                  'fr': " Les informations sont erronées ou confuses.",
                  'it': " Le informazioni sono sbagliate o confuse.",
                  'en-US': " The information is incorrect or confusing.",
                  'nl': " De informatie is verkeerd of verwarrend."
            },
            "outputRadiobuttonFeedback2": {
                  'de': " Die Informationen sind unvollständig.",
                  'fr': " L'information est incomplète.",
                  'it': " Le informazioni sono incomplete.",
                  'en-US': " The information is incomplete.",
                  'nl': " De informatie is onvolledig."
            },
            "outputRadiobuttonFeedback3": {
                  'de': " Ich wünsche mir einen besseren Service.",
                  'fr': " J'aimerais voir un meilleur service.",
                  'it': " Vorrei vedere un servizio migliore.",
                  'en-US': " I would like to see better service.",
                  'nl': " Ik zou graag een betere service zien."
            },
            "outputRadiobuttonFeedback4": {
                  'de': " Es gibt einen fehlerhaften Link, ein fehlendes Bild oder einen Tippfehler.",
                  'fr': " Il y a un lien brisé, une image manquante ou une faute de frappe.",
                  'it': " C'è un link rotto, un'immagine mancante o un errore di battitura.",
                  'en-US': " There is a broken link, missing image, or typo.",
                  'nl': " Er is een gebroken link, een ontbrekende foto of een typfout."
            },
            "outputButtonFeedback": {
                  'de': "Senden",
                  'fr': "Envoyer",
                  'it': "Invia",
                  'en-US': "Send",
                  'nl': "Stuur"
            },
            "outputFeedbackLabelPart1": {
                  'de': "Feedback zu Helpcenter Beitrag: ",
                  'fr': "Feed-back sur le post du Helpcenter : ",
                  'it': "Feedback sul post dell'Helpcenter: ",
                  'en-US': "Feedback to Helpcenter post: ",
                  'nl': "Feedback op Helpcenter post: "
            },
            "feedbackThanks": {
                  'de': "Vielen Dank für dein Feedback!<br>",
                  'fr': "Merci pour vos commentaires!<br>",
                  'it': "Grazie per il tuo feedback!<br>",
                  'en-US': "Thank you for your feedback!<br>",
                  'nl': "Bedankt voor uw feedback!<br>"
            },

            //LEVEL 0: Connect Tags
            "webform_case_connect_customer": {
                  'de': "",
                  'fr': "",
                  'it': "",
                  'en-US': "",
                  'nl': ""
            },
            "webform_case_connect_payment": {
                  'de': "",
                  'fr': "",
                  'it': "",
                  'en-US': "",
                  'nl': ""
            },
            "webform_case_connect_technical": {
                  'de': "",
                  'fr': "",
                  'it': "",
                  'en-US': "",
                  'nl': ""
            },
            "webform_case_connect_b2b": {
                  'de': "",
                  'fr': "",
                  'it': "",
                  'en-US': "",
                  'nl': ""
            }
      }

      //TODO: ÜBERSETZUNG IT+FR+EN+NL
      if (portal != 'helpcenter.galaxus.ch' || portal == 'helpcenter.digitec.ch') {
            infoBoxWording['webform_case_not_working_product']['de'] = "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/register' target='blank'>Defekt anmelden</a>.<br><br>Beschädigungen, welche auf unsachgemäße Bedienung zurückzuführen sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "guide/14' target='blank'>Gewährleistungsinformationen</a> sowie in unseren <a href='" + shopURL + "Wiki/" + agbWikiNumber + "' target='blank'>AGBs</a>.";
      }

      if (typeof customerType !== 'undefined') {
            if (customerType == 'business-customer') {
                  infoBoxWording['webform_case_delete_account']['de'] = 'Nachdem dein Konto deaktiviert wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch benötigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto deaktivieren lässt.<br><br>Firmenkunden können unseren Kundendienst kontaktieren, um die Deaktivierung ihres Kontos zu veranlassen.';
                  infoBoxWording['webform_case_delete_account']['fr'] = "Après la désactivation de ton compte, tu n'auras plus accès à tes justificatifs d'achat électroniques et autres documents. Nous te recommandons donc d'imprimer ou de sauvegarder une copie des formulaires dont tu as encore besoin avant de faire désactiver ton compte.<br><br>Les entreprises clientes peuvent contacter notre service clientèle pour demander la désactivation de leur compte.";
                  infoBoxWording['webform_case_delete_account']['it'] = "Dopo la disattivazione dell'account, non sarà più possibile accedere alle ricevute di acquisto elettroniche e ad altri documenti. Si consiglia di stampare o salvare una copia dei moduli necessari prima di disattivare l'account.<br><br>I clienti aziendali possono contattare il nostro servizio clienti per disattivare il proprio account.";
                  infoBoxWording['webform_case_delete_account']['en-US'] = 'After your account is deactivated, you will no longer have access to your electronic purchase receipts and other records. We recommend that you print or save a copy of any forms you still need before deactivating your account.<br><br>Business customers can contact our customer service to have their account deactivated.';
                  infoBoxWording['webform_case_delete_account']['nl'] = 'Nadat uw account is gedeactiveerd, hebt u geen toegang meer tot uw elektronische aankoopbewijzen en andere documenten. Wij raden u aan een kopie af te drukken of te bewaren van alle formulieren die u nog nodig hebt voordat u uw account deactiveert.<br><br>Zakelijke klanten kunnen contact opnemen met onze klantenservice om hun account te deactiveren.';
            }
      }

      if (portal != "helpcenter.digitec.ch" && portal != "helpcenter.galaxus.ch") {
            infoBoxWording['webform_case_damaged_product']['de'] = "Weist ein Produkt einen Transportschaden auf, <a href='" + shopURL + "after-sales' target='blank'>melde dies bitte umgehend als defektes Produkt an</a>."
            infoBoxWording['webform_case_damaged_product']['it'] = "Se un prodotto presenta danni da trasporto, <a href='" + shopURL + "after-sales' target='blank'>si prega di segnalarlo immediatamente come prodotto difettoso</a>."
            infoBoxWording['webform_case_damaged_product']['fr'] = "Si un produit a été endommagé pendant le transport, <a href='" + shopURL + "after-sales' target='blank'>veuillez le signaler immédiatement comme un produit défectueux</a>."
            infoBoxWording['webform_case_damaged_product']['en-US'] = "If a product was damaged in transit, <a href='" + shopURL + "after-sales' target='blank'>please report this immediately as a defective product</a>."
            infoBoxWording['webform_case_damaged_product']['nl'] = "Indien een product transportschade vertoont, <a href='" + shopURL + "after-sales' target='blank'>gelieve dit onmiddellijk te melden als een defect product</a>."

            infoBoxWording['webform_case_data_request']['deMailTemplate'] = "Ich bitte um schriftliche Auskunft über meine bei " + shopLinkName + " gespeicherten Daten innerhalb von 30 Tagen.\nDie Nummer zu meinem Benutzerkonto lautet: \n"
            infoBoxWording['webform_case_data_request']['frMailTemplate'] = "Veuillez nous communiquer par écrit, dans un délai de 30 jours, les données personnelles que " + shopLinkName + " détient à mon sujet.\nLe numéro de mon compte d'utilisateur est : \n"
            infoBoxWording['webform_case_data_request']['itMailTemplate'] = "Chiedo che mi vengano fornite informazioni sui miei dati memorizzati su " + shopLinkName + ", per iscritto, entro 30 giorni.\nIl numero del mio conto utente è: \n"
            infoBoxWording['webform_case_data_request']["en-USMailTemplate"] = "Please supply the personal data " + shopLinkName + " hold about me in writing within 30 days.\nThe number of my user account is: \n"
            infoBoxWording['webform_case_data_request']['nlMailTemplate'] = "Ik verzoek om schriftelijke informatie over mijn bij " + shopLinkName + " opgeslagen gegevens binnen 30 dagen. Het nummer van mijn gebruikersaccount is: \n"
      }



      /*if (portal == 'helpcenter.galaxus.ch' || portal == 'helpcenter.digitec.ch'){
            infoBoxWording['webform_case_other_request_order']['de'] += "<br><br><b>Aktuell hat die Schweizer Post mehrere Tage Verzögerung bei der Datenübertragung. Es kann daher sein, dass deine Links zur Sendungsverfolgung nicht funktionieren. Bitte kontaktiere unseren Kundendienst nur, fallst deine Sendungslinks bereits seit mindestens <i>7 Tagen</i> nicht funktionieren und deine Artikel nicht zugestellt sind.</b>"
            infoBoxWording['webform_case_other_request_order']['fr'] += "<br><br><b>Actuellement, la Poste suisse a plusieurs jours de retard dans la transmission des données. Il se peut donc que tes liens de suivi ne fonctionnent pas. Contacte notre service clientèle uniquement si tes liens de suivi ne fonctionnent pas depuis au moins <i>7 jours</i> et si tes articles n'ont pas été livrés.</b>"
            infoBoxWording['webform_case_other_request_order']['it'] += "<br><br><b>Attualmente la Posta Svizzera registra un ritardo di alcuni giorni nella trasmissione dei dati. È quindi possibile che i vostri link di tracciamento non funzionino. Si prega di contattare il nostro servizio clienti solo se i link di tracciamento non funzionano da almeno <i>7 giorni</i> e gli articoli non sono stati consegnati.</b>"
            infoBoxWording['webform_case_other_request_order']['en-US'] += "<br><br><b>Currently, the Swiss Post has several days delay in data transmission. Therefore, it is possible that your tracking links are not working. Please contact our customer service only if your tracking links have not been working for at least <i>7 days</i> and your items have not been delivered.</b>"
            infoBoxWording['webform_case_shipping_status']['de'] += "<br><br><b>Aktuell hat die Schweizer Post mehrere Tage Verzögerung bei der Datenübertragung. Es kann daher sein, dass deine Links zur Sendungsverfolgung nicht funktionieren. Bitte kontaktiere unseren Kundendienst nur, fallst deine Sendungslinks bereits seit mindestens <i>7 Tagen</i> nicht funktionieren und deine Artikel nicht zugestellt sind.</b>"
            infoBoxWording['webform_case_shipping_status']['fr'] += "<br><br><b>Actuellement, la Poste suisse a plusieurs jours de retard dans la transmission des données. Il se peut donc que tes liens de suivi ne fonctionnent pas. Contacte notre service clientèle uniquement si tes liens de suivi ne fonctionnent pas depuis au moins <i>7 jours</i> et si tes articles n'ont pas été livrés.</b>"
            infoBoxWording['webform_case_shipping_status']['it'] += "<br><br><b>Attualmente la Posta Svizzera registra un ritardo di alcuni giorni nella trasmissione dei dati. È quindi possibile che i vostri link di tracciamento non funzionino. Si prega di contattare il nostro servizio clienti solo se i link di tracciamento non funzionano da almeno <i>7 giorni</i> e gli articoli non sono stati consegnati.</b>"
            infoBoxWording['webform_case_shipping_status']['en-US'] += "<br><br><b>Currently, the Swiss Post has several days delay in data transmission. Therefore, it is possible that your tracking links are not working. Please contact our customer service only if your tracking links have not been working for at least <i>7 days</i> and your items have not been delivered.</b>"
            infoBoxWording['webform_case_order_status']['de'] += "<br><br><b>Aktuell hat die Schweizer Post mehrere Tage Verzögerung bei der Datenübertragung. Es kann daher sein, dass deine Links zur Sendungsverfolgung nicht funktionieren. Bitte kontaktiere unseren Kundendienst nur, fallst deine Sendungslinks bereits seit mindestens <i>7 Tagen</i> nicht funktionieren und deine Artikel nicht zugestellt sind.</b>"
            infoBoxWording['webform_case_order_status']['fr'] += "<br><br><b>Actuellement, la Poste suisse a plusieurs jours de retard dans la transmission des données. Il se peut donc que tes liens de suivi ne fonctionnent pas. Contacte notre service clientèle uniquement si tes liens de suivi ne fonctionnent pas depuis au moins <i>7 jours</i> et si tes articles n'ont pas été livrés.</b>"
            infoBoxWording['webform_case_order_status']['it'] += "<br><br><b>Attualmente la Posta Svizzera registra un ritardo di alcuni giorni nella trasmissione dei dati. È quindi possibile che i vostri link di tracciamento non funzionino. Si prega di contattare il nostro servizio clienti solo se i link di tracciamento non funzionano da almeno <i>7 giorni</i> e gli articoli non sono stati consegnati.</b>"
            infoBoxWording['webform_case_order_status']['en-US'] += "<br><br><b>Currently, the Swiss Post has several days delay in data transmission. Therefore, it is possible that your tracking links are not working. Please contact our customer service only if your tracking links have not been working for at least <i>7 days</i> and your items have not been delivered.</b>"
      }*/


      return infoBoxWording;
}

