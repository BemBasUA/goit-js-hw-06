const decrementButtonEl = document.querySelector(`[data-action="decrement"]`);
const incrementButtonEl = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);
let counterValue = 0;
decrementButtonEl.addEventListener(`click`, () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
incrementButtonEl.addEventListener(`click`, () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
