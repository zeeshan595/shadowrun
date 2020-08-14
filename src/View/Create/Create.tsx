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
  getAttributeTotal,
} from "../../Model/Attribute";
import { SkillsTable } from "./Elements/SkillsTable";
import { Skill } from "../../Model/Skills";

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
  skills: Skill[];
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
      skills: [],
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
      this.updateMagic(this.state.magic);
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
    this.setState({
      ...this.state,
      qualities,
    });
    this.updateAttributeMax(this.state.race, qualities);
  }

  updateAttributeMax(race: Race, qualities: Quality[]) {
    let localAttributes = Object.assign({}, attributes);

    //reset max values
    localAttributes.agility.MaxValue = 6;
    localAttributes.body.MaxValue = 6;
    localAttributes.charisma.MaxValue = 6;
    localAttributes.intuition.MaxValue = 6;
    localAttributes.logic.MaxValue = 6;
    localAttributes.reaction.MaxValue = 6;
    localAttributes.strength.MaxValue = 6;
    localAttributes.willpower.MaxValue = 6;

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

    //excep[tional attribute (qualities bonus)
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

    //excep[tional attribute (qualities bonus)
    const impairedAttribute = qualities.find((q) => q.Name === "Impaired");
    if (impairedAttribute !== undefined && impairedAttribute !== null) {
      if (impairedAttribute.Attribute === AttributeType.Agility) {
        localAttributes.agility.MaxValue -= impairedAttribute.Value;
        if (localAttributes.agility.MaxValue < 2)
          localAttributes.agility.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Body) {
        localAttributes.body.MaxValue -= impairedAttribute.Value;
        if (localAttributes.body.MaxValue < 2)
          localAttributes.body.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Charisma) {
        localAttributes.charisma.MaxValue -= impairedAttribute.Value;
        if (localAttributes.charisma.MaxValue < 2)
          localAttributes.charisma.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Intuition) {
        localAttributes.intuition.MaxValue -= impairedAttribute.Value;
        if (localAttributes.intuition.MaxValue < 2)
          localAttributes.intuition.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Logic) {
        localAttributes.logic.MaxValue -= impairedAttribute.Value;
        if (localAttributes.logic.MaxValue < 2)
          localAttributes.logic.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Reaction) {
        localAttributes.reaction.MaxValue -= impairedAttribute.Value;
        if (localAttributes.reaction.MaxValue < 2)
          localAttributes.reaction.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Strength) {
        localAttributes.strength.MaxValue -= impairedAttribute.Value;
        if (localAttributes.strength.MaxValue < 2)
          localAttributes.strength.MaxValue = 2;
      } else if (impairedAttribute.Attribute === AttributeType.Willpower) {
        localAttributes.willpower.MaxValue -= impairedAttribute.Value;
        if (localAttributes.willpower.MaxValue < 2)
          localAttributes.willpower.MaxValue = 2;
      }
    }

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: localAttributes,
      });
    }, 10);
  }

  updateAttributes(attributes: CharacterAttributes) {
    this.setState({
      ...this.state,
      attributes,
    });
  }

  updateMagic(magic: Magic) {
    this.setState({
      ...this.state,
      magic,
    });
    setTimeout(() => {
      const newAttributes = Object.assign({}, attributes);
      if (this.state.magic.Type === MagicType.Technomancer) {
        newAttributes.resonance.baseValue = this.getPriorityForMagic(
          this.state.priorities.magic
        );
        newAttributes.magic.baseValue = 0;
        newAttributes.magic.locked = true;
        newAttributes.resonance.locked = false;
      } else {
        newAttributes.magic.baseValue = this.getPriorityForMagic(
          this.state.priorities.magic
        );
        newAttributes.resonance.baseValue = 0;
        newAttributes.magic.locked = false;
        newAttributes.resonance.locked = true;
      }
      this.setState({
        ...this.state,
        attributes: newAttributes,
      });
    }, 100);
  }

  updateSkills(skills: Skill[]) {
    this.setState({
      ...this.state,
      skills,
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

  calculateKarma(): number {
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
        let totalCost = getAttributeTotal(attrib);
        for (let i = totalCost - attrib.karma - 1; i < totalCost - 1; i++) {
          karma -= 10 + i * 5;
        }
      }
    });
    return karma;
  }

  calculateAttributePoints(): number {
    let currentAttributesNumber = this.getPriorityForAttributes(
      this.state.priorities.attributes
    );
    Object.keys(this.state.attributes).forEach((key) => {
      if (this.state.attributes[key].attribute)
        currentAttributesNumber -= this.state.attributes[key].attribute;
    });
    return currentAttributesNumber;
  }

  calculateAdjustmentPoints(): number {
    let currentAdjustments = this.getPriorityForMetaType(
      this.state.priorities.metaType
    ).Points;
    Object.keys(this.state.attributes).forEach((key) => {
      if (this.state.attributes[key].adjustment)
        currentAdjustments -= this.state.attributes[key].adjustment;
    });
    return currentAdjustments;
  }

  render() {
    return (
      <div className="characterCreation">
        <div className="resources">
          <div className="item">
            <div className="name">Karma</div>
            <div className="value">{this.calculateKarma()}</div>
          </div>
          <div className="item">
            <div className="name">Adjustment</div>
            <div className="value">{this.calculateAdjustmentPoints()}</div>
          </div>
          <div className="item">
            <div className="name">Atributes</div>
            <div className="value">{this.calculateAttributePoints()}</div>
          </div>
          <div className="item">
            <div className="name">Skills</div>
            <div className="value">50</div>
          </div>
          <div className="item">
            <div className="name">Knowledge</div>
            <div className="value">
              {getAttributeTotal(this.state.attributes.logic)}
            </div>
          </div>
          <div className="item">
            <div className="name">Spells</div>
            <div className="value">
              {this.getPriorityForMagic(this.state.priorities.magic) * 2}
            </div>
          </div>
        </div>
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
        />
        <AttributeTable
          attributes={this.state.attributes}
          updateAttributes={(attributes) => this.updateAttributes(attributes)}
        />
        <SkillsTable
          skills={this.state.skills}
          updateSkills={(s) => this.updateSkills(s)}
        />
      </div>
    );
  }
}

export default Create;
