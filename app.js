// Menu Slide Open:
document.querySelector(".menu-btn").addEventListener('click', () => {
    document.querySelector("header").classList.add("menu-slide-opened");
    document.querySelector(".menu-slide-header").classList.remove("hide");

})
// Menu Slide Close:
document.querySelector(".mobile-menu-slide-close").addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.add("collapse");
    document.querySelector('.navbar-collapse').classList.remove("show");
    document.querySelector("header").classList.remove("menu-slide-opened");
    document.querySelector(".menu-slide-header").classList.add("hide");
});

