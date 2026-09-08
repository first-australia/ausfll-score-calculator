import { seasons } from 'first-constants';
import { Game } from '../game-types';
import cityShaper from './2019-CityShaper';
import rePlay from './2020-RePlay';
import cargoConnect from './2021-CargoConnect';
import superPowered from './2022-SuperPowered';
import masterPiece from './2023-Masterpiece';
import submerged from './2024-Submerged';
import unearthed from './2025-Unearthed';
import bioglowFounders from './2026-BIOGLOW-founders';
import bioglowFuture from './2026-BIOGLOW-future';

// From 2026-2027 a season can carry more than one game: FIRST split FLL
// Challenge into a Founders Edition and a Future Edition, each with its own
// field and missions. Seasons with a single game keep a bare Game value so
// existing consumers are unaffected; use `gamesForSeason` to read either shape.
const games: {
  [key in (typeof seasons)[number]]: Game | Game[];
} = {
  [20192020]: cityShaper,
  [20202021]: rePlay,
  [20212022]: cargoConnect,
  [20222023]: superPowered,
  [20232024]: masterPiece,
  [20242025]: submerged,
  [20252026]: unearthed,
  [20262027]: [bioglowFounders, bioglowFuture],
};

/** Normalises a season entry to an array, since 2026-2027 onward may hold multiple editions. */
export const gamesForSeason = (season: (typeof seasons)[number]): Game[] => {
  const entry = games[season];
  return Array.isArray(entry) ? entry : [entry];
};

export {
  bioglowFounders,
  bioglowFuture,
  cargoConnect,
  cityShaper,
  masterPiece,
  rePlay,
  submerged,
  superPowered,
  unearthed,
};
export default games;
