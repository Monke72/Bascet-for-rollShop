function calcCartPriceAndDelevery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const deliveryCost = document.querySelector(".delivery-cost");
  const totalPriceEl = document.querySelector(".total-price");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

  //Общая стоимость товаров
  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");

    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  //отображаем цену на странице
  totalPriceEl.innerText = totalPrice;

  //Скрываем или показываем блок с стоимостью доствки
  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  //Указываем стоимость доставки
  if (totalPrice >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 P";
  }
}
