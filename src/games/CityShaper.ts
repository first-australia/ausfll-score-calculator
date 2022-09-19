import { ScoreAnswer, Game, Mission, Score, ScoreError } from "../game";
import { FIRSTProgram, FIRSTSeason } from "../constants";

const questions: Score[] = [
  {
    id: "advg",
    labelShort: "TODO",
    label: "Your Robot and Equipment fit in the Small Inspection Area:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m01a",
    labelShort: "TODO",
    label: "The Robot is Supported by the Bridge:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m01b",
    labelShort: "TODO",
    label:
      "Number of Flags that are clearly raised any distance, only by the Robot:",
    options: ["0", "1", "2"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m02a",
    labelShort: "TODO",
    label:
      "The Hooked Blue Unit is clearly lowered any distance from the Guide Hole:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m02b",
    labelShort: "TODO",
    label:
      "The Hooked Blue Unit is Independent and Supported by another Blue Unit:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m02c",
    labelShort: "TODO",
    label: "AND Level 1 is Completely in the Blue Circle:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m03a",
    labelShort: "TODO",
    label: "The Inspection Drone is Supported by the axle on the Bridge:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m04a",
    labelShort: "TODO",
    label: "The Bat is Supported by the branch on the Tree:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m05a",
    labelShort: "TODO",
    label:
      "Number of Units Independent and Supported by the Tree's Large Branches:",
    min: 0,
    max: 17,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m05b",
    labelShort: "TODO",
    label:
      "Number of Units Independent and Supported by the Tree's Small Branches:",
    min: 0,
    max: 17,
    defaultValue: 0,
    type: "numeric",
  },
  {
    id: "m06a",
    labelShort: "TODO",
    label:
      "The Traffic Jam is lifted, its moving part is Independent, and it is Supported only by its hinges:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m07a",
    labelShort: "TODO",
    label: "The Swing is Released:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m08a",
    labelShort: "TODO",
    label:
      "The Elevator's moving parts are Independent and Supported only by its hinges, in the following position:",
    options: ["neither", "blue_car_down", "balanced"],
    defaultValue: "neither",
    type: "categorical",
  },
  {
    id: "m09a",
    labelShort: "TODO",
    label:
      "The Test Building is Independent and Supported only by the blue beams:",
    options: ["no", "yes"],
    defaultValue: "yes",
    type: "categorical",
  },
  {
    id: "m09b",
    labelShort: "TODO",
    label: "Number of blue beams knocked out at least half way:",
    options: ["0", "1", "2", "3", "4", "5", "6"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m10a",
    labelShort: "TODO",
    label:
      "The Steel Structure is standing, and is Independent and Supported only by its hinges:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m11a",
    labelShort: "TODO",
    label:
      "The Structure is bigger than a Blue Building Unit and built from the team's white LEGO bricks:",
    options: ["no", "yes"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m11b",
    labelShort: "TODO",
    label: "The Structure is in any Circle:",
    options: ["no", "partly", "completely"],
    defaultValue: "no",
    type: "categorical",
  },
  {
    id: "m12a",
    labelShort: "TODO",
    label:
      "Number of Circles with a color-matching Unit, flat down on the Mat, and Completely in Circle:",
    options: ["0", "1", "2", "3"],
    defaultValue: "1",
    type: "categorical",
  },
  {
    id: "m12b",
    labelShort: "TODO",
    label:
      "Sum of height Levels of Independent Stacks at least partly in any Circle:",
    min: 0,
    max: 29,
    defaultValue: 1,
    type: "numeric",
  },
  {
    id: "m13a",
    labelShort: "TODO",
    label:
      "Number of Upgrades that are Independent and Supported only by a Stack which is at least partly in a Circle:",
    options: ["0", "1", "2", "3"],
    defaultValue: "0",
    type: "categorical",
  },
  {
    id: "m14a",
    labelShort: "TODO",
    label: "Number of Precision Tokens left on the field:",
    options: ["0", "1", "2", "3", "4", "5", "6"],
    defaultValue: "6",
    type: "categorical",
  },
  {
    id: "m15a",
    labelShort: "TODO",
    label: "Gracious Professionalism displayed at the Robot Game table:",
    options: ["0 Developing", "10 Accomplished", "20 Exceeds"],
    defaultValue: "0 Developing",
    type: "categorical",
  },
];
const missions = [
  { prefix: "advg", title: "Advantage" },
  { prefix: "m01", title: "M01 - Elevated Places" },
  { prefix: "m02", title: "M02 - Crane" },
  { prefix: "m03", title: "M03 - Inspection Drone" },
  { prefix: "m04", title: "M04 - Design for Wildlife" },
  { prefix: "m05", title: "M05 - Treehouse" },
  { prefix: "m06", title: "M06 - Traffic Jam" },
  { prefix: "m07", title: "M07 - Swing" },
  { prefix: "m08", title: "M08 - Elevator" },
  { prefix: "m09", title: "M09 - Safety Factor" },
  { prefix: "m10", title: "M10 - Steel Construction" },
  { prefix: "m11", title: "M11 - Innovative Architecture" },
  { prefix: "m12", title: "M12 - Design & Build" },
  { prefix: "m13", title: "M13 - Sustainability Upgrades" },
  { prefix: "m14", title: "M14 - Precision" },
  { prefix: "m15", title: "M15 - Gracious Professionalism®" },
];

const answer = (res: ScoreAnswer[], q: string) => {
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

  // Score 1: Flag points only score if bridge points do
  if (answer(R, "m01a") !== "yes" && Number(answer(R, "m01b")) !== 0)
    errors.push({
      id: "m01a,m01b",
      message: "Score 1 - bridge points must be scored for flags to count",
    });

  // Score 5: conditionally independent building units
  if (Number(answer(R, "m05a")) + Number(answer(R, "m05b")) > 17)
    errors.push({
      id: "m05a,m05b",
      message: "Score 5 - Too many Units are being counted",
    });

  // Score 12: The number of height levels is at minimum as many as the number of colour matching circles.
  if (Number(answer(R, "m12b")) < Number(answer(R, "m12a")))
    errors.push({
      id: "m12a,m12b",
      message:
        "Score 12 - Circles cannot be colour matched without corresponding height values",
    });
  return errors;
};

// TODO fully check that this is correct
const score = (R: ScoreAnswer[]): number => {
  console.log(R);
  let _score = 0;

  const adv = R.find((r) => r.id === "advg")?.answer === "yes" ? 5 : 0;

  // Score 1
  let pre = _score;
  if (answer(R, "m01a") === "yes") _score += 20;
  _score += Number(answer(R, "m01b")) * 15;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 2
  pre = _score;
  _score += answer(R, "m02a") === "yes" ? 20 : 0;
  _score += answer(R, "m02b") === "yes" ? 15 : 0;
  _score += answer(R, "m02c") === "yes" ? 15 : 0;
  if (_score > pre) _score += adv * 2; // Not sure why M2 is special but sure
  console.log(_score);

  // Score 3
  pre = _score;
  _score += answer(R, "m03a") === "yes" ? 10 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 4
  pre = _score;
  _score += answer(R, "m04a") === "yes" ? 10 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 5
  pre = _score;
  _score += Number(answer(R, "m05a")) * 10 + Number(answer(R, "m05b")) * 15;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 6
  pre = _score;
  _score += answer(R, "m06a") === "yes" ? 10 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 7
  pre = _score;
  _score += answer(R, "m07a") === "yes" ? 20 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 8
  pre = _score;
  const A8 = answer(R, "m08a");
  _score += A8 === "blue_car_down" ? 15 : A8 === "balanced" ? 20 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 9
  pre = _score;
  _score += answer(R, "m09a") === "yes" ? Number(answer(R, "m09b")) * 10 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 10
  pre = _score;
  _score += answer(R, "m10a") === "yes" ? 20 : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 11
  pre = _score;
  const A11a = answer(R, "m11a");
  const A11b = answer(R, "m11b");
  _score +=
    A11a === "yes"
      ? A11b === "partly"
        ? 10
        : A11b === "completely"
        ? 15
        : 0
      : 0;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 12
  pre = _score;
  _score += Number(answer(R, "m12a")) * 10 + Number(answer(R, "m12b")) * 5;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 13
  pre = _score;
  _score += Number(answer(R, "m13a")) * 10;
  if (_score > pre) _score += adv;
  console.log(_score);

  // Score 14
  switch (Number(answer(R, "m14a"))) {
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

  // Score 15
  const a = answer(R, "m15a");
  if (a && typeof a === "string") _score += Number(a.split(" ")[0]);
  if (_score > pre) _score += adv;

  console.log(_score);

  return _score;
};

const CityShaper: Game = {
  name: "City Shaper",
  program: FIRSTProgram.FLL_CHALLENGE,
  season: FIRSTSeason.FirstLaunch,
  scores: questions,
  missions,
  answer,
  score,
  validate,
};

export default CityShaper;
