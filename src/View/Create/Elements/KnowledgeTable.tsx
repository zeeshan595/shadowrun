import * as React from "react";
import {
  Knowledge,
  KnowledgeType,
  LanguageType,
} from "../../../Model/Create/Knowledge";

export interface IKnowledgeTableProps {
  knowledge: Knowledge[];
  updateKnowledge: (knowledge: Knowledge[]) => void;
}

export interface IKnowledgeTableState {}

export class KnowledgeTable extends React.Component<
  IKnowledgeTableProps,
  IKnowledgeTableState
> {
  addKnowledge(knowledge: Knowledge) {
    this.props.updateKnowledge([...this.props.knowledge, knowledge]);
  }
  removeKnowledge(index: number) {
    this.props.updateKnowledge([
      ...this.props.knowledge.filter((_, i) => i !== index),
    ]);
  }

  updateKnowledge(index: number, knowledge: Knowledge) {
    const temp = this.props.knowledge;
    temp[index] = knowledge;
    this.props.updateKnowledge(temp);
  }

  render() {
    return (
      <div>
        <h2>Distribute your knowledge</h2>
        <button
          onClick={() =>
            this.addKnowledge({
              type: KnowledgeType.Knowledge,
              isNativeLanguage: false,
              langType: LanguageType.BasicUnderstanding,
              custom: "",
            })
          }
        >
          Add Knowledge
        </button>
        <button
          onClick={() => {
            this.addKnowledge({
              type: KnowledgeType.Language,
              isNativeLanguage: false,
              langType: LanguageType.BasicUnderstanding,
              custom: "",
            });
          }}
        >
          Add Language
        </button>
        <div className="languageContainer">
          {this.props.knowledge.map((knowledge, index) => {
            //knowledge type
            let type = null;
            if (knowledge.type === KnowledgeType.Knowledge) type = "Knowledge";
            else if (
              knowledge.type === KnowledgeType.Language &&
              knowledge.isNativeLanguage === false
            )
              type = "Language";
            else type = "Native Language";
            //remove
            let remove = null;
            if (knowledge.isNativeLanguage == false)
              remove = (
                <td>
                  <button onClick={() => this.removeKnowledge(index)}>
                    Remove
                  </button>
                </td>
              );
            //language specifc
            let language = null;
            if (
              knowledge.type == KnowledgeType.Language &&
              knowledge.isNativeLanguage === false
            ) {
              language = (
                <React.Fragment>
                  <br />
                  <select
                    value={knowledge.langType}
                    onChange={(evt) => {
                      const val = parseInt(
                        evt.currentTarget.value
                      ) as LanguageType;
                      this.updateKnowledge(index, {
                        ...knowledge,
                        langType: val,
                      });
                    }}
                  >
                    <option value={LanguageType.BasicUnderstanding}>
                      Basic Understanding
                    </option>
                    <option value={LanguageType.Specialist}>Specialist</option>
                    <option value={LanguageType.Expert}>Expert</option>
                  </select>
                </React.Fragment>
              );
            }
            //custom input
            let custom = (
              <React.Fragment>
                <br />
                <input
                  type="text"
                  value={knowledge.custom}
                  onChange={(evt) =>
                    this.updateKnowledge(index, {
                      ...knowledge,
                      custom: evt.currentTarget.value,
                    })
                  }
                />
              </React.Fragment>
            );
            return (
              <table key={index} className="language">
                <tbody>
                  <tr>
                    <td>
                      {type}
                      {custom}
                      {language}
                    </td>
                    {remove}
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}
