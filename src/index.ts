import CargoConnect from "./games/CargoConnect";
import CityShaper from "./games/CityShaper";
import RePlay from "./games/RePlay";
import SuperPowered from "./games/SuperPowered";

import * as Extras from "./extras";
import * as FIRSTConstants from "./first-constants";

export default {
  CargoConnect,
  CityShaper,
  RePlay,
  SuperPowered,
  ...Extras,
  ...FIRSTConstants,
};
