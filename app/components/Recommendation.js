import React, { Component } from 'react';

class Recommendation extends Component {
  render() {
    return (
      <div className="recommendation">
        <blockquote>
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          <span className="quote">{ this.props.quote }</span>
          <i className="fa fa-quote-right" aria-hidden="true"></i>
          <div className="author">
            <span>{ this.props.author }</span> { this.props.title }
          </div>
        </blockquote>
      </div>
    );
  }
}

export default Recommendation;
