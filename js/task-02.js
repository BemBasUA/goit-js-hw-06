const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector(`#ingredients`);
const listItemsEl = ingredients.map((item) => {
  const listItemEl = document.createElement(`li`);

  listItemEl.classList.add(`item`);

  listItemEl.textContent = item;

  return listItemEl;
});
listEl.append(...listItemsEl);
