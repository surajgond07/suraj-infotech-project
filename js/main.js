const navToggler = document.querySelector("nav > svg");
const navMenu = document.querySelector("nav > ul");

const collapsibles = document.querySelectorAll(".collapsible.footer__section");

// Click event for navbar navigation menu
navToggler.addEventListener("click", () => {
    navMenu.classList.toggle("collapsible__content");
});

// Click events for footer navigation menus
collapsibles.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.currentTarget.querySelector("div:nth-child(2)").classList.toggle("collapsible__content");
    });
});