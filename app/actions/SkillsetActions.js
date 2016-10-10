import dispatcher from '../dispatcher';
import * as Utils from '../utils';

export function createSkill(name) {
  dispatcher.dispatch({
    type: 'CREATE_SKILL',
    name
  })
}

export function loadSkills() {
  Utils.getContentFromServer('/app/data/skillset.json', (data) => {
    dispatcher.dispatch({ type: 'RECEIVE_SKILLS', skills: data.skills });
  });
}
