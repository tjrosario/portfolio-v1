import React, { Component } from 'react';
import Recommendation from './Recommendation';
import * as Utils from '../utils';
import OwlCarousel from 'react-owl-carousel';

class RecommendationList extends Component {
  constructor(props, context) {
    super(props, context);
    const settings = {
      autoplay: true
    };
    this.state = Utils.getCarouselSettings(settings);
  }

  render() {
    const recommendationNodes = this.props.data.map((recommendation, i) =>
      <Recommendation quote={ recommendation.quote } author={ recommendation.author } title={ recommendation.title } key={ i }></Recommendation>);
    
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
        { recommendationNodes }
      </OwlCarousel> 
    );
  }
}

export default RecommendationList;
