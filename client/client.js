'use strict';

function scrollEvents() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    const navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);
}

function intiSwiper() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    swiper.init();
}


$('#viewdetails3').collapse('hide');

$(document).ready(function () {
    scrollEvents();

    intiSwiper();
});
