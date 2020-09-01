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
  qualities,
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
import { KnowledgeTable } from "./Elements/KnowledgeTable";
import { Knowledge, KnowledgeType, LanguageType } from "../../Model/Knowledge";
import { SpellsTable } from "./Elements/SpellsTable";
import { Spell, CastType } from "../../Model/Spells";
import { RitualsTable } from "./Elements/RitualsTable";
import { Ritual } from "../../Model/Rituals";
import {
  getPriorityForSkills,
  getPriorityForMagic,
  getPriorityForMetaType,
  getPriorityForAttributes,
  getPriorityForResources,
  computeBaseAttributes,
  computeBaseQualities,
} from "./General";

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
  knowledge: Knowledge[];
  spells: Spell[];
  rituals: Ritual[];
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
      race: Race.Dwarf,
      magic: {
        type: MagicType.Magician,
        tradition: MagicTradition.Hermeticism,
        magicSkillLimit: MagicSkills.None,
        adept: 0,
      },
      qualities: [],
      attributes: Object.assign({}, attributes),
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
      spells: [],
      rituals: [],
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
      magic: {
        type: MagicType.Magician,
        tradition: MagicTradition.Hermeticism,
        magicSkillLimit: MagicSkills.None,
        adept: 0,
      },
      race: Race.Dwarf,
      qualities: computeBaseQualities(Race.Dwarf),
      spells: [],
      rituals: [],
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: computeBaseAttributes(
          getPriorityForMagic(this.state.priorities.magic),
          this.state.magic.type,
          this.state.race,
          this.state.qualities
        ),
      });
    }, 10);
  }

  updateMetatype(race: Race) {
    this.setState({
      ...this.state,
      magic: {
        type: MagicType.Magician,
        tradition: MagicTradition.Hermeticism,
        magicSkillLimit: MagicSkills.None,
        adept: 0,
      },
      race,
      qualities: computeBaseQualities(race),
      spells: [],
      rituals: [],
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: computeBaseAttributes(
          getPriorityForMagic(this.state.priorities.magic),
          this.state.magic.type,
          this.state.race,
          this.state.qualities
        ),
      });
    }, 10);
  }

  updateMagic(magic: Magic) {
    this.setState({
      ...this.state,
      magic,
      qualities: computeBaseQualities(this.state.race),
      spells: [],
      rituals: [],
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: computeBaseAttributes(
          getPriorityForMagic(this.state.priorities.magic),
          this.state.magic.type,
          this.state.race,
          this.state.qualities
        ),
      });
    }, 10);
  }

  updateQualities(qualities: Quality[]) {
    this.setState({
      ...this.state,
      qualities,
      spells: [],
      rituals: [],
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        attributes: computeBaseAttributes(
          getPriorityForMagic(this.state.priorities.magic),
          this.state.magic.type,
          this.state.race,
          this.state.qualities
        ),
      });
    }, 10);
  }

  updateAttributes(attributes: CharacterAttributes) {
    this.setState({
      ...this.state,
      attributes,
      spells: [],
      rituals: [],
      skills: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });
  }

  updateSkills(skills: Skill[]) {
    this.setState({
      ...this.state,
      skills,
      spells: [],
      rituals: [],
      knowledge: [
        {
          type: KnowledgeType.Language,
          isNativeLanguage: true,
          langType: LanguageType.Expert,
          custom: "English",
        },
      ],
    });
  }

  updateKnowledge(knowledge: Knowledge[]) {
    this.setState({
      ...this.state,
      knowledge,
      spells: [],
      rituals: [],
    });
  }

  updateSpells(spells: Spell[]) {
    this.setState({
      ...this.state,
      spells,
      rituals: [],
    });
  }

  updateRituals(rituals: Ritual[]) {
    this.setState({
      ...this.state,
      rituals,
    });
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
    let currentAttributesNumber = getPriorityForAttributes(
      this.state.priorities.attributes
    );
    Object.keys(this.state.attributes).forEach((key) => {
      if (this.state.attributes[key].attribute)
        currentAttributesNumber -= this.state.attributes[key].attribute;
    });
    return currentAttributesNumber;
  }

  calculateAdjustmentPoints(): number {
    let currentAdjustments = getPriorityForMetaType(
      this.state.priorities.metaType
    ).Points;
    Object.keys(this.state.attributes).forEach((key) => {
      if (this.state.attributes[key].adjustment)
        currentAdjustments -= this.state.attributes[key].adjustment;
    });
    return currentAdjustments;
  }

  calculateSkillPoints(): number {
    const aptitude = this.state.qualities.find((q) => q.Name === "Aptitude");
    let skills = getPriorityForSkills(this.state.priorities.skills);
    this.state.skills.forEach((s) => {
      skills -= s.value;
      if (aptitude !== undefined && aptitude !== null) {
        if ((aptitude as Quality).Skill === s.name) {
          skills++;
        }
      }
    });
    return skills;
  }

  calculateKnowledgePoints(): number {
    let points = getAttributeTotal(this.state.attributes.logic);
    this.state.knowledge.forEach((knowledge) => {
      if (knowledge.isNativeLanguage) return;
      if (knowledge.type === KnowledgeType.Knowledge) {
        points -= 1;
        return;
      } else if (knowledge.type === KnowledgeType.Language) {
        if (knowledge.langType === LanguageType.BasicUnderstanding) {
          points -= 1;
        } else if (knowledge.langType === LanguageType.Specialist) {
          points -= 2;
        } else if (knowledge.langType === LanguageType.Expert) {
          points -= 3;
        }
      }
    });
    return points;
  }

  calculateSpellPoints(): number {
    if (this.state.magic && this.state.magic.type === MagicType.Technomancer)
      return 0;
    let val: number = getPriorityForMagic(this.state.priorities.magic);
    if (this.state.magic && this.state.magic.adept)
      val -= this.state.magic.adept;
    val *= 2;
    this.state.spells.forEach((spell) => {
      if (
        spell.cast !== undefined &&
        spell.cast !== null &&
        spell.cast == CastType.Both
      )
        val -= 2;
      else val--;
    });
    val -= this.state.rituals.length;
    return val;
  }

  calculateResonancePoints(): number {
    if (this.state.magic && this.state.magic.type !== MagicType.Technomancer)
      return 0;
    return getPriorityForMagic(this.state.priorities.magic) * 2;
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
            <div className="value">{this.calculateSkillPoints()}</div>
          </div>
          <div className="item">
            <div className="name">Knowledge</div>
            <div className="value">{this.calculateKnowledgePoints()}</div>
          </div>
          <div className="item">
            <div className="name">Spells</div>
            <div className="value">{this.calculateSpellPoints()}</div>
          </div>
          <div className="item">
            <div className="name">Resonance</div>
            <div className="value">{this.calculateResonancePoints()}</div>
          </div>
          <div className="item">
            <div className="name">Adept</div>
            <div className="value">{this.state.magic.adept}</div>
          </div>
          <div className="item">
            <div className="name">Resources</div>
            <div className="value">
              {getPriorityForResources(this.state.priorities.resources)
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
            </div>
          </div>
        </div>
        <PriorityTable
          updatePriority={(key, value) => this.updatePriority(key, value)}
          priorities={this.state.priorities}
        />
        <RaceSelection
          races={getPriorityForMetaType(this.state.priorities.metaType).Races}
          updateRace={(value) => this.updateMetatype(value)}
          value={this.state.race}
        />
        <MagicTable
          magicAmount={getPriorityForMagic(this.state.priorities.magic)}
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
        <KnowledgeTable
          knowledge={this.state.knowledge}
          updateKnowledge={(k) => this.updateKnowledge(k)}
        />
        <SpellsTable
          spells={this.state.spells}
          updateSpells={(s) => this.updateSpells(s)}
          magicPriority={getPriorityForMagic(this.state.priorities.magic)}
          magic={this.state.magic}
        />
        <RitualsTable
          rituals={this.state.rituals}
          magicPriority={getPriorityForMagic(this.state.priorities.magic)}
          updateRituals={(r) => this.updateRituals(r)}
          magic={this.state.magic}
        />
      </div>
    );
  }
}

export default Create;
