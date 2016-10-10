import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class SkillsetStore extends EventEmitter {
  constructor() {
    super();
    this.skills = [];
  }

  createSkill(name) {
    this.skills.push({
      name
    });

    this.emit('change');
  }

  getAll() {
    return this.skills;
  }

  loadSkills(skills) {
    this.skills = skills;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_SKILL': {
        this.createSkill(action.name);
        break;
      }
      case 'RECEIVE_SKILLS': {
        this.loadSkills(action.skills);
        break;
      }
    }
  }
}

const skillsetStore = new SkillsetStore;

dispatcher.register(skillsetStore.handleActions.bind(skillsetStore));

export default skillsetStore;
