//Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  //Обьявляем переменную для счетчика , задав большую область видимости
  let counter;

  //Клик строго по кнопкам + или -
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");

    //Находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //Отслеживаем клик по дата атрибуту
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //Проверяем является ли элемент по которому мы кликунли кнопкой минус
  if (event.target.dataset.action === "minus") {
    //Проверка на товар который находится в корзине
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      //удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      toggleCartStatus();

      calcCartPriceAndDelevery();
    }
  }

  //Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelevery();
  }
});
