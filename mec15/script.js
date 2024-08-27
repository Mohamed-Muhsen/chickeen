document.addEventListener("DOMContentLoaded", () => {
    const addchicken = document.getElementById("chickens");
    const numberOfChickens = 24;
    const delay = 500;
    let currentIndex = 0;

    const limited = setInterval(() => {
        if (currentIndex < numberOfChickens) {
            const img = document.createElement("img");
            img.src = "blue.jpeg";
            img.classList.add("chicken");
            addchicken.appendChild(img);
            currentIndex++;
        } else {
            clearInterval(limited);
        }
    }, delay);
});