import * as React from "react";
import { AttributeType, SkillType } from "./Quality";

export enum ActivationType {
  Passive,
  MinorAction,
  MajorAction,
}

export enum CostType {
  Base,
  PerLevel,
}

export interface Adept {
  name: string;
  cost: number;
  costType: CostType;
  activation: ActivationType;
  description: JSX.Element;
  amount?: number;
  hasAttribute?: boolean;
  attribute?: AttributeType;
  hasSkill?: boolean;
  skill?: SkillType;
}

export const adepts: Adept[] = [
  {
    name: "Adrenaline Boost",
    cost: 0.25,
    costType: CostType.PerLevel,
    activation: ActivationType.MinorAction,
    description: (
      <p>
        You get a surge of energy so you can get the jump on others. For each
        level of the power, add 2 to your initiative score for (Magic) combat
        rounds. At the the end of those combat rounds, experience drain equal to
        the level of the power, which you can resist as normal.
      </p>
    ),
  },
  {
    name: "Astral Perception",
    cost: 1,
    costType: CostType.PerLevel,
    activation: ActivationType.MinorAction,
    description: (
      <p>
        You gain the ability to astrally perceive and follow the rules involved
        in so doing (see p. 159). You are dual-natured while using this power
        and can attack astral forms.
      </p>
    ),
  },
  {
    name: "Attribute Boost",
    cost: 0.25,
    costType: CostType.PerLevel,
    activation: ActivationType.MinorAction,
    hasAttribute: true,
    description: (
      <p>
        Mana flows into your body and enhances your inherent abilities, carrying
        you to a superior level. When purchasing this ability, it must be
        applied to a specific Physical attribute (Body, Agility, Reaction, or
        Strength); if this power is purchased multiple times, it can be used to
        either increase the rank connected to an already-selected attribute (up
        to 6) or to apply to a new attribute. It cannot be applied to Mental or
        Special attributes. <br />
        When this power is activated, roll Magic + Attribute Boost rating. Each
        hit temporarily boosts the rating of the designated attribute by 1, up
        to the augmented maximum of +4. This only affects dice pools, so your
        Initiative rank, Condition Monitor, Defense Rating, and so forth is not
        changed. The effect lasts for (net hits) combat rounds, and when it runs
        out, the adept takes drain equal to the level of this power, resisted as
        normal.
      </p>
    ),
  },
  {
    name: "Combat Sense",
    cost: 0.5,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        This power gives you the ability to anticipate and avoid harm. Gain a +1
        dice pool bonus per level on any defensive tests. You always have a
        chance to make a Perception test to avoid surprise.
      </p>
    ),
  },
  {
    name: "Critical Strike",
    cost: 1,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        Increase the DV of your melee attacks by 1 per level of this power. This
        power is compatible with other enhancements from weapons and adept
        powers unless otherwise prohibited.
      </p>
    ),
  },
  {
    name: "Danger Sense",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        You have a sixth sense for danger, instinctively knowing when it’s
        nearby and preparing for it. Gain an Edge before making Surprise tests.
      </p>
    ),
  },
  {
    name: "Direction Sense",
    cost: 0.25,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        You have a good sense of where you have been, where you’re going, and a
        few of the obstacles in between. When making an Outdoors test related to
        directions, you may gain an Edge point, provided you spend it
        immediately on that test.
      </p>
    ),
  },
  {
    name: "Enhanced Perception",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        Your senses are keenly honed, giving you information in enough time for
        you to figure out what to do about it. Gain an Edge when Observing in
        Detail or making a Perception test to find something hidden or listen to
        something you’re not supposed to hear.
      </p>
    ),
  },
  {
    name: "Enhanced Accuracy",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        Weapons are more accurate and deadly in your hands than in those of
        normal people. Increase the Attack Rating of any weapon you wield by 2.
      </p>
    ),
  },
  {
    name: "Improved Ability",
    cost: 0.5,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    hasSkill: true,
    description: (
      <p>
        (cost is doubled for combat abilities) <br />A skill must be selected
        when this power is chosen. That skill receives an ongoing boost equal to
        the rating of the power. The maximum boost to the skill is 1.5 times the
        current level (rounded up) or the augmented maximum, whichever is lower.
        You need to have at least one rank in a skill to buy this power for it,
        and the power can be purchased for multiple skills
      </p>
    ),
  },
  {
    name: "Improved Attribute",
    cost: 1,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    hasAttribute: true,
    description: (
      <p>
        Select a Physical attribute (Body, Agility, Reaction, or Strength) when
        purchasing this skill. That attribute receives an ongoing boost equal to
        the level of this power. The maximum boost to the attribute is 1.5 times
        the current level or the augmented maximum, whichever is lower.
      </p>
    ),
  },
  {
    name: "Improved Reflexes",
    cost: 1,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        This power gives you quick reflexes and anticipation, allowing you to
        act and react much faster than the normies. For each level of this
        power, add an Initiative Die and increase your Reaction by 1. The
        maximum level of this power is 4, and it cannot be combined with any
        other Initiative or Reaction boosts.
      </p>
    ),
  },
  {
    name: "Improved Sense",
    cost: 0.25,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        When this power is purchased, select a sense (sight, hearing, touch,
        taste, or smell). When making a test involving that sense, you get a
        bonus Edge, but only if you use it (either alone or in combination with
        other Edge points) on that test. Edge points from this power cannot be
        gained more than once when the same sense (noise, sight, flavor, etc.)
        is involved. This power can be selected more than once, each time for a
        different sense.
      </p>
    ),
  },
  {
    name: "Killing Hands",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.MinorAction,
    description: (
      <p>
        Your hands become lethal and magical, useful both in shadowrunning and
        cheesy pickup lines. When fighting unarmed, you can choose to deal Stun
        or Physical damage. Killing Hands can be combined with other powers
        affecting unarmed combat. Attacks made with Killing Hands are considered
        magical, meaning they bypass protections against normal weapons and can
        be made against astral beings.
      </p>
    ),
  },
  {
    name: "Kinesics",
    cost: 0.25,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        Your command of body language and nonverbal communication is, well,
        magical, and it helps you be incredibly difficult to read. When you are
        resisting Social tests and tests to read your emotions, judge your
        intentions, or gauge your truthfulness, you gain an Edge point. Only one
        such Edge point can be gained per encounter.
      </p>
    ),
  },
  {
    name: "Mystic Armor",
    cost: 0.25,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        Pain hurts, but you gain an elevated ability to ignore it. For each
        level of this power, the negative modifiers from damage move one box
        farther down the Condition Monitor—for example, at level 1, you don’t
        suffer the –1 penalty until 4 boxes are filled on a Condition Monitor,
        rather than 3. It works for both Stun and Physical Condition Monitors.
      </p>
    ),
  },
  {
    name: "Pain Resistance",
    cost: 0.25,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        Pain hurts, but you gain an elevated ability to ignore it. For each
        level of this power, the negative modifiers from damage move one box
        farther down the Condition Monitor—for example, at level 1, you don’t
        suffer the –1 penalty until 4 boxes are filled on a Condition Monitor,
        rather than 3. It works for both Stun and Physical Condition Monitors.
      </p>
    ),
  },
  {
    name: "Rapid Healing",
    cost: 0.5,
    costType: CostType.PerLevel,
    activation: ActivationType.Passive,
    description: (
      <p>
        The magic that flows through you helps knit your bones and regrow your
        flesh, making you heal quickly. Add one hit per level on Healing tests
        performed to heal you
      </p>
    ),
  },
  {
    name: "Spell Resistance",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        Spells have a tendency to bounce off you rather than affect you. Gain a
        point of Edge when targeted by spells.
      </p>
    ),
  },
  {
    name: "Traceless Walk",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        You don’t disturb the dust, dirt, snow, water, or anything else under
        your feet as you move, so there is no evidence of your passing. You
        don’t trigger tripwires, pressure pads, or other traps based on leg
        movement. Hearing tests to listen for your passage and Outdoors tests to
        perceive your tracks cannot gain or spend Edge.
      </p>
    ),
  },
  {
    name: "Vocal Control",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.Passive,
    description: (
      <p>
        You can control the pitch and modulation of your voice to make it sound
        the way you want— loud, quiet, resonant, or like some person you want to
        imitate. Gain Edge when attempting a Con or Influence test that somehow
        involves your voice. Only one point of Edge may be earned per encounter
        with this power.
      </p>
    ),
  },
  {
    name: "Wall Running",
    cost: 0.5,
    costType: CostType.Base,
    activation: ActivationType.MinorAction,
    description: (
      <p>
        Running horizontally is so pedestrian (get it?). Running up a wall is
        how you show you’re special. When using this power, you can use a Sprint
        action (see p. 44) to run up a vertical surface. You cannot use this
        power for two actions in a row; you have to spend at least one turn
        moving across a horizontal surface before using this power again. So if
        you run up a wall and don’t find a good foot or handhold, you’ll be
        falling right back down.
      </p>
    ),
  },
];
