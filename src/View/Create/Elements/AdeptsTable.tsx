import * as React from "react";
import { adepts, Adept, CostType, ActivationType } from "../../../Model/Create/Adepts";
import { Magic, MagicType } from "../../../Model/Create/Magic";
import { printpretty } from "../General";
import { SkillType, AttributeType } from "../../../Model/Create/Quality";

export interface IAdeptsTableProps {
  adepts: Adept[];
  magicPriority: number;
  updateAdepts: (adepts: Adept[]) => void;
  magic: Magic;
}

export interface IAdeptsTableState {
  currentlySelected: Adept;
}

export class AdeptTable extends React.Component<
  IAdeptsTableProps,
  IAdeptsTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentlySelected: null,
    };
  }

  addAdept() {
    const adept = this.state.currentlySelected;
    if (adept === undefined || adept === null) return;
    if (this.props.adepts.findIndex((a) => a.name === adept.name) !== -1)
      return;
    adept.amount = 1;
    this.props.updateAdepts([...this.props.adepts, adept]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  removeAdept() {
    const adept = this.state.currentlySelected;
    if (adept === undefined || adept === null) return;
    if (this.props.adepts.findIndex((a) => a.name === adept.name) === -1)
      return;
    this.props.updateAdepts([...this.props.adepts.filter((a) => a !== adept)]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  updateAdept(adept: Adept) {
    console.log(adept);
    if (adept == undefined || adept == null) return;
    let adepts = this.props.adepts;
    let adeptIndex = adepts.findIndex((a) => a.name === adept.name);
    if (adeptIndex === -1) return;
    adepts[adeptIndex] = adept;
    this.props.updateAdepts(adepts);
  }

  render() {
    if (this.props.magicPriority < 1) {
      return null;
    }
    if (this.props.magic.type === MagicType.AspectedMagician) {
      return null;
    }
    if (this.props.magic.type === MagicType.Magician) {
      return null;
    }
    if (this.props.magic.type === MagicType.Technomancer) {
      return null;
    }

    let description: JSX.Element = null;
    if (this.state.currentlySelected !== null) {
      const adept = this.state.currentlySelected;
      description = (
        <div className="spellDescription">
          <h2>{adept.name}</h2>
          Cost:{" "}
          <span className="primaryColor">
            {adept.cost} {printpretty(CostType[adept.costType])}
          </span>
          <br />
          Activation:{" "}
          <span className="primaryColor">
            {printpretty(ActivationType[adept.activation])}
          </span>
          {adept.description}
        </div>
      );
    }

    return (
      <div>
        <h2>Select your adept abilities</h2>
        <div className="spellsContainer">
          {adepts
            .filter(
              (adept) =>
                this.props.adepts.findIndex((a) => a.name === adept.name) === -1
            )
            .map((adept, index) => (
              <div
                key={index}
                className={
                  this.state.currentlySelected === adept
                    ? "spell selected"
                    : "spell"
                }
                onClick={() => {
                  this.setState({
                    ...this.state,
                    currentlySelected: adept,
                  });
                }}
              >
                {adept.name}
              </div>
            ))}
        </div>
        <button onClick={() => this.removeAdept()}>{"<"}</button>
        <button onClick={() => this.addAdept()}>{">"}</button>
        <div className="spellsContainer">
          {this.props.adepts.map((adept, index) => {
            const options: JSX.Element[] = [];

            if (adept.hasAttribute) {
              let attributes = [];
              for (let member in AttributeType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  attributes.push(
                    <option key={member} value={member}>
                      {printpretty(AttributeType[member])}
                    </option>
                  );
                }
              }
              options.push(
                <select
                  key={options.length}
                  value={adept.attribute}
                  onChange={(evt) =>
                    this.updateAdept({
                      ...adept,
                      attribute: parseInt(
                        evt.currentTarget.value
                      ) as AttributeType,
                    })
                  }
                >
                  {attributes}
                </select>
              );
            }

            if (adept.hasSkill) {
              let skills = [];
              for (let member in SkillType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  skills.push(
                    <option key={member} value={member}>
                      {printpretty(SkillType[member])}
                    </option>
                  );
                }
              }
              options.push(
                <select
                  key={options.length}
                  value={adept.skill}
                  onChange={(evt) =>
                    this.updateAdept({
                      ...adept,
                      skill: parseInt(evt.currentTarget.value) as SkillType,
                    })
                  }
                >
                  {skills}
                </select>
              );
            }

            if (adept.costType === CostType.PerLevel) {
              options.push(
                <div key={options.length}>
                  <button
                    onClick={() =>
                      this.updateAdept({
                        ...adept,
                        amount: Math.max(adept.amount - 1, 1),
                      })
                    }
                  >
                    -
                  </button>
                  {adept.amount}
                  <button
                    onClick={() =>
                      this.updateAdept({
                        ...adept,
                        amount: Math.min(adept.amount + 1, 9),
                      })
                    }
                  >
                    +
                  </button>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={
                  this.state.currentlySelected === adept
                    ? "spell selected"
                    : "spell"
                }
                onClick={() => {
                  this.setState({
                    ...this.state,
                    currentlySelected: adept,
                  });
                }}
              >
                {adept.name}
                {options}
              </div>
            );
          })}
        </div>
        {description}
      </div>
    );
  }
}
