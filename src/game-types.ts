import { Season } from 'first-constants';

export type ScoreAnswer = { id: string; answer: string };

type ScoreType = 'numeric' | 'categorical' | 'boolean';

interface IScore<ID extends string = string> {
  id: ID;
  label: string;
  labelShort: string;
  type: ScoreType;
  defaultValue: number | string | boolean;
}

export type NumericScore<ID extends string = string> = IScore<ID> & {
  type: 'numeric';
  min: number;
  max: number;
  defaultValue: number;
};

export type CategoricalScore<ID extends string = string> = IScore<ID> & {
  type: 'categorical';
  options: string[];
  defaultValue: string;
};

export type BooleanScore<ID extends string = string> = IScore<ID> & {
  type: 'boolean';
  defaultValue: boolean;
};

export type Score<ID extends string = string> =
  | NumericScore<ID>
  | CategoricalScore<ID>
  | BooleanScore<ID>;

export type NumericScoreResult = NumericScore & {
  answer: string;
};

export type CategoricalScoreResult = CategoricalScore & {
  answer: string;
};

export type BooleanScoreResult = BooleanScore & {
  answer: boolean;
};

export type ScoreResult =
  | NumericScoreResult
  | CategoricalScoreResult
  | BooleanScoreResult;

export type ScoreError = {
  id?: Score['id'];
  message: string;
};

export type ScoreSheet = {
  /** ID of "Compete" instance */
  compete: string;
  /** Which round was this match? 1, 2, or 3. */
  round: number;
  /** List of scored results */
  answers: ScoreResult[];
};

export type Mission = {
  /** ID Prefix of all scores in this group */
  prefix: string;
  /** Title of the mission */
  title: string;
  /** Optional URL of mission thumbnail */
  image?: string;
};

export type Game = {
  name: string;
  season: Season;
  program: 'FLL_CHALLENGE';
  scores: Score[];
  missions: Mission[];
  answer: (res: ScoreAnswer[], q: string) => ScoreAnswer['answer'] | undefined;
  validate: (R: ScoreAnswer[]) => ScoreError[];
  score: (R: ScoreAnswer[]) => number;
};
