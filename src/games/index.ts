import { seasons } from 'first-constants';
import { Game } from '../game-types';
import cityShaper from './2019-CityShaper';
import rePlay from './2020-RePlay';
import superPowered from './2022-SuperPowered';
import cargoConnect from './2021-CargoConnect';
import masterPiece from './2023-Masterpiece';

const games: {
  [key in (typeof seasons)[number]]: Game;
} = {
  [20192020]: cityShaper,
  [20202021]: rePlay,
  [20212022]: cargoConnect,
  [20222023]: superPowered,
  [20232024]: masterPiece,
};

export { cityShaper, rePlay, superPowered, cargoConnect };
export default games;
