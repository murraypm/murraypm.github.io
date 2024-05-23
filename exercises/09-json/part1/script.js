// https://portiaportia.github.io/json/shoes.json

// gets data from json file
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

// Displays shoes on page
(async() => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");

    shoes.forEach((shoe) => {
        shoesSection.append(getShoe(shoe));
    });
})();

const getShoe = (shoe) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    const p1 = document.createElement("p");
    p1.innerHTML = `$${shoe.price}`;
    section.append(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = shoe.description;
    section.append(p2);

    const ul = document.createElement("ul");
    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });
    section.append(ul);

    return section;
};