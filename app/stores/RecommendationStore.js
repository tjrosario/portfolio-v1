import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class RecommendationStore extends EventEmitter {
  constructor() {
    super();
    this.recommendations = [];
  }

  getAll() {
    return this.recommendations;
  }

  loadRecommendations(recommendations) {
    this.recommendations = recommendations;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_RECOMMENDATIONS': {
        this.loadRecommendations(action.recommendations);
        break;
      }
    }
  }
}

const recommendationStore = new RecommendationStore;

dispatcher.register(recommendationStore.handleActions.bind(recommendationStore));

export default recommendationStore;
