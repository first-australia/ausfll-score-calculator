import { seasons } from 'first-constants.js';
import { Game } from '../game-types.js';
import cityShaper from './2019-CityShaper.js';
import rePlay from './2020-RePlay.js';
import cargoConnect from './2021-CargoConnect.js';
import superPowered from './2022-SuperPowered.js';
import masterPiece from './2023-Masterpiece.js';
import submerged from './2024-Submerged.js';
import unearthed from './2025-Unearthed.js';

const games: {
  [key in (typeof seasons)[number]]: Game;
} = {
  [20192020]: cityShaper,
  [20202021]: rePlay,
  [20212022]: cargoConnect,
  [20222023]: superPowered,
  [20232024]: masterPiece,
  [20242025]: submerged,
  [20252026]: unearthed,
};

export {
  cargoConnect,
  cityShaper,
  masterPiece,
  rePlay,
  submerged,
  superPowered,
};
export default games;
