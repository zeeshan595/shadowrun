import * as React from "react";
import {
  complexForms,
  ComplexForm,
  MatrixAttributeType,
  ProgramType,
} from "../../../Model/Create/ComplexForms";
import { Magic, MagicType } from "../../../Model/Create/Magic";
import { printpretty } from "../General";

export interface IComplexFormsTableProps {
  complexForms: ComplexForm[];
  magicPriority: number;
  updateComplexForms: (complexForms: ComplexForm[]) => void;
  magic: Magic;
}

export interface IComplexFormsTableState {
  currentlySelect: ComplexForm;
}

export class ComplexFormsTable extends React.Component<
  IComplexFormsTableProps,
  IComplexFormsTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentlySelect: null,
    };
  }

  addComplexForm() {
    const complexForm = this.state.currentlySelect;
    if (complexForm === undefined || complexForm === null) return;
    if (
      this.props.complexForms.findIndex(
        (cf) => cf.name === complexForm.name
      ) !== -1
    )
      return;
    this.props.updateComplexForms([...this.props.complexForms, complexForm]);
    this.setState({
      ...this.state,
      currentlySelect: null,
    });
  }
  removeComplexForm() {
    const complexForm = this.state.currentlySelect;
    if (complexForm === undefined || complexForm === null) return;
    if (
      this.props.complexForms.findIndex(
        (cf) => cf.name === complexForm.name
      ) === -1
    )
      return;
    this.props.updateComplexForms([
      ...this.props.complexForms.filter((cf) => cf.name !== complexForm.name),
    ]);
    this.setState({
      ...this.state,
      currentlySelect: null,
    });
  }
  updateComplexForms(complexForm: ComplexForm) {}

  render() {
    if (this.props.magicPriority < 1) return null;
    if (this.props.magic.type !== MagicType.Technomancer) return null;

    let description: JSX.Element = null;
    if (this.state.currentlySelect !== null) {
      const complexForm = this.state.currentlySelect;
      description = (
        <div className="spellDescription">
          <h2>{complexForm.name}</h2>
          {complexForm.descriptions}
        </div>
      );
    }

    return (
      <div>
        <h2>Choose your complex forms</h2>
        <div className="spellsContainer">
          {complexForms
            .filter(
              (complexForm) =>
                this.props.complexForms.findIndex(
                  (cf) => cf.name === complexForm.name
                ) === -1
            )
            .map((complexForm, index) => (
              <div
                key={index}
                className={
                  this.state.currentlySelect === complexForm
                    ? "spell selected"
                    : "spell"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    currentlySelect: complexForm,
                  })
                }
              >
                {complexForm.name}
              </div>
            ))}
        </div>
        <button onClick={() => this.removeComplexForm()}>{"<"}</button>
        <button onClick={() => this.addComplexForm()}>{">"}</button>
        <div className="spellsContainer">
          {this.props.complexForms.map((complexForm, index) => {
            const options: JSX.Element[] = [];

            if (complexForm.hasMatrixAttribute) {
              let matrixAttributes = [];
              for (let member in MatrixAttributeType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  matrixAttributes.push(
                    <option key={member} value={member}>
                      {printpretty(MatrixAttributeType[member])}
                    </option>
                  );
                }
              }
              options.push(
                <select
                  key={options.length}
                  onChange={(evt) =>
                    this.updateComplexForms({
                      ...complexForm,
                      matrixAttribute: parseInt(
                        evt.currentTarget.value
                      ) as MatrixAttributeType,
                    })
                  }
                  value={complexForm.matrixAttribute}
                >
                  {matrixAttributes}
                </select>
              );
            }
            if (complexForm.hasProgram) {
              let programs = [];
              for (let member in ProgramType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  programs.push(
                    <option key={member} value={member}>
                      {printpretty(ProgramType[member])}
                    </option>
                  );
                }
              }
              options.push(
                <select
                  key={options.length}
                  onChange={(evt) =>
                    this.updateComplexForms({
                      ...complexForm,
                      program: parseInt(evt.currentTarget.value) as ProgramType,
                    })
                  }
                  value={complexForm.program}
                >
                  {programs}
                </select>
              );
            }

            return (
              <div
                key={index}
                className={
                  this.state.currentlySelect === complexForm
                    ? "spell selected"
                    : "spell"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    currentlySelect: complexForm,
                  })
                }
              >
                {complexForm.name}
              </div>
            );
          })}
        </div>
        {description}
      </div>
    );
  }
}
