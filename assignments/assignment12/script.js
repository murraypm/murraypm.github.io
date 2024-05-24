const fetchIceCream = async() => {
    try {
        const response = await fetch("https://portiaportia.github.io/json/ice-creams.json");
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

// Displays images on page
(async() => {
    const iceCreams = await fetchIceCream();
    const content = document.getElementById("content");
    iceCreams.forEach((iceCream) => {
        const container = document.createElement("section");
        content.append(container);

        const img = document.createElement("img");
        img.src = "https://portiaportia.github.io/json/images/ice-creams/" + iceCream.image;
        container.append(img);

        const overlay = document.createElement("div");
        container.append(overlay);

        const overlayText = document.createElement("p");
        overlayText.innerHTML = iceCream.name;
        overlay.append(overlayText);
    });
})();