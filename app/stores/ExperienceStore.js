import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ExperienceStore extends EventEmitter {
  constructor() {
    super();
    this.experience = [];
  }

  getAll() {
    return this.experience;
  }

  loadExperience(experience) {
    this.experience = experience;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_EXPERIENCE': {
        this.loadExperience(action.experience);
        break;
      }
    }
  }
}

const experienceStore = new ExperienceStore;

dispatcher.register(experienceStore.handleActions.bind(experienceStore));

export default experienceStore;
