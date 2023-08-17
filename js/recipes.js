console.clear();

let recipeList = [
  {
    name: "Mashed Potatoes",
    ingredients: ["potatoes", "garlic", "butter", "milk", "cream cheese"]
  },
  {
    name: "Green Bean Casserole",
    ingredients: [
      "green beans",
      "flour",
      "butter",
      "garlic powder",
      "onion powder",
      "nutmeg",
      "dijon mustard",
      "heavy cream"
    ]
  }
];

// Your application code below here

let targetEl = document.getElementById("recipeList");

recipeList.forEach(function (recipe) {
  renderRecipe(recipe);
});

function renderRecipe(recipe) {
  let div = document.createElement("div");
  div.setAttribute("class", "recipe");
  div.innerHTML = `
    <h3>
      ${recipe.name}
    </h3>
    <ul>
        ${recipe.ingredients
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}
    </ul>
  `;
  targetEl.append(div);
}

let form = document.querySelector("form");
let nameInput = form.querySelector("#recipeName");
let ingredientsInput = form.querySelector("#recipeIngredients");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let recipe = {
    name: nameInput.value,
    ingredients: ingredientsInput.value
      .split(",")
      .map((ingredient) => ingredient.trim())
  };

  recipeList.push(recipe);
  renderRecipe(recipe);
  localStorage.setItem("recipeList", JSON.stringify(recipeList));
  form.reset();
  nameInput.focus();
});

if (localStorage.getItem("recipeList")) {
  recipeList = JSON.parse(localStorage.getItem("recipeList"));
  recipeList.forEach(function (recipe) {
    renderRecipe(recipe);
  });
}
