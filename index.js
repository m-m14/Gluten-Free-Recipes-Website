// Array of gluten-free recipe objects
const defaultRecipes = [
    {
        name: "Biscotti",
        ingredients: ["100g Almond Flour", "150g Gluten Free All-Purpose Flour", "90g Sugar", "2 Eggs", "25g Butter", "125g Whole Almonds/Raisins/Chocolate Chips", "1 Lemon/Orange Zest", "1 Teaspoon Vanilla Extract", "Pinch of Salt", "1 Packet of Baking Powder"],
        preparation: ["Preheat oven to 180 C", "Mix almond flour, all-purpose flour, sugar, salt, baking powder", "Beat soft butter and sugar", "Add eggs one by one and mix well", "Add lemon/orange zest, vanilla extract, and dry ingredients", "Mix on low until well-combined", "All almonds/alternative and mix for 1-2 minutes", "Transfer dough to a baking tray covered with baking paper", "Bake for 20-25 minutes until lightly browned", "Remove from the oven and cut into small squares", "Put back in the oven for another 10 minutes", "Transfer to a cooling rack and let it cool fully", "Enjoy!"],
        link: "javascript:void(0);",
        id: "biscotti"
    },
    {
        name: "Gluten-Free Pancakes",
        ingredients: ["1 cup Gluten-Free Flour", "1 cup Milk", "2 Eggs", "2 tablespoons Butter (melted)", "2 tablespoons Sugar", "1 tablespoon Baking Powder", "Pinch of Salt", "1 teaspoon Vanilla Extract"],
        preparation: ["In a bowl, mix gluten-free flour, sugar, baking powder, and salt", "In another bowl, beat eggs and mix with milk and vanilla extract", "Combine wet and dry ingredients", "Add melted butter and mix until smooth", "Heat a griddle or frying pan over medium heat", "Pour batter onto griddle and cook until bubbles form on the surface", "Flip and cook the other side until golden brown", "Serve with your favorite toppings"],
        link: "javascript:void(0);",
        id: "glutenFreePancakes"
    },
    {
        name: "Gluten-Free Brownies",
        ingredients: ["1 cup Gluten-Free Flour", "1/2 cup Cocoa Powder", "1 cup Sugar", "1/2 cup Butter (melted)", "2 Eggs", "1 teaspoon Vanilla Extract", "1/2 teaspoon Baking Powder", "Pinch of Salt"],
        preparation: ["Preheat oven to 180 C", "In a large bowl, mix gluten-free flour, cocoa powder, sugar, baking powder, and salt", "Add melted butter, eggs, and vanilla extract", "Mix until well combined", "Pour the batter into a greased baking dish", "Bake for 20-25 minutes or until a toothpick comes out clean", "Let it cool before cutting into squares", "Enjoy!"],
        link: "javascript:void(0);",
        id: "glutenFreeBrownies"
    },
    {
        name: "Quinoa Salad",
        ingredients: ["1 cup Quinoa", "2 cups Water", "1 cup Cherry Tomatoes (halved)", "1 Cucumber (diced)", "1/2 cup Feta Cheese (crumbled)", "2 tablespoons Olive Oil", "1 tablespoon Lemon Juice", "Salt and Pepper to taste"],
        preparation: ["Rinse quinoa under cold water", "In a pot, bring quinoa and water to a boil", "Reduce heat to low, cover, and simmer for 15 minutes", "Fluff quinoa with a fork and let it cool", "In a large bowl, combine cooked quinoa, cherry tomatoes, cucumber, and feta cheese", "Drizzle with olive oil and lemon juice", "Season with salt and pepper", "Toss well and serve chilled"],
        link: "javascript:void(0);",
        id: "quinoaSalad"
    },
    {
        name: "Gluten-Free Pizza",
        ingredients: ["2 cups Gluten-Free Flour", "1 packet Yeast", "1 tablespoon Olive Oil", "1 cup Warm Water", "Pinch of Salt", "1/2 cup Tomato Sauce", "1 cup Mozzarella Cheese (shredded)", "Toppings of Choice (pepperoni, vegetables, etc.)"],
        preparation: ["In a large bowl, combine gluten-free flour, yeast, and salt", "Add warm water and olive oil, mix until a dough forms", "Knead the dough for a few minutes until smooth", "Cover the dough and let it rise in a warm place for 30 minutes", "Preheat the oven to 220 C", "Roll out the dough on a floured surface", "Place the dough on a baking sheet and spread tomato sauce over it", "Add cheese and desired toppings", "Bake for 15-20 minutes or until the crust is golden and the cheese is bubbly", "Slice and serve hot"],
        link: "javascript:void(0);",
        id: "glutenFreePizza"
    },
    {
        name: "Gluten-Free Muffins",
        ingredients: ["2 cups Gluten-Free Flour", "1/2 cup Sugar", "1/4 cup Butter (melted)", "2 Eggs", "1/2 cup Milk", "2 teaspoons Baking Powder", "Pinch of Salt", "1 cup Berries (optional)"],
        preparation: ["Preheat oven to 180 C", "In a bowl, mix gluten-free flour, sugar, baking powder, and salt", "In another bowl, whisk together eggs, milk, and melted butter", "Combine wet and dry ingredients, mix until just combined", "Fold in berries if using", "Spoon the batter into a greased muffin tin", "Bake for 20-25 minutes or until a toothpick comes out clean", "Let the muffins cool in the pan for a few minutes before transferring to a wire rack", "Enjoy!"],
        link: "javascript:void(0);",
        id: "glutenFreeMuffins"
    },
    {
        name: "Stuffed Bell Peppers",
        ingredients: ["4 Bell Peppers", "1/2 pound Ground Beef", "1 cup Cooked Rice", "1 cup Tomato Sauce", "1/2 cup Cheese (shredded)", "1 Onion (chopped)", "2 Garlic Cloves (minced)", "Salt and Pepper to taste"],
        preparation: ["Preheat oven to 180 C", "Cut the tops off the bell peppers and remove the seeds", "In a pan, sauté onions and garlic until softened", "Add ground beef and cook until browned", "Stir in cooked rice and tomato sauce, season with salt and pepper", "Stuff the bell peppers with the beef mixture", "Place the stuffed peppers in a baking dish and top with cheese", "Bake for 25-30 minutes until the peppers are tender and the cheese is melted", "Serve hot"],
        link: "javascript:void(0);",
        id: "stuffedBellPeppers"
    },
    {
        name: "Gluten-Free Banana Bread",
        ingredients: ["2 cups Gluten-Free Flour", "3 Ripe Bananas (mashed)", "1 cup Sugar", "1/2 cup Butter (melted)", "2 Eggs", "1 teaspoon Baking Soda", "Pinch of Salt", "1 teaspoon Vanilla Extract"],
        preparation: ["Preheat oven to 175 C", "In a large bowl, mix gluten-free flour, baking soda, and salt", "In another bowl, mix mashed bananas, sugar, melted butter, eggs, and vanilla extract", "Combine wet and dry ingredients, mix until well combined", "Pour the batter into a greased loaf pan", "Bake for 60 minutes or until a toothpick inserted into the center comes out clean", "Let it cool before slicing", "Enjoy!"],
        link: "javascript:void(0);",
        id: "glutenFreeBananaBread"
    },
    {
        name: "Gluten-Free Chocolate Chip Cookies",
        ingredients: ["2 cups Gluten-Free Flour", "1 cup Butter (softened)", "1 cup Sugar", "1/2 cup Brown Sugar", "2 Eggs", "1 teaspoon Vanilla Extract", "1/2 teaspoon Baking Soda", "Pinch of Salt", "1 cup Chocolate Chips"],
        preparation: ["Preheat oven to 175 C", "In a bowl, cream together butter, sugar, and brown sugar", "Add eggs and vanilla extract, mix until well combined", "In another bowl, mix gluten-free flour, baking soda, and salt", "Gradually add the dry ingredients to the wet ingredients", "Fold in the chocolate chips", "Drop spoonfuls of dough onto a baking sheet", "Bake for 10-12 minutes or until the edges are golden brown", "Let cool on the baking sheet for a few minutes before transferring to a wire rack", "Enjoy!"],
        link: "javascript:void(0);",
        id: "glutenFreeChocolateChipCookies"
    }
];

