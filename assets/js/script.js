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
    navMenu.classList.remove("open");
};


navLink.forEach(navLink => navLink.addEventListener("click", linkAction));


/*=== SCROLL REVEAL ANIMATION ===*/


const sr = ScrollReveal({
    origin: 'top',
    distance: "80px",
    duration: 2000,
    reset:true
});



/*=== SCROLL HOME ===*/

sr.reveal('.home__title',{});
sr.reveal('.button',{delay:200});
sr.reveal('.home__img', {delay:400});
sr.reveal('.home__social-icon', {interval:200})

/*=== SCROLL ABOUT ===*/

sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay:200});
sr.reveal('.about__text',{delay:400});


/*=== SCROLL SKILLS ===*/

sr.reveal('.experience-sub-title',{delay:200});
sr.reveal('.animation-container',{delay:200});
sr.reveal('.skills__social-icon',{interval:200});

/*=== SCROLL WORKS ===*/

sr.reveal('.color-container',{delay:200});
sr.reveal('.article-contianer', {delay:200});
sr.reveal('.project-title', {delay:300});


/*=== SCROLL CONTACT ===*/

sr.reveal('.contact__container', {delay:200});
sr.reveal('.contact-info-cotainer', {delay:400});
sr.reveal('.animation-icon', {interval:300})
sr.reveal('.animation-info', {delay:400})

/*=== SCROLL FOOTER ===*/

sr.reveal('.footer__title',{delay:200});
sr.reveal('.ul__links',{interval:100})