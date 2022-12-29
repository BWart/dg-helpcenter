function resetContactOptions(){
    $('#chatIconCellContent').show();
    $('#chatTitleCellContent').show();
    $('#chatTextCellContent').show();
    $('#chatButtonCellContent').show();
    $('#mobileChatCell1Content').show();
    $('#mobileChatCell2Content').show();

    $('#phoneIconCellContent').show();
    $('#phoneTitleCellContent').show();
    $('#phoneTextCellContent').show();
    $('#phoneButtonCellContent').show();
    $('#mobilePhone1Content').show();
    $('#mobilePhoneCell2Content').show();

    $('#mailIconCellContent').show();
    $('#mailTitleCellContent').show();
    $('#mailTextCellContent').show();
    $('#mailButtonCellContent').show();
    $('#mobileMailCell1Content').show();
    $('#mobileMailCell2Content').show();

    chatCellPos(1);
    phoneCellPos(2);
    mailCellPos(3);
  }

  function hideMailCells(){
    $('#mailIconCellContent').hide();
    $('#mailTitleCellContent').hide();
    $('#mailTextCellContent').hide();
    $('#mailButtonCellContent').hide();
    $('#mobileMailCell1Content').hide();
    $('#mobileMailCell2Content').hide();
  }

  function hideChatCells(){
    $('#chatIconCellContent').hide();
    $('#chatTitleCellContent').hide();
    $('#chatTextCellContent').hide();
    $('#chatButtonCellContent').hide();
    $('#mobileChatCell1Content').hide();
    $('#mobileChatCell2Content').hide();
  }

  function hidePhoneCells(){
    $('#phoneIconCellContent').hide();
    $('#phoneTitleCellContent').hide();
    $('#phoneTextCellContent').hide();
    $('#phoneButtonCellContent').hide();
    $('#mobilePhoneCell1Content').hide();
    $('#mobilePhoneCell2Content').hide();
  }

  function phoneCellPos(posNumber){
    $('#phoneIconCellContent').insertBefore($('#row1cell' + String(posNumber) + 'inserter'));
    $('#phoneTitleCellContent').insertBefore($('#row2cell' + String(posNumber) + 'inserter'));
    $('#phoneTextCellContent').insertBefore($('#row3cell' + String(posNumber) + 'inserter'));
    $('#phoneButtonCellContent').insertBefore($('#row4cell' + String(posNumber) + 'inserter'));
    $('#mobilePhoneCell1Content').insertBefore($('#mobileInserter' + String((posNumber*2)-1)));
    $('#mobilePhoneCell2Content').insertBefore($('#mobileInserter' + String(posNumber*2)));
  }

  function chatCellPos(posNumber){
    $('#chatIconCellContent').insertBefore($('#row1cell' + String(posNumber) + 'inserter'));
    $('#chatTitleCellContent').insertBefore($('#row2cell' + String(posNumber) + 'inserter'));
    $('#chatTextCellContent').insertBefore($('#row3cell' + String(posNumber) + 'inserter'));
    $('#chatButtonCellContent').insertBefore($('#row4cell' + String(posNumber) + 'inserter'));
    $('#mobileChatCell1Content').insertBefore($('#mobileInserter' + String((posNumber*2)-1)));
    $('#mobileChatCell2Content').insertBefore($('#mobileInserter' + String(posNumber*2)));
  }

  function mailCellPos(posNumber){
    $('#mailIconCellContent').insertBefore($('#row1cell' + String(posNumber) + 'inserter'));
    $('#mailTitleCellContent').insertBefore($('#row2cell' + String(posNumber) + 'inserter'));
    $('#mailTextCellContent').insertBefore($('#row3cell' + String(posNumber) + 'inserter'));
    $('#mailButtonCellContent').insertBefore($('#row4cell' + String(posNumber) + 'inserter'));
    $('#mobileMailCell1Content').insertBefore($('#mobileInserter' + String((posNumber*2)-1)));
    $('#mobileMailCell2Content').insertBefore($('#mobileInserter' + String(posNumber*2)));
  }