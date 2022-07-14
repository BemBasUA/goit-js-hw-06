const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);
inputEl.addEventListener(`change`, (event) => {
  textEl.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
  console.log(textEl.fontSize);
});
