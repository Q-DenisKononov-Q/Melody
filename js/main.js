$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в  SVG
  var buttonUp = $(".button-up");  /* кнопка увеличения этажа  */
  var buttonDowm = $(".button-down");  /* кнопка уменьшения этажа  */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".main-counter").text(currentFloor); // записывакаем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); /* при клике на этаж вызвать окно */
  modalCloseButton.on("click", toggleModal); /* клик на кнопку закрыть закрывает окно */
  viewFlatsButton.on("click", toggleModal);

  // отслеживаем клик по кнопке вверх
  buttonUp.on("click", function () {
    // проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибаляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".main-counter").text(usCurrentFloor); // записываем значение этажа в счетчик српава
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });


  buttonDowm.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".main-counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor")
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    // функция открыть-закрыть окно
    modal.toggleClass("is-open");
  }

});