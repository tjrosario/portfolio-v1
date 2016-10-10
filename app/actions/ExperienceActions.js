import dispatcher from '../dispatcher';
import * as Utils from '../utils';

export function loadExperience() {
  Utils.getContentFromServer('/app/data/experience.json', (data) => {
    dispatcher.dispatch({ type: 'RECEIVE_EXPERIENCE', experience: data.experience });
  });
}
