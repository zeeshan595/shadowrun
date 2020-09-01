import * as React from "react";
import { Magic, MagicType, MagicSkills } from "../../../Model/Create/Magic";
import { Ritual, rituals } from "../../../Model/Create/Rituals";
import { printpretty } from "../General";

export interface IRitualsTableProps {
  magicPriority: number;
  updateRituals: (ritual: Ritual[]) => void;
  magic: Magic;
  rituals: Ritual[];
}

export interface IRitualsTableState {
  currentlySelected: Ritual;
}

export class RitualsTable extends React.Component<
  IRitualsTableProps,
  IRitualsTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentlySelected: null,
    };
  }

  addRitual() {
    const ritual = this.state.currentlySelected;
    if (ritual === undefined || ritual === null) return;
    if (this.props.rituals.findIndex((r) => r === ritual) !== -1) return;
    this.props.updateRituals([...this.props.rituals, ritual]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  removeRitual() {
    const ritual = this.state.currentlySelected;
    if (ritual === undefined || ritual === null) return;
    if (this.props.rituals.findIndex((r) => r === ritual) === -1) return;
    this.props.updateRituals([
      ...this.props.rituals.filter((r) => r !== ritual),
    ]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }

  render() {
    if (this.props.magicPriority < 1) {
      return null;
    }
    if (this.props.magic.type == MagicType.AspectedMagician) {
      if (this.props.magic.magicSkillLimit != MagicSkills.Sorcery) {
        return null;
      }
    }
    if (this.props.magic.type == MagicType.Adept) {
      return null;
    }
    if (this.props.magic.type == MagicType.Technomancer) {
      return null;
    }

    let description: JSX.Element = null;
    if (this.state.currentlySelected !== null) {
      description = (
        <div className="spellDescription">
          <h2>{this.state.currentlySelected.name}</h2>
          Threshold:{" "}
          <span className="primaryColor">
            {this.state.currentlySelected.threshold}
          </span>
          <br />
          {this.state.currentlySelected.description}
        </div>
      );
    }

    return (
      <div>
        <h2>Choose your starting rituals</h2>
        <div className="spellsContainer">
          {rituals
            .filter(
              (ritual) =>
                this.props.rituals.findIndex((r) => r === ritual) === -1
            )
            .map((ritual, index) => (
              <div
                key={index}
                className={
                  this.state.currentlySelected == ritual
                    ? "spell selected"
                    : "spell"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    currentlySelected: ritual,
                  })
                }
              >
                {printpretty(ritual.name)}
              </div>
            ))}
        </div>
        <button onClick={() => this.removeRitual()}>{"<"}</button>
        <button onClick={() => this.addRitual()}>{">"}</button>
        <div className="spellsContainer">
          {this.props.rituals.map((ritual, index) => (
            <div
              key={index}
              className={
                this.state.currentlySelected == ritual
                  ? "spell selected"
                  : "spell"
              }
              onClick={() =>
                this.setState({
                  ...this.state,
                  currentlySelected: ritual,
                })
              }
            >
              {printpretty(ritual.name)}
            </div>
          ))}
        </div>
        {description}
      </div>
    );
  }
}
