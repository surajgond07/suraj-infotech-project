// jquery scroll up function

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky");
        } else {
            $('.nav').removeClass("sticky");
        }
        // scroll up btn 
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");

        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

});


// JavaScript toggler function

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