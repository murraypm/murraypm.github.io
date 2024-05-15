let countNumber = 0;
const countP = document.getElementById("count-number");
document.getElementById("count-card").onclick = () => {
    countNumber += 1;
    countP.innerHTML = countNumber;
}

document.getElementById("random-image").onclick = () => {
    location.reload();
}

const square = document.getElementById("square");
const slider = document.getElementById("slider");
const container = slider.parentElement;
slider.oninput = () => {

    square.style.left = ((container.clientWidth-square.clientWidth)/container.clientWidth*slider.value) + "%";
}