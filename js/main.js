// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//     item.addEventListener("click", function() {
//         this.classList.toggle("collapsible--expanded");
//     })
// );

<<<<<<< HEAD


// const navToggler = document.querySelector("nav > svg");
// const navMenu = document.querySelector("nav > ul");

// navToggler.addEventListener("click", function() {
//     navMenu.classList.toggle("collapsible–expanded");
//     if (navMenu.classList.contains("collapsible__content") === true) {
//         navMenu.classList.remove("collapsible__content");
//     } else {
//         navMenu.classList.add("collapsible__content");
//     }
// });

document.querySelector('nav > svg').addEventListener('click', () => {
    document.querySelector('nav > ul').classList.toggle('collapsible__content')
})
=======
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
>>>>>>> 9f5e023dc87886bc02c4fd5fe11051d638ee6943
