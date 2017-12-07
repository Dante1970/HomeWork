"use strict"

$('.menu > li').click(function() {
  $('.submenu > li').css('height', '0px');
  $('.active').removeClass();
  $(this).addClass('active');
  $('.submenu, .nanomenu, .subnanomenu').hide();
  $(this).find('.submenu').show(0);
  $(this).find('.submenu > li, a').animate({
    height: '50'
  }, 300);
});

$(window).click(function(){
    $('.submenu, .nanomenu, .subnanomenu').hide(300);
});

$('.menu > li').click(function(e){
    e.stopPropagation();
});

$('.nanomenu').parent().mouseover(function(){
  $(this).find('.nanomenu').show(300);
});

$('.subnanomenu').parent().mouseover(function(){
  $(this).find('.subnanomenu').show(300);
});

$('.nanomenu').parent().mouseleave(function() {
  $('.nanomenu').hide(300);
});

$('.subnanomenu').parent().mouseleave(function() {
  $('.subnanomenu').hide(300);
});
