$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 4
        },
        1200: {
            items: 8
        }
    }
});
owl.on('.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

$(function () {
    var win = $(window).height();
    var eTop = $('#all-circle').offset().top;

    eTop = eTop - win;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > eTop) {
            $('.circle-1').attr('stroke', '#43c5c1').addClass('circle-all').delay(900).queue(function (next) {
                $('.circle-2').attr('stroke', '#438496').addClass('circle-all').delay(900).queue(function (next) {
                    $('.circle-3').attr('stroke', '#828081').addClass('circle-all').delay(900).queue(function (next) {
                        $('.circle-4').attr('stroke', '#cd5360').addClass('circle-all').delay(900).queue(function (next) {
                            next();
                        });
                    });
                });
            });
        }

    });
});


$(function () {
    var win = $(window).height();
    var eTop = $('#all-circle').offset().top;

    eTop = eTop - win;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > eTop) {
            $('.choose-items-1').fadeIn(500).delay(900).queue(function (next) {
                $('.choose-items-2').fadeIn(500).delay(900).queue(function (next) {
                    $('.choose-items-3').fadeIn(500).delay(900).queue(function (next) {
                        $('.choose-items-4').fadeIn(500).delay(900).queue(function (next) {
                            next();
                        });
                    });
                });
            });
        }

    });
});



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.navbar').removeClass('bg-transparent a-color').addClass('my-bg-dark navbar-light');
            $('nav').css('border-bottom', '1px solid rgba(0,0,0,.1)');
			$('.navbar-toggler').fadeIn("fast");

        }
        else {
            $('.navbar').removeClass('my-bg-dark navbar-light').addClass('bg-transparent a-color');
            $('nav').css('border-bottom', '1px solid transparent');
			$('.navbar-toggler').fadeOut("fast");
        }
        // console.log('scrolled');
    });

    new ActiveMenuLink(".navbar");

    new ActiveMenuLink(".navbar", {

        // selector of menu item
        itemTag: "li",

        // active class
        activeClass: "active",

        // in pixels
        scrollOffset: 0,

        // duration in ms
        scrollDuration: 500,

        // easing function
        ease: "out-circ",

        // specifies the header height
        headerHeight: null,

        // string
        default: null,

        // shows hash tag
        showHash: true

    });

    $("#typer-text").typer({
        strings: [
            "Web Development",
            "Creative Web Design",
            "Graphics Design",
            "SEO",
            "Auto Cad",
            "CC Camera"
        ]
    });
});