$('.brands__carousel').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2500,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
})

$('.trusted-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: false,
      },
    },
  ],
})
