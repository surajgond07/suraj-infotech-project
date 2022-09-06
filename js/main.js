// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//     item.addEventListener("click", function() {
//         this.classList.toggle("collapsible--expanded");
//     })
// );

const navToggler = document.querySelector("nav > svg");
const navMenu = document.querySelector("nav > ul");

navToggler.addEventListener("click", function() {
    navMenu.classList.toggle("collapsible–expanded");
    if (navMenu.classList.contains("collapsible__content") === true) {
        navMenu.classList.remove("collapsible__content");
    } else {
        navMenu.classList.add("collapsible__content");
    }
});