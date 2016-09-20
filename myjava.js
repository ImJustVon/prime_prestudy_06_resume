$(document).ready(function() {
  $('body').on('click', function(){
    if ($('h1').hasClass('algin')) {
      $('h1').removeClass('algin');
      $('img').removeClass('center').addClass('pic');

    }
    else {

      $('h1').addClass('algin');
      $('img').removeClass('pic').addClass('center');
    }
    $('.these').fadeToggle('slow');


  })
});
