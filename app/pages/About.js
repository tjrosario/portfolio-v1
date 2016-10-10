import React, { Component } from 'react';
import * as AboutActions from '../actions/AboutActions';
import AboutStore from '../stores/AboutStore';

class About extends Component {
  constructor() {
    super();
    this.state = {
      about: AboutStore.getAll()
    };
    this.getAbout = this.getAbout.bind(this);
  }

  getAbout() {
    this.setState({
      about: AboutStore.getAll()
    });
  }

  componentWillMount() {
    AboutActions.loadAbout();
    AboutStore.on('change', this.getAbout);
  }

  componentWillUnmount() {
    AboutStore.removeListener('change', this.getAbout);
  }

  render() {
    return (
      <section id="about">
        <h1>About</h1>
        { this.state.about }
      </section> 
    );
  }
}

export default About;
