export type ListOfAllSurasResponse = {
  verses: Verses;
  chapters: Chapter[];
  sajdas: Sajdas;
  rukus: Rukus;
  pages: Pages;
  manzils: Manzils;
  maqras: Maqras;
  juzs: Juzs;
};

export type Chapter = {
  chapter: number;
  name: string;
  englishname: string;
  arabicname: string;
  revelation: Revelation;
  verses: Verse[];
};

export enum Revelation {
  Madina = 'Madina',
  Mecca = 'Mecca',
}

export type Verse = {
  verse: number;
  line: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  maqra: number;
  sajda: boolean | SajdaClass;
};

export type SajdaClass = {
  no: number;
  recommended: boolean;
  obligatory: boolean;
};

export type Juzs = {
  count: number;
  references: JuzsReference[];
};

export type JuzsReference = {
  juz: number;
  start: End;
  end: End;
};

export type End = {
  chapter: number;
  verse: number;
};

export type Manzils = {
  count: number;
  references: ManzilsReference[];
};

export type ManzilsReference = {
  manzil: number;
  start: End;
  end: End;
};

export type Maqras = {
  count: number;
  references: MaqrasReference[];
};

export type MaqrasReference = {
  maqra: number;
  start: End;
  end: End;
};

export type Pages = {
  count: number;
  references: PagesReference[];
};

export type PagesReference = {
  page: number;
  start: End;
  end: End;
};

export type Rukus = {
  count: number;
  references: RukusReference[];
};

export type RukusReference = {
  ruku: number;
  start: End;
  end: End;
};

export type Sajdas = {
  count: number;
  references: SajdasReference[];
};

export type SajdasReference = {
  sajda: number;
  chapter: number;
  verse: number;
  recommended: boolean;
  obligatory: boolean;
};

export type Verses = {
  count: number;
};
