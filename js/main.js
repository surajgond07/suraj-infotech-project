<<<<<<< HEAD
=======
// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//     item.addEventListener("click", function() {
//         this.classList.toggle("collapsible--expanded");
//     })
// );

>>>>>>> c2b5cd81efbef17c0887126dc4cf19b5b223d2fb
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