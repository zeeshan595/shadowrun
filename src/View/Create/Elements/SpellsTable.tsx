import * as React from "react";
import { Spell, spells, SpellCategory, CastType } from "../../../Model/Spells";
import {
  Magic,
  MagicType,
  MagicTradition,
  MagicSkills,
} from "../../../Model/Magic";

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
    if (spell.cast === undefined || spell.cast === null) {
      if (this.props.magic.Type === MagicType.Magician) {
        spell.cast = CastType.Sorcery;
      } else if (this.props.magic.Type === MagicType.MysticAdept) {
        spell.cast = CastType.Sorcery;
      } else if (this.props.magic.Type === MagicType.AspectedMagician) {
        if (this.props.magic.MagicSkillLimit === MagicSkills.Sorcery) {
          spell.cast = CastType.Sorcery;
        } else if (
          this.props.magic.MagicSkillLimit === MagicSkills.Enchanting
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
    if (this.props.magic.Type === MagicType.Technomancer) {
      return null;
    }
    if (this.props.magic.Type === MagicType.Adept) {
      return null;
    }
    if (this.props.magic.Type === MagicType.AspectedMagician) {
      if (this.props.magic.MagicSkillLimit === MagicSkills.Conjuring) {
        return null;
      }
    }
    if (this.props.magic.Type === MagicType.MysticAdept) {
      if (this.props.magic.Adept >= this.props.magicPriority) {
        return null;
      }
    }

    let description = null;
    if (this.state.currentlySelected !== null)
      description = (
        <div className="spellDescription">
          <h2>{this.state.currentlySelected.name}</h2>
          {this.state.currentlySelected.description}
        </div>
      );

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
              this.props.magic.Type !== MagicType.Adept &&
              this.props.magic.Type !== MagicType.AspectedMagician &&
              this.props.magic.Type !== MagicType.Technomancer
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
