// ===============================
// TECHFEST LANDING PAGE JS
// ===============================


// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 5, 5, 0.92)";
    } else {
        navbar.style.background = "rgba(5, 5, 5, 0.65)";
    }
});


// SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".section-heading, .feature-card, .event-item, .timeline-item, .about-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }

        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// MOUSE PARALLAX EFFECT
const hero = document.querySelector(".hero");
const orbOne = document.querySelector(".orb-one");
const orbTwo = document.querySelector(".orb-two");

hero.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    orbOne.style.transform = `translate(${x}px, ${y}px)`;
    orbTwo.style.transform = `translate(${-x}px, ${-y}px)`;

});


// EVENT HOVER EFFECT
const eventItems = document.querySelectorAll(".event-item");

eventItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {
        item.style.borderLeft = "2px solid #d7ff3f";
    });

    item.addEventListener("mouseleave", () => {
        item.style.borderLeft = "none";
    });

});


// CURRENT YEAR
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Techfest, IIT Bombay. Concept landing page.`;
}


// BUTTON CLICK FEEDBACK
const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });

});