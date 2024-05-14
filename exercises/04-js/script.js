const sayHello = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello";
}

const styleButton = () => {
    const messageP = document.getElementById("fun-message");
    messageP.className = "style-button";
}

const disappearDialga = () => {
    document.getElementById("dialga").style = "display: none";
    // document.getElementById("dialga").hidden = true;
}

const addRainbow = () => {
    document.getElementById("bow").classList.add("rainbow");
}

document.getElementById("btn-hi").onclick = sayHello;

document.getElementById("btn-style").onclick = styleButton;

document.getElementById("dialga").onclick = disappearDialga;

document.getElementById("btn-rainbow").onclick = addRainbow;