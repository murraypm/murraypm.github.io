// Toggles nav bar appearing/disappear and updates arrow appearance
const nav = document.getElementById("nav");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");
document.getElementById("arrows").onclick = () => {
    nav.classList.toggle("hidden");
    downArrow.classList.toggle("hidden");
    upArrow.classList.toggle("hidden");
}

// Toggles which interactive module is appearing
// TO-DO: better way to set up function(s) to reduce code similarity/duplication
const card1 = document.getElementById("exercise-1");
const card2 = document.getElementById("exercise-2");
document.getElementById("nav-one").onclick = () => {
    // If first module isn't already showing, toggle
    // Otherwise first module is already appearing so do nothing
    if (card1.classList.contains("hidden")) {
        card1.classList.toggle("hidden");
        card2.classList.toggle("hidden");
    }
}
document.getElementById("nav-two").onclick = () => {
    // If second module isn't already showing, toggle
    // Otherwise second module is already appearing so do nothing
    if (card2.classList.contains("hidden")) {
        card1.classList.toggle("hidden");
        card2.classList.toggle("hidden");
    }
}

// Update first module's background color based on slider value
// Also update accompanying text based on ranges within slider value
const slider = document.getElementById("slider");
const colorMessage = document.getElementById("txt-color");
slider.oninput = () => {
    card1.style.backgroundColor = `rgb(${slider.value}, 0, 0)`;
    if (slider.value < 86) {
        colorMessage.innerHTML = "Black";
    } else if (slider.value < 172) {
        colorMessage.innerHTML = "Garnet";
    } else {
        colorMessage.innerHTML = "Red";
    }
}

// Updates image displayed by second module based on which button is pressed
// Eventlistener is called whenever any presses within the article box occur
// If the event (click) is on a button the target is the button
// The event (click) can be other things within the article box that we don't care about
// so we ignore it
const img = document.getElementById("img-var");
document.getElementById("exercise-2").onclick = (e) => {
    if (e.target.innerHTML == "Small") {
        img.setAttribute("src", "https://picsum.photos/50")
    } else if (e.target.innerHTML == "Medium") {
        img.setAttribute("src", "https://picsum.photos/100")
    } else if (e.target.innerHTML == "Large") {
        img.setAttribute("src", "https://picsum.photos/150")
    }
}