$('.testimonialSlick').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    fade: true,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
});

// testiMonial 1 END ------

$(document).ready(function(){
	$('.starmain_slid').slick({
		arrows: false,
		autoplay:false,
		autoplaySpeed:600,
		slidesToShow: 2,
		centerMode: false,
        speed: 500,
        dots: false,
        infinite: true,
		slidesToScroll: 1,
    // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		  responsive: [
		  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
});

// testiMonial 2 END -------

$('.testimonialSlider3').slick({
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  nextArrow: '<button class="slick-next">NEXT</button>',
  // prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
});




