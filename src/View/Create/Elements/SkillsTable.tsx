import * as React from "react";
import { skills, Skill } from "../../../Model/Skills";

export interface ISkillsTableProps {
  skills: Skill[];
  updateSkills: (skills: Skill[]) => void;
}

export interface ISkillsTableState {
  currentlySelected: Skill | null;
}

export class SkillsTable extends React.Component<
  ISkillsTableProps,
  ISkillsTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentlySelected: null,
    };
  }

  addSkill(skill: Skill | null) {
    if (skills === null) return;
    this.props.updateSkills([...this.props.skills, skill]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  removeSkill(skill: Skill | null) {
    if (skills === null) return;
    this.props.updateSkills([
      ...this.props.skills.filter((s) => s.name !== skill.name),
    ]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }

  render() {
    return (
      <div>
        <h2>Distribute your skill points</h2>
        <div className="skillsContainer">
          <div className="skillList">
            {skills
              .filter(
                (s) =>
                  this.props.skills.findIndex((sk) => s.name === sk.name) === -1
              )
              .map((s) => (
                <div
                  key={s.name}
                  className={
                    this.state.currentlySelected === s
                      ? "skill selected"
                      : "skill"
                  }
                  onClick={() =>
                    this.setState({ ...this.state, currentlySelected: s })
                  }
                >
                  <div className="name">{s.name}</div>
                </div>
              ))}
          </div>
          <button
            onClick={() => this.removeSkill(this.state.currentlySelected)}
          >
            {"<"}
          </button>
          <button onClick={() => this.addSkill(this.state.currentlySelected)}>
            {">"}
          </button>
          <div className="skillList">
            {skills
              .filter(
                (s) =>
                  this.props.skills.findIndex((sk) => s.name === sk.name) !== -1
              )
              .map((s) => (
                <div
                  key={s.name}
                  className={
                    this.state.currentlySelected === s
                      ? "skill selected"
                      : "skill"
                  }
                  onClick={() =>
                    this.setState({ ...this.state, currentlySelected: s })
                  }
                >
                  <div className="name">{s.name}</div>
                </div>
              ))}
          </div>
          <div className="skillDescription"></div>
        </div>
      </div>
    );
  }
}
