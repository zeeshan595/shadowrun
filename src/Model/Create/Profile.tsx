export enum GenderType {
  Male,
  Female,
}

export interface Profile {
  streetName: string;
  realName: string;
  gender: GenderType;
  age: number;
  height: number;
  weight: number;
  picture: string;
}

