export enum QualityType {
  Negative,
  Positive,
}

export enum AttributeType {
  Body,
  Agility,
  Reaction,
  Strength,
  Willpower,
  Logic,
  Intuition,
  Charisma,
}

export enum ElementType {
  Fire,
  Cold,
  Electricity,
  Chemical,
}

export enum SpiritType {
  SpiritsOfAir,
  SpiritsOfBeasts,
  SpiritsOfEarth,
  SpiritsOfFire,
  SpiritsOfKin,
  SpiritsOfWater,
}

export enum SpriteType {
  CounterSprite,
  CrackSprite,
  DataSprite,
  FaultSprite,
  MachineSprite,
}

export enum SkillType {
  Astral,
  Athletics,
  Biotech,
  CloseCombat,
  Con,
  Conjuring,
  Cracking,
  Electronics,
  Enchanting,
  Engineering,
  ExoticWeapons,
  Firearms,
  Influence,
  Outdoors,
  Perception,
  Piloting,
  Sorcery,
  Stealth,
  Tasking,
}

export enum SeverityType {
  Mild,
  Moderate,
  Severe,
  Extreme,
}

export enum AllergenType {
  Common,
  Seasonal,
  Uncommon,
  Rare,
}

export interface Quality {
  Name: string;
  Description: string;
  Type: QualityType;
  Cost: number;
  MaxValue?: number;
  HasAttribute?: boolean;
  Attribute?: AttributeType;
  HasElement?: boolean;
  Element?: ElementType;
  HasSpirit?: boolean;
  Spirit?: SpiritType;
  HasSprite?: boolean;
  Sprite?: SpriteType;
  HasCustom?: boolean;
  Custom?: string;
  HasSkill?: boolean;
  Skill?: SkillType;
  IsMulti?: boolean;
  IsLocked?: boolean;
  LockedValue?: number;
  IsHidden?: boolean;
  Value?: number;
}

export const Qualities: Quality[] = [
  //===============
  //===positives===
  //===============
  {
    Name: "Ambidextrous",
    Description: "",
    Type: QualityType.Positive,
    Cost: 4,
  },
  {
    Name: "Analytical Mind",
    Description: "",
    Type: QualityType.Positive,
    Cost: 3,
  },
  {
    Name: "Aptitude",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
    HasSkill: true,
    Skill: 0,
  },
  {
    Name: "Astral Chameleon",
    Description: "",
    Type: QualityType.Positive,
    Cost: 9,
  },
  {
    Name: "Blandness",
    Description: "",
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Built Tough",
    Description: "",
    Type: QualityType.Positive,
    Cost: 4,
    MaxValue: 4,
    Value: 0,
  },
  {
    Name: "Catlike",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Dermal Deposits",
    Description: "",
    Type: QualityType.Positive,
    Cost: 7,
  },
  {
    Name: "Double Jointed",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Elemental Resistance",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
    HasElement: true,
    Element: 0,
  },
  {
    Name: "Exceptional Attribute",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
    HasAttribute: true,
    Attribute: 0,
  },
  {
    Name: "First Impression",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Focused Concentration",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
    MaxValue: 3,
    Value: 0,
  },
  {
    Name: "Gearhead",
    Description: "",
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "Guts",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Hardening",
    Description: "",
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "High Pain Tolerance",
    Description: "",
    Type: QualityType.Positive,
    Cost: 7,
  },
  {
    Name: "Home Ground",
    Description: "",
    Type: QualityType.Positive,
    Cost: 10,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Human-Looking",
    Description: "",
    Type: QualityType.Positive,
    Cost: 6,
  },
  {
    Name: "Indomitable",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Juryrigger",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Long Reach",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Low-Light Vision",
    Description: "",
    Type: QualityType.Positive,
    Cost: 6,
  },
  {
    Name: "Magic Resistance",
    Description: "",
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Mentor Spirit",
    Description: "",
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "Photographic Memory",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Quick Healer",
    Description: "",
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Resistance To Pathogens",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Spirit Affinity",
    Description: "",
    Type: QualityType.Positive,
    Cost: 14,
    HasSpirit: true,
    Spirit: 0,
  },
  {
    Name: "Sprite Affinity",
    Description: "",
    Type: QualityType.Positive,
    Cost: 14,
    HasSprite: true,
    Sprite: 0,
  },
  {
    Name: "Thermographic Vision",
    Description: "",
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Toughness",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Toxin Resistance",
    Description: "",
    Type: QualityType.Positive,
    Cost: 12,
    IsHidden: true,
  },
  {
    Name: "Will To Live",
    Description: "",
    Type: QualityType.Positive,
    Cost: 8,
    MaxValue: 3,
    Value: 0,
  },

  //===============
  //===negatives===
  //===============
  {
    Name: "Addiction",
    Description: "",
    Type: QualityType.Negative,
    Cost: 2,
    MaxValue: 6,
    HasCustom: true,
    Custom: "",
    Value: 0,
  },
  {
    Name: "Allergy (common, mild)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (common, moderate)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (common, severe)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 17,
    HasCustom: true,
    Custom: "",
  },

  {
    Name: "Allergy (common, extreme)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 20,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, mild)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 5,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, moderate)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, severe)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, extreme)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, mild)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, moderate)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, severe)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, extreme)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 17,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, mild)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 2,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, moderate)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 5,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, severe)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, extreme)",
    Description: "",
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "VR Vertigo",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Astral Beacon",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Bad Luck",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Bad Rep",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Combat paralysis",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Dependents",
    Description: "",
    Type: QualityType.Negative,
    Cost: 4,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Distenctive Style",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Elf Poser",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Glass Jaw",
    Description: "",
    Type: QualityType.Negative,
    Cost: 4,
    MaxValue: 6,
    Value: 0,
  },
  {
    Name: "Gremlins",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Honorbound",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Impaired",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasAttribute: true,
    MaxValue: 5,
    IsMulti: true,
    Attribute: 0,
    Value: 0,
  },
  {
    Name: "Incompetent",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
    HasSkill: true,
    Skill: 0,
  },
  {
    Name: "In Debt",
    Description: "",
    Type: QualityType.Negative,
    Cost: 0,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Insomnia",
    Description: "",
    Type: QualityType.Negative,
    Cost: 4,
  },
  {
    Name: "Loss Of Confidence",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Low Pain Tolerance",
    Description: "",
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Ork Poser",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Prejudiced",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Scorched",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Simsense Vertigo",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Sinner",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Social Stress",
    Description: "",
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Spirit Bane",
    Description: "",
    Type: QualityType.Negative,
    Cost: 12,
    HasSpirit: true,
    Spirit: 0,
  },
  {
    Name: "Sprite Bane",
    Description: "",
    Type: QualityType.Negative,
    Cost: 12,
    HasSprite: true,
    Sprite: 0,
  },
  {
    Name: "Uncouth",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Uneducated",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Unsteady Hands",
    Description: "",
    Type: QualityType.Negative,
    Cost: 4,
  },
  {
    Name: "Weak Immune System",
    Description: "",
    Type: QualityType.Negative,
    Cost: 6,
  },
];
