import * as React from "react";

export enum DurationType {
  Instantaneous,
  Sustained,
  Limited,
  Permanent,
}

export enum MatrixAttributeType {
  Firewall,
  Sleaze,
  DataProcessing,
  Attack,
}

export enum ProgramType {
  Armor,
  BabyMonitor,
  Biofeedback,
  BiofeedkbackFilter,
  Blackout,
  Browse,
  Configurator,
  Decryption,
  Defuse,
  Edit,
  Encryption,
  Exploit,
  Fork,
  Lockdown,
  Overclock,
  Signal,
  Scrubber,
  Toolbox,
  VirtualMachine,
}

export interface ComplexForm {
  name: string;
  fadeValue: number;
  duration: DurationType;
  hasMatrixAttribute?: boolean;
  matrixAttribute?: MatrixAttributeType;
  hasProgram?: boolean;
  program?: ProgramType;
  descriptions: JSX.Element;
}

export const complexForms: ComplexForm[] = [
  {
    name: "Cleaner",
    fadeValue: 2,
    duration: DurationType.Permanent,
    descriptions: (
      <p>
        Make an Electronics + Resonance test. Each hit reduces your Overwatch
        Score by 1.
      </p>
    ),
  },
  {
    name: "Diffusion",
    fadeValue: 4,
    duration: DurationType.Sustained,
    hasMatrixAttribute: true,
    descriptions: (
      <p>
        Make an Electronics + Resonance vs Willpower + Firewall opposed test.
        Each net hit reduces (attribute) by 1, to a minimum of 1. Can be
        purchased multiple times, with each time targeting a different attribute
      </p>
    ),
  },
  {
    name: "Editor",
    fadeValue: 3,
    duration: DurationType.Permanent,
    descriptions: (
      <p>
        You can take the Edit File action on a file even if you do not have the
        proper access level. You must still be able to detect the file.
      </p>
    ),
  },
  {
    name: "Emulate",
    fadeValue: 0,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        This form can be purchased multiple times; each time you can choose 1
        program to run. Includes autosofts, whose rating equals the
        technomancer’s current Data Processing rating.
      </p>
    ),
  },
  {
    name: "Infusion",
    fadeValue: 4,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        Make a simple Electronics + Resonance (4) test, each net hit increases
        (attribute) by 1 up to twice the targets normal rating. Can be purchased
        multiple times, each time for a different attribute.
      </p>
    ),
  },
  {
    name: "Mirrored Persona",
    fadeValue: 3,
    duration: DurationType.Instantaneous,
    descriptions: (
      <p>
        You can create a proxy persona that looks and acts identical to you in
        the Matrix. When launching this form, roll Electronics + Resonance; the
        number of hits serves as the rating of the duplicate persona you create.
        To differentiate between the technomancer and the proxy, opponents must
        succeed on a Matrix Perception test with a threshold of that rating.
        <br />
        If they fail on that test, opponents target the proxy with their Matrix
        Actions.
      </p>
    ),
  },
  {
    name: "Pulse Storm",
    fadeValue: 3,
    duration: DurationType.Instantaneous,
    descriptions: (
      <p>
        Make an Electronics + Resonance vs. Logic + Data Processing test. Each
        net hit increases the target’s noise rating by 1.
      </p>
    ),
  },
  {
    name: "Puppeteer",
    fadeValue: 5,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        You may take the Control Device action on a device even if you do not
        have the proper access level. You must still be able to detect the
        device.
      </p>
    ),
  },
  {
    name: "Resonance Channel",
    fadeValue: 2,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        Make an Electronics + Resonance test. Each hit reduces your noise level
        by 1.
      </p>
    ),
  },
  {
    name: "Resonance Spike",
    fadeValue: 4,
    duration: DurationType.Instantaneous,
    descriptions: (
      <p>
        Make a Cracking + Resonance vs. Willpower + Firewall test; each net hit
        causes 1 box of unresisted Matrix damage.
      </p>
    ),
  },
  {
    name: "Resonance Veil",
    fadeValue: 4,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        Create an illusion of Matrix activity that has the sights, sounds, and
        other sensory inputs of a genuine Matrix occurrence. Make an Electronics
        + Resonance vs. Intuition + Data Processing test. Even if the target has
        reason to believe what it’s seeing is fake, they must make a Matrix
        Perception test with a threshold equal to your net hits to see through
        the illusion.
      </p>
    ),
  },
  {
    name: "Static Bomb",
    fadeValue: 6,
    duration: DurationType.Instantaneous,
    descriptions: (
      <p>
        Make an Electronics + Resonance vs. Intuition + Data Processing test
        against all targets that can detect you. Any target that doesn’t roll
        any net hits loses perception of you and must perform a Matrix
        Perception test to locate you once more before they may take any further
        action against you.
      </p>
    ),
  },
  {
    name: "Static Veil",
    fadeValue: 3,
    duration: DurationType.Sustained,
    descriptions: (
      <p>
        Make an Electronics + Resonance vs. Willpower/Firewall + Firewall test.
        While this form is sustained, the target will not accumulate Overwatch
        Score from maintaining illegal access to a host on a sprite. OS will
        still increase due to illegal actions, though.
      </p>
    ),
  },
  {
    name: "Stitches",
    fadeValue: 4,
    duration: DurationType.Permanent,
    descriptions: (
      <p>
        Make an Electronics + Resonance test. Each net hit repairs 1 box of
        Matrix damage on a sprite.
      </p>
    ),
  },
  {
    name: "Tattletale",
    fadeValue: 3,
    duration: DurationType.Permanent,
    descriptions: (
      <p>
        Make an Electronics + Resonance test. Each hit increases the target’s
        Overwatch Score by 1.
      </p>
    ),
  },
];
