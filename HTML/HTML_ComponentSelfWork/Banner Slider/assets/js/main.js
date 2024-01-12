$(document).ready(function(){
    $('.sliderSlick1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: 'false',
    });
});

// SLIDER END ---------

$(document).ready(function(){
    $('.sliderSlick2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        fade: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angles-right"></i></button>',
    });
});

// SLIDER END ---------




