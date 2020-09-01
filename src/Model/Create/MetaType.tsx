export enum Race {
  Human = 0,
  Elf = 1,
  Dwarf = 2,
  Ork = 3,
  Troll = 4,
}

export interface MetaType {
  Races: Race[];
  Points: number;
}
