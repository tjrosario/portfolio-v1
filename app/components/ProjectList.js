import React, { Component } from 'react'
import Project from './Project'
import Utils from './Utils'
import OwlCarousel from 'react-owl-carousel';

class ProjectList extends Component {
  constructor(props, context) {
    super(props, context);
    const settings = {
      navigationText: [
        '<div class="nav nav-prev"><i class="fa fa-caret-left"></i><span>Previous</span></div>',
        '<div class="nav nav-next"><span>Next</span><i class="fa fa-caret-right"></i></div>'
      ]
    };
    this.state = Utils.getCarouselSettings(settings);
  }

  render() {
    const projectNodes = this.props.data.map((project, i) =>
      <Project slug={ project.slug } thumbnail={ project.thumbnail } video={ project.video } title={ project.title } url={ project.url } key={ i }></Project>);
    
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
        { projectNodes }
      </OwlCarousel>
    );
  }
}

export default ProjectList
