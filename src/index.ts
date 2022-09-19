import CargoConnect from "./games/CargoConnect";
import CityShaper from "./games/CityShaper";
import RePlay from "./games/RePlay";
import SuperPowered from "./games/SuperPowered";

import * as Extras from "./extras";
import * as Constants from "./constants";

module.exports = {
  CargoConnect,
  CityShaper,
  RePlay,
  SuperPowered,
  ...Extras,
  ...Constants,
};
