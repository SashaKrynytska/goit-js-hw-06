const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsContainer = document.querySelector("#ingredients");

const makeIngredientsElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");
    console.log(liEl);
    return liEl;
  });
};

const newIngredients = makeIngredientsElements(ingredients);
ingredientsContainer.append(...newIngredients);

console.log(ingredientsContainer);
