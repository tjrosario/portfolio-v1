import React, { Component } from 'react'
import SectionList from './SectionList'
import $ from 'jquery';

const App = React.createClass({
  getInitialState() {
    return { data: [] };
  },

  loadPortfolioFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({ data: data.sections });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  },

  componentDidMount() {
    this.loadPortfolioFromServer();
    //setInterval(this.loadPortfolioFromServer, this.props.pollInterval);
  },

  render() {
    return (
      <SectionList data={ this.state.data } />
    );
  }
})

export default App
