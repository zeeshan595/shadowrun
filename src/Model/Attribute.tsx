import { Attributes } from "react";

export interface Attribute {
  name: string;
  adjustment?: number;
  attribute?: number;
  karma: number;
  baseMaxValue: number;
  MaxValue: number;
  baseValue?: number;
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
  let total: number = 0;
  if (attribute.baseValue) total += attribute.baseValue;
  if (attribute.adjustment) total += attribute.adjustment;
  if (attribute.attribute) total += attribute.attribute;
  if (attribute.karma) total += attribute.karma;
  return total;
};

export const attributes: CharacterAttributes = {
  body: {
    name: "Body",
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  agility: {
    name: "Agility",
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  reaction: {
    name: "Reaction",
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  strength: {
    name: "Strength",
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  willpower: {
    name: "Willpower",
    adjustment: 0,
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  logic: {
    name: "Logic",
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  intuition: {
    name: "Intuition",
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  charisma: {
    name: "Charisma",
    attribute: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
  edge: {
    name: "Edge",
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 7,
  },
  magic: {
    name: "Magic",
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
    baseValue: 2,
  },
  resonance: {
    name: "Resonance",
    adjustment: 0,
    karma: 0,
    baseMaxValue: 6,
    MaxValue: 6,
  },
};
