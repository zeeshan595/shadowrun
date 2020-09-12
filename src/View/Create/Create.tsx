import * as React from "react";
import "./Style.scss";
import { PriorityType } from "../../Model/Create/PriorityType";
import { PriorityTable } from "./Elements/PriorityTable";
import { RaceSelection } from "./Elements/RaceSelection";
import { MagicTable } from "./Elements/MagicTable";
import {
  MagicType,
  Magic,
  MagicSkills,
  MagicTradition,
} from "../../Model/Create/Magic";
import { Race } from "../../Model/Create/MetaType";
import { QualitiesTable } from "./Elements/QualitiesTable";
import {
  Quality,
  QualityType,
  SkillType,
  qualities,
} from "../../Model/Create/Quality";
import { AttributeTable } from "./Elements/AttributesTable";
import {
  attributes,
  CharacterAttributes,
  Attribute,
} from "../../Model/Create/Attribute";
import { SkillsTable } from "./Elements/SkillsTable";
import { Skill } from "../../Model/Create/Skills";
import { KnowledgeTable } from "./Elements/KnowledgeTable";
import {
  Knowledge,
  KnowledgeType,
  LanguageType,
} from "../../Model/Create/Knowledge";
import { SpellsTable } from "./Elements/SpellsTable";
import { Spell, CastType } from "../../Model/Create/Spells";
import { RitualsTable } from "./Elements/RitualsTable";
import { Ritual } from "../../Model/Create/Rituals";
import {
  getPriorityForSkills,
  getPriorityForMagic,
  getPriorityForMetaType,
  getPriorityForAttributes,
  getPriorityForResources,
  computeBaseAttributes,
  computeBaseQualities,
  getAttributeTotal,
} from "./General";
import { AdeptTable } from "./Elements/AdeptsTable";
import { Adept, CostType } from "../../Model/Create/Adepts";
import { ComplexFormsTable } from "./Elements/ComplexFormsTable";
import { ComplexForm } from "../../Model/Create/ComplexForms";
import { ProfileTable } from "./Elements/ProfileTable";
import { Profile, GenderType } from "../../Model/Create/Profile";
import { Character } from "../../Model/Character";
import { getCookie } from "../../Controller/CookieManager";

export interface ICreateProps {
  updateOrCreateCookie?: (name: string, value: string, expires: Date) => void;
  getCookie?: (name: string) => string;
}

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
  adepts: Adept[];
  complexForms: ComplexForm[];
  profile: Profile;
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
      adepts: [],
      complexForms: [],
      profile: {
        streetName: "Mr Cool",
        realName: "Coolio benderban",
        gender: GenderType.Male,
        height: 170,
        age: 30,
        weight: 70,
        picture:
          "https://i.pinimg.com/originals/61/6b/d5/616bd59e5ea0c9b2eb86b17bac54b093.png",
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
      adepts: [],
      complexForms: [],
      attributes: Object.assign({}, attributes),
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
      adepts: [],
      complexForms: [],
      attributes: Object.assign({}, attributes),
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
      adepts: [],
      complexForms: [],
      attributes: Object.assign({}, attributes),
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
      attributes: Object.assign({}, attributes),
      skills: [],
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
    });
  }

  updateSkills(skills: Skill[]) {
    this.setState({
      ...this.state,
      skills,
    });
  }

  updateKnowledge(knowledge: Knowledge[]) {
    this.setState({
      ...this.state,
      knowledge,
    });
  }

  updateSpells(spells: Spell[]) {
    this.setState({
      ...this.state,
      spells,
    });
  }

  updateRituals(rituals: Ritual[]) {
    this.setState({
      ...this.state,
      rituals,
    });
  }

  updateAdepts(adepts: Adept[]) {
    this.setState({
      ...this.state,
      adepts,
    });
  }

  updateComplexForms(complexForms: ComplexForm[]) {
    this.setState({
      ...this.state,
      complexForms,
    });
  }

  updateProfile(profile: Profile) {
    this.setState({
      ...this.state,
      profile,
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
    return (
      getPriorityForMagic(this.state.priorities.magic) * 2 -
      this.state.complexForms.length
    );
  }

  calculateAdeptPoints(): number {
    const combatSkills: SkillType[] = [
      SkillType.CloseCombat,
      SkillType.ExoticWeapons,
      SkillType.Firearms,
    ];

    let val = this.state.magic.adept;
    this.state.adepts.forEach((adept) => {
      if (adept.costType === CostType.Base) {
        val -= adept.cost;
      } else if (adept.costType == CostType.PerLevel) {
        if (
          adept.hasSkill &&
          combatSkills.findIndex((s) => s === adept.skill) !== -1
        ) {
          val -= adept.cost * adept.amount * 2;
        } else {
          val -= adept.cost * adept.amount;
        }
      }
    });
    return val;
  }

  createCharacter() {
    let savedChars = getCookie("characters");
    const characters: Character[] = [];
    if (savedChars !== null && savedChars !== undefined) {
      (JSON.parse(savedChars) as Character[]).forEach((c) => {
        characters.push(c);
        console.log(c);
      });
    }
    characters.push({
      personalData: {
        alias: this.state.profile.streetName,
        name: this.state.profile.realName,
        gender: this.state.profile.gender,
        age: this.state.profile.age,
        height: this.state.profile.height,
        karma: this.calculateKarma(),
        edge: getAttributeTotal(this.state.attributes.edge),
        magicType:
          getPriorityForMagic(this.state.priorities.magic) > 1
            ? this.state.magic.type
            : null,
        nuyen: this.calculateResonancePoints(),
        metaType: this.state.race,
        essence: 6,
        picture: this.state.profile.picture,
        heat: 0,
        reputation: 0,
        weight: this.state.profile.weight,
      },
      conditionMonitor: {
        stun: 0,
        physical: 0,
        damage: 0,
      },
      attributes: this.state.attributes,
      knowledge: this.state.knowledge,
      qualities: this.state.qualities,
      skills: this.state.skills,
    });
    this.props.updateOrCreateCookie(
      "characters",
      JSON.stringify(characters),
      new Date(Date.now() * 1000 * 60 * 60 * 24 * 366 * 10)
    );
    window.location.href = "/";
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
            <div className="value">{this.calculateAdeptPoints()}</div>
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
          qualities={this.state.qualities}
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
        <AdeptTable
          adepts={this.state.adepts}
          magicPriority={getPriorityForMagic(this.state.priorities.magic)}
          updateAdepts={(a) => this.updateAdepts(a)}
          magic={this.state.magic}
        />
        <ComplexFormsTable
          complexForms={this.state.complexForms}
          magicPriority={getPriorityForMagic(this.state.priorities.magic)}
          updateComplexForms={(cf) => this.updateComplexForms(cf)}
          magic={this.state.magic}
        />
        <ProfileTable
          profile={this.state.profile}
          updateProfile={(p) => this.updateProfile(p)}
        />
        <button onClick={() => this.createCharacter()}>Create Character</button>
      </div>
    );
  }
}

export default Create;
