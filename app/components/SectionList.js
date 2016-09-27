import React, { Component } from 'react'
import Section from './Section'

class SectionList extends Component {
  render() {
    const sectionNodes = this.props.data.map((section, i) =>
      <Section slug={ section.slug }  headline={ section.headline } content={ section.content } key={ i }></Section>);
    
    return (
      <div className="sections">
        { sectionNodes }
      </div>  
    );
  }
}

export default SectionList
