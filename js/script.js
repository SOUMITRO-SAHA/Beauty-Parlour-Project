const navPrev = `<i class="fa-solid fa-angle-left fa-3x"></i>`;
const navNext = `<i class="fa-solid fa-angle-right fa-3x"></i>`;

($(document).ready(
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            navNext,
            navPrev
        ],
        startPosition: 0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    })
))
