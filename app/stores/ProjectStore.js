import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ProjectStore extends EventEmitter {
  constructor() {
    super();
    this.projects = [];
  }

  getAll() {
    return this.projects;
  }

  loadProjects(projects) {
    this.projects = projects;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_PROJECTS': {
        this.loadProjects(action.projects);
        break;
      }
    }
  }
}

const projectStore = new ProjectStore;

dispatcher.register(projectStore.handleActions.bind(projectStore));

export default projectStore;
