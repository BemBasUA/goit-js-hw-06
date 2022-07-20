const inputEl = document.querySelector(`#name-input`);
const nameEl = document.querySelector(`#name-output`);
inputEl.addEventListener(`input`, (event) => {
  if (event.currentTarget.value) {
    nameEl.textContent = event.currentTarget.value;
  } else {
    nameEl.textContent = "Anonymous";
  }
});
