import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="wrapper">
          <Social />
          <p>tommyrosario.com</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
