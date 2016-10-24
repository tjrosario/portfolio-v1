import React, { Component } from 'react';
import Video from '../components/Video';

class About extends Component {
  constructor() {
    super();
  }

  getAbout() {
   
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <section id="intro">
        <h1>Hello!</h1>
        <Video file="/app/client/video/intro"></Video>
      </section> 
    );
  }
}

export default About;
