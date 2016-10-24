import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="video">
        <video width="100%" height="100%" controls>
          <source src={ `${this.props.file}.m4v` } type="video/mp4" />
          <source src={ `${this.props.file}.ogv` } type="video/ogg" />
          <source src={ `${this.props.file}.webm` } type="video/webm" />
          <img src={ `${this.props.file}.jpg` } />
        </video>
      </div>
    );
  }
}

export default Video;
