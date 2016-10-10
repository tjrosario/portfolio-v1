import React, { Component } from 'react'
import * as ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';
import ProjectList from '../components/ProjectList';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: ProjectStore.getAll()
    };
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    this.setState({
      projects: ProjectStore.getAll()
    });
  }

  componentWillMount() {
    ProjectActions.loadProjects();
    ProjectStore.on('change', this.getProjects);
  }

  componentWillUnmount() {
    ProjectStore.removeListener('change', this.getProjects);
  }

  render() {
    return (
      <section id="projects">
        <h1>Projects</h1>
        <ProjectList data={ this.state.projects } />
      </section>
    );
  }
}

export default Projects;
