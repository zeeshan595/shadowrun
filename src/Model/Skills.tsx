import * as React from "react";
import { SkillType } from "./Quality";

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
  name: SkillType;
  specializations: number;
  untrained: boolean;
  attributes: AttributeTypePlus[];
  description: JSX.Element;
  value: number;
}

export const getSpecialization = (
  type: SkillType
): { id: number; text: string }[] => {
  let specialization: any;
  if (type === SkillType.Astral) specialization = AstralSpecialization;
  else if (type === SkillType.Athletics)
    specialization = AthleticsSpecialization;
  else if (type === SkillType.BioTech) specialization = BioTechSpecialization;
  else if (type === SkillType.CloseCombat)
    specialization = CloseCombatSpecialization;
  else if (type === SkillType.Con) specialization = ConSpecialization;
  else if (type === SkillType.Conjuring)
    specialization = ConjuringSpecialization;
  else if (type === SkillType.Cracking) specialization = CrackingSpecialization;
  else if (type === SkillType.Electronics)
    specialization = ElectronicsSpecialization;
  else if (type === SkillType.Enchanting)
    specialization = EnchantingSpecialization;
  else if (type === SkillType.Engineering)
    specialization = EngineeringSpecialization;
  else if (type === SkillType.ExoticWeapons)
    specialization = ExoticWeaponsSpecialization;
  else if (type === SkillType.Firearms) specialization = FirearmsSpecialization;
  else if (type === SkillType.Influence)
    specialization = InfluenceSpecialization;
  else if (type === SkillType.Outdoors) specialization = OutdoorsSpecialization;
  else if (type === SkillType.Perception)
    specialization = PerceptionSpecialization;
  else if (type === SkillType.Piloting) specialization = PilotingSpecialization;
  else if (type === SkillType.Sorcery) specialization = SorcerySpecialization;
  else if (type === SkillType.Stealth) specialization = StealthSpecialization;
  else if (type === SkillType.Tasking) specialization = TaskingSpecialization;
  else throw new Error("this specialization does not exist");

  const text: string[] = [];
  const numbers: number[] = [];
  for (let member in specialization) {
    const isValProperty = parseInt(member, 10) >= 0;
    if (!isValProperty) text.push(member);
    else numbers.push(parseInt(member));
  }
  let output: { id: number; text: string }[] = [];
  for (let i = 0; i < numbers.length; i++) {
    output.push({
      id: numbers[i],
      text: text[i],
    });
  }
  return output;
};

