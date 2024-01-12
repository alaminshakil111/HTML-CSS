
$('.clientListSlick').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  });

//   clientList 1 END