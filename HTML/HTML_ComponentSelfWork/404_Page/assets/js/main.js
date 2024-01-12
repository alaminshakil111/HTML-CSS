$(document).ready(function() {
    $('.btn_toogle').click(function() {
        $('.main_menu').slideToggle(300);
    });
    // $('.btn_toogle').click(function(){
    //     $('.main_menu').hide(500);
    // });


});
// --================--MENU END--================--

$('.banner_Slickslider').slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 100,
    speed: 600,
    slidesToShow: 5,
    centerMode: false,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});

// --====================--BANNER SLICK SLID END--===============--

$('.clients_slick').slick({
    arrows: false,
    autoplay: false,
    autoplaySpeed: 100,
    speed: 600,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 2,
    // prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});
// --===================--CLIENT SLICK SLIDE END--==============--

$('.SandolaSlick_Slid').slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 100,
    speed: 600,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
            breakpoint: 1399,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});


// --==============--ACTION_2 SLID END--==================--

$('.A3Sandola_Slick').slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 100,
    speed: 600,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
            breakpoint: 1399,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});