// associative array of images and their related titles and descritions
// key = image source, value = array of [image title, image description]
const images = [];
images["images/birthday.jpg"] = ["Birthday", "It's your birthday!"];
images["images/clown.jpg"] = ["Clown", "You make everyone laugh like a clown!"];
images["images/rain.jpg"] = ["Rain", "The rain won't keep you away!"];
images["images/read.jpg"] = ["Read", "You read like a worm!"];
images["images/shovel.jpg"] = ["Shovel", "You dig like a worm!"];
images["images/work.jpg"] = ["Work", "You work like a worm!"];

// Create images from associative array and display them
(() => {
    // querySelector used instead of getElementById to demonstrate knowledge
    const section = document.getElementById("images");
    const title = document.querySelector("#details h4");
    const description = document.querySelector("#details p");

    for (let imgSrc in images) {
        // Create img from source url and display on page
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${images[imgSrc][0]} image`; // alt = image title + "image"
        section.append(img);

        // Display title and description for img when clicked on
        img.onclick = () => {
            title.innerHTML = images[imgSrc][0];
            description.innerHTML = images[imgSrc][1];
        };
    }
})();