"use strict";

$('.accordion-title').click(function() {
  $(this).css({'background':'black', 'color':'white'});
  $(this).next().toggleClass('active').slideToggle(300, function(){
    $('.accordion-cont').not(this).removeClass('active');
    $('.accordion-cont').not('.active').slideUp(300);
  });
  $('.accordion-title').not(this).removeAttr('style');
});
