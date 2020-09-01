import { attributes, CharacterAttributes } from "../../Model/Attribute";
import { Quality, AttributeType, qualities } from "../../Model/Quality";
import { MagicType } from "../../Model/Magic";
import { Race, MetaType } from "../../Model/MetaType";
import { PriorityType } from "../../Model/PriorityType";

export const printpretty = (val: string): string => {
  return (
    val
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
};

export const getPriorityForMetaType = (priority: PriorityType): MetaType => {
  if (priority === PriorityType.A)
    return {
      Races: [Race.Dwarf, Race.Ork, Race.Troll],
      Points: 13,
    };
  else if (priority == PriorityType.B)
    return {
      Races: [Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
      Points: 11,
    };
  else if (priority == PriorityType.C)
    return {
      Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
      Points: 9,
    };
  else if (priority == PriorityType.D)
    return {
      Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
      Points: 4,
    };
  else if (priority == PriorityType.E)
    return {
      Races: [Race.Human, Race.Elf, Race.Dwarf, Race.Ork, Race.Troll],
      Points: 1,
    };
};

export const getPriorityForAttributes = (priority: PriorityType): number => {
  if (priority === PriorityType.A) return 24;
  else if (priority == PriorityType.B) return 16;
  else if (priority == PriorityType.C) return 12;
  else if (priority == PriorityType.D) return 8;
  else if (priority == PriorityType.E) return 2;
  else return 0;
};

export const getPriorityForSkills = (priority: PriorityType): number => {
  if (priority === PriorityType.A) return 32;
  else if (priority == PriorityType.B) return 24;
  else if (priority == PriorityType.C) return 20;
  else if (priority == PriorityType.D) return 16;
  else if (priority == PriorityType.E) return 10;
  else return 0;
};

export const getPriorityForResources = (priority: PriorityType): number => {
  if (priority === PriorityType.A) return 450000;
  else if (priority == PriorityType.B) return 275000;
  else if (priority == PriorityType.C) return 150000;
  else if (priority == PriorityType.D) return 50000;
  else if (priority == PriorityType.E) return 8000;
  else return 0;
};

export const getPriorityForMagic = (priority: PriorityType): number => {
  if (priority === PriorityType.A) return 4;
  else if (priority == PriorityType.B) return 3;
  else if (priority == PriorityType.C) return 2;
  else if (priority == PriorityType.D) return 1;
  else if (priority == PriorityType.E) return 0;
  else return 0;
};

export const computeBaseQualities = (race: Race) => {
  const defaultQualities: Quality[] = [];
  if (race == Race.Dwarf) {
    defaultQualities.push({
      ...qualities.find((q) => q.Name === "Toxin Resistance"),
      IsLocked: true,
    });
  }
  if (race == Race.Dwarf || race == Race.Troll) {
    defaultQualities.push({
      ...qualities.find((q) => q.Name === "Thermographic Vision"),
      IsLocked: true,
    });
  }
  if (race == Race.Elf || race == Race.Ork) {
    defaultQualities.push({
      ...qualities.find((q) => q.Name === "Low-Light Vision"),
      IsLocked: true,
    });
  }
  if (race == Race.Ork || race == Race.Troll) {
    const lockedValue = race === Race.Ork ? 1 : 2;
    defaultQualities.push({
      ...qualities.find((q) => q.Name === "Built Tough"),
      IsLocked: true,
      LockedValue: lockedValue,
    });
  }
  return defaultQualities;
};

export const computeBaseAttributes = (
  magicPriority: number,
  magicType: MagicType,
  race: Race,
  qualities: Quality[]
): CharacterAttributes => {
  const newAttributes = Object.assign({}, attributes);
  //reset max values
  newAttributes.agility.MaxValue = 6;
  newAttributes.body.MaxValue = 6;
  newAttributes.charisma.MaxValue = 6;
  newAttributes.intuition.MaxValue = 6;
  newAttributes.logic.MaxValue = 6;
  newAttributes.reaction.MaxValue = 6;
  newAttributes.strength.MaxValue = 6;
  newAttributes.willpower.MaxValue = 6;

  //racial bonuses
  if (race === Race.Dwarf) {
    newAttributes.body.MaxValue = newAttributes.body.baseMaxValue + 1;
    newAttributes.reaction.MaxValue = newAttributes.reaction.baseMaxValue - 1;
    newAttributes.strength.MaxValue = newAttributes.strength.baseMaxValue + 2;
    newAttributes.willpower.MaxValue = newAttributes.willpower.baseMaxValue + 1;
  } else if (race === Race.Elf) {
    newAttributes.agility.MaxValue = newAttributes.agility.baseMaxValue + 1;
    newAttributes.charisma.MaxValue = newAttributes.charisma.baseMaxValue + 2;
  } else if (race === Race.Human) {
    newAttributes.edge.MaxValue = newAttributes.edge.baseMaxValue + 1;
  } else if (race === Race.Ork) {
    newAttributes.body.MaxValue = newAttributes.body.baseMaxValue + 2;
    newAttributes.strength.MaxValue = newAttributes.strength.baseMaxValue + 2;
    newAttributes.charisma.MaxValue = newAttributes.charisma.baseMaxValue - 1;
  } else if (race === Race.Troll) {
    newAttributes.body.MaxValue = newAttributes.body.baseMaxValue + 3;
    newAttributes.agility.MaxValue = newAttributes.agility.baseMaxValue - 1;
    newAttributes.strength.MaxValue = newAttributes.strength.baseMaxValue + 3;
    newAttributes.charisma.MaxValue = newAttributes.charisma.baseMaxValue - 1;
  }

  //apply qualities
  //excep[tional attribute (qualities bonus)
  const exceptionalAttribute = qualities.find(
    (q) => q.Name === "Exceptional Attribute"
  );
  if (exceptionalAttribute !== undefined && exceptionalAttribute !== null) {
    if (exceptionalAttribute.Attribute === AttributeType.Agility)
      newAttributes.agility.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Body)
      newAttributes.body.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Charisma)
      newAttributes.charisma.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Intuition)
      newAttributes.intuition.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Logic)
      newAttributes.logic.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Reaction)
      newAttributes.reaction.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Strength)
      newAttributes.strength.MaxValue++;
    else if (exceptionalAttribute.Attribute === AttributeType.Willpower)
      newAttributes.willpower.MaxValue++;
  }

  //excep[tional attribute (qualities bonus)
  const impairedAttribute = qualities.find((q) => q.Name === "Impaired");
  if (impairedAttribute !== undefined && impairedAttribute !== null) {
    if (impairedAttribute.Attribute === AttributeType.Agility) {
      newAttributes.agility.MaxValue -= impairedAttribute.Value;
      if (newAttributes.agility.MaxValue < 2)
        newAttributes.agility.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Body) {
      newAttributes.body.MaxValue -= impairedAttribute.Value;
      if (newAttributes.body.MaxValue < 2) newAttributes.body.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Charisma) {
      newAttributes.charisma.MaxValue -= impairedAttribute.Value;
      if (newAttributes.charisma.MaxValue < 2)
        newAttributes.charisma.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Intuition) {
      newAttributes.intuition.MaxValue -= impairedAttribute.Value;
      if (newAttributes.intuition.MaxValue < 2)
        newAttributes.intuition.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Logic) {
      newAttributes.logic.MaxValue -= impairedAttribute.Value;
      if (newAttributes.logic.MaxValue < 2) newAttributes.logic.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Reaction) {
      newAttributes.reaction.MaxValue -= impairedAttribute.Value;
      if (newAttributes.reaction.MaxValue < 2)
        newAttributes.reaction.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Strength) {
      newAttributes.strength.MaxValue -= impairedAttribute.Value;
      if (newAttributes.strength.MaxValue < 2)
        newAttributes.strength.MaxValue = 2;
    } else if (impairedAttribute.Attribute === AttributeType.Willpower) {
      newAttributes.willpower.MaxValue -= impairedAttribute.Value;
      if (newAttributes.willpower.MaxValue < 2)
        newAttributes.willpower.MaxValue = 2;
    }
  }

  //apply magic to attributes
  if (magicType === MagicType.Technomancer) {
    newAttributes.resonance.baseValue = magicPriority;
    newAttributes.magic.baseValue = 0;
    newAttributes.magic.locked = true;
    newAttributes.resonance.locked = false;
  } else {
    newAttributes.magic.baseValue = magicPriority;
    newAttributes.resonance.baseValue = 0;
    newAttributes.magic.locked = false;
    newAttributes.resonance.locked = true;
  }

  return newAttributes;
};
