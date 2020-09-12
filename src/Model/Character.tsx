import { Race } from "./Create/MetaType";
import { GenderType } from "./Create/Profile";
import { MagicType } from "./Create/Magic";
import { Quality } from "./Create/Quality";
import { Knowledge } from "./Create/Knowledge";
import { Skill } from "./Create/Skills";
import { CharacterAttributes } from "./Create/Attribute";

export interface Character {
  personalData: PersonalData;
  attributes: CharacterAttributes;
  qualities: Quality[];
  conditionMonitor: ConditionMonitor;
  knowledge: Knowledge[];
  skills: Skill[];
}

export interface PersonalData {
  alias: string;
  name: string;
  metaType: Race;
  magicType: MagicType | null;
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

export interface ConditionMonitor {
  stun: number;
  physical: number;
  damage: number;
}
