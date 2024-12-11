// Define recipes as an array of objects
const recipes = [
    {
      id: "strawberry",
      title: "Strawberry Cream Cheesecake 🍓",
      ingredients: [
        "400g graham crackers",
        "150g unsalted butter, melted",
        "300g marshmallows",
        "175g unsalted butter, melted",
        "500g cream cheese, softened",
        "250ml whipping cream",
        "3 tbsp powdered gelatin + 3 tbsp water",
        "5 drops purple food gel",
        "3 drops blue food gel"
      ],
      instructions: [
        "Add graham crackers to a food processor and process until fine crumbs. Add melted butter and mix.",
        "Pour mixture into a tart tin and press firmly to form the crust. Chill for 30 minutes.",
        "Microwave marshmallows and butter for 30 seconds. Mix well.",
        "Dissolve gelatin in water and microwave for 30 seconds. Add to marshmallow mixture.",
        "Add cream cheese, whipping cream, and food coloring. Mix well.",
        "Layer the mixture in the crust and chill for 2 hours before serving."
      ]
    },
    {
      id: "chocolate",
      title: "Chocolate Fudge Cake 🍫",
      ingredients: [
        "200g dark chocolate",
        "1 cup sugar",
        "1 cup flour",
        "2 eggs",
        "1/2 cup butter",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Melt chocolate and butter over a double boiler.",
        "Whisk in sugar, eggs, and vanilla extract.",
        "Fold in flour until combined.",
        "Pour batter into a greased pan and bake at 180°C for 30-35 minutes.",
        "Allow to cool before serving."
      ]
    },
    {
      id: "apple",
      title: "Classic Apple Pie 🍎",
      ingredients: [
        "5 apples",
        "200g sugar",
        "1 tsp cinnamon",
        "1 package of pie crusts",
        "1 tbsp lemon juice"
      ],
      instructions: [
        "Peel and slice apples, then mix with sugar, cinnamon, and lemon juice.",
        "Place apple mixture in a pie crust and top with another crust.",
        "Bake at 180°C for 45 minutes or until golden brown.",
        "Cool before serving."
      ]
    }
  ];
  
  // Create and style the app dynamically
  const app = document.createElement("div");
  app.style.fontFamily = "Arial, sans-serif";
  app.style.margin = "20px auto";
  app.style.maxWidth = "800px";
  app.style.padding = "20px";
  app.style.backgroundColor = "#fff";
  app.style.border = "1px solid #ddd";
  app.style.borderRadius = "10px";
  app.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  
  // App header
  const header = document.createElement("h1");
  header.textContent = "Recipe App";
  header.style.textAlign = "center";
  header.style.color = "#333";
  app.appendChild(header);
  
  // Search bar
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search recipes...";
  searchInput.style.width = "100%";
  searchInput.style.padding = "10px";
  searchInput.style.marginBottom = "20px";
  searchInput.style.border = "1px solid #ccc";
  searchInput.style.borderRadius = "5px";
  app.appendChild(searchInput);
  
  // Recipe container
  const recipeContainer = document.createElement("div");
  recipeContainer.style.display = "grid";
  recipeContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  recipeContainer.style.gap = "20px";
  app.appendChild(recipeContainer);
  
  // Function to render recipes
  function renderRecipes(query = "") {
    recipeContainer.innerHTML = ""; // Clear existing recipes
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  
    filteredRecipes.forEach(recipe => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ddd";
      card.style.borderRadius = "5px";
      card.style.padding = "10px";
      card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
      card.style.textAlign = "center";
  
      const title = document.createElement("h3");
      title.textContent = recipe.title;
      title.style.fontSize = "1.2rem";
      title.style.marginBottom = "10px";
      card.appendChild(title);
  
      const button = document.createElement("button");
      button.textContent = "Read More";
      button.style.padding = "10px 20px";
      button.style.backgroundColor = "#007bff";
      button.style.color = "#fff";
      button.style.border = "none";
      button.style.borderRadius = "5px";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openRecipeModal(recipe));
      card.appendChild(button);
  
      recipeContainer.appendChild(card);
    });
  }
  
  // Modal for displaying recipe details
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.style.display = "none";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";
  
  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.borderRadius = "5px";
  modalContent.style.padding = "20px";
  modalContent.style.width = "90%";
  modalContent.style.maxWidth = "500px";
  modalContent.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  modal.appendChild(modalContent);
  
  // Close button for modal
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "20px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.backgroundColor = "#007bff";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalContent.appendChild(closeButton);
  
  // Append modal to body
  document.body.appendChild(modal);
  
  // Function to open recipe modal
  function openRecipeModal(recipe) {
    modalContent.innerHTML = `
      <h2>${recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
      <h3>Instructions</h3>
      <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join("")}</ol>
    `;
    modalContent.appendChild(closeButton);
    modal.style.display = "flex";
  }
  
  // Search functionality
  searchInput.addEventListener("input", e => {
    renderRecipes(e.target.value);
  });
  
  // Render initial recipes
  renderRecipes();
  
  // Append the app to the document body
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.backgroundColor = "#f8f8f8";
  document.body.appendChild(app);
  