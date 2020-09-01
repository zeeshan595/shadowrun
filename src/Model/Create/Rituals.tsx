import * as React from "react";

export enum RitualType {
  Anchored,
  Spell,
  Spotter,
  MaterialLink,
  Minion,
}

export interface Ritual {
  name: string;
  threshold: number;
  type: RitualType[];
  description: JSX.Element;
}

export const rituals: Ritual[] = [
  {
    name: "Circle Of Healing",
    threshold: 7,
    type: [RitualType.Anchored, RitualType.Spell],
    description: (
      <p>
        This ritual is used to cast a Health spell on a number of targets at
        once. Even though it’s called a circle, it creates a sphere around the
        anchor that has a radius in meters equal to the leader’s Magic rating.
        This ritual takes five hours to complete. The net hits from the sealing
        step are used as the net hits for the spell and applied as a positive
        dicepool modifier to any healing tests performed in the circle. If the
        spell has a particular elemental aspect (e.g., Cooling Heal or Warming
        Heal), that is also applied to individuals in the circle. The circle
        lasts for a number of days equal to the net hits on the sealing step.
      </p>
    ),
  },
  {
    name: "Curse",
    threshold: 5,
    type: [RitualType.MaterialLink, RitualType.Spell],
    description: (
      <p>
        A Curse allows an Illusion spell to be cast on a subject through a
        material link rather than a mystic link from observing the subject. A
        Curse can be used on any target, whether within visual range of the
        leader or not, provided there is a link to the target. If the spell
        applies to multiple targets, then the ritual must have a link to each of
        the targets.
        <br />
        The link is used as part of the offering and is destroyed during the
        ritual. The spell is cast normally (using teamwork, if applicable) with
        all the tests and appropriate Drain. For the duration of the ritual, a
        link is present between the target and the ritual group while the spell
        portion is sustained. It is possible to spot the link astrally and track
        it back to the ritual team’s physical location. <br />
        This ritual requires three hours to complete.
      </p>
    ),
  },
  {
    name: "Prodigal Spell",
    threshold: 6,
    type: [RitualType.Spell, RitualType.Spotter],
    description: (
      <p>
        This ritual allows you to cast any Combat spell at a distant target that
        is out of line of sight of your ritual team. The Combat spell can be
        either direct or indirect. Direct combat spells travel to the target in
        astral space. Indirect combat spells travel to the target in physical
        space, requiring a clear (but not necessarily straight) path in the
        physical world between the ritual team and target in order for the spell
        to reach its destination—the spell flies from the foundation to the
        target, dodging any obstacles in its path. <br />
        This ritual requires four hours to perform.
      </p>
    ),
  },
  {
    name: "Remote Sensing",
    threshold: 5,
    type: [RitualType.Spell, RitualType.Spotter],
    description: (
      <p>
        This ritual allows you to cast any Detection spell with an even greater
        range. The area of the spell is increased to (Magic rating of ritual
        leader + total hits on Sorcery test in Step 6) x 100 meters. The spell’s
        subject must be present in the foundation during the ritual but may then
        take their new sense outside the foundation while the ritual
        participants sustain the spell. All of the participants of the ritual
        perceive the same thing the subject perceives through the spell. If the
        spell has a target (like when you use a Mind Link or a Mind Probe spell
        in the ritual), you’ll need a spotter to have eyes on the target. <br />
        This ritual takes three hours to perform. Afterward, if any of the
        participants stops sustaining the ritual, it ends.
      </p>
    ),
  },
  {
    name: "Renascence",
    threshold: 6,
    type: [RitualType.Anchored, RitualType.Spell],
    description: (
      <p>
        This ritual sustains and maintains an area Manipulation spell for a
        time. The area of the spell is a sphere with a radius equal to the
        leader’s Magic rating, and the effect is based on the net hits from the
        sealing step. The base duration of the effect is 1 hour, which is
        doubled for each net hit from the sealing step of the ritual. <br />
        This ritual takes four hours to perform.
      </p>
    ),
  },
  {
    name: "Ward",
    threshold: 6,
    type: [RitualType.Anchored, RitualType.Spell],
    description: (
      <p>
        The ward is a basic ritual, taught to many magicians. It creates a mana
        barrier (p. 161) with a rating equal to the net hits on the Sorcery test
        in Step 6 of the ritual. The ward may encompass a volume of up to fifty
        cubic meters times the sum of the participants’ Magic ratings.
        <br />
        This ritual takes four hours to complete. The ward lasts for a number of
        weeks equal to the net hits from the sealing step of the ritual. If the
        leader spends 6 Karma, the ward is permanent.
      </p>
    ),
  },
  {
    name: "Watcher",
    threshold: 4,
    type: [RitualType.Minion],
    description: (
      <p>
        Watchers are like spirits, but in actuality are entities born from the
        ritual leader’s own mind rather than the metaplanes. They are a creation
        of mana, woven with the personalities of the ritual participants. A
        watcher can speak any language its creators (which includes the leader
        and participants) can speak. A watcher is bound only to the leader of
        the ritual and follows their orders. A watcher lasts for a number of
        hours equal to the (net hits on the sealing test x 3). A watcher’s
        attributes and skills start at 2. For each additional hour spent on the
        ritual, these increase by one, as does the ritual’s threshold.
        <br />A leader can dismiss a watcher bound to them as a Minor Action.
        Watchers cannot be banished or counterspelled. This ritual takes one
        hour to perform.
      </p>
    ),
  },
];
