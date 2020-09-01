import * as React from "react";
import {
  Spell,
  spells,
  SpellCategory,
  CastType,
  SpellRange,
  SpellConstructionType,
  SpellDuration,
} from "../../../Model/Create/Spells";
import {
  Magic,
  MagicType,
  MagicSkills,
} from "../../../Model/Create/Magic";
import { printpretty } from "../General";

export interface ISpellsTableProps {
  spells: Spell[];
  updateSpells: (spells: Spell[]) => void;
  magicPriority: number;
  magic: Magic;
}

export interface ISpellsTableState {
  currentlySelected: Spell;
  currentFilter: SpellCategory;
}

export class SpellsTable extends React.Component<
  ISpellsTableProps,
  ISpellsTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentlySelected: null,
      currentFilter: SpellCategory.Combat,
    };
  }

  addSpell() {
    if (this.state.currentlySelected === null) return;
    const spell = this.state.currentlySelected;
    if (this.props.spells.findIndex((s) => s === spell) !== -1) return;
    if (spell.cast === undefined || spell.cast === null) {
      if (this.props.magic.type === MagicType.Magician) {
        spell.cast = CastType.Sorcery;
      } else if (this.props.magic.type === MagicType.MysticAdept) {
        spell.cast = CastType.Sorcery;
      } else if (this.props.magic.type === MagicType.AspectedMagician) {
        if (this.props.magic.magicSkillLimit === MagicSkills.Sorcery) {
          spell.cast = CastType.Sorcery;
        } else if (
          this.props.magic.magicSkillLimit === MagicSkills.Enchanting
        ) {
          spell.cast = CastType.Alchemy;
        }
      }
    }
    this.props.updateSpells([...this.props.spells, spell]);
    this.selectSpell(null);
  }
  removeSpell() {
    if (this.state.currentlySelected === null) return;
    if (
      this.props.spells.findIndex((s) => s === this.state.currentlySelected) ===
      -1
    )
      return;
    this.props.updateSpells([
      ...this.props.spells.filter((s) => s !== this.state.currentlySelected),
    ]);
    this.selectSpell(null);
  }
  selectSpell(spell: Spell) {
    this.setState({
      ...this.state,
      currentlySelected: spell,
    });
  }
  changeSpellCast(spell: Spell, cast: CastType) {
    if (this.state.currentlySelected === null) return;
    spell.cast = cast;
    const fullSpellList = this.props.spells;
    const selectedIndex = fullSpellList.findIndex(
      (s) => s === this.state.currentlySelected
    );
    if (selectedIndex === -1) return;
    fullSpellList[selectedIndex] = spell;
    this.props.updateSpells(fullSpellList);
    this.selectSpell(null);
  }

  render() {
    if (this.props.magicPriority === 0) {
      return null;
    }
    if (this.props.magic.type === MagicType.Technomancer) {
      return null;
    }
    if (this.props.magic.type === MagicType.Adept) {
      return null;
    }
    if (this.props.magic.type === MagicType.AspectedMagician) {
      if (this.props.magic.magicSkillLimit === MagicSkills.Conjuring) {
        return null;
      }
    }
    if (this.props.magic.type === MagicType.MysticAdept) {
      if (this.props.magic.adept >= this.props.magicPriority) {
        return null;
      }
    }

    let description = null;
    if (this.state.currentlySelected !== null) {
      const spellStats: JSX.Element[] = [
        <React.Fragment>
          Type:{" "}
          <span className="primaryColor">
            {printpretty(
              SpellConstructionType[this.state.currentlySelected.type]
            )}
          </span>
        </React.Fragment>,
        <React.Fragment>
          Range:{" "}
          <span className="primaryColor">
            {printpretty(SpellRange[this.state.currentlySelected.range])}
          </span>
        </React.Fragment>,
        <React.Fragment>
          Duration:{" "}
          <span className="primaryColor">
            {printpretty(SpellDuration[this.state.currentlySelected.duration])}
          </span>
        </React.Fragment>,
        <React.Fragment>
          Drain:{" "}
          <span className="primaryColor">
            {this.state.currentlySelected.drainValue}
          </span>
        </React.Fragment>,
      ];
      if (this.state.currentlySelected.category === SpellCategory.Combat) {
        spellStats.push(
          <React.Fragment>
            Damage:{" "}
            <span className="primaryColor">
              {this.state.currentlySelected.damage}
            </span>
          </React.Fragment>
        );
        spellStats.push(
          <React.Fragment>
            Is Direct:{" "}
            <span className="primaryColor">
              {this.state.currentlySelected.isDirect ? "True" : "False"}
            </span>
          </React.Fragment>
        );
      } else if (
        this.state.currentlySelected.category == SpellCategory.Illusion
      ) {
        spellStats.push(
          <React.Fragment>
            Is Multi-Sense:{" "}
            <span className="primaryColor">
              {this.state.currentlySelected.isMultiSense ? "True" : "False"}
            </span>
          </React.Fragment>
        );
      }
      description = (
        <div className="spellDescription">
          <h2>{this.state.currentlySelected.name}</h2>
          {spellStats.map((s, i) => (
            <React.Fragment key={i}>
              {s}
              <br />
            </React.Fragment>
          ))}
          {this.state.currentlySelected.description}
        </div>
      );
    }

    return (
      <div>
        <h2>Choose your starting spells</h2>
        <select
          value={this.state.currentFilter}
          onChange={(evt) =>
            this.setState({
              ...this.state,
              currentFilter: parseInt(evt.currentTarget.value) as SpellCategory,
            })
          }
        >
          <option value={SpellCategory.Combat}>Combat</option>
          <option value={SpellCategory.Detection}>Detection</option>
          <option value={SpellCategory.Health}>Health</option>
          <option value={SpellCategory.Illusion}>Illusion</option>
          <option value={SpellCategory.Manipulation}>Manipulation</option>
        </select>
        <br />
        <div className="spellsContainer">
          {spells
            .filter(
              (spell) =>
                this.props.spells.findIndex((s) => s.name === spell.name) === -1
            )
            .filter((spell) => spell.category === this.state.currentFilter)
            .map((spell, index) => (
              <div
                key={index}
                onClick={() => this.selectSpell(spell)}
                className={
                  this.state.currentlySelected === spell
                    ? "spell selected"
                    : "spell"
                }
              >
                {spell.name}
              </div>
            ))}
        </div>
        <button onClick={() => this.removeSpell()}>{"<"}</button>
        <button onClick={() => this.addSpell()}>{">"}</button>
        <div className="spellsContainer">
          {this.props.spells.map((spell, index) => {
            let alchemy = null;
            if (
              this.props.magic.type !== MagicType.Adept &&
              this.props.magic.type !== MagicType.AspectedMagician &&
              this.props.magic.type !== MagicType.Technomancer
            ) {
              alchemy = (
                <h6>
                  <select
                    value={spell.cast}
                    onChange={(evt) =>
                      this.changeSpellCast(
                        spell,
                        parseInt(evt.currentTarget.value) as CastType
                      )
                    }
                  >
                    <option value={CastType.Sorcery}>Sorcery</option>
                    <option value={CastType.Alchemy}>Alchemy</option>
                    <option value={CastType.Both}>Both</option>
                  </select>
                </h6>
              );
            }

            return (
              <div
                key={index}
                onClick={() => this.selectSpell(spell)}
                className={
                  this.state.currentlySelected === spell
                    ? "spell selected"
                    : "spell"
                }
              >
                {spell.name}
                {alchemy}
              </div>
            );
          })}
        </div>
        {description}
      </div>
    );
  }
}
