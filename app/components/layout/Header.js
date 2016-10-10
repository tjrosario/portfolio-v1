import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Social from './Social';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="wrapper">
          <div className="avatar">
            <Link to="home"><img src="/app/client/images/emoji_shades.gif" /></Link>
          </div>
          <h1>Tommy Rosario</h1>
          <p>Web Engineer, Front-End Specialist, DJ</p>
          <Social />
          <nav id="nav">
            <Nav />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
