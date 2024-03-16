export type SingleSuraResponse = {
  result: Result[];
};

export type Result = {
  id: string;
  sura: string;
  aya: string;
  arabic_text: string;
  translation: string;
  footnotes: string;
};
