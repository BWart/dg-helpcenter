/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  //Weiterleitung Connect Section

  if(window.location.href.indexOf('sections/360004879819') > -1) {
    window.location.href = 'https://helpcenter.connect.digitec.ch/hc/articles/4404356800402';
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
  
	////////////////////////////////////////////////////////////Dynamic Wording////////////////////////////////////////////////////////////////////
  
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
  
  ////////////////////////////////////////////////////Article Tracking//////////////////////////////////////////////////////////////////////////////////

  //Helpful-Button Tracking
  
  $('.article-vote-up').on('click', function(e) {
      var path = window.location.pathname;
      if(gaSend){
          ga('send', 'event', 'Vote', 'Helpful', path);
      }
  });
  
  $('.article-vote-down').on('click', function(e) {
      var path = window.location.pathname;
      if(gaSend){
          ga('send', 'event', 'Vote', 'Not Helpful', path);
      }
  });  
  
///////////////////////////////////////////////////////////////////////Zopim Integration/////////////////////////////////////////////////////////////////
//Zopim integration Ausgelagert in Chat.js
/*try {
  waitForChat();
}
catch (e) {
  console.log(e);
  if(gaSend){
    ga('send', 'event', 'Errors', 'ChatInitialLoad', String(e));
  }
}

});*/



//////////////////////////////////////////////////////////////////////Talkdesk Chat/////////////////////////////////////////////////////////////////
//Zopim integration Ausgelagert in chattalkdesk.js
/*try {
  waitForChat();
}
catch (e) {
  console.log(e);
  if(gaSend){
    ga('send', 'event', 'Errors', 'ChatInitialLoad', String(e));
  }
}*/

});