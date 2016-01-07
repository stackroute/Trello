(function() {
  $('.js-tc-add-board').on('click',function() {
    console.log('Clicked');
    $.post('/users/createBoard',function(data) {
      console.log(data);
    });
  });
})();
