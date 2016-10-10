import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <ul className="social">
        <li><a href="https://www.linkedin.com/in/tom-rosario-65771711" target="_blank" rel="external" title="Connect with me on LinkedIn"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/tjrosario" target="_blank" rel="external" title="Check me out on GitHub"><i className="fa fa-github"></i></a></li>
        <li><a href="https://www.instagram.com/tommybronks" target="_blank" rel="external" title="Follow me on Instagram"><i className="fa fa-instagram"></i></a></li>
        <li><a href="https://www.mixcloud.com/tjrosario" target="_blank" rel="external" title="Listen to me on Mixcloud"><i className="fa fa-mixcloud"></i></a></li>
        <li><a href="mailto:tommy@tommyrosario.com" rel="external" title="Shoot me an message"><i className="fa fa-envelope"></i></a></li>
      </ul>
    );
  }
}

export default Social;
