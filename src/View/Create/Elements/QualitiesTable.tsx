import * as React from "react";
import {
  Qualities,
  QualityType,
  Quality,
  AttributeType,
  ElementType,
  SkillType,
  SpiritType,
  SpriteType,
} from "../../../Model/Quality";
import { printpretty } from "./General";

export interface IQualitiesProps {
  selectedQualities: Quality[];
  updateQualities: (qualities: Quality[]) => void;
}

export interface IQualitiesState {
  typeView: QualityType;
  currentlySelected: Quality;
}

export class QualitiesTable extends React.Component<
  IQualitiesProps,
  IQualitiesState
> {
  constructor(props) {
    super(props);
    this.state = {
      typeView: QualityType.Positive,
      currentlySelected: null,
    };
  }

  addQuality(quality: Quality) {
    if (!quality) return;
    if (
      this.props.selectedQualities.findIndex((q) => quality.Name === q.Name) !==
      -1
    )
      return;
    if (quality.MaxValue && quality.MaxValue > 1) quality.Value = 1;
    this.props.updateQualities([...this.props.selectedQualities, quality]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }
  removeQuality(quality: Quality) {
    if (!quality) return;
    if (quality.IsLocked) return;
    if (
      this.props.selectedQualities.findIndex((q) => quality.Name === q.Name) ===
      -1
    )
      return;
    this.props.updateQualities([
      ...this.props.selectedQualities.filter((q) => q.Name !== quality.Name),
    ]);
    this.setState({
      ...this.state,
      currentlySelected: null,
    });
  }

  updateQuality(quality: Quality) {
    if (!quality) return;
    if (
      this.props.selectedQualities.findIndex((q) => quality.Name === q.Name) ===
      -1
    )
      return;
    this.props.updateQualities([
      ...this.props.selectedQualities.filter((q) => q.Name !== quality.Name),
      quality,
    ]);
  }

  render() {
    const positiveQualities = Qualities.filter(
      (q) =>
        q.Type == this.state.typeView &&
        this.props.selectedQualities.findIndex((s) => s.Name === q.Name) === -1
    );
    return (
      <div className="qualityContainer">
        <h2>Select Qualities</h2>
        <h6>You can only have 7 selected qualities, not including your race qualities.</h6>
        <select
          value={this.state.typeView}
          onChange={(evt) =>
            this.setState({
              ...this.state,
              typeView: parseInt(evt.target.value) as QualityType,
            })
          }
        >
          <option value={QualityType.Positive}>Positive</option>
          <option value={QualityType.Negative}>Negative</option>
        </select>
        <br />
        <div className="qualityList">
          {positiveQualities.map((q, index) => (
            <div
              key={index}
              className={
                this.state.currentlySelected === q
                  ? "quality selected"
                  : "quality"
              }
              onClick={() =>
                this.setState({
                  ...this.state,
                  currentlySelected: q,
                })
              }
            >
              {q.Name}
              <span className="cost">{q.Cost}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => this.removeQuality(this.state.currentlySelected)}
        >
          {"<"}
        </button>
        <button onClick={() => this.addQuality(this.state.currentlySelected)}>
          {">"}
        </button>
        <div className="qualityList">
          {this.props.selectedQualities.map((q, index) => {
            let tools: JSX.Element[] = [];
            if (q.MaxValue > 1) {
              let val = 0;
              if (q.Value) val += q.Value;
              let lockedVal = 0;
              if (q.LockedValue) lockedVal += q.LockedValue;
              tools.push(
                <div key={`${q.Name}_MaxValue`}>
                  <input
                    type="number"
                    disabled={true}
                    value={val + lockedVal}
                  />
                  <button
                    onClick={() => {
                      if (val + lockedVal > 1 && val + lockedVal > lockedVal)
                        this.updateQuality({
                          ...q,
                          Value: val - 1,
                        });
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      if (val + lockedVal < q.MaxValue)
                        this.updateQuality({
                          ...q,
                          Value: val + 1,
                        });
                    }}
                  >
                    +
                  </button>
                </div>
              );
            }
            if (q.HasAttribute) {
              let attributes = [];
              for (let atrib in AttributeType) {
                const isValProperty = parseInt(atrib, 10) >= 0;
                if (isValProperty) {
                  attributes.push(
                    <option key={atrib} value={atrib}>
                      {printpretty(AttributeType[atrib])}
                    </option>
                  );
                }
              }
              tools.push(
                <div key={`${q.Name}_Attribute`}>
                  <select
                    value={q.Attribute}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Attribute: parseInt(
                          evt.currentTarget.value
                        ) as AttributeType,
                      })
                    }
                  >
                    {attributes}
                  </select>
                </div>
              );
            }
            if (q.HasElement) {
              let elements = [];
              for (let member in ElementType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  elements.push(
                    <option key={member} value={member}>
                      {printpretty(ElementType[member])}
                    </option>
                  );
                }
              }
              tools.push(
                <div key={`${q.Name}_Element`}>
                  <select
                    value={q.Element}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Element: parseInt(
                          evt.currentTarget.value
                        ) as ElementType,
                      })
                    }
                  >
                    {elements}
                  </select>
                </div>
              );
            }
            if (q.HasSkill) {
              let skills = [];
              for (let member in SkillType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  skills.push(
                    <option key={member} value={member}>
                      {printpretty(SkillType[member])}
                    </option>
                  );
                }
              }
              tools.push(
                <div key={`${q.Name}_Skill`}>
                  <select
                    value={q.Skill}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Skill: parseInt(evt.currentTarget.value) as SkillType,
                      })
                    }
                  >
                    {skills}
                  </select>
                </div>
              );
            }
            if (q.HasSpirit) {
              let spirit = [];
              for (let member in SpiritType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  spirit.push(
                    <option key={member} value={member}>
                      {printpretty(SpiritType[member])}
                    </option>
                  );
                }
              }
              tools.push(
                <div key={`${q.Name}_Spirit`}>
                  <select
                    value={q.Spirit}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Spirit: parseInt(evt.currentTarget.value) as SpiritType,
                      })
                    }
                  >
                    {spirit}
                  </select>
                </div>
              );
            }
            if (q.HasSprite) {
              let sprite = [];
              for (let member in SpriteType) {
                const isValProperty = parseInt(member, 10) >= 0;
                if (isValProperty) {
                  sprite.push(
                    <option key={member} value={member}>
                      {printpretty(SpriteType[member])}
                    </option>
                  );
                }
              }
              tools.push(
                <div key={`${q.Name}_Sprite`}>
                  <select
                    value={q.Sprite}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Sprite: parseInt(evt.currentTarget.value) as SpriteType,
                      })
                    }
                  >
                    {sprite}
                  </select>
                </div>
              );
            }
            if (q.HasCustom) {
              tools.push(
                <div key={`${q.Name}_Sprite`}>
                  <input
                    type="text"
                    value={q.Custom}
                    onChange={(evt) =>
                      this.updateQuality({
                        ...q,
                        Custom: evt.currentTarget.value,
                      })
                    }
                  />
                </div>
              );
            }
            let locked = null;
            if (q.IsLocked) {
              locked = (
                <span>
                  🔒
                  <br />
                </span>
              );
            }
            return (
              <div
                key={index}
                className={
                  this.state.currentlySelected === q
                    ? "quality selected"
                    : "quality"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    currentlySelected: q,
                  })
                }
              >
                {locked}
                {q.Name}
                <span className="cost">{q.Cost}</span>
                {tools.map((t) => t)}
              </div>
            );
          })}
        </div>
        <div className="qualityDescription">
          <h4>
            {this.state.currentlySelected
              ? this.state.currentlySelected.Name
              : null}
          </h4>
          {this.state.currentlySelected
            ? this.state.currentlySelected.Description
            : null}
        </div>
      </div>
    );
  }
}
