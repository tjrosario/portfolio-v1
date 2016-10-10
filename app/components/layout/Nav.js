import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <ul className="navigation">
        <li><Link to="home" activeClassName="active">About</Link></li>
        <li><Link to="experience" activeClassName="active">Experience</Link></li>
        <li><Link to="projects" activeClassName="active">Projects</Link></li>
        <li><Link to="skillset" activeClassName="active">Skillset</Link></li>
        <li><Link to="recommendations" activeClassName="active">Recommendations</Link></li>
      </ul>
    );
  }
}

export default Nav;
