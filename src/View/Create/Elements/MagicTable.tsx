import * as React from "react";
import {
  MagicType,
  MagicTradition,
  Magic,
  MagicSkills,
} from "../../../Model/Magic";
import { printpretty } from "./General";

export interface IMagicTableProps {
  magic: Magic;
  updateMagic: (magic: Magic) => void;
  magicAmount: number;
}

export interface IMagicTableState {}

export class MagicTable extends React.Component<
  IMagicTableProps,
  IMagicTableState
> {
  magicTypeDescriptions = [
    <span key={MagicType.Magician}>
      <h4>Magician</h4>
      Magic is tiring. The more you attempt to do with it, the more it’s going
      to take out of you. This is reflected through the concept of Drain, which
      presents damage an Awakened character must resist after channeling their
      magic. By default, Drain is Stun Damage, though certain conditions can
      make it Physical. These conditions are described in the sections on
      Spellcasting, Conjuring, Adepts, and Enchanting. Many Awakened individuals
      train themselves to endure the weariness that comes from casting spells,
      and they often get better at it as time goes by. The dice rolls used to
      resist drain vary based on the Awakened individual’s tradition. Those
      characters roll their tradition Attribute + Willpower, and drain damage is
      reduced by 1 for each hit rolled, to a minimum of 0. Damage from drain
      cannot be healed by most other non-rest means, meaning no magic, no
      medkits. Edge, though, can be used to heal drain damage.
    </span>,
    <span key={MagicType.AspectedMagician}>
      <h4>Aspected Magician</h4>
      Aspected magicians do not have the range of powers that full magicians do.
      Instead, they are limited to a specific magical skill set. Rather than
      being their primary tool in running the shadows, it complements other
      skill sets they build up. At character creation, aspected magicians choose
      a single magical skill—Sorcery, Conjuring, or Enchanting. That is the only
      magical skill they can have, and they can never acquire ranks in the other
      skills in any other way. Aspected magicians can astrally perceive and
      astrally project. They also can follow mentor spirits (see p. 162).
    </span>,
    <span key={MagicType.Adept}>
      <h4>Adept</h4>
      Adepts channel mana in a different way from spellcasters. Rather than use
      formulae to shape mana into an external spell effect, adepts take mana
      into themselves, letting it flow throughout their body and enhance their
      abilities. It may make them stronger, faster, healthier, more charming, or
      some other effect, but however it works, it makes them tremendously
      effective shadowrunners. Adepts sometimes have to resist drain, which they
      do with Body + Willpower. Drain is Stun unless the damage after the
      resistance test is higher than the caster’s Magic, in which case the
      damage is Physical.
    </span>,
    <span key={MagicType.MysticAdept}>
      <h4>Mystic Adept</h4>
      With a foot in two different kinds of magic, mystic adepts can be
      devastatingly powerful. Their ability to use both spells and adept powers
      gives them tremendous flexibility. They might not sling spells as well as
      a full magician or gain the full physical powers of a dedicated adept, but
      the way they combine those abilities can make them lethal—and valuable. At
      character creation, mystic adepts divide their Magic rating between spells
      and power points. They get 1 power point for each point of Magic dedicated
      to the adept side, and spells equal to the amount of Magic dedicated to
      being a mage x 2. Mystic adepts cannot be aspected spellcasters. They can
      only perceive astrally if they purchase the Astral Perception adept
      quality, and they can never astrally project.
    </span>,
    <span key={MagicType.Technomancer}>
      <h4>Technomancer</h4>
      Since the 2050s, the world has known that there are people who interact
      with the Matrix in unique ways—namely, they don’t need gear. The
      information of the Matrix flows right into their brains, and they are able
      to translate it into something meaningful. What’s more, they can send
      information back into the Matrix, transforming and editing it the way the
      rest of us do with a commlink. When they were first discovered, they were
      called otaku, the children of the Matrix, and they often aged out of their
      abilities by the time they turned twenty-one.
    </span>,
  ];

  render() {
    if (this.props.magicAmount <= 0) return null;
    const magictype = [];
    for (let member in MagicType) {
      const isValProperty = parseInt(member, 10) >= 0;
      if (isValProperty) {
        magictype.push(MagicType[member]);
      }
    }

    let magicTradition = null;
    if (
      this.props.magic.Type == MagicType.Magician ||
      this.props.magic.Type == MagicType.MysticAdept ||
      this.props.magic.Type == MagicType.AspectedMagician
    ) {
      magicTradition = (
        <div>
          <h4>Select the magic tradition to cast your spell</h4>
          <select
            value={this.props.magic.Tradition}
            onChange={(evt) =>
              this.props.updateMagic({
                ...this.props.magic,
                Tradition: parseInt(evt.currentTarget.value) as MagicTradition,
              })
            }
          >
            <option value={MagicTradition.Hermeticism}>Hermeticism</option>
            <option value={MagicTradition.Shamanism}>Shamanism</option>
          </select>
        </div>
      );
    }

    let magicSkillLimit = null;
    if (this.props.magic.Type == MagicType.AspectedMagician) {
      magicSkillLimit = (
        <div>
          <h4>Select the magic skill you are limited to</h4>
          <select
            value={this.props.magic.MagicSkillLimit}
            onChange={(evt) =>
              this.props.updateMagic({
                ...this.props.magic,
                MagicSkillLimit: parseInt(
                  evt.currentTarget.value
                ) as MagicSkills,
              })
            }
          >
            <option value={MagicSkills.Sorcery}>Sorcery</option>
            <option value={MagicSkills.Enchanting}>Enchanting</option>
            <option value={MagicSkills.Conjuring}>Conjuring</option>
          </select>
        </div>
      );
    }

    let mysticAdept = null;
    if (this.props.magic.Type == MagicType.MysticAdept) {
      mysticAdept = (
        <div className="adeptDistribution">
          <h4>Distribute your magic rating between your magician and adept</h4>
          <table>
            <thead>
              <tr>
                <td>Magic</td>
                <td></td>
                <td>Adept</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    disabled={true}
                    value={this.props.magicAmount - this.props.magic.Adept}
                  />
                </td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max={this.props.magicAmount}
                      value={this.props.magic.Adept}
                      className="slider"
                      onChange={(ev) =>
                        this.props.updateMagic({
                          ...this.props.magic,
                          Adept: parseInt(ev.currentTarget.value),
                        })
                      }
                    />
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    disabled={true}
                    value={this.props.magic.Adept}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    let plusOne = null;
    if (this.props.magic.Type == MagicType.AspectedMagician)
      plusOne = (
        <div>
          <h4>+1 Magic</h4>
        </div>
      );

    return (
      <div>
        <h2>Select magic or resonance type</h2>
        <div>
          <div className="magic">
            {magictype.map((type: string, index) => (
              <label key={index} className="checkmarkContainer">
                {printpretty(type)}
                <input
                  type="radio"
                  name="magic"
                  checked={MagicType[type] === this.props.magic.Type}
                  onChange={() =>
                    this.props.updateMagic({
                      ...this.props.magic,
                      Type: MagicType[type],
                    })
                  }
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
          <div className="magicDescription">
            {this.magicTypeDescriptions[this.props.magic.Type]}
          </div>
        </div>
        {plusOne}
        {magicTradition}
        {magicSkillLimit}
        {mysticAdept}
      </div>
    );
  }
}
