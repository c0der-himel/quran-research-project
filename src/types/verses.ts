export type VersesResponse = {
  verses: TVerse[];
};

export type TVerse = {
  verse: number;
  line: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  maqra: number;
  sajda: boolean;
};
