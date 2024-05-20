const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

document.getElementById("forward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;
    if (nextImage == null) {
        nextImage = document.querySelector("#preview :first-child");
    }
    slide(nextImage);
};

document.getElementById("backward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let nextImage = currentImage.previousElementSibling;
    if (nextImage == null) {
        nextImage = document.querySelector("#preview :last-child");
    }
    slide(nextImage);
};

document.querySelectorAll("#thumbs img").forEach((img, index) => {
    img.onclick = () => {
        const nextImage = document.querySelector(`#preview :nth-child(${index+1})`);
        slide(nextImage);
    };
});