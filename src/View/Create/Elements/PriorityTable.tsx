import * as React from "react";
import { PriorityType } from "../../../Model/PriorityType";

export interface IPriorityTableProps {
  updatePriority: (key: string, value: PriorityType) => void;
  priorities: {
    metaType: PriorityType;
    attributes: PriorityType;
    magic: PriorityType;
    skills: PriorityType;
    resources: PriorityType;
  };
}

export interface IPriorityTableState {}

export class PriorityTable extends React.Component<
  IPriorityTableProps,
  IPriorityTableState
> {
  render() {
    const content = {
      A: [
        <span>Dwarf, Ork, Troll (13)</span>,
        <span>24</span>,
        <span>Magic 4 or Resonance 4</span>,
        <span>32</span>,
        <span>450,000 ¥</span>,
      ],
      B: [
        <span>Elf, Dwarf, Ork, Troll (11)</span>,
        <span>16</span>,
        <span>Magic 3 or Resonance 3</span>,
        <span>24</span>,
        <span>275,000 ¥</span>,
      ],
      C: [
        <span>Human, Elf, Dwarf, Ork, Troll (9)</span>,
        <span>12</span>,
        <span>Magic 2 or Resonance 2</span>,
        <span>20</span>,
        <span>150,000 ¥</span>,
      ],
      D: [
        <span>Human, Elf, Dwarf, Ork, Troll (4)</span>,
        <span>8</span>,
        <span>Magic 1 or Resonance 1</span>,
        <span>16</span>,
        <span>50,000 ¥</span>,
      ],
      E: [
        <span>Human, Elf, Dwarf, Ork, Troll (1)</span>,
        <span>2</span>,
        <span>Mundane</span>,
        <span>10</span>,
        <span>8,000 ¥</span>,
      ],
    };

    return (
      <div>
        <h2>Choose your priorities</h2>
        <table className="priorityTable">
          <thead>
            <tr>
              <td>Priority</td>
              <td>Metatype</td>
              <td>Attributes</td>
              <td>Magic or Resonance</td>
              <td>Skills</td>
              <td>Resources</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(content).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  {content[key].map((val, index) => {
                    const priorityKey = Object.keys(this.props.priorities)[
                      index
                    ];
                    let selectedClass = "";
                    if (
                      this.props.priorities[priorityKey] ===
                      (key as PriorityType)
                    )
                      selectedClass = "selected";
                    return (
                      <td
                        className={selectedClass}
                        key={index}
                        onClick={() =>
                          this.props.updatePriority(
                            priorityKey,
                            key as PriorityType
                          )
                        }
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
