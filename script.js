/* MENU MOBILE */

let iconMenu = document.querySelector(".burger");
let menu = document.querySelector(".menu");

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("menu__move");
});

/* SLIDERSHOW */

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 7500;
let slideInterval;

const nextSlide = () => {
    // Pegar slide atual
    const current = document.querySelector(".current");
    //Remover slide atual
    current.classList.remove("current");
    //Prev slide
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }

    setTimeout(() => current.classList.remove("current"));
};

//Evento dos botões
next.addEventListener("click", (e) => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener("click", (e) => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
//Auto slide
if (auto) {
    //Proximo slide no intervalo de tempo
    slideInterval = setInterval(nextSlide, intervalTime);
}