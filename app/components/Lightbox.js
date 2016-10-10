import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Lightbox extends Component {
  componentDidMount() {
    this.overlay = document.getElementById('lightbox-overlay');
    this.overlay.className = 'active';
  }

  close() {
    this.overlay.className = '';
    ReactDOM.unmountComponentAtNode(this.overlay);
  }
  
  render() {
    return (
      <div className="lightbox">
        <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        <i className="fa fa-times close" aria-hidden="true" onClick={ this.close.bind(this) }></i>
      </div>
    );
  }
}

export default Lightbox;
