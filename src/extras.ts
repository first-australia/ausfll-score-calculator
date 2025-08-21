import { BooleanScore, CategoricalScore, NumericScore, Score } from './game-types';
import cityShaper from './games/2019-CityShaper';
import rePlay from './games/2020-RePlay';
import cargoConnect from './games/2021-CargoConnect';
import superPowered from './games/2022-SuperPowered';
import masterPiece from './games/2023-Masterpiece';
import submerged from './games/2024-Submerged';

export const isNumericScore = (m: Score): m is NumericScore =>
  m.type === 'numeric';
export const isCategoricalScore = (m: Score): m is CategoricalScore =>
  m.type === 'categorical';
export const isBooleanScore = (m: Score): m is BooleanScore =>
  m.type === 'boolean';

export const games = [
  submerged,
  masterPiece,
  superPowered,
  cargoConnect,
  rePlay,
  cityShaper,
] as const;

export type GameType = (typeof games)[number];
