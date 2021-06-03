/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  var chatcolor = '';
  var chatColorOffline = '';
  var chatBackColorOffline = '';
  var portal = window.location.hostname;

// CHAT Farben

  switch(portal){
    case'helpcenter.digitec.ch':
            chatcolor = '#00559D';
            chatColorOffline = '#bebebe';
            chatBackColorOffline = '#ededed';
            break;
    case'helpcenter.galaxus.ch':
            chatcolor = '#333333';
            chatColorOffline = '#bebebe';
            chatBackColorOffline = '#ededed';
            break;
    case'helpcenter.galaxus.de':
            chatcolor = '#333333';
            chatColorOffline = '#bebebe';
            chatBackColorOffline = '#ededed';
            break;
    default:
            chatcolor = '#00559D';
            chatColorOffline = '#bebebe';
            chatBackColorOffline = '#ededed';
            break;
}


  switch ($('html').attr('lang')){
    case 'de':
      $('#query').attr('placeholder','Suche nach Hilfe und Lösungen');
  		break;
    case 'fr':
    	$('#query').attr('placeholder','Recherche d\'aide et de solutions');
       break;
    case 'it':
       $('#query').attr('placeholder','Cerca aiuto e soluzioni');
       break;
    case 'en-US':
      $('#query').attr('placeholder','Search for help and solutions');
    	break;
    default:
      $('#query').attr('placeholder','Suche nach Hilfe und Lösungen');
  }
  
  // rearrange form fields english
$('#new_request.request-form label:contains("What is it about?")').parent().insertBefore('#new_request.request-form label:contains("Subject")');
  // rearrange form fields german
$('#new_request.request-form label:contains("Um was geht es?")').parent().insertBefore('#new_request.request-form label:contains("Betreff")');
  // rearrange form fields french
$('#new_request.request-form label:contains("Que concerne votre demande?")').parent().insertBefore('#new_request.request-form label:contains("Sujet")');
    // rearrange form fields italian
