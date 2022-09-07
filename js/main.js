const navToggler = document.querySelector("nav > svg");

const collapsibles = document.querySelectorAll(".collapsible.footer__section");

// Click event for navbar navigation menu
navToggler.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("collapsible--expanded");
});

// Click events for footer navigation menus
collapsibles.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("collapsible--expanded");
    });
});