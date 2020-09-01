import { AttributeTypePlus } from "./Skills";

export interface Attribute {
  name: AttributeTypePlus;
  adjustment?: number;
  attribute?: number;
  karma: number;
  baseMaxValue: number;
  MaxValue: number;
  baseValue?: number;
  locked?: boolean;
}

export interface CharacterAttributes {
  body: Attribute;
  agility: Attribute;
  reaction: Attribute;
  strength: Attribute;
  willpower: Attribute;
  logic: Attribute;
  intuition: Attribute;
  charisma: Attribute;
  edge: Attribute;
  magic: Attribute;
  resonance: Attribute;
}

export const getAttributeTotal = (attribute: Attribute): number => {
  let total: number = 1;
  if (
    attribute.name === AttributeTypePlus.Magic ||
    attribute.name === AttributeTypePlus.Resonance
  )
    total = 0;
  if (attribute.baseValue) total += attribute.baseValue;
  if (attribute.adjustment) total += attribute.adjustment;
  if (attribute.attribute) total += attribute.attribute;
  if (attribute.karma) total += attribute.karma;
  return total;
};

export const attributes: CharacterAttributes = {
  body: {
    name: AttributeTypePlus.Body,
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  agility: {
    name: AttributeTypePlus.Agility,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  reaction: {
    name: AttributeTypePlus.Reaction,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  strength: {
    name: AttributeTypePlus.Strength,
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  willpower: {
    name: AttributeTypePlus.Willpower,
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  logic: {
    name: AttributeTypePlus.Logic,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  intuition: {
    name: AttributeTypePlus.Intuition,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  charisma: {
    name: AttributeTypePlus.Charisma,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  edge: {
    name: AttributeTypePlus.Edge,
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 7,
  },
  magic: {
    name: AttributeTypePlus.Magic,
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
    baseValue: 2,
  },
  resonance: {
    name: AttributeTypePlus.Resonance,
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
    baseValue: 0,
    locked: true,
  },
};
