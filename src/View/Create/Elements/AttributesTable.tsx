import * as React from "react";
import {
  CharacterAttributes,
  attributes,
  Attribute,
  getAttributeTotal,
} from "../../../Model/Create/Attribute";
import { AttributeTypePlus } from "../../../Model/Create/Skills";

export interface IAttributeTableProps {
  updateAttributes: (attributes: CharacterAttributes) => void;
  attributes: CharacterAttributes;
}

export interface IAttributeTableState {}

export class AttributeTable extends React.Component<
  IAttributeTableProps,
  IAttributeTableState
> {
  addAttributeWithKarma(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost >= attribute.MaxValue) return;
    attributes[key].karma++;
    this.props.updateAttributes({
      ...attributes,
    });
  }
  removeAttributeWithKarma(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;
    if (attribute.karma <= 0) return;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost <= 0) return;
    attributes[key].karma--;
    this.props.updateAttributes({
      ...attributes,
    });
  }

  addAttribute(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost >= attribute.MaxValue) return;
    attributes[key].attribute++;
    this.props.updateAttributes({
      ...attributes,
    });
  }
  removeAttribute(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;
    if (attribute.attribute <= 0) return;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost <= 0) return;
    attributes[key].attribute--;
    this.props.updateAttributes({
      ...attributes,
    });
  }

  addAttributeWithAdj(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost >= attribute.MaxValue) return;
    attributes[key].adjustment++;
    this.props.updateAttributes({
      ...attributes,
    });
  }
  removeAttributeWithAdj(key: string) {
    const attributes = this.props.attributes;
    const attribute = attributes[key] as Attribute;
    if (attribute.adjustment <= 0) return;

    let totalCost = getAttributeTotal(attribute);
    if (totalCost <= 0) return;
    attributes[key].adjustment--;
    this.props.updateAttributes({
      ...attributes,
    });
  }

  render() {
    return (
      <div>
        <h2>Distribute your attribute & adjustment points</h2>
        <table className="attributeTable">
          <thead>
            <tr>
              <td>Attribute</td>
              <td>Adjustment</td>
              <td>Attribute</td>
              <td>Karma</td>
              <td>Value</td>
              <td>Max Value</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.attributes).map((key) => {
              const attrib: Attribute = attributes[key];
              let adjust = null;
              let totalVal = getAttributeTotal(attrib);
              if (attrib.adjustment !== undefined) {
                adjust = (
                  <div>
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.removeAttributeWithAdj(key)}
                    >
                      -
                    </button>
                    {attrib.adjustment}
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.addAttributeWithAdj(key)}
                    >
                      +
                    </button>
                  </div>
                );
              }

              let attrVal = null;
              if (attrib.attribute !== undefined) {
                attrVal = (
                  <div>
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.removeAttribute(key)}
                    >
                      -
                    </button>
                    {attrib.attribute}
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.addAttribute(key)}
                    >
                      +
                    </button>
                  </div>
                );
              }

              let karmaVal = null;
              if (attrib.karma !== undefined) {
                karmaVal = (
                  <div>
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.removeAttributeWithKarma(key)}
                    >
                      -
                    </button>
                    {attrib.karma}
                    <button
                      disabled={attrib.locked}
                      onClick={() => this.addAttributeWithKarma(key)}
                    >
                      +
                    </button>
                  </div>
                );
              }

              return (
                <tr key={key}>
                  <td>{AttributeTypePlus[attrib.name]}</td>
                  <td>{adjust}</td>
                  <td>{attrVal}</td>
                  <td>{karmaVal}</td>
                  <td>{totalVal}</td>
                  <td>{attrib.MaxValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="attributeTable">
          <thead>
            <tr>
              <td>Derived</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Initiative</td>
              <td>
                {getAttributeTotal(this.props.attributes.reaction) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Initiative (Matrix AR)</td>
              <td>
                {getAttributeTotal(this.props.attributes.logic) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Initiative (Astral)</td>
              <td>
                {getAttributeTotal(this.props.attributes.logic) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>
                {getAttributeTotal(this.props.attributes.reaction) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Compose</td>
              <td>
                {getAttributeTotal(this.props.attributes.willpower) +
                  getAttributeTotal(this.props.attributes.charisma) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Judge Intentions</td>
              <td>
                {getAttributeTotal(this.props.attributes.willpower) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>
                {getAttributeTotal(this.props.attributes.logic) +
                  getAttributeTotal(this.props.attributes.intuition) +
                  2}
              </td>
            </tr>
            <tr>
              <td>Lift / Carry</td>
              <td>
                {getAttributeTotal(this.props.attributes.body) +
                  getAttributeTotal(this.props.attributes.willpower) +
                  2}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
