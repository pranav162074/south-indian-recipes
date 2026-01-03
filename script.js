// Your recipe data
const recipes = { // declares a constant variable named recipes and assigns it an object containing all your recipe data. NOW THIS RECIPES IS USED AS A DATABASE FOR THIS SITE.
  idly: { // idly, dosa etc. are top-level keys in this big directionary/lookup table. Each of those keys maps to another object (the details of the recipe).
    // In simple words:
    // ⭐ recipes is like a dictionary.
    // ⭐ idly, dosa, etc. are the words (keys).
    // ⭐ Their definitions (values) are objects describing ingredients and procedure.
    title: "Idly",
    image: "images/idly.jpg",
    ingredients: [
      "2 cups rice",
      "1 cup urad dal",
      "Salt to taste",
      "Water as needed"
    ],
    procedure: [
      "Soak rice and urad dal separately for 4 to 6 hours.",
      "Grind to a smooth batter.",
      "Ferment overnight.",
      "Pour into idly moulds and steam for 10 to 12 minutes."
    ] // title, image, ingredients, procedure are keys in inner object. Their values are Idly, idly.jpg etc.
  },
  dosa: {
    title: "Dosa",
    image: "images/dosa.jpg",
    ingredients: [
      "2 cups rice",
      "½ cup urad dal",
      "1 tsp fenugreek seeds",
      "Salt as needed",
      "Water as needed"
    ],
    procedure: [
      "Soak rice, dal, and fenugreek seeds for 6 hours.",
      "Grind to a smooth batter and ferment overnight.",
      "Add water to make a pourable batter.",
      "Spread on hot tawa, cook until crispy."
    ]
  },
  vada: {
    title: "Vada",
    image: "images/vada.jpg",
    ingredients: [
      "1 cup urad dal",
      "Salt",
      "Spices (pepper, green chilies)",
      "Oil for frying"
    ],
    procedure: [
      "Soak urad dal for 4 hours.",
      "Grind to a thick batter.",
      "Add spices and salt.",
      "Shape into vadas and deep fry."
    ]
  },
  upma: {
    title: "Upma",
    image: "images/upma.jpg",
    ingredients: [
      "1 cup semolina",
      "2 tbsp ghee or oil",
      "1 onion, chopped",
      "Vegetables as desired",
      "Spices and curry leaves"
    ],
    procedure: [
      "Roast semolina until fragrant.",
      "Sauté onion, spices, and vegetables.",
      "Add water and bring to boil.",
      "Slowly add semolina while stirring."
    ]
  },
  pongal: {
    title: "Pongal",
    image: "images/pongal.jpg",
    ingredients: [
      "1 cup rice",
      "½ cup moong dal",
      "2 tbsp ghee",
      "Black pepper, cumin, cashews"
    ],
    procedure: [
      "Dry roast moong dal lightly.",
      "Pressure cook rice and dal together.",
      "Temper cumin, pepper, and cashews in ghee.",
      "Mix into the cooked pongal."
    ]
  },
  biryani: {
    title: "Hyderabadi Biryani",
    image: "images/biryani.jpg",
    ingredients: [
      "2 cups basmati rice",
      "500g marinated meat",
      "Whole spices",
      "Fried onions",
      "Saffron milk"
    ],
    procedure: [
      "Marinate meat with spices and yogurt.",
      "Parboil rice with whole spices.",
      "Layer rice and meat, top with fried onions and saffron milk.",
      "Cook on dum until done."
    ]
  },
  pulihora: {
    title: "Pulihora",
    image: "images/pulihora.jpg",
    ingredients: [
      "2 cups cooked rice",
      "Tamarind paste",
      "Green chilies",
      "Curry leaves",
      "Peanuts"
    ],
    procedure: [
      "Make tamarind paste with spices.",
      "Heat oil, fry mustard, chilies, curry leaves, peanuts.",
      "Mix the tempering with rice and tamarind paste."
    ]
  },
  payasam: {
    title: "Semiya Payasam",
    image: "images/semiyapayasam.jpg",
    ingredients: [
      "½ cup vermicelli",
      "2 cups milk",
      "Sugar to taste",
      "Cardamom",
      "Cashews and raisins"
    ],
    procedure: [
      "Roast vermicelli in ghee.",
      "Boil with milk and sugar.",
      "Add cardamom, cashews, and raisins.",
      "Serve warm or chilled."
    ]
  },
  laddu: {
    title: "Boondhi Laddu",
    image: "images/laddu.jpg",
    ingredients: [
      "1 cup gram flour",
      "Sugar syrup",
      "Cardamom powder",
      "Ghee",
      "Nuts (optional)"
    ],
    procedure: [
      "Make thin batter with gram flour.",
      "Fry boondhi using a slotted ladle.",
      "Soak in hot sugar syrup.",
      "Shape into laddus when slightly cool."
    ]
  }
};

// Main code
document.addEventListener('DOMContentLoaded', () => { // Runs this code only after the entire HTML document has loaded
  const cardsContainer = document.getElementById('cardsContainer'); // Selects the main container holding all recipe cards
  const recipeView = document.getElementById('recipeView'); // Selects the hidden section where full recipe details will be shown
  const foodCards = document.querySelectorAll('.food'); // Selects all individual recipe card elements with class "food"

  foodCards.forEach(card => { // Loops over each food card, 'card' is just a variable name here referring to .food.idly, .food.dosa etc.
    card.addEventListener('click', (e) => { // When a card is clicked, run this function
      e.preventDefault(); // Prevents the default behavior of the element (like following a link)
      const classes = Array.from(card.classList); // Converts the class list of the clicked card into an array 
      // Example:
      // If the clicked card has this HTML:
      /* <div class="food idly"></div>
      Then:

      card.classList → ["food", "idly"]
      And:

      classes = Array.from(card.classList) → ["food", "idly"] (now a real array) */
      const dishKey = classes.find(c => recipes.hasOwnProperty(c)); /* Finds the class that matches a key in the recipes object (like "idly"). c is each class name from the array (like "food", "idly"). 
      recipes.hasOwnProperty(c) checks:
      👉 "Does the recipes object contain a property (key) named c?" */
      if (dishKey) { // If a valid recipe key is found...
        showRecipe(dishKey); // Call the function to display the full recipe for that dish
      }
    });
  });

  function showRecipe(key) {
    const recipe = recipes[key];
    if (!recipe) return;

    cardsContainer.style.display = 'none'; // Hide all cards when showing full recipe
    recipeView.style.display = 'flex'; // Show the full recipe container

    recipeView.innerHTML = `
      <div class="big-recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <h3>Here's how to prepare ${recipe.title}!</h3>
        
        <h4>Ingredients</h4>
        <ul>
          ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h4>Procedure</h4>
        <ol>
          ${recipe.procedure.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <p class="closing-line">Now Your ${recipe.title} is ready to be devoured!</p>
        
        <button id="backButton">Back</button>
      </div>
    `;  // Fill the full recipe container with dynamic HTML for the selected recipe.

    document.getElementById('backButton').addEventListener('click', () => {   // When the "Back" button is clicked...
      recipeView.style.display = 'none'; // Hide the full recipe section
      cardsContainer.style.display = 'flex'; // Show all the recipe cards again
    });
}

});
