import * as React from "react";
import "./Style.scss";
import { PriorityType } from "../../Model/PriorityType";
import { PriorityTable } from "./Elements/PriorityTable";
import { RaceSelection } from "./Elements/RaceSelection";
import { MagicTable } from "./Elements/MagicTable";
import {
  MagicType,
  Magic,
  MagicSkills,
  MagicTradition,
} from "../../Model/Magic";
import { Race, MetaType } from "../../Model/MetaType";
import { Qualities } from "./Elements/Qualities";

export interface ICreateProps {}

export interface ICreateState {
  priorities: {
    metaType: PriorityType;
    attributes: PriorityType;
    magic: PriorityType;
    skills: PriorityType;
    resources: PriorityType;
  };
  race: Race;
  magic: Magic;
}

export class Create extends React.Component<ICreateProps, ICreateState> {
  constructor(props) {
    super(props);
    this.state = {
      priorities: {
        metaType: PriorityType.A,
        attributes: PriorityType.B,
        magic: PriorityType.C,
        skills: PriorityType.D,
        resources: PriorityType.E,
      },
      race: Race.Human,
      magic: {
        Type: MagicType.Magician,
        Tradition: MagicTradition.Hermeticism,
        MagicSkillLimit: MagicSkills.None,
        Adept: 0,
      },
    };
  }

  updatePriority(key: string, value: PriorityType) {
    //only apply change if user selects different priority
    if (this.state.priorities[key] === value) return;
    //get priorty we need to swap with
    const swappingPriorityKey = Object.keys(this.state.priorities).find(
      (key) => this.state.priorities[key] === value
    );
    //update priority
    const currentPriority = this.state.priorities;
    currentPriority[swappingPriorityKey] = currentPriority[key];
    currentPriority[key] = value;

    this.setState({
      ...this.state,
      priorities: currentPriority,
    });
  }

  getMetaType(priority: PriorityType): MetaType {
    if (priority === PriorityType.A)
      return {
        Races: [Race.Dwarf, Race.Ork, Race.Troll],
        Points: 13,
      };
    else if (priority == PriorityType.B)
      return {
        Races: [Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
        Points: 11,
      };
    else if (priority == PriorityType.C)
      return {
        Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
        Points: 9,
      };
    else if (priority == PriorityType.D)
      return {
        Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
        Points: 4,
      };
    else if (priority == PriorityType.E)
      return {
        Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
        Points: 1,
      };
  }

  getAttributes(priority: PriorityType): number {
    if (priority === PriorityType.A) return 24;
    else if (priority == PriorityType.B) return 16;
    else if (priority == PriorityType.C) return 12;
    else if (priority == PriorityType.D) return 8;
    else if (priority == PriorityType.E) return 2;
    else return 0;
  }

  getSkills(priority: PriorityType): number {
    if (priority === PriorityType.A) return 32;
    else if (priority == PriorityType.B) return 24;
    else if (priority == PriorityType.C) return 20;
    else if (priority == PriorityType.D) return 16;
    else if (priority == PriorityType.E) return 10;
    else return 0;
  }

  getResources(priority: PriorityType): number {
    if (priority === PriorityType.A) return 450000;
    else if (priority == PriorityType.B) return 275000;
    else if (priority == PriorityType.C) return 150000;
    else if (priority == PriorityType.D) return 50000;
    else if (priority == PriorityType.E) return 8000;
    else return 0;
  }

  getMagic(priority: PriorityType): number {
    if (priority === PriorityType.A) return 4;
    else if (priority == PriorityType.B) return 3;
    else if (priority == PriorityType.C) return 2;
    else if (priority == PriorityType.D) return 1;
    else if (priority == PriorityType.E) return 0;
    else return 0;
  }

  render() {
    return (
      <div>
        <h2>Choose your priorities</h2>
        <PriorityTable
          updatePriority={(key, value) => this.updatePriority(key, value)}
          priorities={this.state.priorities}
        />
        <h2>Select a metatype</h2>
        <RaceSelection
          races={this.getMetaType(this.state.priorities.metaType).Races}
          updateRace={(value) => this.setState({ ...this.state, race: value })}
          value={this.state.race}
        />
        <MagicTable
          magicAmount={this.getMagic(this.state.priorities.magic)}
          magic={this.state.magic}
          updateMagic={(magic) =>
            this.setState({
              ...this.state,
              magic,
            })
          }
        />
        <Qualities />
      </div>
    );
  }
}

export default Create;
