import * as React from "react";

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
  Description: JSX.Element;
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
    Description: (
      <div>
        <p>
          You are equally adept at using either your right or left side. Whether
          shooting a gun, throwing a grenade, or kicking a ball, you can switch
          it up with the best of them.
        </p>
        <p>
          <b>Game Effect:</b> No penalty for off-hand weapon use (see p. 110).
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 4,
  },
  {
    Name: "Analytical Mind",
    Description: (
      <div>
        <p>
          You are a master problem solver. You can analyze information to help
          deduce solutions, while separating useful bits from the distractions
          and noise.
        </p>
        <p>
          <b>Game Effect:</b> You gain a bonus Edge when you make any
          Logic-based test.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 3,
  },
  {
    Name: "Aptitude",
    Description: (
      <div>
        <p>
          The best look up to you. You have the natural potential to be even
          better than the best in a particular skill.
        </p>
        <p>
          <b>Game Effect:</b>
          Your skill maximum for the selected skill is 10, instead of 9, and
          your maximum starting rank is 7, instead of 6.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
    HasSkill: true,
    Skill: 0,
  },
  {
    Name: "Astral Chameleon",
    Description: (
      <div>
        <p>
          Your aura never seems to stabilize for very long. You have the ability
          to blend in with the astral environment around you and make it harder
          to identify and read your aura and astral signature.
        </p>
        <p>
          <b>Game Effect:</b>
          Characters receive –2 dice on tests to recognize your aura or astral
          signature. Your astral signature fades in half the normal time (see p.
          159).
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 9,
  },
  {
    Name: "Blandness",
    Description: (
      <div>
        <p>
          You are the least interesting person in the world. You’re average
          height, average weight, average build, average everything. Nothing at
          all about you tends to stand out, and that can be extremely useful.
        </p>
        <p>
          <b>Game Effect:</b>
          Characters take a –2 penalty on Memory tests (p. 67) to remember if
          they have seen you before, and the threshold on tests to notice if you
          are following or observing them is increased by 1. If the character
          acquires something permanent and distinctive—obvious, unusual
          cyberware, a unique tattoo, that sort of thing—they lose this quality.
          If they acquire something temporarily distinctive, such as an extreme
          hairdo, the effects are negated until those changes are reversed.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Built Tough",
    Description: (
      <div>
        <p>
          You’re built like a brick drekhouse. You’re pretty good at taking a
          few extra hits before the lights go out.
        </p>
        <p>
          <b>Game Effect:</b>
          You have a number of additional boxes on your Physical Condition
          Monitor equal to the rank of this quality.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 4,
    MaxValue: 4,
    Value: 0,
  },
  {
    Name: "Catlike",
    Description: (
      <div>
        <p>
          You have an innate grace usually seen only in the genus Felis that
          translates into smooth movements and a propensity for always landing
          on your feet—literally, if not figuratively.
        </p>
        <p>
          <b>Game Effect:</b>
          You gain a bonus Edge on all tests for balance, falling, and landing
          safely. Note the rules in the Preventing Edge Abuse section, p. 45.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Dermal Deposits",
    Description: (
      <div>
        <p>
          You have calciferous deposits growing on or through your flesh, making
          you tougher and a little rough around the edges. Literally
        </p>
        <b>Game Effect:</b>
        <p>
          You gain 1 level of natural Armor. Your Unarmed Melee attacks have a
          Base Damage Value of [(STR/2) + 1]P.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 7,
  },
  {
    Name: "Double Jointed",
    Description: (
      <div>
        <p>
          Through practice or genetics, you’ve managed to make most of the
          joints in your body bend beyond normal metahuman ranges. Your hands
          narrow to as small as your wrists, your shoulders rotate and bend in
          every direction, your body folds neatly in half both forward and
          backward, and you can rotate your head to look behind you without
          turning your shoulders, just to name a few of your neatest party
          tricks.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus Edge on all tests involving grappling, escaping
          bonds, flexibility, or fitting into tight spaces. Note the rules on
          Preventing Edge Abuse, p. 45.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Elemental Resistance",
    Description: (
      <div>
        <p>
          Through genetics or training, you have developed a powerful resistance
          and tolerance for certain forms of damaging energy (or lack of energy,
          in the case of cold).
        </p>
        <p>
          <b>Game Effect:</b>
          When choosing this quality, select an elemental form of damage (p.
          109). When attacked with a weapon or spell (including unarmed combat
          by a spirit) that does this form of damage, gain a point of Edge
          before making your Defense test.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
    HasElement: true,
    Element: 0,
  },
  {
    Name: "Exceptional Attribute",
    Description: (
      <div>
        <p>
          Whether it’s being a powerhouse, taking a hit from a troll, holding
          your synthahol, ducking a fast right, holding that inside turn,
          selling coal in Newcastle, or making a cat look clumsy, you’re just
          naturally built to be better.
        </p>
        <b>Game Effect:</b>
        <p>
          Select a Physical or Mental attribute. The character’s attribute
          maximum (but not current rank) for the chosen attribute increases by 1
          to a maximum of 10. This quality can only be purchased once.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
    HasAttribute: true,
    Attribute: 0,
  },
  {
    Name: "First Impression",
    Description: (
      <div>
        <p>
          You know how to make an entrance and make that first meeting the best
          meeting. Your wit, charm, and subtle flattery put everyone you meet
          off their guard and let you make the most of a first encounter.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain 2 Edge for Social Tests during your first meeting with
          anyone, and both your Heat and Reputation are ignored for this first
          encounter.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Focused Concentration",
    Description: (
      <div>
        <p>
          You know how to compartmentalize your mind and keep hold of arcane and
          emergent manipulations without straining yourself.
        </p>
        <b>Game Effect:</b>
        <p>
          You can sustain multiple spells or complex forms without penalty. For
          each level, you can sustain 1 additional spell or complex form without
          suffering the associated penalty. The spell cannot have a modified
          Drain Value of 7 or greater.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
    MaxValue: 3,
    Value: 0,
  },
  {
    Name: "Gearhead",
    Description: (
      <div>
        <p>
          If it’s meant to move but currently isn’t moving so well, you know how
          to get it back into tip-top shape in a jiffy.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain an Edge on Repair tests for any vehicle and can spend Edge
          during downtime to make Extended Repair tests
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "Guts",
    Description: (
      <div>
        <p>
          It’s not a lack of fear, just a lack of cowardice! You can stand up to
          the most intimidating opponents and hold your tongue under the
          toughest interrogations.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain an Edge when resisting Intimidation or effects that cause the
          Frightened status.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Hardening",
    Description: (
      <div>
        <p>
          Get clipped by IC and other personas enough times in the Matrix, and
          you can start to build defenses against it. Your physical form
          actually helps absorb some of the injuries coming at your Matrix
          persona.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus Edge when making Matrix Damage Resistance tests. If
          you do not use that point of Edge immediately on the Damage Resistance
          test, it goes away. When struck by any damage in the Matrix, you can
          convert up to two boxes to Stun Damage, rather than Matrix damage,
          protecting your persona at the cost of yourself.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "High Pain Tolerance",
    Description: (
      <div>
        <p>
          Pain is but an illusion of the mind. Either that, or you were born
          with congenital analgesia. Either way, you don’t suffer the ill
          effects of injury and pain like others. Cost: 7 Karma
        </p>
        <b>Game Effect:</b>
        <p>
          When wounded, reduce your wound penalty by one (to a minimum of 0).
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 7,
  },
  {
    Name: "Home Ground",
    Description: (
      <div>
        <p>
          Spend enough time somewhere, and you get to know it like the back of
          your hand. In the local neighborhood, you know every turn, every back
          alley, every shop on the block, the local rivalries and romances, and
          you can use all of it to your advantage. In the Matrix, you’ve spent
          countless hours in the code, you know its gremlins, its quirks, the
          local avatars, and the ones that are out of place.
        </p>
        <b>Game Effect:</b>
        <p>
          Select a neighborhood or Matrix host each time you take this quality.
          Outdoors and Perception tests made in your Home Ground gain an Edge
          for use on that test; if you do not use the Edge on that test, it goes
          away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 10,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Human-Looking",
    Description: (
      <div>
        <p>
          Small orks, tall dwarfs, and ugly elves do exist. Whether through
          genetics or modifications, you do not look like your birth metatype;
          you appear human. The points in your ears are easily overlooked, your
          tusks are filed down to mere teeth, your cheekbones are rounder, your
          legs longer— that sort of thing. You can pass for human, which might
          help with humans or cause obstacles with non-humans.
        </p>
        <p>
          <b>Game Effect:</b>
          You generally appear human at first glance and gain +2 dice on
          Disguise tests to hide your metatype and appear more human.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 6,
  },
  {
    Name: "Indomitable",
    Description: (
      <div>
        <p>
          Whether through deep studies, natural selection, or intense training,
          your mind is hard to break. You can hold out longer under
          interrogation, shrug off mild injuries with ease, and hold your mind
          against the onslaught of incoming mana.
        </p>
        <p>
          <b>Game Effect:</b> Edge Boost costs are reduced by 1 on tests
          involving Willpower
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Juryrigger",
    Description: (
      <div>
        <p>
          When you don’t have the time or the parts to do it right, you can
          still get it done. Whether it’s slapping on duct tape, twisting
          together wires that maybe shouldn’t be connected, or just giving the
          thing a swift kick, you find a creative way to get a machine working,
          even if only briefly.
        </p>
        <p>
          <b>Game Effect:</b>
          When performing a Juryrigging test (see p. 95), you gain a point of
          Edge that must be spent on that test, or it goes away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Long Reach",
    Description: (
      <div>
        <p>
          Whether it’s because of long arms, long legs, or some exceptional
          physical grace, you are able to reach people with melee weapons easier
          than others.
        </p>
        <b>Game Effect:</b>
        <p>
          When you are using a melee weapon, Close range is extended to 5 meters
          instead of 3.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Low-Light Vision",
    Description: (
      <div>
        <p>
          Thanks to an increase in the number of rod cells in your natural eyes,
          an implanted increase of said rod cells, or an augmentation that
          enhances the light level of incoming data, you are capable of
          operating in light levels that would leave others essentially blind.
        </p>
        <b>Game Effect:</b>
        <p>
          You can see clearly in any light level that is not total darkness (see
          Environment and Visibility, p. 118).
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 6,
  },
  {
    Name: "Magic Resistance",
    Description: (
      <div>
        <p>
          You could have been born under a blood moon, filled your body with
          foreign substances, or had bits of your soul sucked out by a spirit or
          vampire. For good or ill, mana just doesn’t seem to want to connect
          with you. Whether it’s a manabolt trying to melt your brain, a
          fireball trying to cook you alive, or a healing spell trying to mend
          your wounds, it’s just harder to get magic to work on you.{" "}
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus Edge for use on any Magic Resistance test; if you do
          not use it on that test, that point goes away. When a Health spell is
          cast on you, treat your Essence as if it were 2 points lower than it
          actually is.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Mentor Spirit",
    Description: (
      <div>
        <p>
          You believe in something other than yourself to help guide and channel
          your magic, and that something believes in you. Whether it be the
          totem of Wolf, the Norse god Loki, or the Christian God, you utilize
          your beliefs to shape and focus your arcane abilities more easily
        </p>
        <b>Game Effect:</b>
        <p>
          You gain the benefits listed with the description of your mentor
          spirit (see p. 162). If you fail to keep aligned with one of those
          tenets, you lose your faith and connection to your mentor and all
          associated bonuses.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 10,
  },
  {
    Name: "Photographic Memory",
    Description: (
      <div>
        <p>
          Most people store life in clips, but you keep the recording running
          all the time. It’s a ton of information to deal with at times, but it
          has made you great for trivia night and remembering the favorite color
          of your childhood friend.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus Edge point when making a Memory test (p. 67). If you
          do not use this point of Edge on the test, it goes away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Quick Healer",
    Description: (
      <div>
        <p>
          You tend to heal from injury quicker than your peers, which is
          incredibly valuable in a profession that is all about putting your
          body on the line.
        </p>
        <b>Game Effect:</b>
        <p>
          Cut the interval for any natural healing test (p. 120) in half,
          meaning you can heal Stun Damage after half an hour and Physical
          Damage after half a day
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Resistance To Pathogens",
    Description: (
      <div>
        <p>
          When you claim, “I’ve never been sick a day in my life,” there’s a
          good chance it may be true. You have a very healthy immune system that
          has mastered the art of fighting off any and all comers that try to
          slip into your body and make you sick.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus point of Edge when you make a Pathogen Resistance
          test. If you do not use it on that test, it goes away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Spirit Affinity",
    Description: (
      <div>
        <p>
          You have earned respect among a particular group of spirits/sprites.
          Through actions and favors, you’ve gained a positive reputation that
          makes them treat you with extra consideration.
        </p>
        <b>Game Effect:</b>
        <p>
          When selecting this quality, choose a type of spirit or sprite. You
          gain a bonus point of Edge when making a Conjuring or Tasking test for
          your chosen class of spirits/sprites. This quality can be taken
          multiple times, selecting a new class of spirits/sprites each time.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 14,
    HasSpirit: true,
    Spirit: 0,
  },
  {
    Name: "Sprite Affinity",
    Description: (
      <div>
        <p>
          You have earned respect among a particular group of spirits/sprites.
          Through actions and favors, you’ve gained a positive reputation that
          makes them treat you with extra consideration.
        </p>
        <b>Game Effect:</b>
        <p>
          When selecting this quality, choose a type of spirit or sprite. You
          gain a bonus point of Edge when making a Conjuring or Tasking test for
          your chosen class of spirits/sprites. This quality can be taken
          multiple times, selecting a new class of spirits/sprites each time.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 14,
    HasSprite: true,
    Sprite: 0,
  },
  {
    Name: "Thermographic Vision",
    Description: (
      <div>
        <p>
          Thanks to enhancements or just genetics, your vision allows you to see
          differences in temperature on and around objects and people, though
          most of the time ambient regular light overrides the heat signature.
          Large local sources of heat can create a glare of sorts, but usually
          something giving off that much heat is also giving off light, so your
          regular vision takes over.
        </p>
        <b>Game Effect:</b>
        <p>
          You can see the heat of objects in total darkness (assuming they are
          warmer or colder than the ambient temperature), allowing you to
          operate in such conditions.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 8,
  },
  {
    Name: "Toughness",
    Description: (
      <div>
        <p>
          Whether it’s mental training, a physical regimen of self-inflicted
          injury, or you’re just one tough bastard, you can take a bit more of a
          beating and shrug off the injuries better than most.
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus point of Edge when making Damage Resistance tests. If
          you do not use it on the test, it goes away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
  },
  {
    Name: "Toxin Resistance",
    Description: (
      <div>
        <p>
          Whether through naturally superior organs or because you think getting
          bit by a snake on a dai- ly basis is a fun way to pass the time,
          you’re able to better resist the effects of toxins in the Sixth World.{" "}
        </p>
        <b>Game Effect:</b>
        <p>
          You gain a bonus point of Edge when you make a Toxin Resistance test
          (p. 121). If you do not use it on that test, it goes away.
        </p>
      </div>
    ),
    Type: QualityType.Positive,
    Cost: 12,
    IsHidden: true,
  },
  {
    Name: "Will To Live",
    Description: (
      <div>
        <p>
          No matter how hard the hit, you have the tenacity to hold on to the
          bitter end. You are quite capable of taking a .50-cal round to the
          chest and waking up in the hospital, rather than never waking up at
          all.
        </p>
        <p>
          <b>Game Effect:</b>
          For every rank of this quality you possess, you gain two additional
          Damage Overflow boxes (see p. 121).
        </p>
      </div>
    ),
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
    Description: (
      <div>
        <p>
          Some habits just can’t be kicked. It might be as simple as a need for
          a drag off that nic-stick to cool your nerves, or as life-twisting as
          a need for something better-than-life, but whatever it is, it’s got a
          firm grip on you.
        </p>
        <b>Game Effect:</b>
        <p>
          You cannot earn Edge or spend Edge in any form while suffering
          withdrawal. Withdrawal times (the time that passes before you need
          your next hit) and requirements are based on the level of addiction
          and can be found on the Addiction Withdrawal table. When in
          withdrawal, take a –2 dicepool penalty on all tests; increase that
          penalty by 1 each time you pass another Withdrawal time period.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 2,
    MaxValue: 6,
    HasCustom: true,
    Custom: "",
    Value: 0,
  },
  {
    Name: "Allergy (common, mild)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (common, moderate)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (common, severe)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 17,
    HasCustom: true,
    Custom: "",
  },

  {
    Name: "Allergy (common, extreme)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 20,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, mild)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 5,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, moderate)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, severe)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (uncommon, extreme)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, mild)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, moderate)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, severe)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 14,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (seasonal, extreme)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 17,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, mild)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 2,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, moderate)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 5,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, severe)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Allergy (rare, extreme)",
    Description: (
      <div>
        <p>
          Maybe it’s a runny nose and poorly timed sneezes from pollen, or a
          full-blown anaphylactic reaction from some of those rare natural
          peanuts. Whatever it is, you suffer some level of discomfort from a
          substance found in the Sixth World.
        </p>
        <p>
          <b>Game Effect:</b>
          Select an allergen and severity to determine Karma value. You cannot
          spend or earn Edge while exposed to your allergen. You also suffer
          secondary effects, which are listed below.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 11,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "AR Vertigo",
    Description: (
      <div>
        <p>
          Whether it’s just too much information, a focal issue in your visual
          field, or just an inability to focus when there’s so much to look at,
          you get dizzy and nauseated when utilizing AR.
        </p>
        <b>Game Effect:</b>
        <p>
          You cannot gain or spend Edge while utilizing AR of any sort. You also
          gain the Nauseated status (p. 52) while using AR and for one hour
          after you exit it.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Astral Beacon",
    Description: (
      <div>
        <p>
          Whenever people talk about someone having a “bright soul,” they make
          it sound like a good thing. You know it’s not. Your bright aura makes
          you stick out like a sore thumb on the astral. You have a hard time
          hiding or masking your aura, you can’t hide your feelings worth a
          damn, and attempts to locate you magically can be managed by
          first-year dropouts from Hagerstown Community College’s Arcane Studies
          program.
        </p>
        <b>Game Effect:</b>
        <p>
          You are considered Untrained for all Stealth tests in the astral
          plane. You can never take the masking metamagic. Assensing tests made
          against you get a free Edge, and all thresholds are reduced by 1.
          Astral Tracking tests made against you gain 2 Edge, and all thresholds
          are reduced by half.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Bad Luck",
    Description: (
      <div>
        <p>
          You were born under a bad sign, broke a mirror, spilled some salt, got
          the evil eye laid on you, or just can’t catch a break. No matter the
          reason, things just go wrong around you. Often.
        </p>
        <b>Game Effect:</b>
        <p>
          Glitches occur more frequently. Count dice showing both 1 and 2 for
          determining a glitch. This does not affect critical glitches, only
          regular glitches.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Bad Rep",
    Description: (
      <div>
        <p>
          Word on the street does not speak favorably of you. Maybe you lost a
          team or got kicked from a team for breaking during interrogation.
          Whatever it is, your reputation precedes you, and never in the way you
          want it to.
        </p>
        <b>
          You cannot spend Edge on Social tests. If you engage in a Teamwork
          test to assist a Social test, no one can spend Edge, and the opposing
          individual gains a point of Edge.
        </b>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Combat paralysis",
    Description: (
      <div>
        <p>
          No matter how many times the street sam takes you to the range, you
          just can’t help but jump and freeze that first time they start
          shooting. Sure, you recover, but you always feel a half step behind in
          the fight.
        </p>
        <b>Game Effect:</b>
        <p>
          Your Initiative Score is divided in half at the start of combat. You
          cannot take a Move or Sprint action in the first round, and you act
          last in that round. Your movement is restored to normal after the
          first round, but your Initiative Score is unchanged.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Dependents",
    Description: (
      <div>
        <p>
          Children, lovers, or something other, you have people relying on you
          for financial support. They live in your doss, eat your food, use your
          trid account, and generally cost you enough nuyen to keep you looking
          for that next score.
        </p>
        <b>Game Effect:</b>
        <p>
          Choose a level for the dependents. Level 1 dependents are the
          equivalent of a family member who does not live with you but still
          needs support. Five percent of any score goes to this person. Level 2
          dependents are more stable costs, like the support of a
          high-maintenance significant other, a child, or a small family. This
          level costs the runner 10 percent of every score. Level 3 dependents
          are rare in the shadows, because most runners don’t have a regular
          family and a second life outside the shadows, which is what this level
          entails. This level costs the runner 25 percent of all their scores.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 4,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Distenctive Style",
    Description: (
      <div>
        <p>
          You only fit in when you’re in places where no one fits in. The way
          you dress and look are unique to you. This isn’t just a pink mohawk or
          a signature black trenchcoat. This is a two-meter-tall SURGEd lizard
          with a rainbow head frill, a head full of piercings including a
          bullring in his snout, dressed in full punk regalia. This is an albino
          ork who wears white sunglasses and a white trench coat over a
          head-to-toe white suit. A distinctive style is more than just what you
          choose to put on each day—it’s a way of life.
        </p>
        <b>Game Effect:</b>
        <p>
          You cannot gain or spend Edge when you’re not rocking your distinctive
          look. Others get a +2 dice pool bonus when conducting a Memory test
          (p. 67) to recall your appearance or remember if they have seen you
          before.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Elf Poser",
    Description: (
      <div>
        <p>
          Your blood may be human or ork, but your ears, cheekbones, and
          hoity-toity attitude are all elf. A surgery here and there, maybe a
          Sperethiel class on the Matrix, and a lot of time watching footage of
          the Tír princes has you all set to join those you feel you truly
          belong with, no matter how round your ears or broad your tusks were at
          birth.
        </p>
        <b>Game Effect:</b>
        <p>
          Elves, orks, and trolls gain a point of Edge in Influence (Etiquette)
          tests made against you.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Glass Jaw",
    Description: (
      <div>
        <p>
          Doesn’t take much to lay you on your hoop. You just never could take a
          punch.
        </p>
        <b>Game Effect:</b>
        <p>
          You have 1 less Stun Box for each level of this Quality, down to a
          minimum of 2.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 4,
    MaxValue: 6,
    Value: 0,
  },
  {
    Name: "Gremlins",
    Description: (
      <div>
        <p>
          Commlinks freeze, guns jam, car tires blow, electrical systems short.
          Any and every thing that could go wrong with some fidgety bit of tech
          in your hands has gone wrong at one point in your life.
        </p>
        <p>
          <b>Game Effect:</b>
          Whenever you use any device, roll 2D6. If you get a 1 on either die,
          it means the device fails to function correctly and can be treated as
          a glitch. The device can be quickly reset with a Minor Action and used
          again. Rolling snake eyes (double 1s) means the device fails
          catastrophically, and the roll can be treated like a critical glitch.
          The device is done for good and you might be in for a bit of hurt from
          shock or biofeedback.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Honorbound",
    Description: (
      <div>
        <p>
          You have a code. You live by the code. You die by the code. There are
          many codes, each with a set of tenets that must be obeyed to maintain
          the balance in your soul, heart, qi, brain chemistry, etc.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend or earn Edge for twenty-four hours after you break a
          tenet of your code. If the same tenet is broken multiple times or
          broken again during the twenty-four hour period, each infraction adds
          another forty-eight hours onto the initial twenty-four. If a different
          tenet is broken, it’s twenty-four hours for that one added to any
          current infractions, and the same rules apply for additional
          violations. See the Honorbound sidebar for some sample codes and
          tenets.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Impaired",
    Description: (
      <div>
        <p>
          Some folks are just not meant to be naturally talented. A bum knee,
          poor genetics, or an illness as a kid has you lacking the maximum
          achievement level of your peers.{" "}
        </p>
        <p>
          <b>Game Effect:</b>
          For each level, the character’s maximum for the chosen attribute
          decreases by 1, to a minimum of 2.
        </p>
      </div>
    ),
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
    Description: (
      <div>
        <p>
          No matter how much you practice and try to figure it out, there are
          some skills you just can’t manage to get right.
        </p>
        <p>
          <b>Game Effect:</b>
          When this quality is chosen, select a skill. You are unable to gain
          ranks in the selected skill. You cannot be Incompetent in skills you
          have no chance to perform— so you cannot choose this quality for Magic
          skills if you do not have a Magic rating, and you cannot choose it for
          Tasking if you do not have a Resonance rating. This skill may only be
          selected once.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
    HasSkill: true,
    Skill: 0,
  },
  {
    Name: "In Debt",
    Description: (
      <div>
        <p>
          Sometimes to get cash you need to owe cash. You’ve built up a bit of
          debt trying to get a foothold in the shadows.
        </p>
        <p>
          <b>Game Effect:</b>
          <p>
            When you spend Karma for cash, every point of Karma you spend gets
            you 5,000 instead of 2,000 nuyen. Each point of Karma spent also
            puts you 5,000 nuyen into debt with someone very dangerous and
            capable of collecting. You must pay a monthly interest rate of 500
            nuyen per Karma spent, in addition to any payment to the principal.
            If the interest is not paid, the lenders come searching for you. You
            must repay interest at a rate of 200 nuyen per level of this
            quality, which addresses interest only, not principal. If the
            payment is not made, the lenders come searching for you. The quality
            can be bought off purely with money; if the principal is repaid the
            quality is eliminated. This quality can be obtained only during
            character creation, not during gameplay.
          </p>
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 0,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Insomnia",
    Description: (
      <div>
        <p>
          Sleep? What’s that? It could be nightmares, brain damage, funky
          biochemistry, or a psychological disorder, but no matter the reason,
          you just can’t get a good night’s rest.
        </p>
        <p>
          <b>Game Effect:</b>
          <p>
            Without proper rest, you can’t regain Edge or spend it as you might
            like. Each day the runner must make a Body + Willpower (3) test to
            get a successful night of rest. If they fail, they cannot earn more
            than two Edge from any source that day. Also, they cannot spend more
            than 2 Edge on any given test. The purchase and use of a sleep
            regulator reduces the threshold on the test to 1. The runner can
            also purchase medication (50 nuyen/dose) that reduces the threshold
            to 2.
          </p>
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 4,
  },
  {
    Name: "Loss Of Confidence",
    Description: (
      <div>
        <p>
          Imposter syndrome, a single traumatic failure, or just too many
          rejections or small failures in life have left you doubting yourself
          at every turn.
        </p>
        <p>
          <b>Game Effect:</b>
          During any encounter, the runner must make a Willpower (2) test as a
          Minor Action. Failure means they cannot earn or spend Edge for the
          entire encounter.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Low Pain Tolerance",
    Description: (
      <div>
        <p>
          You’ve got sensitive nerves or a generally sensitive nature. For
          whatever reason, you are more affected by injuries and discomfort.
        </p>
        <p>
          <b>Game Effect:</b>
          All wound modifiers are doubled.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 10,
  },
  {
    Name: "Ork Poser",
    Description: (
      <div>
        <p>
          Your blood may be human or elf, but your ears, jaw, tusks, and rough
          attitude are all ork. A surgery here and there, maybe an Or’zet class
          on the Matrix, and a lot of time watching documentaries on the Seattle
          Underground has you all set to join those you feel you truly belong
          with, no matter how round your ears or thin your frame was at birth.{" "}
        </p>
        <p>
          <b>Game Effect:</b>
          Elves, orks, and trolls gain a point of Edge in Influence (Etiquette)
          tests made against you.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Prejudiced",
    Description: (
      <div>
        <p>
          You have some deep-seated views and beliefs about a certain group, and
          no matter what anyone says, you know they’re no good. Your opinion of
          them is so negative and distracting you just can’t keep focused on
          other things while they’re around.
        </p>
        <p>
          <b>Game Effect:</b>
          Select a specific group or type of people. You are unable to gain or
          use Edge while the object of your prejudice is present (unless you’re
          attacking them).
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Scorched",
    Description: (
      <div>
        <p>
          A Matrix, simsense, or BTL experience has fried your neurons to the
          point of perpetual frazzle, causing trouble when you’re logged on,
          even when it’s just AR.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend Edge while accessing the Matrix. This includes
          through use of commlinks, smartlinks, and any other source of data
          coming in from the ether.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Sensitive System",
    Description: (
      <div>
        <p>
          It could be latent unexpressed arcane talent or just a hyperactive
          immune system, but the result is the same. Your body does not like to
          have anything grafted or merged with it that isn’t part of its natural
          code.
        </p>
        <p>
          <b>Game Effect:</b>
          Essence costs are doubled for all cyberware, bioware, and nanoware.
          Geneware suffers no ill effects. You cannot have this quality if you
          have a Magic or Resonance rating. (Note that nanoware and geneware
          will be covered in future books.)
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
  },
  {
    Name: "Simsense Vertigo",
    Description: (
      <div>
        <p>
          Somewhere inside your brain, you’ve got some wires crossed. Whenever
          you log onto the Matrix in VR, your disorientation is nauseating.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot gain or spend Edge while accessing the Matrix via VR. You
          also receive the Nauseated status (p. 52) for one hour after you log
          off the Matrix.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Sinner",
    Description: (
      <div>
        <p>
          Unlike a lot of runners, who have either no SIN or a criminal SIN, you
          have a legitimate SIN that links back to biometric data. You have
          enough attachment to it, whether for your own or family purposes, that
          you can’t just burn it.
        </p>
        <p>
          <b>Game Effect:</b>
          You pay taxes to the issuer of your SIN, either a megacorporation or a
          nation. This cost comes as a 10 percent increase in the cost of the
          lifestyle associated with this SIN. <br />
          Due to data within the Global SIN Registry, you are easier to track or
          identify, giving opponents a point of Edge every time they attempt a
          Trace Icon action against you.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
  },
  {
    Name: "Social Stress",
    Description: (
      <div>
        <p>
          There is a social situation that simply does not work for you, like
          being in large groups, talking to new people, being the center of
          attention, being out of the spotlight, or a myriad of other situations
          that some folks find totally normal but you find ridiculously
          stressful.
        </p>
        <p>
          <b>Game Effect:</b>
          Select a specific social stressor. When encountering your social
          stressor, you must make a Charisma (2) test as a Minor Action. Failure
          means you cannot earn or spend Edge until you succeed. You can choose
          not to take the test but if so, any tests made against you gain a
          bonus Edge.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 8,
    HasCustom: true,
    Custom: "",
  },
  {
    Name: "Spirit Bane",
    Description: (
      <div>
        <p>
          You may have angered them with how you treat their fellows, killed a
          powerful and respected member of their kind, or been born under a bad
          sign and marked as an enemy to entities like them. The reason doesn’t
          matter—what matters is the fact that a certain type of spirit/sprite
          has an inherent dislike for you.
        </p>
        <p>
          <b>Game Effect:</b>
          When selecting this quality, choose a type of spirit or sprite.
          Spirits/ sprites from that category gain a bonus point of Edge when
          you attempt a Conjuring or Tasking test against them. This quality can
          be taken multiple times, selecting a new class of spirits/sprites each
          time. <br />
          In combat, spirits/sprites of the chosen type will attack you first
          and relentlessly, often to the point of savaging a dead body or
          bricking a deck if they have nothing else to do.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 12,
    HasSpirit: true,
    Spirit: 0,
  },
  {
    Name: "Sprite Bane",
    Description: (
      <div>
        <p>
          You may have angered them with how you treat their fellows, killed a
          powerful and respected member of their kind, or been born under a bad
          sign and marked as an enemy to entities like them. The reason doesn’t
          matter—what matters is the fact that a certain type of spirit/sprite
          has an inherent dislike for you.
        </p>
        <p>
          <b>Game Effect:</b>
          When selecting this quality, choose a type of spirit or sprite.
          Spirits/ sprites from that category gain a bonus point of Edge when
          you attempt a Conjuring or Tasking test against them. This quality can
          be taken multiple times, selecting a new class of spirits/sprites each
          time. <br />
          In combat, spirits/sprites of the chosen type will attack you first
          and relentlessly, often to the point of savaging a dead body or
          bricking a deck if they have nothing else to do.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 12,
    HasSprite: true,
    Sprite: 0,
  },
  {
    Name: "Uncouth",
    Description: (
      <div>
        <p>
          At some point in life, the filter between your thoughts and your mouth
          disappeared. You consider yourself brutally honest, but others tend to
          see you as rude and abrasive.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend Edge on any test using Charisma.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Uneducated",
    Description: (
      <div>
        <p>
          Maybe book learning just wasn’t your thing, or maybe you were never
          exposed to vast quantities of information solely for the sake of
          expanding your knowledge base. Either way, you have a definite lack in
          your basic education.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend Edge on any test using Logic.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
  {
    Name: "Unsteady Hands",
    Description: (
      <div>
        <p>
          Nervous tics, excessive caffeine intake, or a general clumsiness might
          be the cause, but the results are all the same: You can’t draw a
          straight line to save your life. You also have a real hard time
          typing, tying your shoes, and keeping a gunsight on the target.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend Edge on any test using Agility that directly involves
          your hands (that is, a Stealth test to pull off sleightof-hand would
          directly involve the hands, as would an Attack test with any weapon
          held in the hands, but an Athletics test involving running would not,
          even though the hands are in motion while running).
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 4,
  },
  {
    Name: "Weak Immune System",
    Description: (
      <div>
        <p>
          Perpetual sniffles are annoying to both you and your team, but a
          poorly timed sneeze or a sudden need for a bathroom can mean the end
          of a good run. You’re sick almost all the time. It may just be a minor
          cold, or it could be a nasty case of influenza or worse, but you’ve
          never met an infection you didn’t want to take home and hang out with
          for a bit.
        </p>
        <p>
          <b>Game Effect:</b>
          You cannot spend Edge to resist the effects of an infection. The
          threshold for fighting off any infection you are exposed to is
          increased by 1. While suffering the ill effects of an illness, you
          suffer a –1 dice pool modifier to all tests.
        </p>
      </div>
    ),
    Type: QualityType.Negative,
    Cost: 6,
  },
];
