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
import { QualitiesTable } from "./Elements/QualitiesTable";
import {
  Quality,
  Qualities,
  AttributeType,
  QualityType,
} from "../../Model/Quality";
import { AttributeTable } from "./Elements/AttributesTable";
import {
  attributes,
  CharacterAttributes,
  Attribute,
} from "../../Model/Attribute";
import { printpretty } from "./Elements/General";

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
  qualities: Quality[];
  attributes: CharacterAttributes;
  karma: number;
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
      qualities: [],
      attributes: Object.assign({}, attributes),
      karma: 50,
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

    if (key === "magic") {
      setTimeout(() => {
        const newAttributes = Object.assign({}, attributes);
        newAttributes.magic.baseValue = this.getPriorityForMagic(value);
        this.setState({
          ...this.state,
          attributes: newAttributes,
        });
        console.log(newAttributes);
      }, 100);
    }
  }

  updateMetatype(race: Race) {
    //qualities
    const defaultQualities: Quality[] = [];
    if (race == Race.Dwarf) {
      defaultQualities.push({
        ...Qualities.find((q) => q.Name === "Toxin Resistance"),
        IsLocked: true,
      });
    }
    if (race == Race.Dwarf || race == Race.Troll) {
      defaultQualities.push({
        ...Qualities.find((q) => q.Name === "Thermographic Vision"),
        IsLocked: true,
      });
    }
    if (race == Race.Elf || race == Race.Ork) {
      defaultQualities.push({
        ...Qualities.find((q) => q.Name === "Low-Light Vision"),
        IsLocked: true,
      });
    }
    if (race == Race.Ork || race == Race.Troll) {
      const lockedValue = race === Race.Ork ? 1 : 2;
      defaultQualities.push({
        ...Qualities.find((q) => q.Name === "Built Tough"),
        IsLocked: true,
        LockedValue: lockedValue,
      });
    }
    this.setState({ ...this.state, race: race, qualities: defaultQualities });
    this.updateAttributeMax(race, this.state.qualities);
  }

  updateQualities(qualities: Quality[]) {
    let karma: number = 50;
    qualities.forEach((q) => {
      if (q.IsLocked) {
        if (!q.Value || q.Value <= 0) return;
      }
      let totalCost = q.Cost;
      if (q.Value) totalCost *= q.Value;
      if (q.Type == QualityType.Negative) totalCost *= -1;
      karma -= totalCost;
    });
    Object.keys(this.state.attributes).forEach((key) => {
      const attrib: Attribute = this.state.attributes[key];
      if (attrib.karma > 0) karma -= attrib.karma * 5 + 10;
    });
    this.setState({
      ...this.state,
      qualities,
      karma,
    });
    this.updateAttributeMax(this.state.race, qualities);
  }

  updateAttributeMax(race: Race, qualities: Quality[]) {
    let localAttributes = Object.assign({}, attributes);

    //racial bonuses
    if (race === Race.Dwarf) {
      localAttributes.body.MaxValue = localAttributes.body.baseMaxValue + 1;
      localAttributes.reaction.MaxValue =
        localAttributes.reaction.baseMaxValue - 1;
      localAttributes.strength.MaxValue =
        localAttributes.strength.baseMaxValue + 2;
      localAttributes.willpower.MaxValue =
        localAttributes.willpower.baseMaxValue + 1;
    } else if (race === Race.Elf) {
      localAttributes.agility.MaxValue =
        localAttributes.agility.baseMaxValue + 1;
      localAttributes.charisma.MaxValue =
        localAttributes.charisma.baseMaxValue + 2;
    } else if (race === Race.Human) {
      localAttributes.edge.MaxValue = localAttributes.edge.baseMaxValue + 1;
    } else if (race === Race.Ork) {
      localAttributes.body.MaxValue = localAttributes.body.baseMaxValue + 2;
      localAttributes.strength.MaxValue =
        localAttributes.strength.baseMaxValue + 2;
      localAttributes.charisma.MaxValue =
        localAttributes.charisma.baseMaxValue - 1;
    } else if (race === Race.Troll) {
      localAttributes.body.MaxValue = localAttributes.body.baseMaxValue + 3;
      localAttributes.agility.MaxValue =
        localAttributes.agility.baseMaxValue - 1;
      localAttributes.strength.MaxValue =
        localAttributes.strength.baseMaxValue + 3;
      localAttributes.charisma.MaxValue =
        localAttributes.charisma.baseMaxValue - 1;
    }

    //qualities bonus
    const exceptionalAttribute = qualities.find(
      (q) => q.Name === "Exceptional Attribute"
    );
    if (exceptionalAttribute !== undefined && exceptionalAttribute !== null) {
      if (exceptionalAttribute.Attribute === AttributeType.Agility)
        localAttributes.agility.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Body)
        localAttributes.body.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Charisma)
        localAttributes.charisma.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Intuition)
        localAttributes.intuition.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Logic)
        localAttributes.logic.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Reaction)
        localAttributes.reaction.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Strength)
        localAttributes.strength.MaxValue++;
      else if (exceptionalAttribute.Attribute === AttributeType.Willpower)
        localAttributes.willpower.MaxValue++;
    }

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: localAttributes,
      });
    }, 10);
  }

  updateAttributes(attributes: CharacterAttributes) {
    let karma: number = 50;
    this.state.qualities.forEach((q) => {
      if (q.IsLocked) {
        if (!q.Value || q.Value <= 0) return;
      }
      let totalCost = q.Cost;
      if (q.Value) totalCost *= q.Value;
      if (q.Type == QualityType.Negative) totalCost *= -1;
      karma -= totalCost;
    });
    Object.keys(attributes).forEach((key) => {
      const attrib: Attribute = attributes[key];
      if (attrib.karma && attrib.karma > 0) {
        let totalCost = 0;
        if (attrib.adjustment) totalCost += attrib.adjustment;
        if (attrib.attribute) totalCost += attrib.attribute;
        if (attrib.karma) totalCost += attrib.karma;
        karma -= totalCost * 5 + 10;
      }
    });
    this.setState({
      ...this.state,
      attributes,
      karma,
    });
  }

  updateMagic(magic: Magic) {
    this.setState({
      ...this.state,
      magic,
    });
  }

  getPriorityForMetaType(priority: PriorityType): MetaType {
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

  getPriorityForAttributes(priority: PriorityType): number {
    if (priority === PriorityType.A) return 24;
    else if (priority == PriorityType.B) return 16;
    else if (priority == PriorityType.C) return 12;
    else if (priority == PriorityType.D) return 8;
    else if (priority == PriorityType.E) return 2;
    else return 0;
  }

  getPriorityForSkills(priority: PriorityType): number {
    if (priority === PriorityType.A) return 32;
    else if (priority == PriorityType.B) return 24;
    else if (priority == PriorityType.C) return 20;
    else if (priority == PriorityType.D) return 16;
    else if (priority == PriorityType.E) return 10;
    else return 0;
  }

  getPriorityForResources(priority: PriorityType): number {
    if (priority === PriorityType.A) return 450000;
    else if (priority == PriorityType.B) return 275000;
    else if (priority == PriorityType.C) return 150000;
    else if (priority == PriorityType.D) return 50000;
    else if (priority == PriorityType.E) return 8000;
    else return 0;
  }

  getPriorityForMagic(priority: PriorityType): number {
    if (priority === PriorityType.A) return 4;
    else if (priority == PriorityType.B) return 3;
    else if (priority == PriorityType.C) return 2;
    else if (priority == PriorityType.D) return 1;
    else if (priority == PriorityType.E) return 0;
    else return 0;
  }

  getBaseMagicValue(): number {
    let val = this.getPriorityForMagic(this.state.priorities.magic);
    if (this.state.magic.Type === MagicType.AspectedMagician) val++;
    return val;
  }

  render() {
    return (
      <div className="characterCreation">
        <PriorityTable
          updatePriority={(key, value) => this.updatePriority(key, value)}
          priorities={this.state.priorities}
        />
        <RaceSelection
          races={
            this.getPriorityForMetaType(this.state.priorities.metaType).Races
          }
          updateRace={(value) => this.updateMetatype(value)}
          value={this.state.race}
        />
        <MagicTable
          magicAmount={this.getPriorityForMagic(this.state.priorities.magic)}
          magic={this.state.magic}
          updateMagic={(magic) => this.updateMagic(magic)}
        />
        <QualitiesTable
          selectedQualities={this.state.qualities}
          updateQualities={(q) => this.updateQualities(q)}
          karma={this.state.karma}
        />
        <AttributeTable
          attributes={this.state.attributes}
          updateAttributes={(attributes) => this.updateAttributes(attributes)}
          maxAttribute={this.getPriorityForAttributes(
            this.state.priorities.attributes
          )}
          maxAdjustment={
            this.getPriorityForMetaType(this.state.priorities.metaType).Points
          }
          baseMagic={this.getBaseMagicValue()}
          karma={this.state.karma}
        />
      </div>
    );
  }
}

export default Create;