export const skills: Skill[] = [
  {
    name: SkillType.Astral,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Willpower],
    description: (
      <p>
        This skill can only be used by full or aspected magicians, or by adepts
        and mystic adepts who have chosen the Astral Perception adept power. It
        has two primary uses—one is for assensing astral auras, as described on
        p. 159. The other is for astral combat, as described on p. 160.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Athletics,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility, AttributeTypePlus.Strength],
    description: (
      <p>
        The Athletics skill is about physical grace and prowess, which is a
        combination of a number of factors—strength, speed, quickness,
        nimbleness, and so on. More than that, it is the ability to coordinate
        all those qualities together, to draw on your abilities to meet what the
        situation demands.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.BioTech,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: (
      <p>
        This skill is for characters who know metahuman biology. In the Sixth
        World, that also means knowing how different augmentations and gear
        interact with it. This skill is used in First Aid tests (p. 119) and
        Healing tests (p. 120), and it also can be used when analyzing and
        repairing cyberware, bioware, and other augmentations. Another use is
        installing cyberware, but not other kinds of ’ware.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.CloseCombat,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: (
      <p>
        Are you near someone? Are you trying to hurt them? Then use this skill!
        Whether you’re punching, stabbing, clubbing, or whatever, roll Close
        Combat + Agility vs. Reaction + Intuition (Athletics can be added for
        Dodge; see p. 43) Full details on Combat are in the Combat chapter (p.
        104).
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Con,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Charisma],
    description: (
      <p>
        The key aspect of this group is persuasion where you act as someone or
        something you’re not. Maybe you’re acting like the long-lost heir to a
        portion of Dunkelzahn’s hoard, or maybe you’re pretending to be a
        down-on-their-luck business suit looking to make a big score to launch
        them back to the top. Whatever the case may be, Con is the skill you use
        to convince other people that you are something you are not.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Conjuring,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: (
      <p>
        This skill allows you to summon, bind, and banish spirits. For details,
        see Conjuring, p. 146.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Cracking,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic],
    description: (
      <p>
        In the Matrix, there are two basic kinds of actions: legal and illegal.
        Cracking is what you use for the illegal ones. For details on the uses
        of Cracking, see Matrix, p. 171.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Electronics,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: (
      <p>
        This is the other side of Matrix work, the legal side. Whether you’re
        using your commlink, kludging some software, fine-tuning your hardware,
        or whatever, Electronics is the skill for you. You can find more details
        about its use in the Matrix chapter, p. 170.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Enchanting,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: (
      <p>
        Enchanting is used to craft—and sometimes demolish—foci, fetishes, and
        other items imbued with magic. Details about this can be found in the
        Magic chapter’s Enchanting section, p. 149.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Engineering,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Logic, AttributeTypePlus.Intuition],
    description: (
      <p>
        Engineering is about making things do the things you want them to
        do—making cars move, planes fly, boats float, and machines spin and roar
        so they can achieve whatever purpose they were built for. As the
        specializations show, this can cover a wide range of areas, but the
        skill essentially covers four basic activities: building, repairing,
        juryrigging, and vehicle gunnery. Building and repairing both follow the
        same basic process—roll an Engineering + Logic Extended test, with the
        threshold determined by the complexity of the item being built/repaired
        (see Build/Repair Threshold table) and the interval is based on the
        complexity of the effort (see Build/Repair Interval table).
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.ExoticWeapons,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: (
      <p>
        Some weapons are not like any other, and you need particular training to
        use them. This skill is for those weapons. You must select a
        specialization to use this skill, and you can only use this skill with
        weapons for which you have a specialization. Expertises cannot be
        acquired for this skill. You can buy ranks in this skill, and those
        ranks can be used with all specializations you have. This skill is
        exempt from the rule that you can only have one specialization per
        skill, and you cannot have expertise in this skill. This skill functions
        the same as other combat skills, meaning you roll Exotic Weapons +
        Agility vs. Reaction + Intuition; see the Combat chapter for more
        details.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Firearms,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Willpower],
    description: (
      <p>
        Do you want to shoot things? Use this skill. The basics are, roll
        Firearms + Agility vs. Reaction + Intuition. The details that stack on
        top of that are available in the Combat chapter (p. 104).
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Influence,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Charisma, AttributeTypePlus.Logic],
    description: (
      <p>
        This is the other way of shaping the opinions of others, along with Con.
        It might be said that this is the more honest side, but that would be
        underselling the integrity of con artists and overselling the honesty of
        business negotiators. The point is, whether you are trying to inspire
        your fellow runners, squeeze a few nuyen out of Mr. Johnson, or let
        someone know that intense physical pain awaits them if they cross you,
        Influence is the skill to use. The test usually is Influence + Charisma,
        but sometimes it can be Influence + Logic when the character is relying
        on pure reason to get their point across. It is opposed by Willpower +
        Intuition when Charisma is used, Willpower + Logic when Logic is used.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Outdoors,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition],
    description: (
      <p>
        While staying indoors forever, watching trids and eating WhompSnappers,
        seems like a good enough life, sometimes you have to go outside.
        Outdoors is to help deal with those times. Whether you are following the
        tracks of someone or something, scaring up food, or figuring out the
        quickest way to your destination, Outdoors is the skill to use.
        Typically this is a Simple test, Outdoors + Intuition with a threshold
        set using the Threshold Guidelines on p. 36. Efforts to disguise tracks
        may set the threshold for Tracking tests.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Perception,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Intuition, AttributeTypePlus.Logic],
    description: (
      <p>
        Is someone sneaking through the smog up ahead? Is there a secret
        compartment in that executive’s desk? Where’s the light switch? These
        are some of the questions that can be answered with a Perception test.
        When observing an environment, this is a Simple test, Perception +
        Intuition with a threshold determined by the gamemaster based on how
        difficult it is to find what the players are looking for (sample
        thresholds can be found in the Perception Thresholds table, p. 98).
        Perception is also used to attempt to see those who do not wish to be
        seen, in which case the test is Perception + Intuition vs. Stealth +
        Agility (sometimes these tests are not rolled concurrently; see the
        Stealth section for more details).
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Piloting,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Reaction],
    description: (
      <p>
        When you want a vehicle to move in a tricky way, this is the skill to
        use (riggers live or die by this skill). This is generally a Simple
        Test, Piloting + Reaction with a threshold based on the difficulty of
        the maneuver they are attempting. Sometimes a Piloting roll is about
        trying to avoid a tail, or tail someone else, or some other
        multi-vehicle action. In these cases, it’s Piloting + Reaction vs.
        Piloting + Reaction.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Sorcery,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Magic],
    description: (
      <p>
        The uses of Sorcery are numerous—too numerous to cover here! Instead,
        look at the Magic chapter for information on Spells (p. 130),
        Counterspelling (p. 143), and other uses.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Stealth,
    untrained: false,
    specializations: 0,
    attributes: [AttributeTypePlus.Agility],
    description: (
      <p>
        Shadowrunning isn’t supposed to be obvious, as you should be able to
        guess by the name, so Stealth is a very valuable skill. Stealth covers
        all the activities characters perform that they do not want others to
        notice—sneaking into a research facility, slipping a credstick out from
        under a Mafia don’s nose, blending into a crowd of Lone Star officers,
        and so on. Typically, a Stealth + Agility test is made at the start of
        such an effort, with the net hits being used as a threshold for others
        to notice what the character is up to. Sometimes the attempt at stealth
        happens spontaneously, so it is a Stealth + Agility vs. Perception +
        Intuition Opposed test.
      </p>
    ),
    value: 1,
  },
  {
    name: SkillType.Tasking,
    untrained: true,
    specializations: 0,
    attributes: [AttributeTypePlus.Resonance],
    description: (
      <p>
        This is the skill technomancers use to do various technomancer
        activities. More information about these activities can be found in the
        Technomancers section (p. 187).
      </p>
    ),
    value: 1,
  },
];
