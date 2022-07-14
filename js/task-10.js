function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector(`#boxes`);

const createBtnEl = document.querySelector(`[data-create]`);

const destroyBtnEl = document.querySelector(`[data-destroy]`);

const inputEl = document.querySelector(`input`);

let amount = 0;

let geometry = 30;

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    geometry += 10;
    boxesEl.insertAdjacentHTML(
      `beforeend`,
      `<div style = "width: ${geometry}px;height: ${geometry}px;background-color:${getRandomHexColor()}"></div>`
    );
  }
}
createBtnEl.addEventListener(`click`, createBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

destroyBtnEl.addEventListener(`click`, destroyBoxes);
