import React, { Component } from 'react'
import * as ExperienceActions from '../actions/ExperienceActions';
import ExperienceStore from '../stores/ExperienceStore';
import RoleList from '../components/RoleList';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experience: ExperienceStore.getAll()
    };
    this.getExperience = this.getExperience.bind(this);
  }

  getExperience() {
    this.setState({
      experience: ExperienceStore.getAll()
    });
  }

  componentWillMount() {
    ExperienceActions.loadExperience();
    ExperienceStore.on('change', this.getExperience);
  }

  componentWillUnmount() {
    ExperienceStore.removeListener('change', this.getExperience);
  }

  render() {
    return (
      <section id="experience">
        <h1>Experience</h1>
        <RoleList data={ this.state.experience } />
      </section>
    );
  }
}

export default Experience;
