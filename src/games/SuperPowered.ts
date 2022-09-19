import { ScoreAnswer, Game, Mission, Score, ScoreError } from "../game.types";
import { FIRSTProgram, FIRSTSeason } from "../common.types";
import firebaseLinks from "../firebase.links";

const NUM_ENERGY = 12;

const questions: Score[] = [
  {
    id: "m00a",
    label:
      "If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 inches",
    labelShort: "Inspection?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m01a",
    label:
      "Is your Innovation Project model at least partly in the hydrogen plant target area?",
    labelShort: "In the area?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m02a",
    label: "Number of fuel units in the fuel truck?",
    labelShort: "Fuel in truck?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m02b",
    label:
      "Is at least one fuel unit in the truck and the truck is at least partly over the fueling station target?",
    labelShort: "Loaded and partly in target?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m03a",
    label: "How many energy units are completely in the energy storage bin?",
    labelShort: "Energy in bin?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m03b",
    label:
      "Is the energy unit completely removed from the energy storage tray?",
    labelShort: "Removed from tray?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m04a",
    label:
      "How many energy units have been completely removed from their starting circle?",
    labelShort: "# Removed?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m05a",
    label: "Is your field's orange connector completely raised?",
    labelShort: "Raised?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m05b",
    label: "Are both teams' orange connectors completely raised?",
    labelShort: "Both?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m06a",
    label: "Is the hybrid car no longer touching the ramp?",
    labelShort: "Car not touching?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m06b",
    label: "Is the hybrid unit in the hybrid car?",
    labelShort: "Hybrid unit?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m07a",
    label: "How many energy units are no longer touching the wind turbine?",
    labelShort: "# removed?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m08a",
    label: "Is the television completely raised?",
    labelShort: "Raised?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m08b",
    label: "Is an energy unit completely in the green television slot?",
    labelShort: "Energy unit?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m09a",
    label: "Is the dinosaur toy completely in the left home area?",
    labelShort: "Completely left?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m09b",
    label: "Is the dinosaur toy lid completely closed containing...?",
    labelShort: "Closed with...?",
    options: ["No", "Energy", "Rechargeable battery"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m10a",
    label: "How many energy units are no longer touching the power plant?",
    labelShort: "# removed?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m11a",
    label: "Is the energy unit no longer touching the hydroelectric dam?",
    labelShort: "Energy removed?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m12a",
    label:
      "How many looped water units are completely in the water reservoir, touching the mat?",
    labelShort: "Water touching?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m12b",
    label: "How many hooks are holding a looped water unit?",
    labelShort: "Hooks?",
    options: ["0", "1", "2"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m13a",
    label:
      "How many energy units are completely in the hydrogen plant target area?",
    labelShort: "# Energy?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m14a",
    label: "How many energy units are partly in the slot or in the red hopper?",
    labelShort: "# Energy?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m15a",
    label:
      "How many energy units are completely in the rechargeable battery target area?",
    labelShort: "# Energy?",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m16a",
    labelShort: "Precision?",
    label: "How many Precision Tokens are left on the field?",
    options: ["0", "1", "2", "3", "4", "5", "6"],
    defaultValue: "6",
    type: "categorical",
  },
  {
    id: "gp",
    labelShort: "GP",
    label: "Gracious Professionalism® displayed at the robot game table?",
    options: ["2 - Developing", "3 - Accomplished", "4 - Exceeds"],
    defaultValue: "3 - Accomplished",
    type: "categorical",
  },
];

const missions: Mission[] = [
  {
    prefix: "m00",
    title: "M00 - Equipment Inspection Bonus",
    image: firebaseLinks.sp_m00,
  },
  {
    prefix: "m01",
    title: "M01 - Innovation Project Model",
    image: firebaseLinks.sp_m01,
  },
  {
    prefix: "m02",
    title: "M02 - Oil Platform",
    image: firebaseLinks.sp_m02,
  },
  {
    prefix: "m03",
    title: "M03 - Energy Storage",
    image: firebaseLinks.sp_m03,
  },
  {
    prefix: "m04",
    title: "M04 - Solar Farm",
    image: firebaseLinks.sp_m04,
  },
  {
    prefix: "m05",
    title: "M05 - Smart Grid",
    image: firebaseLinks.sp_m05,
  },
  {
    prefix: "m06",
    title: "M06 - Hybrid Car",
    image: firebaseLinks.sp_m06,
  },
  {
    prefix: "m07",
    title: "M07 - Wind Turbine",
    image: firebaseLinks.sp_m07,
  },
  {
    prefix: "m08",
    title: "M08 - Watch Television",
    image: firebaseLinks.sp_m08,
  },
  {
    prefix: "m09",
    title: "M09 - Dinosaur Toy",
    image: firebaseLinks.sp_m09,
  },
  {
    prefix: "m10",
    title: "M10 - Power Plant",
    image: firebaseLinks.sp_m10,
  },
  {
    prefix: "m11",
    title: "M11 - Hydroelectric Dam",
    image: firebaseLinks.sp_m11,
  },
  {
    prefix: "m12",
    title: "M12 - Water Reservoir",
    image: firebaseLinks.sp_m12,
  },
  {
    prefix: "m13",
    title: "M13 - Power-To-X",
    image: firebaseLinks.sp_m13,
  },
  {
    prefix: "m14",
    title: "M14 - Toy Factory",
    image: firebaseLinks.sp_m14,
  },
  {
    prefix: "m15",
    title: "M15 - Rechargeable battery",
    image: firebaseLinks.sp_m15,
  },
  {
    prefix: "m16",
    title: "M16 - Precision Tokens",
    image: firebaseLinks.sp_m16,
  },
  {
    prefix: "gp",
    title: "Gracious Professionalism®",
  },
];

const answer = (res: ScoreAnswer[], q: Score["id"]) => {
  try {
    return res.find((r) => r.id === q)?.answer;
  } catch (e: any) {
    return "";
  }
};
const nAnswer = (res: ScoreAnswer[], q: Score["id"]): number => {
  try {
    const a = res.find((r) => r.id === q)?.answer;
    if (a) return Number(a);
    else return 0;
  } catch (e: any) {
    return 0;
  }
};

const validate = (R: ScoreAnswer[]) => {
  let errors: ScoreError[] = [];

  let emptyQs: Score["id"][] = [];
  // If any answer is empty, invalid.
  const empties = R.map((r) => r.answer === "").reduce(
    (t, c) => (t = t + (c ? 1 : 0)),
    0
  );
  R.forEach((r) => {
    if (r.answer === "") emptyQs.push(r.id);
  });
  if (empties > 0)
    errors.push({
      id: emptyQs.join(","),
      message: `${empties} unanswered questions!`,
    });

  // Fuel truck
  if (answer(R, "m02a") === "0" && answer(R, "m02b") === "Yes")
    errors.push({
      id: "m02a,m02b",
      message:
        "The fuel truck cannot contain fuel if there is no fuel in the fuel truck.",
    });

  // Energy units
  const m03a = nAnswer(R, "m03a");
  const m03b = answer(R, "m03b") === "No" ? 1 : 0; // One energy unit lives in M03 if this is "no"
  const m04a = 3 - nAnswer(R, "m04a"); // If they haven't been removed, they are not available
  const m07a = 3 - nAnswer(R, "m07a"); // If they haven't been removed, they are not available
  const m08b = answer(R, "m08b") === "Yes" ? 1 : 0;
  const m09b =
    answer(R, "m09b") === "Energy" && answer(R, "m09a") === "Yes" ? 1 : 0;
  const m10a = 3 - nAnswer(R, "m10a");
  const m11a = answer(R, "m11a") === "No" ? 1 : 0;
  const m13a = nAnswer(R, "m13a");
  const m14a = nAnswer(R, "m14a");
  const m15a = nAnswer(R, "m15a");

  // Total number of mutually exclusive containers:
  // Note: m15a is exclusive with m15b and m15c
  if (
    m03a + m03b + m04a + m07a + m08b + m09b + m10a + m11a + m13a + m14a + m15a >
    NUM_ENERGY
  )
    errors.push({
      id: [
        m03a ? "m03a" : "",
        m03b ? "m03b" : "",
        m04a ? "m04a" : "",
        m07a ? "m07a" : "",
        m08b ? "m08b" : "",
        m09b ? "m09b" : "",
        m10a ? "m10a" : "",
        m11a ? "m11a" : "",
        m13a ? "m13a" : "",
        m14a ? "m14a" : "",
        m15a ? "m15a" : "",
      ].join(","),
      message: `Too many energy units have been used - there are only ${NUM_ENERGY}!`,
    });

  // Water units
  const m12a = nAnswer(R, "m12a");
  const m12b = nAnswer(R, "m12b");
  if (m12a + m12b > 3)
    errors.push({
      id: "m12a,m12b",
      message:
        "Looped water units cannot be touching the ground and hanging on the hooks.",
    });

  return errors;
};

// Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
// TODO fully check that this is correct
const score = (R: ScoreAnswer[]): number => {
  let _score = 0;

  // M00
  if (answer(R, "m00a") === "Yes") _score += 20;

  // M01
  if (answer(R, "m01a") === "Yes") _score += 10;

  // M02
  _score += nAnswer(R, "m02a") * 5;
  if (answer(R, "m02b") === "Yes") _score += 10;

  // M03
  _score += nAnswer(R, "m03a") * 10;
  if (answer(R, "m03b") === "Yes") _score += 5;

  // M04
  const m04a = nAnswer(R, "m04a");
  _score += m04a * 5;
  if (m04a === 3) _score += 5;

  // M05
  if (answer(R, "m05a") === "Yes") _score += 20;
  if (answer(R, "m05b") === "Yes") _score += 10;

  // M06
  if (answer(R, "m06a") === "Yes") _score += 10;
  if (answer(R, "m06b") === "Yes") _score += 10;

  // M07
  _score += nAnswer(R, "m07a") * 10;

  // M08
  if (answer(R, "m08a") === "Yes") _score += 10;
  if (answer(R, "m08b") === "Yes") _score += 10;

  // M09
  if (answer(R, "m09a") === "Yes") _score += 10;
  const m09b = answer(R, "m09b");
  if (m09b === "Energy") _score += 10;
  else if (m09b === "Rechargeable battery") _score += 20;

  // M10
  const m10a = nAnswer(R, "m10a");
  _score += m10a * 5;
  if (m10a === 3) _score += 10;

  // M11
  if (answer(R, "m11a") === "Yes") _score += 20;

  // M12
  _score += nAnswer(R, "m12a") * 5;
  _score += nAnswer(R, "m12b") * 10;

  // M13
  _score += nAnswer(R, "m13a") * 5;

  // M14
  _score += nAnswer(R, "m14a") * 5;
  if (answer(R, "m14b") === "Yes") _score += 10;

  // M15
  _score += nAnswer(R, "m15a") * 5;

  // M16
  switch (answer(R, "m16a")) {
    case "6":
      _score += 50;
      break;
    case "5":
      _score += 50;
      break;
    case "4":
      _score += 35;
      break;
    case "3":
      _score += 25;
      break;
    case "2":
      _score += 15;
      break;
    case "1":
      _score += 10;
      break;
    default:
      _score += 0;
  }

  return _score;
};

const SuperPowered: Game = {
  name: "SuperPowered",
  program: FIRSTProgram.FLL_CHALLENGE,
  season: FIRSTSeason.Energize,
  scores: questions,
  missions,
  answer,
  score,
  validate,
};

export default SuperPowered;
