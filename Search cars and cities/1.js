"use strict";

var carList = $('.car');
var citiesList = $('.cities');

// Поиск автомобиля по городам
$('#cities').keyup(function() {

  var valueInput = $(this).val().toLowerCase();
  $('.carResult > li').remove();

  var operand = valueInput.trim();
  if (operand == null || operand.length == 0) return;

  carList.each(function() {
    var dataCities = $(this).attr('data-cities');

    if (dataCities.indexOf(valueInput) >= 0) {
      var text = $(this).text();
      $('.carResult').append('<li>' + text + '</li>');
    }
  });
});

// Поиск города по автомобилю
$('#car').keyup(function() {

  var valueInput = $(this).val().toLowerCase();
  $('.citiesResult > li').remove();

  var operand = valueInput.trim();
  if (operand == null || operand.length == 0) return;

  citiesList.each(function() {
    var dataCar = $(this).attr('data-car');

    if (dataCar.indexOf(valueInput) >= 0) {
      var text = $(this).text();
      $('.citiesResult').append('<li>' + text + '</li>');
    }
  });
});
