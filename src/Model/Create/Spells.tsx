import * as React from "react";

export enum SpellRange {
  Touch,
  LineOfSight,
  LineOfSightWithArea,
}

export enum SpellCategory {
  Combat,
  Detection,
  Health,
  Illusion,
  Manipulation,
}

export enum SpellDuration {
  Instantaneous,
  Sustained,
  Limited,
  Permanent,
}

export enum SpellConstructionType {
  Mana,
  Physical,
}

export enum DamageType {
  Stun,
  Physical,
  Special,
}

export enum CastType {
  Sorcery,
  Alchemy,
  Both,
}

export interface Spell {
  name: string;
  isMultiSense?: boolean;
  isDirect?: boolean;
  category: SpellCategory;
  range: SpellRange;
  duration: SpellDuration;
  type: SpellConstructionType;
  drainValue: number;
  damage?: DamageType[];
  description: JSX.Element;
  cast?: CastType;
}

export const spells: Spell[] = [
  //combat spells
  {
    name: "Acid Stream",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 5,
    isDirect: false,
    description: (
      <p>
        These spells shoot acid at targets, doing immediate damage while also
        doing Chemical damage (p. 109) and giving hit targets the Corroded
        status (p. 52) with a rating equal to net hits on the Spellcasting test.
        Acid Stream is a single-target spell, Toxic Wave is area effect.
      </p>
    ),
  },
  {
    name: "Toxic Wave",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 6,
    isDirect: false,
    description: (
      <p>
        These spells shoot acid at targets, doing immediate damage while also
        doing Chemical damage (p. 109) and giving hit targets the Corroded
        status (p. 52) with a rating equal to net hits on the Spellcasting test.
        Acid Stream is a single-target spell, Toxic Wave is area effect.
      </p>
    ),
  },
  {
    name: "Clout",
    category: SpellCategory.Combat,
    damage: [DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 3,
    isDirect: false,
    description: (
      <p>
        A tricky little spell—the magic doesn’t hit the target, but it shapes
        the air to make the blow. The power of wind to shape rock formations is
        demonstrated solidly on the head of the target. Clout targets
        individuals, Blast is area effect.
      </p>
    ),
  },
  {
    name: "Blast",
    category: SpellCategory.Combat,
    damage: [DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 4,
    isDirect: false,
    description: (
      <p>
        A tricky little spell—the magic doesn’t hit the target, but it shapes
        the air to make the blow. The power of wind to shape rock formations is
        demonstrated solidly on the head of the target. Clout targets
        individuals, Blast is area effect.
      </p>
    ),
  },
  {
    name: "Flamestrike",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 5,
    isDirect: false,
    description: (
      <p>
        A classic. When you think of hurting people with magic, the first thing
        that comes to mind is making fire explode in their faces. These are the
        spells that’ll get that done. Flamestrike hits individuals, Fireball is
        area effect. Both spells do Fire elemental damage (p. 110) and impose
        the Burning status (p. 51) with a rating equal to net hits on the
        Spellcasting test.
      </p>
    ),
  },
  {
    name: "Fireball",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 6,
    isDirect: false,
    description: (
      <p>
        A classic. When you think of hurting people with magic, the first thing
        that comes to mind is making fire explode in their faces. These are the
        spells that’ll get that done. Flamestrike hits individuals, Fireball is
        area effect. Both spells do Fire elemental damage (p. 110) and impose
        the Burning status (p. 51) with a rating equal to net hits on the
        Spellcasting test.
      </p>
    ),
  },
  {
    name: "Ice Spear",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 5,
    isDirect: false,
    description: (
      <p>
        When every corp security goon you run into starts wearing
        flame-retardant underwear, it’s time to throw a changeup at them and hit
        them with the other temperature extreme. These spells blast targets with
        freezing cold, doing Cold elemental damage (p. 110) along with the
        normal damage and imposing the Chilled status (p. 51) for a number of
        combat rounds equal to net hits on the Spellcasting test. Ice Spear
        targets individuals, while Ice Storm is an area spell.
      </p>
    ),
  },
  {
    name: "Ice Storm",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 6,
    isDirect: false,
    description: (
      <p>
        When every corp security goon you run into starts wearing
        flame-retardant underwear, it’s time to throw a changeup at them and hit
        them with the other temperature extreme. These spells blast targets with
        freezing cold, doing Cold elemental damage (p. 110) along with the
        normal damage and imposing the Chilled status (p. 51) for a number of
        combat rounds equal to net hits on the Spellcasting test. Ice Spear
        targets individuals, while Ice Storm is an area spell.
      </p>
    ),
  },
  {
    name: "Lighting Bolt",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 5,
    isDirect: false,
    description: (
      <p>
        It’s what deities from Zeus to Thor use to smite those who have it
        coming, which means it should be good enough for you, too. Lightning
        Bolt hits a single target with electricity, while Lightning Ball is area
        effect. Both spells do Electricity elemental damage (p. 109), imposing
        the Zapped status (p. 53) for a number of turns equal to net hits.
      </p>
    ),
  },
  {
    name: "Lighting Ball",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical, DamageType.Special],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 6,
    isDirect: false,
    description: (
      <p>
        It’s what deities from Zeus to Thor use to smite those who have it
        coming, which means it should be good enough for you, too. Lightning
        Bolt hits a single target with electricity, while Lightning Ball is area
        effect. Both spells do Electricity elemental damage (p. 109), imposing
        the Zapped status (p. 53) for a number of turns equal to net hits.
      </p>
    ),
  },
  {
    name: "Mana Bolt",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    drainValue: 4,
    isDirect: true,
    description: (
      <p>
        Essential spellcasting, shaping mana to crack skulls. Who can argue with
        this purity? Manabolt targets individuals, while Manaball is area
        effect.
      </p>
    ),
  },
  {
    name: "Mana Ball",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Mana,
    drainValue: 5,
    isDirect: true,
    description: (
      <p>
        Essential spellcasting, shaping mana to crack skulls. Who can argue with
        this purity? Manabolt targets individuals, while Manaball is area
        effect.
      </p>
    ),
  },
  {
    name: "Power Bolt",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    drainValue: 4,
    isDirect: true,
    description: (
      <p>
        The harsher version of Clout, Powerbolt smacks targets with Physical
        damage; Powerball does the same as an area effect.
      </p>
    ),
  },
  {
    name: "Power Ball",
    category: SpellCategory.Combat,
    damage: [DamageType.Physical],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    drainValue: 5,
    isDirect: true,
    description: (
      <p>
        The harsher version of Clout, Powerbolt smacks targets with Physical
        damage; Powerball does the same as an area effect.
      </p>
    ),
  },
  {
    name: "Stun Bolt",
    category: SpellCategory.Combat,
    damage: [DamageType.Stun],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    drainValue: 3,
    isDirect: true,
    description: (
      <p>
        Sometimes you take a little off the heater to catch the other guy
        off-balance. These spells channel mana in a way that hurts, but only to
        stun. Stunbolt hits individuals, Stunball is area effect.
      </p>
    ),
  },
  {
    name: "Stun Ball",
    category: SpellCategory.Combat,
    damage: [DamageType.Stun],
    duration: SpellDuration.Instantaneous,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Mana,
    drainValue: 4,
    isDirect: true,
    description: (
      <p>
        Sometimes you take a little off the heater to catch the other guy
        off-balance. These spells channel mana in a way that hurts, but only to
        stun. Stunbolt hits individuals, Stunball is area effect.
      </p>
    ),
  },

  //detection spells
  {
    name: "Analyze Device",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 2,
    description: (
      <p>
        Sure, you know what a commlink looks like, but that doesn’t mean you can
        identify the function of the weird black box with a single input jack.
        And Ghost help you with a machine from the ’50s or something. Analyze
        Device provides information about the unknown device, based on the
        number of net hits (the device’s Object Resistance is used in the
        Opposed Test). The first time a character tries to use a device while
        sustaining this spell on it, they receive Edge equal to their net hits
        on this test (though the customary limit of gaining no more than 2 Edge
        in a combat round applies).
      </p>
    ),
  },
  {
    name: "Analyze Magic",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        Sometimes you want to know what magic does without going astral. Treat
        this spell as if you are assensing (see p. 159). The Opposed test uses 2
        x total hits on the original skill test (Conjuring, Enchanting, or
        Sorcery) that created the magical effect being analyzed.
      </p>
    ),
  },
  {
    name: "Analyze Truth",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        The subject of the spell gains some sense if the target is telling the
        truth—or at least, if they believe they are. With at least 1 net hit,
        you gain this understanding. Note that the subject of the spell has to
        directly hear the statement being uttered to evaluate it—written
        statements, recordings, or audio/video transmissions cannot be used.
        Because mana, that’s why.
      </p>
    ),
  },
  {
    name: "Clairaudience",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        The person on whom this is cast gains the ability to hear distant
        sounds. The subject may select and move the spot; the size of the spot
        is determined by normal area-of-effect rules and can be adjusted with
        Increase Area and moved with Shift Area. The subject can only hear
        sounds in the target area while this spell is in effect (as opposed to
        sounds near them), and any hearing augmentations they have do not have
        any effect.
      </p>
    ),
  },
  {
    name: "Clairvoyance",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        Like Clairaudience, but with visuals instead of sound, so: The person on
        whom this is cast gains the ability to see distant sights. The subject
        may select and move the spot; the size of the spot is determined by
        normal area-of-effect rules and can be adjusted with Increase Area and
        can be moved with Shift Area. The subject can only see visuals in the
        target area while this spell is in effect (as opposed to sights near
        them), and any visual augmentations they have do not have any effect.
      </p>
    ),
  },
  {
    name: "Combat Sense",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        The subject gets a heightened awareness of possible dangers and the
        ability to react to them faster. Net hits on the Spellcasting test are
        added to the subject’s Defense Rating and dice pool for Surprise tests
        (see p. 108) as long as the spell is sustained.
      </p>
    ),
  },
  {
    name: "Detect Enemies",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        This spell lets the subject know if anyone within the sense’s range has
        hostile intentions toward them. It only works on people—not things, and
        it only detects people who have hostility specifically to the subject,
        not generalized anger at all metahumanity (if it did, everyone in the
        barrens would light up). Great for detecting ambushes!
      </p>
    ),
  },
  {
    name: "Detect Life",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        Are there people hiding in that pile of rubble? Or in the forest? This
        spell will point them out for you. Despite its broad-sounding name, it
        does not detect every living thing, but rather focuses on sentient
        beings.
      </p>
    ),
  },
  {
    name: "Detect Magic",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 4,
    description: (
      <p>
        No one wants to sort through an entire landfill to find the magic ring
        sitting amid all the trash, but sometimes that’s the job. Which is why
        an enterprising mage developed this spell, which alerts the caster to
        any forms of active magic within the sense’s range. This includes foci,
        reagents, active spells, wards, alchemical preparations, spirits, and
        active rituals, but does not include Awakened people, critters, astral
        signatures, alchemical preparations that have been triggered or lost
        their potency, or the effects of permanent spells once they have become
        permanent.
      </p>
    ),
  },
  {
    name: "Mindlink",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Mana,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        Commlinks and text messaging? So passé. Just throw your thoughts into
        someone else’s mind for the ultimate in rapid communication! As long as
        you get a hit on the Sorcery + Magic test, you have a link, and you can
        share mental communication in whatever form makes sense to you and
        subject of this spell. The caster and the subject must remain within
        range of each other for the link to continue functioning; if they move
        out of sense range and then come back into it, they can pick up the
        communication again, as long as the spell was continuously sustained.
      </p>
    ),
  },
  {
    name: "Mind Probe",
    category: SpellCategory.Detection,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 5,
    description: (
      <p>
        The subject of this spell can dig into a target’s mind, seeing how many
        of their thoughts they can discern—while also attempting to sort what is
        true from the lies they tell themselves. Roll Sorcery + Magic vs.
        Willpower + Logic; net hits determine how much information the subject
        pulls out of the target’s head. The Mind Probe Results table shows the
        type of information this spell delivers.
      </p>
    ),
  },

  //health spells
  {
    name: "Antidote",
    category: SpellCategory.Health,
    duration: SpellDuration.Permanent,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 5,
    description: (
      <p>
        This spell sends mana coursing through the body to find and purge
        toxins. Roll a Sorcery + Magic (toxin power) Extended test. Each hit
        reduces the toxin power by one; once the power hits zero, any ongoing
        effects of the toxin are eliminated.
      </p>
    ),
  },
  {
    name: "Cleansing Heal",
    category: SpellCategory.Health,
    duration: SpellDuration.Permanent,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 5,
    description: (
      <p>
        This spell has the same healing effect as the Heal spell (roll Sorcery +
        Magic [5 – Essence], heal 1 box of Stun, Physical, or Overflow damage
        per net hit). In addition, this variant of the spell adds a cleansing
        element that eliminates the Corroded status on the targeted individual.
        Injuries can only be affected once by any healing spell.
      </p>
    ),
  },
  {
    name: "Cooling Heal",
    category: SpellCategory.Health,
    duration: SpellDuration.Permanent,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 5,
    description: (
      <p>
        This spell has the same healing effect as the Heal spell (roll Sorcery +
        Magic [5 – Essence], heal 1 box of Stun, Physical, or Overflow damage
        per net hit. In addition, this variant of the spell adds a cooling
        element that eliminates the Burning status on the targeted individual.
        Injuries can only be affected once by any healing spell.
      </p>
    ),
  },
  {
    name: "Decrease Attribute",
    category: SpellCategory.Health,
    duration: SpellDuration.Sustained,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        The touch of the mage weakens, slows, or stupefies the target,
        temporarily lowering one of their attributes. The caster decides which
        attribute to target before casting the spell. The caster rolls a Sorcery
        + Magic vs. Willpower + targeted attribute. They can select how many net
        hits they actually apply to the target at a rate of 1 point of decrease
        per net hit; for each net hit applied beyond the first, the Drain Value
        of the spell increases by 1. The spell cannot affect Edge, Essence,
        Magic, or Resonance.
      </p>
    ),
  },
  {
    name: "Heal",
    category: SpellCategory.Health,
    duration: SpellDuration.Permanent,
    type: SpellConstructionType.Physical,
    range: SpellRange.Touch,
    drainValue: 3,
    description: (
      <p>
        Shadowrunning comes with bumps, bruises, and bullet wounds, and magic is
        perhaps the quickest and most effective way to repair it. When casting
        this spell, roll Sorcery + Magic with a threshold of (5 – Essence). Heal
        1 box of Stun, Physical, or Overflow damage per net hit. Injuries can
        only be affected once by any Heal spell (including Cleansing Heal,
        Cooling Heal, and Warming Heal).
      </p>
    ),
  },
  {
    name: "Increase Attribute",
    category: SpellCategory.Health,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        The touch of the mage strengthens, speeds, or enlightens the target,
        temporarily raising one of their attributes. The caster decides which
        attribute to target before casting the spell. The caster rolls a Sorcery
        + Magic (5 – Essence) test. They can select how many net hits they
        actually apply to the target to increase the selected attribute, at a
        rate of 1 point of increase per net hit (maximum bonus +4); for each net
        hit applied beyond the first, the Drain Value of the spell increases by
        1. The spell cannot affect Edge, Essence, Magic, or Resonance.
      </p>
    ),
  },
  {
    name: "Increase Refleces",
    category: SpellCategory.Health,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 5,
    description: (
      <p>
        The reaction time and speed of the target increase, making them better
        able to anticipate and respond to others. The caster rolls a Sorcery +
        Magic (5 – Essence) test. They can select how many net hits they
        actually apply to the target to increase both their Reaction score and
        the number of Initiative Dice, at a rate of 1 point of increase and 1
        Initiative Die per net hit; for each net hit applied beyond the first,
        the Drain Value of the spell increases by 1.
      </p>
    ),
  },
  {
    name: "Resist Pain",
    category: SpellCategory.Health,
    range: SpellRange.Touch,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        While not providing healing, this spell allows the target to ignore the
        effects of damage, moving forward as if they did not have that pain.
        Roll Sorcery + Magic (5 – Essence); for each net hit, the target can
        reduce dice-pool modifiers from damage by 1.
      </p>
    ),
  },
  {
    name: "Stabilize",
    category: SpellCategory.Health,
    range: SpellRange.Touch,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Permanent,
    drainValue: 3,
    description: (
      <p>
        This is the spell to use when someone is in Overflow damage and is
        sustaining an ongoing damaging effect or status. Roll Sorcery + Magic,
        with a threshold of the number of Overflow boxes of damage the target
        has. Meeting the threshold means the target is stabilized , and all
        Overflow damage is removed. The net hits can only affect Overflow damage
        and cannot heal regular damage.
      </p>
    ),
  },
  {
    name: "Warming Heal",
    category: SpellCategory.Health,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Permanent,
    drainValue: 5,
    description: (
      <p>
        This spell has the same healing effect as the Heal spell (roll Sorcery +
        Magic [5 – Essence], heal 1 box of Stun, Physical, or Overflow damage
        per net hit). In addition, this variant of the spell adds a warming
        element that eliminates the Chilled status on the targeted individual.
        Injuries can only be affected once by any healing spell.
      </p>
    ),
  },

  //illusion spells
  {
    name: "Agony",
    isMultiSense: false,
    category: SpellCategory.Illusion,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        This spell brings pain but not actual damage. Roll Sorcery + Magic vs.
        Willpower + Logic; each net hit acts like an additional box of damage in
        both the Physical and Stun Condition Monitors for the purposes of
        determining penalties due to injuries. If one or both Condition Monitors
        are completely filled, the targeted individual stays conscious but is so
        wracked with pain that they cannot act. Once the spell is dropped, there
        is no ongoing effect from the pain. The base spell affects only an
        individual, but the Increase Area effect can be applied to make it an
        area spell (starting at 2m radius for +1 DV).
      </p>
    ),
  },
  {
    name: "Confusion",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        Confusion hits the target with a swirl of images and emotions that leave
        them disoriented and, well, confused. Roll Sorcery + Magic vs. Willpower
        + Logic; the target gains the Confused (#) status, with the number
        equaling the net hits on the test. The target experiences a dice pool
        penalty equal to that number on all tests besides Damage Resistance
        tests. Chaos has the same effect, except it also affects cameras,
        microphones, and other forms of technology. The base spell affects only
        an individual, but the Increase Area effect can be applied to make it an
        area spell (starting with a 2m radius). When it is an area spell, the
        Shift Area effect can be used.
      </p>
    ),
  },
  {
    name: "Chaos",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 4,
    description: (
      <p>
        Confusion hits the target with a swirl of images and emotions that leave
        them disoriented and, well, confused. Roll Sorcery + Magic vs. Willpower
        + Logic; the target gains the Confused (#) status, with the number
        equaling the net hits on the test. The target experiences a dice pool
        penalty equal to that number on all tests besides Damage Resistance
        tests. Chaos has the same effect, except it also affects cameras,
        microphones, and other forms of technology. The base spell affects only
        an individual, but the Increase Area effect can be applied to make it an
        area spell (starting with a 2m radius). When it is an area spell, the
        Shift Area effect can be used.
      </p>
    ),
  },
  {
    name: "Hush",
    isMultiSense: false,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        Silence descends on that target, making them unable to make a noise even
        if they tried. This can be great for people trying to sneak by a target,
        or a good way to throw disruption among people depending on vocal
        communication. Hush gives targets the Silent (#) status (see p. 53),
        with the number equaling the net hits on the Sorcery + Magic test. That
        number acts as a threshold for any attempts to hear the character.
        Silence acts the same, but it gives the Silent (Improved) (#) status, so
        that microphones and other technology also will not hear the targeted
        character.
      </p>
    ),
  },
  {
    name: "Silence",
    isMultiSense: false,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 4,
    description: (
      <p>
        Silence descends on that target, making them unable to make a noise even
        if they tried. This can be great for people trying to sneak by a target,
        or a good way to throw disruption among people depending on vocal
        communication. Hush gives targets the Silent (#) status (see p. 53),
        with the number equaling the net hits on the Sorcery + Magic test. That
        number acts as a threshold for any attempts to hear the character.
        Silence acts the same, but it gives the Silent (Improved) (#) status, so
        that microphones and other technology also will not hear the targeted
        character.
      </p>
    ),
  },
  {
    name: "Invisibility",
    isMultiSense: false,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        The target fades from view, becoming transparent so that they can move
        unnoticed. Invisibility gives the targeted character the Invisible (#)
        status (p. 52), where the number after the status becomes the threshold
        on any tests to see the character. The Invisible (Improved) spell gives
        the Improved Invisibility (#) status, which is essentially the same but
        works against cameras and other technology as well as against living
        entities.
      </p>
    ),
  },
  {
    name: "Improved Invisibility",
    isMultiSense: false,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 4,
    description: (
      <p>
        The target fades from view, becoming transparent so that they can move
        unnoticed. Invisibility gives the targeted character the Invisible (#)
        status (p. 52), where the number after the status becomes the threshold
        on any tests to see the character. The Invisible (Improved) spell gives
        the Improved Invisibility (#) status, which is essentially the same but
        works against cameras and other technology as well as against living
        entities.
      </p>
    ),
  },
  {
    name: "Mask",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        Sometimes you don’t want to be seen; other times, you want to be seen as
        someone you are not. Mask is for the latter. The spell changes the
        critical characteristics of the person—their appearance, their sound,
        their scent, and so forth. Roll Sorcery + Magic and record the number of
        hits; those hits are used as a threshold when people try to see through
        the illusion, which requires an Willpower + Intuition test. Mask affects
        only living, sentient beings; Physical Mask affects cameras,
        microphones, and other technology.
      </p>
    ),
  },
  {
    name: "Physical Mask",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 4,
    description: (
      <p>
        Sometimes you don’t want to be seen; other times, you want to be seen as
        someone you are not. Mask is for the latter. The spell changes the
        critical characteristics of the person—their appearance, their sound,
        their scent, and so forth. Roll Sorcery + Magic and record the number of
        hits; those hits are used as a threshold when people try to see through
        the illusion, which requires an Willpower + Intuition test. Mask affects
        only living, sentient beings; Physical Mask affects cameras,
        microphones, and other technology.
      </p>
    ),
  },
  {
    name: "Phantasm",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        With this spell, the caster projects a particular image into the area of
        effect (along with accompanying sounds and smells). Maybe it’s the image
        of an attacking dragon, or a peaceful garden, or of a specific
        individual—whatever it is, it has to be something the caster has seen
        before, and the phantasm must stay in their line of sight. The
        spellcaster rolls Sorcery + Magic; the net hits from the threshold of
        any Willpower + Intuition tests viewers must make to see through the
        illusion. <br />
        Phantasm affects every living being that sees the effect; Trid Phantasm
        affects cameras, microphones, and other technology.
      </p>
    ),
  },
  {
    name: "Trid Phantasm",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 4,
    description: (
      <p>
        With this spell, the caster projects a particular image into the area of
        effect (along with accompanying sounds and smells). Maybe it’s the image
        of an attacking dragon, or a peaceful garden, or of a specific
        individual—whatever it is, it has to be something the caster has seen
        before, and the phantasm must stay in their line of sight. The
        spellcaster rolls Sorcery + Magic; the net hits from the threshold of
        any Willpower + Intuition tests viewers must make to see through the
        illusion. <br />
        Phantasm affects every living being that sees the effect; Trid Phantasm
        affects cameras, microphones, and other technology.
      </p>
    ),
  },
  {
    name: "Sensor Sneak",
    isMultiSense: true,
    category: SpellCategory.Illusion,
    range: SpellRange.Touch,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 2,
    description: (
      <p>
        Improved Invisibility and Physical Mask and the like are great when you
        want to hide from both prying eyes and technology, but what about when
        there are no living beings around, only cameras, sensors, and the like?
        Sensor Sneak is the spell for that. It gives the target a version of the
        Invisible (Improved) (#) status, but it has no effect on living and
        sentient beings, only technology-based sensors.
      </p>
    ),
  },

  //manipulation spells
  {
    name: "Animate Metal",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Limited,
    drainValue: 6,
    description: (
      <p>
        A chunk of material of the affected type comes to life, moving as
        commanded by the spellcaster. Roll Sorcery + Magic vs. Object Resistance
        of the item/material being animated. Use the Volume Reference table (see
        left column) to determine how much material is animated. The material
        can move according to its form, but generally it should not be faster
        than 5 meters per combat round unless it is a wheeled vehicle or
        something else with innate speed. The object is generally not capable of
        coordinated movements, so attacks from animated objects are slow and
        easily blocked. Still, it might be able to level a blow at a motionless
        or unwary target, doing 4P damage if it’s metal, 3P if stone, 2S if
        wood, 1S if plastic.
      </p>
    ),
  },
  {
    name: "Animate Plastic",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Limited,
    drainValue: 3,
    description: (
      <p>
        A chunk of material of the affected type comes to life, moving as
        commanded by the spellcaster. Roll Sorcery + Magic vs. Object Resistance
        of the item/material being animated. Use the Volume Reference table (see
        left column) to determine how much material is animated. The material
        can move according to its form, but generally it should not be faster
        than 5 meters per combat round unless it is a wheeled vehicle or
        something else with innate speed. The object is generally not capable of
        coordinated movements, so attacks from animated objects are slow and
        easily blocked. Still, it might be able to level a blow at a motionless
        or unwary target, doing 4P damage if it’s metal, 3P if stone, 2S if
        wood, 1S if plastic.
      </p>
    ),
  },
  {
    name: "Animate Stone",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Limited,
    drainValue: 5,
    description: (
      <p>
        A chunk of material of the affected type comes to life, moving as
        commanded by the spellcaster. Roll Sorcery + Magic vs. Object Resistance
        of the item/material being animated. Use the Volume Reference table (see
        left column) to determine how much material is animated. The material
        can move according to its form, but generally it should not be faster
        than 5 meters per combat round unless it is a wheeled vehicle or
        something else with innate speed. The object is generally not capable of
        coordinated movements, so attacks from animated objects are slow and
        easily blocked. Still, it might be able to level a blow at a motionless
        or unwary target, doing 4P damage if it’s metal, 3P if stone, 2S if
        wood, 1S if plastic.
      </p>
    ),
  },
  {
    name: "Animate Wood",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Limited,
    drainValue: 4,
    description: (
      <p>
        A chunk of material of the affected type comes to life, moving as
        commanded by the spellcaster. Roll Sorcery + Magic vs. Object Resistance
        of the item/material being animated. Use the Volume Reference table (see
        left column) to determine how much material is animated. The material
        can move according to its form, but generally it should not be faster
        than 5 meters per combat round unless it is a wheeled vehicle or
        something else with innate speed. The object is generally not capable of
        coordinated movements, so attacks from animated objects are slow and
        easily blocked. Still, it might be able to level a blow at a motionless
        or unwary target, doing 4P damage if it’s metal, 3P if stone, 2S if
        wood, 1S if plastic.
      </p>
    ),
  },
  {
    name: "Armor",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Limited,
    drainValue: 4,
    description: (
      <p>
        Your magic fills the body of the target, hardening it and making it
        better able to absorb damage. Roll Sorcery + Magic and add net hits to
        the target’s Defense Rating.
      </p>
    ),
  },
  {
    name: "Control Actions",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Limited,
    drainValue: 4,
    description: (
      <p>
        The spellcaster acts as master puppeteer, taking control of another
        person and making them dance to their tune. Roll Sorcery + Magic vs.
        Willpower + Logic; net hits give the maximum duration of the spell in
        minutes. <br />
        The target is aware of what is happening to them but can do little about
        it. The caster uses the same actions to command the individual as the
        action they are telling them to take, so that having them move is a
        Minor Action, but having them attack is a Major Action.
        <br />
        This spell can be made into an area spell by using the Increase Area
        adjustment. Once the spell is cast, the effect stays with individuals
        who did not resist the spell, even if they move out of the initial area.
      </p>
    ),
  },
  {
    name: "Control Thoughts",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSight,
    type: SpellConstructionType.Mana,
    duration: SpellDuration.Limited,
    drainValue: 4,
    description: (
      <p>
        Similar to Control Actions but more insidious, this puts the spellcaster
        inside the head of the target, making them think what the spellcaster
        wants them to. Roll Sorcery + Magic vs. Willpower + Logic; net hits give
        the maximum duration of the spell in minutes. <br />
        Unlike Control Actions, the target’s awareness of Control Thoughts being
        used on them is uncertain. The closer the thoughts are to the target’s
        normal thoughts, the less likely they are to notice the intrusion. At
        the gamemaster’s discretion, they can have the target make a Logic +
        Intuition test after the spell wears off to recognize the spell’s effect
        on them with a threshold based on how different from normal their
        thoughts were made to be
      </p>
    ),
  },
  {
    name: "Darkness",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        These spells are two sides of the same coin, changing the light level of
        your environment to suit you. For each net hit, you can raise (using
        Light) or lower (using Darkness) the light level of the surrounding
        area, which may help gain when it comes to determing Edge based on
        Environment and Visibility (p. 118). These are area spells, and they can
        be adjusted using Increase Area and Shift Area.
      </p>
    ),
  },
  {
    name: "Light",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        These spells are two sides of the same coin, changing the light level of
        your environment to suit you. For each net hit, you can raise (using
        Light) or lower (using Darkness) the light level of the surrounding
        area, which may help gain when it comes to determing Edge based on
        Environment and Visibility (p. 118). These are area spells, and they can
        be adjusted using Increase Area and Shift Area.
      </p>
    ),
  },
  {
    name: "Elemental Armor",
    category: SpellCategory.Manipulation,
    range: SpellRange.LineOfSightWithArea,
    type: SpellConstructionType.Physical,
    duration: SpellDuration.Sustained,
    drainValue: 3,
    description: (
      <p>
        This works the same as the Armor spell (above), though it provides an
        added bonus. When casting the spell, you choose one element to protect
        the target from. Depending on the choice, the target cannot acquire
        certain statuses, as listed in the Elemental Protection table. They
        still may be damaged by a weapon or spell that does the type of damage
        from which you are protected—for example, if you have cooling armor, you
        still may be damaged by a Fireball blast if the initial attack roll is
        successful and you do not soak all the damage, but you would not gain
        the Burning status afterward.
      </p>
    ),
  },
];
