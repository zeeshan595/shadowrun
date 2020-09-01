export enum MagicTradition {
  Hermeticism = 0,
  Shamanism = 1,
}

export enum MagicSkills {
  None = 0,
  Sorcery = 1,
  Conjuring = 2,
  Enchanting = 3,
}

export enum MagicType {
  Magician = 0,
  AspectedMagician = 1,
  Adept = 2,
  MysticAdept = 3,
  Technomancer = 4,
}

export interface Magic {
  type: MagicType;
  tradition: MagicTradition;
  adept: number;
  magicSkillLimit: MagicSkills;
}
