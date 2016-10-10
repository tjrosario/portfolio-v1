import React, { Component } from 'react';

class MadeWith extends Component {
  render() {
    return (
      <div id="made-with">
        <h6>Made With</h6>
        <a href="https://facebook.github.io/react" target="_blank" rel="external"><img src="/app/client/images/react-logo.png" alt="Made with ReactJS" /></a>
      </div>
    );
  }
}

export default MadeWith;
