import dispatcher from '../dispatcher';
import * as Utils from '../utils';

export function loadProjects() {
  Utils.getContentFromServer('/app/data/projects.json', (data) => {
    dispatcher.dispatch({ type: 'RECEIVE_PROJECTS', projects: data.projects });
  });
}
