"use strict";

var h1 = $('h1');
var liFirst = $('li:first-child');


// .text() - Вводим название сайта
function text() {
  var ask = prompt('Введите название сайта','');
  if (testTxt(ask) == false) {
    return;
  }
  h1.text(ask);
}

// .prev() - Выбор елемента сверху
function prev() {
  $('.active').prev().addClass('active');
}

// .remove() - Удаляет приветсвие через 10 сек
function timer() {
  setTimeout(function() {
    $('#hello').remove();
  }, 10000);
};

// .find() - Избранное
function parent() {
  $('.active').find('.favor').remove('.favor');
  $('.active').append('<p class="favor">Избранное</p>');
}

// .children() - Выбираем всех потомков section
function baby() {
  $('.active').children().toggleClass('baby');
}

// .after() - Добавляем в список закладку
function after() {
  var txt = prompt('Введите название закладки:','');
  if (testTxt(txt) == false) {
    return;
  }
  $('.add').after('<li>'+ txt + '</li>');
  $('ul>div+li').fadeOut();
  $("ul>div+li").fadeIn(500);
}

// .before() - Первому елементу li добавили блок
function before() {
  $('li:first-child').before('<div class="add" onclick="after()"><b>+</b></div>');
}
before();

// .find() - Выделяем все новости
function find() {
  $('content').find($('section')).removeClass('active');
  $('content').find($('section')).toggleClass('active');
}


// Выделяем выбранную новость
$('section').bind('click', function() {
  $(this).toggleClass('active');
});


// Проверка на пустую строку
function testTxt(operand) {
  operand = operand.trim();
  if (operand == null || operand.length == 0) return false;
}

// Отмена выделения элементов
function myClose() {
  $('content').find($('section')).removeClass('active');
  $('content').find($('.favor')).remove('.favor');
}
