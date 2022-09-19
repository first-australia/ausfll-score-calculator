import { ScoreAnswer, Game, Mission, Score, ScoreError } from "../game-types";
import { FIRSTProgram, FIRSTSeason } from "../first-constants";

const questions: Score[] = [
  {
    id: "advg",
    labelShort: "TODO",
    label: "Your Robot and Equipment fit in the Small Inspection Area",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m01a",
    labelShort: "TODO",
    label:
      "The innovation project is large enough (2+ white LEGO pieces and 4+ LEGO studs long)",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m01b",
    labelShort: "TODO",
    label: "Part of the innovation Project is touching",
    options: ["none", "rePLAY_logo", "bench_gray_area"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m02a",
    labelShort: "TODO",
    label: "The bottom of the pointer is on",
    options: ["none", "magenta", "yellow", "blue"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m03a",
    labelShort: "TODO",
    label: "Number of slide figures off the slide",
    options: ["0", "1", "2"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m03b",
    labelShort: "TODO",
    label: "A slide figure is completely in home",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m03c",
    labelShort: "TODO",
    label:
      "A slide figure is held completely off the mat by the heavy tire and touching nothing else",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m04a",
    labelShort: "TODO",
    label: "The bench is down flat",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m04b",
    labelShort: "TODO",
    label: "Number of hopscotch spaces with cubes touching the mat inside them",
    options: ["0", "1", "2", "3", "4"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m04c",
    labelShort: "TODO",
    label: "The backrest is completely out of both of its holes",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m05a",
    labelShort: "TODO",
    label: "A cube is in the crate",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m05b",
    labelShort: "TODO",
    label: "On which white stopper does the crate rest",
    options: ["none", "middle", "top"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m06a",
    labelShort: "TODO",
    label:
      "The robot passes completely through the pull-up bar's upright frame at any time",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m06b",
    labelShort: "TODO",
    label:
      "The pull-up bar holds 100% of the robot up off the mat at the end of the match",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m07a",
    labelShort: "TODO",
    label:
      "The robot's controller is dancing over the dance floor at the end of the match",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m08a",
    labelShort: "TODO",
    label:
      "Both share models have sent only one cube anywhere onto the opposing field and those cubes color-match each other",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m08b",
    labelShort: "TODO",
    label: "Number of cubes in the frame or target",
    min: 0,
    max: 17,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m08c",
    labelShort: "TODO",
    label: "At least one yellow cube is completely in the target",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m08d",
    labelShort: "TODO",
    label: "Any equipment is in the frame (even partly)",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m09a",
    labelShort: "TODO",
    label: "Tires white side up and resting on the mat",
    options: ["none", "blue", "black", "both"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m09b",
    labelShort: "TODO",
    label: "Tires completely in the large target circle",
    options: ["none", "blue", "black", "both"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m09c",
    labelShort: "TODO",
    label:
      "The heavy (black tread) tire crossed the flip line (even partly) at any time",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m10a",
    labelShort: "TODO",
    label: "The cell phone is white side up and resting only on the mat",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m11a",
    labelShort: "TODO",
    label: "The robot spun the rollers so the pointer points to",
    options: [
      "none",
      "gray",
      "red",
      "orange",
      "yellow",
      "light_green",
      "dark_green",
    ],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m12a",
    labelShort: "TODO",
    label: "The free wheel is completely outside the large circle",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m12b",
    labelShort: "TODO",
    label: "The free wheel is completely in the small circle",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m13a",
    labelShort: "TODO",
    label: "The stopper is under the lever and the lever setting is",
    options: ["none", "blue", "magenta", "yellow"],
    defaultValue: "none",
    type: "categorical",
  },
  {
    id: "m14a",
    labelShort: "TODO",
    label:
      "Number of health units touching either the RePLAY logo or the gray area around the bench",
    min: 0,
    max: 8,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m14b",
    labelShort: "TODO",
    label:
      "Number of health units looped over a pull-up bar post and touching no equipment (max of 4)",
    options: ["0", "1", "2", "3", "4"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m15a",
    labelShort: "TODO",
    label: "Number of precision tokens left on the field",
    options: ["0", "1", "2", "3", "4", "5", "6"],
    defaultValue: "6",
    type: "categorical",
  },
];
const missions: Mission[] = [
  { prefix: "advg", title: "Equipment Inspection Bonus" },
  { prefix: "m01", title: "M01 - Innovation Project" },
  { prefix: "m02", title: "M02 - Step Counter" },
  { prefix: "m03", title: "M03 - Slide" },
  { prefix: "m04", title: "M04 - Bench" },
  { prefix: "m05", title: "M05 - Basketball" },
  { prefix: "m06", title: "M06 - Pull-up Bar" },
  { prefix: "m07", title: "M07 - Robot Dance" },
  { prefix: "m08", title: "M08 - Boccia" },
  { prefix: "m09", title: "M09 - Tire Flip" },
  { prefix: "m10", title: "M10 - Cell Phone" },
  { prefix: "m11", title: "M11 - Treadmill" },
  { prefix: "m12", title: "M12 - Row Machine" },
  { prefix: "m13", title: "M13 - Weight Machine" },
  { prefix: "m14", title: "M14 - Health Units" },
  { prefix: "m15", title: "M15 - Precision" },
];

const answer = (res: ScoreAnswer[], q: Score["id"]) => {
  try {
    return res.find((r) => r.id === q)?.answer;
  } catch (e: any) {
    return "";
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

  // Mission 1: Flag points only score if bridge points do
  if (answer(R, "m01a") !== "yes" && answer(R, "m01b") === "yes")
    errors.push({
      id: "m01a,m01b",
      message:
        "Mission 1 - innovation project must be built and valid to score",
    });

  // Mission 3: conditionally independent slide units
  if (answer(R, "m03a") === "0" && answer(R, "m03b") === "yes")
    errors.push({
      id: "m03a,m03b",
      message: "Mission 3 - Slide figures can't be on the slide and in base",
    });
  if (answer(R, "m03a") === "0" && answer(R, "m03c") === "yes")
    errors.push({
      id: "m03a,m03c",
      message:
        "Mission 3 - Slide figures can't be on the slide and on the wheel",
    });
  if (
    answer(R, "m03a") === "1" &&
    answer(R, "m03b") === "yes" &&
    answer(R, "m03c") === "yes"
  )
    errors.push({
      id: "m03a,m03b,m03c",
      message: "Mission 3 - Slide figures can't be everywhere at once",
    });

  // Mission 8: Cubes in the target
  if (Number(answer(R, "m08b")) < 0)
    errors.push({
      id: "m08b",
      message: "Mission 8 - Negative number of cubes in the target",
    });
  if (Number(answer(R, "m08b")) > 17)
    errors.push({
      id: "m08b",
      message: "Mission 8 - Too many cubes in target",
    });
  if (answer(R, "m08c") === "yes" && Number(answer(R, "m08b")) === 0)
    errors.push({
      id: "m08b,m08c",
      message:
        "Mission 8 - A yellow cube can't be in the target if there are no cubes in the target",
    });

  //   Mission 12: Tire can't be in both places.
  if (answer(R, "m12a") === "no" && answer(R, "m12b") === "yes")
    errors.push({
      id: "m12a,m12b",
      message: "Mission 12 - the tire can't be in two places at once",
    });

  // Mission 14: Health units
  if (Number(answer(R, "m14b")) < 0)
    errors.push({
      id: "m14b",
      message: "Mission 14 - Negative number of health units",
    });
  if (Number(answer(R, "m14b")) > 8)
    errors.push({
      id: "m14b",
      message: "Mission 14 - Too many health units",
    });

  console.log(errors);
  return errors;
};

// TODO fully check that this is correct
const score = (R: ScoreAnswer[]) => {
  console.log(R);
  let _score = answer(R, "advg") === "yes" ? 25 : 0;

  // Mission 1
  if (answer(R, "m01b") === "rePLAY_logo") _score += 20;
  if (answer(R, "m01b") === "bench_gray_area") _score += 20;

  // Mission 2
  _score += answer(R, "m02a") === "magenta" ? 10 : 0;
  _score += answer(R, "m02a") === "yellow" ? 15 : 0;
  _score += answer(R, "m02a") === "blue" ? 20 : 0;

  // Mission 3
  _score += answer(R, "m03a") === "1" ? 5 : 0;
  _score += answer(R, "m03a") === "2" ? 20 : 0;
  _score += answer(R, "m03b") === "yes" ? 10 : 0;
  _score += answer(R, "m03c") === "yes" ? 20 : 0;

  // Mission 4
  _score += answer(R, "m04a") === "yes" ? 10 : 0;
  _score += Number(answer(R, "m04b")) * 10;
  _score += answer(R, "m04c") === "yes" ? 15 : 0;

  // Mission 5
  _score += answer(R, "m05a") === "yes" ? 15 : 0;
  _score += answer(R, "m05b") === "middle" ? 15 : 0;
  _score += answer(R, "m05b") === "top" ? 25 : 0;

  // Mission 6
  _score += answer(R, "m06a") === "yes" ? 15 : 0;
  _score += answer(R, "m06b") === "yes" ? 30 : 0;

  // Mission 7
  _score += answer(R, "m07a") === "yes" ? 20 : 0;

  // Mission 8
  if (answer(R, "m08d") !== "yes") {
    _score += answer(R, "m08a") === "yes" ? 25 : 0;
    _score += Math.max(Math.min(Number(answer(R, "m08b")), 17), 0) * 5;
    _score += answer(R, "m08c") === "yes" ? 10 : 0;
  }

  // Mission 9
  if (answer(R, "m09c") === "yes") {
    _score += answer(R, "m09a") === "blue" ? 10 : 0;
    _score += answer(R, "m09a") === "black" ? 0 : 0;
    _score += answer(R, "m09a") === "both" ? 10 : 0;
    if (["blue", "both"].includes(`${answer(R, "m09a")}` ?? "")) {
      _score += answer(R, "m09b") === "blue" ? 5 : 0;
      _score += answer(R, "m09b") === "both" ? 5 : 0;
    }
  } else {
    _score += answer(R, "m09a") === "blue" ? 10 : 0;
    _score += answer(R, "m09a") === "black" ? 15 : 0;
    _score += answer(R, "m09a") === "both" ? 25 : 0;
    if (["blue", "both"].includes(`${answer(R, "m09a")}`)) {
      _score += answer(R, "m09b") === "blue" ? 5 : 0;
      _score += answer(R, "m09b") === "both" ? 5 : 0;
    }
    if (["black", "both"].includes(`${answer(R, "m09a")}`)) {
      _score += answer(R, "m09b") === "black" ? 5 : 0;
      _score += answer(R, "m09b") === "both" ? 5 : 0;
    }
  }

  // Mission 10
  _score += answer(R, "m10a") === "yes" ? 15 : 0;

  // Mission 11
  switch (answer(R, "m11a")) {
    case "gray":
      _score += 5;
      break;
    case "red":
      _score += 10;
      break;
    case "orange":
      _score += 15;
      break;
    case "yellow":
      _score += 20;
      break;
    case "light_green":
      _score += 25;
      break;
    case "dark_green":
      _score += 30;
      break;
    default:
      _score += 0;
  }

  // Mission 12
  _score += answer(R, "m12a") === "yes" ? 15 : 0;
  _score += answer(R, "m12b") === "yes" ? 15 : 0;

  // Mission 13
  _score += answer(R, "m13a") === "blue" ? 10 : 0;
  _score += answer(R, "m13a") === "magenta" ? 15 : 0;
  _score += answer(R, "m13a") === "yellow" ? 20 : 0;

  // Mission 14
  _score += Math.max(0, Math.min(Number(answer(R, "m14a")), 8)) * 5;
  _score += Number(answer(R, "m14b")) * 10;

  // Mission 15
  switch (Number(answer(R, "m15a"))) {
    case 6:
      _score += 60;
      break;
    case 5:
      _score += 45;
      break;
    case 4:
      _score += 30;
      break;
    case 3:
      _score += 20;
      break;
    case 2:
      _score += 10;
      break;
    case 1:
      _score += 5;
      break;
    default:
      break;
  }

  console.log(_score);

  return _score;
};

const RePlay: Game = {
  name: "RePlay",
  program: FIRSTProgram.FLL_CHALLENGE,
  season: FIRSTSeason.PlayMakers,
  scores: questions,
  missions,
  answer,
  score,
  validate,
};

export default RePlay;