$('#new_request.request-form label:contains("Di cosa si tratta?")').parent().insertBefore('#new_request.request-form label:contains("Oggetto")');

  $('body').addClass('body-border');
  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(".request-container .comment-container .comment-show-container"),
    $requestCommentFields = $(".request-container .comment-container .comment-fields"),
    $requestCommentSubmit = $(".request-container .comment-container .request-submit-comment");

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(".request-container .mark-as-solved:not([data-disabled])"),
    $requestMarkAsSolvedCheckbox = $(".request-container .comment-container input[type=checkbox]"),
    $requestCommentSubmitButton = $(".request-container .comment-container input[type=submit]");

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(".request-container .comment-container textarea");

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-and-submit-translation"));
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-translation"));
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
  
	// dynamic wording
  
 	var currentLanguage = $('html').attr('lang');

  var dynamicWording = filldynamicWording();
  
  var currentLanguage = $('html').attr('lang');
  $('[data-wording-key]').each(function(){
    var $this = $(this);
		var key = $this.data('wording-key');
		var wording = dynamicWording[currentLanguage][key];
		if(wording) {
    	$this.html(wording);
    }
  })
  
  //Vote Button Blur
  
  $('.article-vote-up').on('click', function(e) {
      this.blur();
  });
  
  $('.article-vote-down').on('click', function(e) {
      this.blur();
  });  
  
  
  // set initial Customer Type  
    if(!localStorage.getItem('isPrivateCustomer') === null){
      localStorage.setItem('isPrivateCustomer', "0");
    }
  
  
  //Event Tracking
  var status = 'offline';
  
  // AB Split
  
  var group = getGroup();
                  
	function getGroup(){
    if(!localStorage.getItem('noSplit')){
      newSplit = getRandomInt(2);
      localStorage.setItem('noSplit', newSplit);
      return newSplit;      
    }else{
      return localStorage.getItem('noSplit');
    }
  }
    
  function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function checkForAB(){
   if(currentLanguage == 'de' && localStorage.getItem('isPrivateCustomer') == "1"){
     return true;
   }else{
     return false;
   }
  }
  
  //Total Clicks Tracking
  
  $('.buttonContactFormContact').on("click", function () {
    if(checkForAB()){
  		ga('send', 'event', 'Chat Test V2', 'Click Contact Button ' + status + ' ' + group, currentLanguage);
    }
  }) 
  
  //Phone Number Tracking
  
	$('.private-customer').on("click", function () {
    if(checkForAB()){
    	ga('send', 'event', 'Chat Test V2', 'Click Phone Button ' + status + ' ' + group, currentLanguage);
      ga('send', 'event', 'Chat Test V2', 'Click Phone/Mail/Chat Button ' + status + ' ' + group, currentLanguage);
    }
  }) 
  
  //Contact Form Tracking
  
  	$('.contactFormWriteUs').on("click", function () {
  	if(checkForAB()){
    	ga('send', 'event', 'Chat Test V2', 'Click Mail Button ' + status + ' ' + group, currentLanguage);
      ga('send', 'event', 'Chat Test V2', 'Click Phone/Mail/Chat Button ' + status + ' ' + group, currentLanguage);
      }
  }) 
  
  //Chat Tracking
  
  	$('.chat-private').on("click", function () {
      if(checkForAB()){
    		ga('send', 'event', 'Chat Test V2', 'Click Chat Button ' + status + ' ' + group, currentLanguage);
        ga('send', 'event', 'Chat Test V2', 'Click Phone/Mail/Chat Button ' + status + ' ' + group, currentLanguage);
      }
  }) 
  
  
  // ************TicketForm2.0*************
  
  $('.buttonContactFormContact').on("click", function () {
  		ga('send', 'event', 'TicketForm2.0', 'Click Contact Button', currentLanguage);
  }) 
  
  //Phone Number Tracking
  
	$('.private-customer').on("click", function () {
    	ga('send', 'event', 'TicketForm2.0', 'Click Phone Button', currentLanguage);
      ga('send', 'event', 'TicketForm2.0', 'Click Phone/Mail/Chat Button', currentLanguage);
  }) 
  
  //Contact Form Tracking
  
  	$('.contactFormWriteUs').on("click", function () {
    	ga('send', 'event', 'TicketForm2.0', 'Click Mail Button', currentLanguage);
      ga('send', 'event', 'TicketForm2.0', 'Click Phone/Mail/Chat Button', currentLanguage);
  }) 
  
  //Chat Tracking
  
  	$('.chat-private').on("click", function () {
    		ga('send', 'event', 'TicketForm2.0', 'Click Chat Button', currentLanguage);
        ga('send', 'event', 'TicketForm2.0', 'Click Phone/Mail/Chat Button', currentLanguage);
  }) 
  
  //Helpful-Button Tracking
  
  $('.article-vote-up').on('click', function(e) {
      var path = window.location.pathname;
      ga('send', 'event', 'Vote', 'Helpful', path);
  });
  
  $('.article-vote-down').on('click', function(e) {
      var path = window.location.pathname;
      ga('send', 'event', 'Vote', 'Not Helpful', path);
  });  
  
//Zopim integration
waitForChat();
var connections = 0;

function waitForChat () {
  
    setTimeout(function(){ 
    try {
        IsChatting();
        setZESettings();
        zE('webWidget', 'setLocale', getWidgetLanguage());
        checkForUnreadMessages();
          }
          catch(e) {
    if(connections < 10){
            waitForChat();
      connections++; 
    }else{
      console.log(e);
    } 
  }    
  }, 
    400);
  }
   
 // Initial Settings of Widget

function setZESettings(){

 window.zESettings = {
      webWidget: {
        chat: {
          suppress: false,
          departments: {
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
    };
}

// Shows Chat if Is Chatting or Hides Chat else

function IsChatting(){
 
    if(zE('webWidget:get', 'chat:isChatting')){
      zE('webWidget', 'show');
      return true;
    }else{
      zE('webWidget', 'hide');
      return false;
      }
}
 

 function getWidgetLanguage(){
    var languageTag = 'de';
    if($('html').attr('lang') != 'en-US'){
        languageTag = $('html').attr('lang');
    }else{
        languageTag = 'en'; 
    }
    return languageTag;
  }


// opens Window for unread messages 
function checkForUnreadMessages(){
  zE('webWidget:on', 'chat:unreadMessages', function(number) {
  openChat();
 });
}
   // Opens Chat in WebWidget
   function openChat(){
    zE('webWidget', 'show');
  	document.getElementById('launcher').contentWindow.document.getElementById('Embed').getElementsByTagName('button')[0].click();
  }
});