$(document).ready(function() {

    /* TODO: jquery slimscroll for cart ============*/
    $('.js-cart-slimscroll').slimScroll({
        height: '310px',
        size: '5px'
    });

    $('.js-banner').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: '<div class="c-button__slider c-button__slider--prev"><i class="fa fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="c-button__slider c-button__slider--next"><i class="fa fa-long-arrow-right"></i></div>'
    });
})