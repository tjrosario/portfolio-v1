import React, { Component } from 'react'

class Video extends Component {
  render() {
    return (
      <div className="video">
        <video width="100%" height="100%" controls>
          <source src={ `/app/client/images/projects/${this.props.slug}/${this.props.file}.mp4` } type="video/mp4" />
          <source src={ `/app/client/images/projects/${this.props.slug}/${this.props.file}.ogg` } type="video/ogg" />
          <source src={ `/app/client/images/projects/${this.props.slug}/${this.props.file}.webm` } type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Video
