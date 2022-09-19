import { FIRSTSeason, FIRSTProgram } from "./common.types";
import CargoConnect from "./games/CargoConnect";
import CityShaper from "./games/CityShaper";
import RePlay from "./games/RePlay";
import SuperPowered from "./games/SuperPowered";

export type ScoreAnswer = { id: string; answer: string };

type ScoreType = "numeric" | "categorical";

interface IScore {
  id: string;
  label: string;
  labelShort: string;
  type: ScoreType;
  defaultValue: number | string;
}

export type NumericScore = IScore & {
  type: "numeric";
  min: number;
  max: number;
  defaultValue: number;
};

export type CategoricalScore = IScore & {
  type: "categorical";
  options: string[];
  defaultValue: string;
};

export type Score = NumericScore | CategoricalScore;

export type NumericScoreResult = NumericScore & {
  answer: string;
};

export type CategoricalScoreResult = CategoricalScore & {
  answer: string;
};

export type ScoreResult = NumericScoreResult | CategoricalScoreResult;

export type ScoreError = {
  id?: Score["id"];
  message: string;
};

export const GIsNumericScore = (m: Score): m is NumericScore =>
  m.type === "numeric";
export const GIsCategoricalScore = (m: Score): m is CategoricalScore =>
  m.type === "categorical";

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
  season: FIRSTSeason;
  program: FIRSTProgram.FLL_CHALLENGE;
  scores: Score[];
  missions: Mission[];
  answer: (res: ScoreAnswer[], q: string) => ScoreAnswer["answer"] | undefined;
  validate: (R: ScoreAnswer[]) => ScoreError[];
  score: (R: ScoreAnswer[]) => number;
};

export const Games = [SuperPowered, CargoConnect, RePlay, CityShaper] as const;

export type GameType = typeof Games[number];
