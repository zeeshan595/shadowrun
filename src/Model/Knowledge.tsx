export enum KnowledgeType {
  Knowledge,
  Language,
}

export enum LanguageType {
  BasicUnderstanding,
  Specialist,
  Expert,
}

export interface Knowledge {
  type: KnowledgeType;
  langType: LanguageType;
  isNativeLanguage: boolean;
  custom: string;
}
