import dispatcher from '../dispatcher';
import * as Utils from '../utils';

export function loadRecommendations() {
  Utils.getContentFromServer('/app/data/recommendations.json', (data) => {
    dispatcher.dispatch({ type: 'RECEIVE_RECOMMENDATIONS', recommendations: data.recommendations });
  });
}