// Function to show recipe details on a new page or in a modal
function showRecipeDetails(recipeId) {
    const recipe = defaultRecipes.find(r => r.id === recipeId);

    // This will replace the current content with the recipe details
    document.body.innerHTML = `
        <h1 class="title">${recipe.name}</h1>
        <div class="intruct">
            <h2 class="subtitle">Ingredients</h2>
            <ul class="instr_list">
                ${recipe.ingredients.map(ingredient => `<li class="instr_comp">${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="intruct">
            <h2 class="subtitle">Instructions</h2>
            <ol class="instr_list">
                ${recipe.preparation.map(step => `<li class="instr_comp">${step}</li>`).join('')}
            </ol>
        </div>
    `;
}

// Function to create recipe cards
function createRecipeCards(recipes) {
    const gridContainer = document.getElementById('recipeGrid');
    gridContainer.innerHTML = ''; // Clear existing content

    if (recipes.length === 0) {
        gridContainer.innerHTML = '<p class="no-results">No results match your search.</p>';
        const refreshButton = document.createElement('button');
        refreshButton.textContent = "Show Default Recipes";
        refreshButton.className = "refresh-button";
        refreshButton.onclick = () => createRecipeCards(defaultRecipes);
        gridContainer.appendChild(refreshButton);
        return;
    }

    recipes.forEach((recipe) => {
        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.link;
        recipeLink.onclick = () => showRecipeDetails(recipe.id);
        recipeLink.className = 'grid-item-link'; // New class to style the link

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        const recipeName = document.createElement('p');
        recipeName.className = 'recipe_name';
        recipeName.textContent = recipe.name;

        gridItem.appendChild(recipeName);
        recipeLink.appendChild(gridItem); // Wrap the div with the link
        gridContainer.appendChild(recipeLink);
    });
}



// Function to search recipes
function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = defaultRecipes.filter(recipe => {
        const recipeText = `${recipe.name} ${recipe.ingredients.join(' ')} ${recipe.preparation.join(' ')}`.toLowerCase();
        return recipeText.includes(query);
    });

    createRecipeCards(filteredRecipes);
}

// Initialize the recipe cards with default recipes and attach the search function
createRecipeCards(defaultRecipes);
document.getElementById('search').addEventListener('input', search);
