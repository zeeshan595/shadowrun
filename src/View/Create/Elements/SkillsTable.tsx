import * as React from "react";
import {
  skills,
  Skill,
  getSpecialization,
  AttributeTypePlus,
} from "../../../Model/Skills";
import { SkillType } from "../../../Model/Quality";
import { printpretty } from "../../General";

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
    if (skill === undefined || skill === null) return;
    skill.value = 1;
    this.props.updateSkills([...this.props.skills, skill]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  removeSkill(skill: Skill | null) {
    if (skill === undefined || skill === null) return;
    this.props.updateSkills([
      ...this.props.skills.filter((s) => s.name !== skill.name),
    ]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }

  addValue(skill: Skill) {
    if (skill === undefined || skill === null) return;
    if (skill.value >= 6) return;
    skill.value++;
    this.props.updateSkills([
      ...this.props.skills.filter((s) => s.name !== skill.name),
      skill,
    ]);
  }
  removeValue(skill: Skill) {
    if (skill === undefined || skill === null) return;
    if (skill.value <= 1) return;
    skill.value--;
    this.props.updateSkills([
      ...this.props.skills.filter((s) => s.name !== skill.name),
      skill,
    ]);
  }

  changeSpecialization(skill: Skill, specValue: number) {
    console.log(specValue);
    if (skill === undefined || skill === null) return;
    skill.specializations = specValue;
    this.props.updateSkills([
      ...this.props.skills.filter((s) => s.name !== skill.name),
      skill,
    ]);
  }

  render() {
    let description = null;
    if (this.state.currentlySelected) {
      description = (
        <React.Fragment>
          <h2>
            {printpretty(
              SkillType[this.state.currentlySelected.name].toString()
            )}
          </h2>
          <b>Attribute: </b>{" "}
          {AttributeTypePlus[this.state.currentlySelected.attributes[0]]}
          <br />
          <b>Untrained: </b>
          {this.state.currentlySelected.untrained ? " Yes" : " No"}
          {this.state.currentlySelected.description}
        </React.Fragment>
      );
    }

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
                  <div className="name">{SkillType[s.name]}</div>
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
                  <div className="name">{SkillType[s.name]}</div>
                  <select
                    value={s.specializations}
                    onChange={(evt) =>
                      this.changeSpecialization(
                        s,
                        parseInt(evt.currentTarget.value)
                      )
                    }
                  >
                    {getSpecialization(s.name).map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {printpretty(spec.text)}
                      </option>
                    ))}
                  </select>
                  <div>
                    <button onClick={() => this.removeValue(s)}>-</button>
                    {s.value}
                    <button onClick={() => this.addValue(s)}>+</button>
                  </div>
                </div>
              ))}
          </div>
          <div className="skillDescription">{description}</div>
        </div>
      </div>
    );
  }
}
