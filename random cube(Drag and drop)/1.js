"use strict";

$(function(){
  $('body').html('<span>Нажмите Enter чтобы начать</span>');
  $('span').fadeIn(1000);
  $('body').keyup(13, function(){ // Событие при ОТПУСКАНИИ кнопки ENTER
    $('span').fadeOut(1000, function(){
      $('body').html('<div id="block"></div><div class="btn"></div>'); // Создаем блок и под ним кнопку
      $('#block').fadeIn(1000);
      $('.btn').fadeIn(1000);

      $('.btn').click(function(){
        $('body .square').remove(); // Удаляем прямоугольник, если есть

        var block = $('#block');
        var blockEnd_X = block[0].clientWidth, blockEnd_Y = block[0].clientHeight; // Узнаем ширину/высоту блока (конец блока)
        var width = squareArea(), height = squareArea(); // генерируем ширину/высоту прямоугольника
        var posX = positionX(blockEnd_X,width), posY = positionY(blockEnd_Y,height); // генерируеп позицию прямоугольника по X/Y

        // Генерируем прямоугольник в наш блок
        block.append('<div id="drag" class="square ui-widget ui-corner-all" style="width: ' + width + 'px; height: ' + height +'px; display: none; background: rgb('+c()+','+c()+','+c()+'); position: absolute; left:'+ posX +'px; top:'+ posY + 'px; ;"></div>');
        $('.square').show(200);
        $('#drag').draggable({cursor: "move"});
      });
    });
  });

  // РАНДОМЫ

    // Случайная ширина/высота прямоугольника
  function squareArea() {
    return Math.floor(Math.random() * 300) + 10;
  }

    // Случайный цвет прямоугольника
  function c() {
    return Math.floor(Math.random() * 255) + 0;
  }

    // Случайная позиция прямоугольника по Х
  function positionX(blockEnd_X,width) {
    return Math.floor(Math.random() * (blockEnd_X - width)) + 0; // Позиция от (0) до (конец блока_X - длина)
  }

    // Случайная позиция прямоугольника по Y
  function positionY(blockEnd_Y,height) {
    return Math.floor(Math.random() * (blockEnd_Y - height)) + 0; // Позиция от (0) до (конец блока_Y - высота)
  }
});
