import React, { Component } from 'react'
import * as RecommendationActions from '../actions/RecommendationActions';
import RecommendationStore from '../stores/RecommendationStore';
import RecommendationList from '../components/RecommendationList';

class Recommendations extends Component {
  constructor() {
    super();
    this.state = {
      recommendations: RecommendationStore.getAll()
    };
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  getRecommendations() {
    this.setState({
      recommendations: RecommendationStore.getAll()
    });
  }

  componentWillMount() {
    RecommendationActions.loadRecommendations();
    RecommendationStore.on('change', this.getRecommendations);
  }

  componentWillUnmount() {
    RecommendationStore.removeListener('change', this.getRecommendations);
  }

  render() {
    return (
      <section id="recommendations">
        <h1>Kind Words From Colleagues</h1> 
        <RecommendationList data={ this.state.recommendations } />
      </section>
    );
  }

}

export default Recommendations;
