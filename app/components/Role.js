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
    let responsibilitiesList;
    if (responsibilities) {
      responsibilitiesList = responsibilities.map((responsibility, i) =>
        <li key={ i }>{ responsibility }</li>);
    }

    return (
      <div className="role">
        <header>
          <h3>{ this.props.company }</h3>
          <p>{ this.props.startDate } - { this.props.endDate }</p>
          <p><strong>Roles:</strong> { this.props.position }</p>
        </header>
        <div className="description" dangerouslySetInnerHTML={ this.rawMarkup() }></div>

        { 
          this.props.responsibilities ? 
            <div className="responsibilities">
              <ul>{ responsibilitiesList }</ul>
            </div>
          : null
        }
      </div>
    );
  }
}

export default Role
