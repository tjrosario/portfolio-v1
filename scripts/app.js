var Tommy = window.Tommy || {};

Tommy.initCarousel = function($carousel, opts) {
  opts = opts || {};
  opts.autoplay = opts.autoplay || false;
  opts.stagePadding = opts.stagePadding || 0;

  var config = {
    autoHeight: true,
    autoplay: opts.autoplay,
    autoplaySpeed: 1000,
    autoplayTimeout: 6000,
    dots: false,
    items: 3,
    loop: true,
    margin: 40,
    nav: true,
    stagePadding: opts.stagePadding,
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
  };

  if (opts.navText) {
    config.navText = opts.navText;
  }

  $carousel.owlCarousel(config);
};
