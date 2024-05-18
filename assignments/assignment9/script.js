const starText = document.getElementById("txt-stars");
const starBox = document.getElementById("star-box");
const starMessage = document.getElementById("star-message");
const errorMessage = document.getElementById("error");

// draws stars of inputted number when button is clicked
document.getElementById("btn-draw").onclick = () => {
    errorMessage.innerHTML = "";
    starMessage.innerHTML = "";
    if (isNaN(starText.value)) {
        errorMessage.innerHTML = "Invalid input, enter a number";
        return;
    } else if (starText.value <= 0) {
        errorMessage.innerHTML = "Invalid input, number must be greater than 0";
        return;
    }

    starBox.replaceChildren(""); // clear out star's from previous draw
    for (let i = 1; i <= starText.value; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        starBox.append(star);
        // magic number 21 is star's width
        // magic number 25 is star's height
        star.style.left = Math.round(Math.random() * (starBox.offsetWidth - 21)) + "px";
        star.style.top = Math.round(Math.random() * (starBox.offsetHeight - 25)) + "px";
        star.onclick = () => {
            starMessage.innerHTML = `You clicked on star #${i}`;
        }
    }
}