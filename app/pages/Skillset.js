import React, { Component } from 'react'
import * as SkillsetActions from '../actions/SkillsetActions';
import SkillsetStore from '../stores/SkillsetStore';

class Skillset extends Component {
  constructor() {
    super();
    this.state = {
      skills: SkillsetStore.getAll()
    };
    this.getSkillset = this.getSkillset.bind(this);
  }

  getSkillset() {
    this.setState({
      skills: SkillsetStore.getAll()
    });
  }

  componentWillMount() {
    SkillsetActions.loadSkills();
    SkillsetStore.on('change', this.getSkillset);
  }

  componentWillUnmount() {
    SkillsetStore.removeListener('change', this.getSkillset);
  }

  createSkill() {
    SkillsetActions.createSkill(Date.now());
  }

  render() {
    const { skills } = this.state;
    const skillsetComponents = skills.map((skill, i) => {
      return <li key={ i }>{ skill.name }</li>;
    });

    return (
      <section id="skillset">
        <h1>Skillset</h1>
        <ul>
          { skillsetComponents }
        </ul>
      </section>
    );
  }
}

export default Skillset;
