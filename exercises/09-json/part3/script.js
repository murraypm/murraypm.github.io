// https://www.thecocktaildb.com/

// Get drinks
const getDrinks = async(name) => {
    try {
        return (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)).json();
    } catch (error) {
        console.log(error);
    }
};

// Display drinks
const displayDrinks = async(name) => {
    const object = await getDrinks(name);
    const drinks = object.drinks;
    const drinkSection = document.getElementById("cocktails");
    drinkSection.innerHTML = "";
    drinks.forEach((drink) => {
        const section = document.createElement("section");
        section.classList.add("drink");
        
        const h3 = document.createElement("h3");
        h3.innerHTML = drink.strDrink;
        section.append(h3);

        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;
        section.append(img);

        const p1 = document.createElement("p");
        p1.innerHTML = drink.strInstructions;
        section.append(p1);

        drinkSection.append(section);

        // const ul = document.createElement("ul");
        // for (let i = 0; i < 15; i++) {
            
        // }
    });
};

displayDrinks("");

document.getElementById("search-box").oninput = async(e) => {
    // console.log(e.target.value);
    displayDrinks(e.target.value);
};