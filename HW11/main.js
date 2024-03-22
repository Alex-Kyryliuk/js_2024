// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts => {
        for (const cart of carts.carts) {
            // console.log(cart);

            let divCarts = document.createElement('div');
            divCarts.classList.add('product');
            document.body.appendChild(divCarts);

            for (const product of cart.products) {
                // console.log(product);
                divCarts.innerHTML = `
                ===============================================================================
                <p>Id: ${cart.id}</p>
                <p>Discounted Total: ${cart.discountedTotal}</p>
                <p>Total: ${cart.total}</p>
                <p>Total Products: ${cart.totalProducts}</p>
                <p>Total Quantity: ${cart.totalQuantity}</p>
                <p>User Id: ${cart.userId}</p>
                <h3>Products:</h3>`;

                let ul = document.createElement('ul');
                divCarts.appendChild(ul);

                cart.products.forEach(i => {

                    let li = document.createElement('li');
                    ul.appendChild(li);

                    li.innerHTML = `
                       <p>Id: ${i.id}</p>
                       <p>Title: ${i.title}</p>
                       <p>Price: ${i.price}</p>
                       <p>Quantity: ${i.quantity}</p>
                       <p>Discount Percentage: ${i.discountPercentage}</p>
                       <p>Discounted Price ${i.discountedPrice}</p>
                       <p>Total: ${i.total}</p>
                       <img src=${i.thumbnail} height="100">`
                });
            }
        }
    });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipes => {
        for (const recipe of recipes.recipes) {
            let divRecipes = document.createElement('div');
            divRecipes.classList.add('recipe');

            // let ulIngredients = document.createElement('ul');
            // recipe.ingredients.forEach(i => {
            //     let li = document.createElement('li');
            //     li.innerText = i;
            //     ulIngredients.appendChild(li);
            // });
            //
            // let ulInstructions = document.createElement('ul');
            // recipe.instructions.forEach(i => {
            //     let li = document.createElement('li');
            //     li.innerText = i;
            //     ulInstructions.appendChild(li);
            // });
            //
            // let ulTags = document.createElement('ul');
            // recipe.tags.forEach(i => {
            //     let li = document.createElement('li');
            //     li.innerText = i;
            //     ulTags.appendChild(li);
            // });
            //
            // let ulMeal = document.createElement('ul');
            // recipe.mealType.forEach(i => {
            //     let li = document.createElement('li');
            //     li.innerText = i;
            //     ulMeal.appendChild(li);
            // });

            //////////////////////////////скоротив код нижче
            function createList(arr) {
                let ul = document.createElement('ul');
                arr.forEach(i => {
                    let li = document.createElement('li');
                    li.innerText = i;
                    ul.appendChild(li);
                });
                return ul;
            }

            let ulIngredients = createList(recipe.ingredients);
            let ulInstructions = createList(recipe.instructions);
            let ulTags = createList(recipe.tags);
            let ulMeal = createList(recipe.mealType);


            let content = `
                ===============================================================================
                <p>Id: ${recipe.id}</p>
                <p>Name: ${recipe.name}</p>
                
                <p>Ingredients:</p>
                <ul>${ulIngredients.innerHTML}</ul>
                 
                <p>Instructions:</p>
                <ul>${ulInstructions.innerHTML}</ul>
                
                <p>Prep Time: ${recipe.prepTimeMinutes} minutes</p>
                <p>Cook Time: ${recipe.cookTimeMinutes} minutes</p>
                <p>Servings: ${recipe.servings}</p>
                <p>Difficulty: ${recipe.difficulty}</p>
                <p>Cuisine: ${recipe.cuisine}</p>
                <p>Calories per Serving: ${recipe.caloriesPerServing}</p>
                
                <p>Tags:</p>
                <ul>${ulTags.innerHTML}</ul>
                
                <p>User ID: ${recipe.userId}</p>
                <img src="${recipe.image}" alt="${recipe.name}" width="200px">
                <p>Rating: ${recipe.rating}</p>
                <p>Review Count: ${recipe.reviewCount}</p>
                
                <p>Meal Type:</p>
                <ul>${ulMeal.innerHTML}</ul>
            `;

            divRecipes.innerHTML = content;
            document.body.appendChild(divRecipes);
        }
    });

// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
