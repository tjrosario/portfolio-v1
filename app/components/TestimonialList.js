import React, { Component } from 'react'
import Testimonial from './Testimonial'
import Utils from './Utils'
import OwlCarousel from 'react-owl-carousel'

class TestimonialList extends Component {
  constructor(props, context) {
    super(props, context);
    const settings = {
      autoplay: true
    };
    this.state = Utils.getCarouselSettings(settings);
  }

  render() {
    const testimonialNodes = this.props.data.map((testimonial, i) =>
      <Testimonial quote={ testimonial.quote } author={ testimonial.author } title={ testimonial.title } key={ i }></Testimonial>);
    
    return (
      <OwlCarousel
        autoHeight={ this.state.autoHeight }
        autoPlay={ this.state.autoPlay }
        items={ this.state.items }
        navigation={ this.state.navigation }
        navigationText={ this.state.navigationText }
        pagination={ this.state.pagination }
        paginationSpeed={ this.state.paginationSpeed }
        responsive={ this.state.responsive }
        singleItem={ this.state.singleItem }
        slideSpeed={ this.state.slideSpeed }
        theme={ this.state.theme }
        >
        { testimonialNodes }
      </OwlCarousel> 
    );
  }
}

export default TestimonialList
