import { ScoreAnswer, Game, Mission, Score, ScoreError } from "../game";
import firebaseLinks from "../firebase.links";
import { FIRSTProgram, FIRSTSeason } from "../constants";

const NUM_CONTAINERS = 8;
const NUM_CIRCLES = 6;

const questions: Score[] = [
  {
    id: "m00a",
    label: "Does all your equipment fit in the small inspection area?",
    labelShort: "Inspection?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m01a",
    label:
      "Is the innovation project large enough (2+ white LEGO pieces and 4+ LEGO studs long)?",
    labelShort: "Valid?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m01b",
    label:
      "Is any part of the innovation Project touching the CARGO CONNECT℠ circle?",
    labelShort: "Touching circle?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m02a",
    label: "Is the hinged container completely closed?",
    labelShort: "Closed?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m02b",
    label: "How many container pieces are inside the hinged container?",
    labelShort: "Pieces?",
    options: ["0", "1-5", "6"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m03a",
    label:
      "Has the cargo plane been prepared for unloading so that the cargo door rests completely down, touching its black frame?",
    labelShort: "Door down?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m03b",
    label:
      "Has the cargo plane been unloaded so that the container is completely separate from the plane?",
    labelShort: "Separate?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m04a",
    label:
      "Has the truck reached its destination, completely past its blue end line, on the mat?",
    labelShort: "Truck?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m04b",
    label:
      "Has the airplane reached its destination, completely past its blue end line?",
    labelShort: "Plane?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m05a",
    label:
      "Has the engine been switched from diesel to electric so that the yellow bar rests all the way down/south?",
    labelShort: "Switched?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m06a",
    label: "Has the robot parked over the blue accident-avoidance line?",
    labelShort: "Blue line?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m06b",
    label: "The yellow panel is knocked down?",
    labelShort: "Yellow panel?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m06c",
    label: "The black panel is knocked down?",
    labelShort: "Black panel?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m07a",
    labelShort: "Raised?",
    label: "Is the container no longer touching the cargo ship's east deck?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m07b",
    labelShort: "East?",
    label: "Is the container completely east of the cargo ship's east deck?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m08a",
    labelShort: "Your package?",
    label: "Is the food package seperated from your helicopter?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m08b",
    labelShort: "Other package?",
    label: "Is the food package seperated from the other field's helicopter?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m08c",
    labelShort: "Package delivered?",
    label:
      "Is the food package from the other field completely in your CARGO CONNECT℠ circle?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m09a",
    labelShort: "Track repaired?",
    label: "Is the train track repaired so that it rests completely down/west?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m09b",
    labelShort: "Train arrived?",
    label:
      "Has the train reached its destination, latched at the end of the tracks?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m10a",
    labelShort: "Only orange?",
    label:
      "Is the light orange container the only container remaining completely in the blue sorting area box?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m11a",
    labelShort: "Package delivered?",
    label: "Has the package been delivered to its destination?",
    options: ["No", "Partly", "Completely"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m12a",
    labelShort: "Turbine?",
    label: "Is the turbine blade touching only the blue holder and...?",
    options: ["No", "The mat", "Nothing else"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m12b",
    labelShort: "Chicken?",
    label: "Is the chicken statue upright with its base in its circle?",
    options: ["No", "Partly", "Completely"],
    defaultValue: "Completely",
    type: "categorical",
  },
  {
    id: "m13a",
    labelShort: "Trucks latched?",
    label: "Are both trucks latched together completely outside of home?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m13b",
    labelShort: "Latched to bridge?",
    label: "Is a truck latched to the bridge?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m14a",
    labelShort: "Bridge?",
    label:
      "How many bridge decks have been lowered and rest on their center support?",
    options: ["0", "1", "2"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m15a",
    labelShort: "Trucks?",
    label:
      "Containers on and touching only the Platooning Trucks, and completely outside Home?",
    min: 0,
    max: NUM_CONTAINERS,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m15b",
    labelShort: "Train?",
    label: "Containers on and touching only the Train?",
    min: 0,
    max: NUM_CONTAINERS,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m15c",
    labelShort: "Cargo ship?",
    label: "Containers on and touching only the Cargo Ship's West Deck?",
    min: 0,
    max: NUM_CONTAINERS,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m16a",
    labelShort: "Partly in?",
    label: "Containers partly in any circle?",
    min: 0,
    max: NUM_CONTAINERS,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m16b",
    labelShort: "Completely in?",
    label: "Containers completely in any circle?",
    min: 0,
    max: NUM_CONTAINERS,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m16c",
    labelShort: "Blue?",
    label: "Is the blue (not hinged) container completely in the blue circle?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m16d",
    labelShort: "Green?",
    label: "Is the lime green container completely in the lime green circle?",
    options: ["No", "Yes"],
    defaultValue: "No",
    type: "categorical",
  },
  {
    id: "m16e",
    labelShort: "Circles?",
    label:
      "How many circles contain at least one container completely in them?",
    min: 0,
    max: NUM_CIRCLES,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m17a",
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
    image: firebaseLinks.cc_m00,
  },
  {
    prefix: "m01",
    title: "M01 - Innovation Project Model",
    image: firebaseLinks.cc_m01,
  },
  {
    prefix: "m02",
    title: "M02 - Unused Capacity",
    image: firebaseLinks.cc_m02,
  },
  {
    prefix: "m03",
    title: "M03 - Unload Cargo Plane",
    image: firebaseLinks.cc_m03,
  },
  {
    prefix: "m04",
    title: "M04 - Transportation Journey",
    image: firebaseLinks.cc_m04,
  },
  {
    prefix: "m05",
    title: "M05 - Switch Engine",
    image: firebaseLinks.cc_m05,
  },
  {
    prefix: "m06",
    title: "M06 - Accident Avoidance",
    image: firebaseLinks.cc_m06,
  },
  {
    prefix: "m07",
    title: "M07 - Unload Cargo Ship",
    image: firebaseLinks.cc_m07,
  },
  {
    prefix: "m08",
    title: "M08 - Air Drop",
    image: firebaseLinks.cc_m08,
  },
  {
    prefix: "m09",
    title: "M09 - Train Tracks",
    image: firebaseLinks.cc_m09,
  },
  {
    prefix: "m10",
    title: "M10 - Sorting Center",
    image: firebaseLinks.cc_m10,
  },
  {
    prefix: "m11",
    title: "M11 - Home Delivery",
    image: firebaseLinks.cc_m11,
  },
  {
    prefix: "m12",
    title: "M12 - Large Delivery",
    image: firebaseLinks.cc_m12,
  },
  {
    prefix: "m13",
    title: "M13 - Platooning Trucks",
    image: firebaseLinks.cc_m13,
  },
  {
    prefix: "m14",
    title: "M14 - Bridge",
    image: firebaseLinks.cc_m14,
  },
  {
    prefix: "m15",
    title: "M15 - Load Cargo",
    image: firebaseLinks.cc_m15,
  },
  {
    prefix: "m16",
    title: "M16 - Cargo Connect℠",
    image: firebaseLinks.cc_m16,
  },
  {
    prefix: "m17",
    title: "M17 - Precision Tokens",
    image: firebaseLinks.cc_m17,
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

  // Cargo ship container
  if (answer(R, "m07a") === "No" && answer(R, "m07b") === "Yes") {
    errors.push({
      id: "m07a,m07b",
      message:
        "The container cannot be touching the cargo ship's east deck if it is completely east of it.",
    });
  }

  // Helicopter food package
  if (answer(R, "m08c") === "Yes" && answer(R, "m08b") === "No") {
    errors.push({
      id: "m08c,m08b",
      message:
        "The food package cannot react the circle without separating from the helicopter.",
    });
  }

  // Container Count:
  const m10a = answer(R, "m10a") === "Yes" ? 1 : 0; // One container lives in M10 if this is "yes"
  const m15a = nAnswer(R, "m15a");
  const m15b = nAnswer(R, "m15b");
  const m15c = nAnswer(R, "m15c");
  const m16a = nAnswer(R, "m16a");
  const m16b = nAnswer(R, "m16b");
  const m16c = answer(R, "m16c") === "Yes";
  const m16d = answer(R, "m16d") === "Yes";
  const m16e = nAnswer(R, "m16e"); // number of circles

  // Total number of mutually exclusive containers:
  // Note: m15a is exclusive with m15b and m15c
  if (m10a + m15a + m15b + m15c > NUM_CONTAINERS)
    errors.push({
      id: [
        m10a ? "m10a" : "",
        m15a ? "m15a" : "",
        m15b ? "m15b" : "",
        m15c ? "m15c" : "",
      ].join(","),
      message: `Too many containers have been used - there are only ${NUM_CONTAINERS}!`,
    });
  // but: m15a is not exclusive with m16
  // m16a and m16b cannot both be true
  if (m10a + m16a + m16b + m15c > NUM_CONTAINERS)
    errors.push({
      id: [
        m10a ? "m10a" : "",
        m16a ? "m16a" : "",
        m16b ? "m16b" : "",
        m15c ? "m15c" : "",
      ].join(","),
      message: `Too many containers have been used - there are only ${NUM_CONTAINERS}!`,
    });

  // Containers in circles
  if (m16e > 0 && m16b === 0)
    errors.push({
      id: "m16b,m16e",
      message:
        "If any circles have containers completely in them, then there must be containers completely in circles",
    });
  if (m16e === 0 && m16b > 0)
    errors.push({
      id: "m16b,m16e",
      message:
        "If there are containers completely in circles, then there must be circles with at least one container in them",
    });
  if (m16b === 0 && m16c)
    errors.push({
      id: "m16b,m16c",
      message:
        "If the blue container is in completely in the blue circle, then there is a container completely in a circle",
    });
  if (m16b === 0 && m16d)
    errors.push({
      id: "m16b,m16d",
      message:
        "If the green container is in completely in the green circle, then there is a container completely in a circle",
    });
  if (m16b === 1 && m16c && m16d)
    errors.push({
      id: "m16b,m16d,m16c",
      message: "Your count for containers seems incorrect",
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
  if (answer(R, "m01a") === "Yes" && answer(R, "m01b") === "Yes") _score += 20;

  // M02
  if (answer(R, "m02a") === "Yes") {
    if (answer(R, "m02b") === "1-5") _score += 20;
    if (answer(R, "m02b") === "6") _score += 30;
  }

  // M03
  if (answer(R, "m03a") === "Yes") _score += 20;
  if (answer(R, "m03b") === "Yes") _score += 10;

  // M04
  const m4a = answer(R, "m04a") === "Yes";
  const m4b = answer(R, "m04b") === "Yes";
  if (m4a) _score += 10;
  if (m4b) _score += 10;
  if (m4a && m4b) _score += 10;

  // M05
  if (answer(R, "m05a") === "Yes") _score += 20;

  // M06
  if (answer(R, "m06c") === "No" && answer(R, "m06a") === "Yes") {
    _score += answer(R, "m06b") === "Yes" ? 30 : 20;
  }

  // M07
  if (answer(R, "m07a") === "Yes") _score += 20;
  if (answer(R, "m07b") === "Yes") _score += 10;

  // M08
  const m08a = answer(R, "m08a") === "Yes";
  const m08b = answer(R, "m08b") === "Yes";
  const m08c = answer(R, "m08c") === "Yes";
  if (m08a) _score += 20;
  if (m08a && m08b) _score += 10;
  if (m08b && m08c) _score += 10;

  // M09
  if (answer(R, "m09a") === "Yes") _score += 20;
  if (answer(R, "m09b") === "Yes") _score += 20;

  // M10
  if (answer(R, "m10a") === "Yes") _score += 20;

  // M11
  const m11a = answer(R, "m11a");
  if (m11a === "Partly") _score += 20;
  if (m11a === "Completely") _score += 30;

  // M12
  const m12a = answer(R, "m12a");
  const m12b = answer(R, "m12b");
  if (m12a === "The mat") _score += 20;
  if (m12a === "Nothing else") _score += 30;
  if (m12b === "Partly") _score += 5;
  if (m12b === "Completely") _score += 10;

  // M13
  const m13a = answer(R, "m13a") === "Yes";
  const m13b = answer(R, "m13b") === "Yes";
  if (m13a) _score += 10;
  if (m13b) _score += 10;
  if (m13a && m13b) _score += 10;

  // M14
  _score += nAnswer(R, "m14a") * 10;

  // M15
  _score += Math.min(nAnswer(R, "m15a") * 10, 20);
  _score += Math.min(nAnswer(R, "m15b") * 20, 40);
  _score += Math.min(nAnswer(R, "m15c") * 30, 60);

  // M16
  _score += nAnswer(R, "m16a") * 5;
  _score += nAnswer(R, "m16b") * 10;
  if (answer(R, "m16c") === "Yes") _score += 20;
  if (answer(R, "m16d") === "Yes") _score += 20;
  _score += nAnswer(R, "m16e") * 10;

  // M17
  switch (answer(R, "m17a")) {
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

const CargoConnect: Game = {
  name: "Cargo Connect",
  program: FIRSTProgram.FLL_CHALLENGE,
  season: FIRSTSeason.FirstForward,
  scores: questions,
  missions,
  answer,
  score,
  validate,
};

export default CargoConnect;
