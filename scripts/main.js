$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 6000,
    dots: false,
    items: 3,
    loop: true,
    margin: 40,
    nav: true,
    responsive:{
      0: {
        autoplay: false,
        items: 1,
        loop: true
      },
      600: {
        autoplay: false,
        items: 3,
        loop: true
      },
      1000: {
        items: 3,
        loop: true
      }
    },
    responsiveClass: true,
    smartSpeed: 250
  });
});
