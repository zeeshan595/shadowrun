import { MetaType } from "./Create/MetaType";
import { GenderType } from "./Create/Profile";
import { MagicType } from "./Create/Magic";
import { Quality } from "./Create/Quality";
import { Knowledge } from "./Create/Knowledge";

export interface Character {
  personalData: PersonalData;
  attributes: Attributes;
  qualities: Quality[];
  conditionMonitor: ConditionMonitor;
  knowledge: Knowledge[];
}

export interface PersonalData {
  alias: string;
  name: string;
  metaType: MetaType;
  magicType: MagicType;
  gender: GenderType;
  height: number;
  weight: number;
  age: number;
  picture: string;
  karma: number;
  heat: number;
  reputation: number;
  essence: number;
  edge: number;
  nuyen: number;
}

export interface Attributes {
  body: number;
  agility: number;
  reaction: number;
  strength: number;
  willpower: number;
  logic: number;
  intuition: number;
  charisma: number;
  edge: number;
  magic: number;
}

export interface ConditionMonitor {
  Stun: number;
  Physical: number;
  Damage: number;
}