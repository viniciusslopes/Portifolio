const menuToggle = document.getElementById("nav__toggle");
const ul = document.getElementById("nav__menu");

function menuShow() {
    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
    } else {
        ul.classList.add("open");
    };
};

menuToggle.onclick = () => menuShow();


const navLink = document.querySelectorAll(".nav__link");
console.log(navLink)

function linkAction() {
    navLink.forEach(navLink => navLink.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.remove("open")
};


navLink.forEach(navLink => navLink.addEventListener("click", linkAction));
