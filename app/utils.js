import $ from 'jquery';

export function getContentFromServer(path, handler) {
  $.ajax({
    url: path,
    //url: '/app/data/portfolio.json',
    dataType: 'json',
    cache: false,
    success: data => {
      handler(data);
      //this.setState({ data: data.sections });
    },
    error: (xhr, status, err) => {
      console.error(this.props.url, status, err.toString());
    }
  });
}

export function getCarouselSettings($carousel, opts) {
  opts = opts || {};
  opts.autoplay = opts.autoplay || false;
  opts.stagePadding = opts.stagePadding || 0;

  const config = {
    autoHeight: true,
    autoPlay: opts.autoPlay,
    autoplaySpeed: 1000,
    autoplayTimeout: 6000,
    dots: false,
    items: 3,
    loop: true,
    margin: 40,
    navigation: true,
    pagination: false,
    singleItem: false,
    stagePadding: opts.stagePadding,
    responsive: true,
    /*
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
    */
    responsiveClass: true,
    paginationSpeed: 800,
    theme: 'owl-theme'
  };

  if (opts.navigationText) {
    config.navigationText = opts.navigationText;
  }

  return config;
}
