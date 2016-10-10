import dispatcher from '../dispatcher';
import * as Utils from '../utils';

export function loadAbout() {
  Utils.getContentFromServer('/app/data/about.json', (data) => {
    dispatcher.dispatch({ type: 'RECEIVE_ABOUT', about: data.about });
  });
}
