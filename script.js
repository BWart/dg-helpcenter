/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {




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
  console.log(group);
                  
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
  
  // zopim integration

   //Waits for Zopim to Load
  
  var chatButton = 'new';
  
  var waitForZopim = setInterval(function () {
    var n = 0;
    if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
      n++;
      if(n > 10){
        changeCSS('noReply');
      } else{
      return;
        }
    }
    $zopim(function() {
       $zopim.livechat.setOnConnected(function() {
       });
     });    
    clearInterval(waitForZopim);
}, 400);
  
  
// Defines how many Users can See the Chat Button
  
var perCentSeesChatButtonDE = 100 // Change Value from 0-100
var perCentSeesChatButtonFR = 100 // Change Value from 0-100
var perCentSeesChatButtonEN = 100 // Change Value from 0-100
var perCentSeesChatButtonIT = 100 // Change Value from 0-100
  
function canSeeChatButton(){
  if(getChatGroup() > getPercentForLang()){
    return false;
  }else{
      return true;
  }
}
  
function getChatGroup(){
   if(!sessionStorage.getItem('chatGroup')){
      var chatGroup = getRandomInt(100);
      sessionStorage.setItem('chatGroup', chatGroup);
      return chatGroup;
    }else{
      return sessionStorage.getItem('chatGroup');
    }
}

function getPercentForLang(){
  	var percentForLang;
 	switch(currentLanguage) {
  	case 'de':
    	percentForLang = perCentSeesChatButtonDE;
    	break;
  	case 'fr':
    	percentForLang = perCentSeesChatButtonFR;
    	break;
  	case 'it':
    	percentForLang = perCentSeesChatButtonIT;
    	break;
  	case 'en-US':
    	percentForLang = perCentSeesChatButtonEN;
    	break;
  	default:
      percentForLang = perCentSeesChatButtonDE;
	}
	return percentForLang;
}
  
//Shows Chat if is Chatting or disables Chat if isnt
  
function loadChat(){
   try {
    $zopim(function() {
      if($zopim.livechat.isChatting()){
        chatButton = 'visible';
        changeCSS('online');
        setVisitorDepartment();
      }else{
        $zopim.livechat.hideAll();
        $zopim.livechat.theme.reload();
        changeButtonVisibility();
        removeVisitorNotes();
        }
    });
    } catch (error) {
  console.error(error);
	}
}
  
// click Event for Chat Button

$('.chat-private').on("click", function () {
  if($zopim.livechat.window.getDisplay()){
    $zopim.livechat.window.hide();
  } else{
    $zopim.livechat.window.show();
  }
  }); 
  
// opens new Window for unread messages 
$zopim(function() {
	$zopim.livechat.setOnUnreadMsgs(function(numUnread){
  	if(numUnread > 0 && !$zopim.livechat.window.getDisplay()) {
    	$zopim.livechat.window.show();
  	}
	});
});
  
  
  // Hide or Shows Button if Status Changes
  $zopim(function() {
      $zopim.livechat.theme.setColor('#00559D');
      $zopim.livechat.setOnStatus(function(statusChange){
        if(statusChange == 'online' && chatButton == 'hidden' ){
          loadChat();
        }
        if(statusChange == 'offline' && chatButton == 'visible' && !$zopim.livechat.isChatting()){
          loadChat();
        }
        if(chatButton == 'new' && statusChange != undefined ){
          loadChat();
        }      
      });
  });
  
  // Shows Chat button if anyone is avaiable and inside opening hours
  
  function changeButtonVisibility(){
    if (checkAvailability() == 'online' && localStorage.getItem('isPrivateCustomer') == "1" && canSeeChatButton()) {
      changeCSS('online');
      chatButton = 'visible';
      setVisitorDepartment();
    }else{
      changeCSS('offline');
      chatButton = 'hidden';
    }
  }
  
  function setVisitorDepartment(){
  	$zopim(function() {
  		$zopim.livechat.departments.setVisitorDepartment(getZopimLanguage());
  	});      
  }
    
  function removeVisitorNotes(){
  	$zopim(function() {
  		$zopim.livechat.setNotes('');
  	});      
  }
  
  /*  
  //Set prechat form Departments
  
  function setDepartments(){
    if(currentLanguage == 'de'){ 
        $zopim(function() {
    $zopim.livechat.departments.filter('Rückgabe oder Garantie', 'Liefertermin', 'Rechnung oder Mahnung','Anderweitige Anfrage','Produktberatung','Bestellung','Lieferproblem');
  });      
    } else      
      $zopim(function() {
    $zopim.livechat.departments.filter(getZopimLanguage());
  });  
  }
 */
  
  // Returns availability
  function checkAvailability(){
    var dep;
    $zopim(function() {  
       dep = $zopim.livechat.departments.getDepartment(getZopimLanguage());
       });
    if (dep.status === undefined){
      dep = 'offline'; 
      } else{
        dep = dep.status;
      }
    status = dep;
    return dep;  
  }
  
  // CSS Change
  function changeCSS(cssStatusChange){
    if(cssStatusChange == 'online'){
      $(".contactDataChat").show();
    } 
    if(cssStatusChange == 'offline'){
     $(".chat-private").css('pointer-events', 'none');
      $(".chat-private").css('color', '#bebebe');
      $(".chat-private").css('background-color', '#ededed');
      $(".chat-private").html(getNoAgentText);
    }
  }
  
  function getNoAgentText(){
    switch(currentLanguage){
      case 'de':
        return 'Nicht verfügbar';
      case 'fr':
        return 'Non disponible';
      case 'it':
        return 'Non disponibile';
      default:
        return 'Not available';
    }
  }
  
  
  //returns Zopim language
  function getZopimLanguage(){
    var langdep;
    	switch(currentLanguage) {
  	case 'de':
    	langdep = 'Deutsch';
    	break;
  	case 'fr':
    	langdep = 'Français';
    	break;
  	case 'it':
    	langdep = 'Italiano';
    	break;
  	case 'en-US':
    	langdep = 'English';
    	break;
  	default:
    	langdep = 'Deutsch';
	}      
    return langdep; 
  }
  
});