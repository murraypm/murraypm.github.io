document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const root = document.querySelector(":root");
const enteredFunds = document.getElementById("txt-funds");
const error = document.getElementById("error-funds");
document.getElementById("btn-funds").onclick = () => {
    error.innerHTML = "";
    if (isNaN(enteredFunds.value)) {
        error.innerHTML = "Not a number";
        return;
    } else if (enteredFunds.value <= 0) {
        error.innerHTML = "Entered value needs to be greater than 0";
        return;
    }
    root.style.setProperty("--funds", enteredFunds.value/100 + "%");
}

const results = document.getElementById("loops-result");
document.getElementById("btn-loops").onclick = () => {
    for (let i = 0; i < 10; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        results.append(p);
    }
}

const txtStart = document.getElementById("txt-start");
const txtEnd = document.getElementById("txt-end");
const loopP = document.getElementById("loops-p");
const loopError = document.getElementById("loop-error");
document.getElementById("btn-loop").onclick = () => {
    const startValue = txtStart.value;
    const endValue = txtEnd.value;
    loopError.innerHTML = "";
    if (isNaN(startValue) || isNaN(endValue)) {
        loopError.innerHTML = "Entered values have to be a number";
        return;
    } else if (startValue >= endValue) {
        loopError.innerHTML = "Start value has to be less than end value";
        return;
    }
    for (let i = startValue; i <= endValue; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        loopP.append(li);

        li.onclick = () => {
            document.getElementById("info").innerHTML = `You clicked ${i}`;
        }
    }
}