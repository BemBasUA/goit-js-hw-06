const listEl = document.querySelector(`#categories`);

const listItemsEl = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, listItemsEl.length);

const showTitles = () => {
  listItemsEl.forEach((item) => {
    item
      .querySelectorAll(`h2`)
      .forEach((title) => console.log(`Category:`, title.textContent));
    console.log(`Elements:`, item.querySelectorAll(`li`).length);
  });
};

showTitles();
