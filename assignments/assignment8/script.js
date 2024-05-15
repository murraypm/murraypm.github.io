const nav = document.getElementById("nav");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");
document.getElementById("arrows").onclick = () => {
    nav.classList.toggle("hidden");
    downArrow.classList.toggle("hidden");
    upArrow.classList.toggle("hidden");
}

const card1 = document.getElementById("exercise-1");
const card2 = document.getElementById("exercise-2");
document.getElementById("nav-one").onclick = () => {
    if (card1.classList.contains("hidden")) {
        card1.classList.toggle("hidden");
        card2.classList.toggle("hidden");
    }
}
document.getElementById("nav-two").onclick = () => {
    if (card2.classList.contains("hidden")) {
        card1.classList.toggle("hidden");
        card2.classList.toggle("hidden");
    }
}

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