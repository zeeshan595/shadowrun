export enum AttributeTypePlus {
  Body,
  Agility,
  Reaction,
  Strength,
  Willpower,
  Logic,
  Intuition,
  Charisma,
  Edge,
  Magic,
  Resonance,
}

enum AstralSpecialization {
  AstralCombat,
  AstralSignatures,
  EmotionalStates,
  SpiritTypes,
}
enum AthleticsSpecialization {
  Archery,
  Climbing,
  Flying,
  Gymnastics,
  Sprinting,
  Swimming,
  Throwing,
}
enum BioTechSpecialization {
  Biotechnology,
  Cybertechnology,
  FirstAid,
  Medicine,
}
enum CloseCombatSpecialization {
  Blades,
  Clubs,
  UnarmedCombat,
}
enum ConSpecialization {
  Acting,
  Disguise,
  Impersonation,
  Performance,
}
enum ConjuringSpecialization {
  Banishing,
  Summoning,
}
enum CrackingSpecialization {
  Cybercombat,
  ElectronicWarfare,
  Hacking,
}
enum ElectronicsSpecialization {
  Computer,
  Hardware,
  Software,
}
enum EnchantingSpecialization {
  Alchemy,
  Artificing,
  DisEnchanting,
}
enum EngineeringSpecialization {
  Aeronautics,
  Mechanic,
  Armorer,
  AutomotiveMechanic,
  Demolitions,
  Gunnery,
  IndustrialMechanic,
  Lockpicking,
  NauticalMechanic,
}
enum ExoticWeaponsSpecialization {}
enum FirearmsSpecialization {
  Automatics,
  Longarms,
  Pisols,
  Rifles,
  Shotguns,
}
enum InfluenceSpecialization {
  Etiquette,
  Instructions,
  Intimidation,
  Leadership,
  Negotiation,
}
enum OutdoorsSpecialization {
  Navigation,
  Survival,
  EnvironmentWoods,
  EnvironmentDesert,
  EnvironmentUrban,
  EnvironmentOther,
}
enum PerceptionSpecialization {
  Visual,
  Aural,
  Tacticle,
  EnvironmentWoods,
  EnvironmentDesert,
  EnvironmentUrban,
  EnvironmentOther,
}
enum PilotingSpecialization {
  GroundCraft,
  Aircraft,
  Watercraft,
}
enum SorcerySpecialization {
  Counterspelling,
  RitualSpellcasting,
  Spellcasting,
}
enum StealthSpecialization {
  Camouflage,
  Disguise,
  Palming,
  Sneaking,
}
enum TaskingSpecialization {
  Compiling,
  Decompiling,
  Registering,
}

export interface Skill {
  name: string;
  specializations: number;
  untrained: boolean;
  attributes: AttributeTypePlus[];
  description: string;
}

export const skills: Skill[] = [
  {
    name: "Astral",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Willpower],
    description: "",
  },
  {
    name: "Athletics",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility, AttributeTypePlus.Strength],
    description: "",
  },
  {
    name: "Bio-Tech",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: "",
  },
  {
    name: "Close Combat",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: "",
  },
  {
    name: "Con",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Charisma],
    description: "",
  },
  {
    name: "Conjuring",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: "",
  },
  {
    name: "Cracking",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic],
    description: "",
  },
  {
    name: "Electronics",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: "",
  },
  {
    name: "Enchanting",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: "",
  },
  {
    name: "Engineering",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: "",
  },
  {
    name: "Exotic Weapons",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: "",
  },
  {
    name: "Firearms",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Willpower],
    description: "",
  },
  {
    name: "Influence",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Charisma, AttributeTypePlus.Logic],
    description: "",
  },
  {
    name: "Outdoors",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition],
    description: "",
  },
  {
    name: "Perception",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Logic],
    description: "",
  },
  {
    name: "Piloting",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Reaction],
    description: "",
  },
  {
    name: "Sorcery",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: "",
  },
  {
    name: "Stealth",
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: "",
  },
  {
    name: "Tasking",
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Resonance],
    description: "",
  },
];
