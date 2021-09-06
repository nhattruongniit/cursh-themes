$(document).ready(function() {

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
        gallery: {
            enabled: true,
        }
    });

    $(".slide-main-h1").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        dots: true,
    });

    $(".slide-main-h2").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        dots: true,
    });

    $(".slide-main-h3").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        dots: true,
    });

    $(".slider-clients").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        dots: false,
    });

    $(".slide-na").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        dots: false,
    });

    var $btns = $('.btn-filter').click(function() {
        if (this.id == 'all') {
            $('.result-filter > a').fadeIn(450);
            $('.result-filter > div').fadeIn(450);
        } else {
            var $el = $('.' + this.id).fadeIn(450);
            $('.result-filter > a').not($el).fadeOut(450);
            $('.result-filter > div').not($el).fadeOut(450);
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    $(".slide-deals-of").owlCarousel({
        items: 2,
        autoplay: false,
        nav: false,
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        responsive: {
            300: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    $(".relative-slide").owlCarousel({
        items: 4,
        autoplay: false,
        nav: false,
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        responsive: {
            300: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $(".branding-v3").owlCarousel({
        items: 7,
        autoplay: false,
        nav: false,
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        responsive: {
            300: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            },
            1200: {
                items: 7
            }
        }
    });

    $('.btn-menu').click(function() {
        $('.main-menu').addClass('active-menu-mb');
    });

    $('.mask-hide-menu').click(function() {
        $('.main-menu').removeClass('active-menu-mb');
    })

    $('.main-menu i.fa-angle-down, .currency-v2 span, .language-v2 span').click(function() {
        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(400);
            $(this).removeClass('flip');
        } else {
            $(this).next().slideDown(400);
            $(this).addClass('flip');
        }
    });

    $('.btn-top-header').click(function() {
        $('.top-header-v2').slideToggle(400);
    });

    $('.btn-showgp').click(function() {
        $('.ct-list-v1').fadeToggle(300);
        $(this).toggleClass('show-close');
    });

    $(".slide-best-sell-v3").owlCarousel({
        items: 6,
        autoplay: false,
        nav: false,
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        responsive: {
            300: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    });

    if ($('#slider-range')) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [100, 300],
            slide: function(event, ui) {
                $("#amount").html("<span class='icon1'></span> $" + ui.values[0] + " - <span class='icon2'></span> $" + ui.values[1]);
                $("#amount1").val(ui.values[0]);
                $("#amount2").val(ui.values[1]);
            }
        });
        $("#amount").html("<span class='icon1'></span> $" + $("#slider-range").slider("values", 0) +
            " - <span class='icon2'></span> $" + $("#slider-range").slider("values", 1));
    }

    // This button will increment the value
    $('.qtyplus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });

    $('.box-sidebar h3').click(function() {
        if ($(this).next().is(':visible')) {
            $(this).next().slideUp('fast');
        } else {
            $(this).next().slideDown('fast');
        }
    });

    $('#search').click(function() {
        $('.light-box-search').addClass('show-search');
        $('body').addClass('no-scroll');
    });
    $('.hide-search').click(function() {
        $('.light-box-search').removeClass('show-search');
        $('body').removeClass('no-scroll');
    });


    $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true
    });


    $('.gallery-grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    var $grid = $('.gallery-grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 100,
            gutter: 20
        }
    });

    $('.js-my-account').on('click', function() {
        var rel = $(this).attr('data-rel');
        $('.my-account').hide();
        $('.'+rel).show();
    })
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >  74) { 
            $('#header, .bottom-header-v2').addClass('header-fixed')
        } else {
            $('#header, .bottom-header-v2').removeClass('header-fixed')
        }
        //effect scroll section how-to-buy in page index.html
        var sectionBuy = $('#how-to-buy');
        if(sectionBuy.length > 0) {
           
            if(scrollTop >= sectionBuy.offset().top - 200) {
                $('.how-to-buy').addClass('animate')
            }
    
        }
        
    })


    if ($(".zoom-image").length > 0) {
        $(".zoom-image").elevateZoom();
    }

    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 130,
            itemMargin: 10,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
    });

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime, clock) {

        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');



        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    if ($('.clockdiv')) {
        var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        $('.clockdiv').each(function(index, el) {
            initializeClock('clockdiv', deadline, el);
        });
    };

    $('.backTop').on('click', function() {
        $('body, html').animate({scrollTop: 0}, 500);
    })

});