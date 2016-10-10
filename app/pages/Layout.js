import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MadeWith from '../components/layout/MadeWith';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content">
          <div className="wrapper">
            { this.props.children }
            <MadeWith />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
