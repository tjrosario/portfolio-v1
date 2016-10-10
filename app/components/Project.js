import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Video from './Video';
import Lightbox from './Lightbox';

class Project extends Component {
  launchLightbox(e: Event) {
    const currentTarget = $(e.currentTarget).parents('.project');
    const $video = $(currentTarget).find('.video');
    const video = $video.html()

    ReactDOM.render(
      <Lightbox content={ video } />, 
      document.getElementById('lightbox-overlay')
    );
  }

  render() {
    return (
      <div className="project">
        <div className="thumbnail" onClick={ this.launchLightbox }>
          <img src={ `/app/client/images/projects/${this.props.slug}/${this.props.thumbnail}` } />
          <i className="fa fa-caret-square-o-right" aria-hidden="true"></i>
        </div>
        <h3>{ this.props.title }</h3>
        <div className="url">
          <a href={ this.props.url } target="_blank">{ this.props.url }</a>
        </div>
        <Video slug={ this.props.slug } file={ this.props.video }></Video>
      </div>
    );
  }
}

export default Project;
