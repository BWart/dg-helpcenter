function fillWebWidgetText(){
    webWidget = {
        webWidget: {
            chat: {
              suppress: false,
              departments: {
                select: dep,
                enabled: []
            },
               title: {
                  '*': 'Chat with us',
                  fr: 'Chattez avec nous',
                de: "Chatte mit uns",
                it: "Chattata con noi"
                   },
              prechatForm: {
              greeting: {
                '*': 'Please have your order, service or invoice number ready so that we can help you even faster.',
                fr: "Veuillez préparer votre numéro de commande, de service ou de facture afin que nous puissions vous aider encore plus rapidement. ",
                de: "Bitte halte deine Bestell-, Service- oder Rechnungsnummer bereit, damit wir dir noch schneller helfen können. ",
                it: "Tieni pronto il tuo numero d'ordine, di servizio o di fattura in modo che possiamo aiutarti ancora più velocemente. "
              }
      
            },
              offlineForm: {
              greeting: {
                '*': "We aren't online right now",
                fr: "Nous ne sommes pas en ligne pour le moment",
                en: "We aren't online right now",
                de: "Wir sind im Moment nicht online",
                it: "Non siamo online in questo momento"
              }
            }
            },
            contactForm: {
              suppress: true
            },
            helpCenter: {
              suppress: true
            },
            talk: {
              suppress: true
            },
            answerBot: {
              suppress: true
            }
          }
    }
    
    console.log(webWidget);
    return webWidget;
}