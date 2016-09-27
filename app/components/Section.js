import React, { Component } from 'react'
import RoleList from './RoleList'
import TestimonialList from './TestimonialList'
import ProjectList from './ProjectList'

class Section extends Component {
  render() {
    let content;

    if (this.props.content.roles) {
      content = <RoleList data={ this.props.content.roles } />;
    } else if (this.props.content.testimonials) {
      content = <TestimonialList data={ this.props.content.testimonials } />;
    } else if (this.props.content.projects) {
      content = <ProjectList data={ this.props.content.projects } />;
    } else {
      content = <p>{ this.props.content.text }</p>;
    }

    return (
      <section className="section" id={ this.props.slug }>
        <h2>
          { this.props.headline }
        </h2>
        <div>
          { content }
        </div>
      </section>
    );
  }
}

export default Section
