import React, { Component } from 'react'
import Remarkable from 'remarkable'

class Role extends Component {
  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.description.toString());
    return { __html: rawMarkup };
  }

  render() {
    const responsibilities = this.props.responsibilities;
    const technologies = this.props.technologies;

    let responsibilitiesList, technologiesList;
    if (responsibilities) {
      responsibilitiesList = responsibilities.map((responsibility, i) =>
        <li key={ i }>{ responsibility }</li>);
    }

    if (technologies) {
      technologiesList = technologies.map((technology, i) =>
        <li key={ i }>{ technology }</li>);
    }

    return (
      <div className="role">
        <header>
          <h3>{ this.props.company }</h3>
          <p>{ this.props.startDate } - { this.props.endDate }</p>
          <p><strong>Roles:</strong> { this.props.position }</p>
        </header>

        { 
          this.props.technologies ? 
            <div className="technologies">
              <h4>Technologies:</h4>
              <div className="content">
                <ul>{ technologiesList }</ul>
              </div>
            </div>
          : null
        }

        { 
          this.props.responsibilities ? 
            <div className="responsibilities">
              <div className="content">
                <ul>{ responsibilitiesList }</ul>
              </div>
            </div>
          : null
        }

        <div className="description">
          <div className="content" dangerouslySetInnerHTML={ this.rawMarkup() }></div>
        </div>
      </div>
    );
  }
}

export default Role
