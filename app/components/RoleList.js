import React, { Component } from 'react'
import Role from './Role'

class RoleList extends Component {
  render() {
    const roleNodes = this.props.data.map((role, i) =>
      <Role company={ role.company } startDate={ role.startDate } endDate={ role.endDate } position={ role.position } description={ role.description } technologies={ role.technologies } responsibilities={ role.responsibilities } key={ i }></Role>);

    return (
      <div className="roles">
        { roleNodes }
      </div>  
    );
  }
}

export default RoleList
