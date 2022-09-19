import { FIRSTSeason, FIRSTProgram } from "./constants";
import CargoConnect from "./games/CargoConnect";
import CityShaper from "./games/CityShaper";
import RePlay from "./games/RePlay";
import SuperPowered from "./games/SuperPowered";
import { Score, NumericScore, CategoricalScore } from "./types";

export const GIsNumericScore = (m: Score): m is NumericScore =>
  m.type === "numeric";
export const GIsCategoricalScore = (m: Score): m is CategoricalScore =>
  m.type === "categorical";

export const Games = [SuperPowered, CargoConnect, RePlay, CityShaper] as const;

export type GameType = typeof Games[number];
