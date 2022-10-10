const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById("value");

counterValue.innerHTML = 0;

// removeEventListener
// parseInt(string, radix);

decrement.addEventListener("click", () => {
  counterValue.innerHTML = parseInt(counterValue.textContent) - 1;
  console.log("Вешаю слушателя кликов на кнопку уменьшения значения счетчика");
});

increment.addEventListener("click", () => {
  counterValue.innerHTML = parseInt(counterValue.textContent) + 1;
  console.log("Вешаю слушателя кликов на кнопку увеличения значения счетчика");
});
