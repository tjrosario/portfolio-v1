import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class AboutStore extends EventEmitter {
  constructor() {
    super();
    this.about = '';
  }

  getAll() {
    return this.about;
  }

  loadAbout(about) {
    this.about = about;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_ABOUT': {
        this.loadAbout(action.about);
        break;
      }
    }
  }
}

const aboutStore = new AboutStore;

dispatcher.register(aboutStore.handleActions.bind(aboutStore));

export default aboutStore;
