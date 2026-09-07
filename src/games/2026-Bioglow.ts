import missionPics from '../firebase.links.js';
import { Season } from '../first-constants.js';
import { answer, bAnswer, nAnswer } from '../functions.js';
import {
  Game,
  Mission,
  Score,
  ScoreAnswer,
  ScoreError,
} from '../game-types.js';

const SEASON: Season = 20262027;

const questionIds = [
  'm00a',
  'm01a',
  'm01b',
  'm02a',
  'm03a',
  'm03b',
  'm04a',
  'm04b',
  'm05a',
  'm05b',
  'm06a',
  'm06b',
  'm07a',
  'm07b',
  'm08a',
  'm09a',
  'm09b',
  'm09c',
  'm10a',
  'm10b',
  'm11a',
  'm12a',
  'm12b',
  'm13a',
  'm14a',
  'm14b',
  'm15a',
  'm15b',
  'm15c',
  'm15d',
  'm16a',
  'gp',
] as const;

type QuestionId = (typeof questionIds)[number];

const questions: Score<QuestionId>[] = [
  {
    id: 'm00a',
    label:
      'All team equipment fits in one launch area and under 12 in. (305 mm)? (note: 🚳 = no equipment constraint)',
    labelShort: 'Inspection?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm01a',
    label: 'Drone is no longer touching the mat',
    labelShort: 'Drone lifted?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm01b',
    label:
      'The LiDAR map is completely flipped over AND the scan marker at least partly in the survey area',
    labelShort: 'LiDAR map & scan marker?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm02a',
    label: 'Seeds no longer touching the stalk?',
    labelShort: 'Seeds released?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm03a',
    label: 'Is the research flag down?',
    labelShort: 'Flag is down?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm03b',
    label: "Has the rock been returned to it's original position?",
    labelShort: 'Rock returned?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04a',
    label: 'Is one leaf completely removed and no longer touching the nest?',
    labelShort: 'Leaf not touching?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04b',
    label:
      "Is a second leaf completely removed and no longer touching the nest, with the katydid in it's original position?",
    labelShort: 'Second leaf not touching?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm05a',
    label: 'Is the plant root raised?',
    labelShort: 'Root raised?',
    defaultValue: 'Not raised',
    options: ['Not raised', 'Partially', 'Completely'],
    type: 'categorical',
  },
  {
    id: 'm05b',
    label: 'Is the plant root touching the opponents mycelium?',
    labelShort: 'Root touching opp. mycelium?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm06a',
    label: 'Is the ant touching the nest?',
    labelShort: 'Ant?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm06b',
    label: 'Number of leaf fragments within the nest?',
    labelShort: 'Leaf fragments?',
    defaultValue: 0,
    min: 0,
    max: 4,
    type: 'numeric',
  },
  {
    id: 'm07a',
    label: 'Is the mycelium completely extended?',
    labelShort: 'Mycelium extended?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm07b',
    label: 'Is the mycelium touching the opponents plant root?',
    labelShort: 'Mycelium touching opp. plant root?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm08a',
    label: 'Is the vine touching the mat?',
    labelShort: 'Vine on mat?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09a',
    label: 'Is the research platform completely raised?',
    labelShort: 'Platform raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09b',
    label: 'Is the camera trap deployed?',
    labelShort: 'Camera deployed?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09c',
    label: 'Is the seed no longer touching the tree?',
    labelShort: 'Seed moved?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm10a',
    label: "Is the spider habitat in it's original position?",
    labelShort: 'Spider in starting pos?',
    defaultValue: true,
    type: 'boolean',
  },
  {
    id: 'm10b',
    label: "Is the snail habitat in it's original position?",
    labelShort: 'Snail in starting pos?',
    defaultValue: true,
    type: 'boolean',
  },
  {
    id: 'm11a',
    label: 'Is the root cover down, touching the mat?',
    labelShort: 'Root down?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm12a',
    label: 'Is the crane completely raised, touching the tree?',
    labelShort: 'Crane raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm12b',
    label: 'Is the support tie around the post??',
    labelShort: 'Support tie around post?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm13a',
    label:
      "Is the teams's keystone species on the restoration platform and the young trees raised?",
    labelShort: 'Keystone species & trees?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm14a',
    label: 'How many seeds are within the replantation station?',
    labelShort: 'Seeds replantated?',
    min: 0,
    max: 4,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm14b',
    label: 'and touching the mat?',
    labelShort: 'Seeds replantated on mat?',
    min: 0,
    max: 4,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm15a',
    label: 'Is the nesting canopy raised?',
    labelShort: 'Canpoy raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15b',
    label: 'Is the garden skylight completely in?',
    labelShort: 'Skylight in?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15c',
    label: 'Is the compost hatch completely open, touching the mat?',
    labelShort: 'Compost hatch open?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15d',
    label: 'Environmental priority, where is the dock located?',
    labelShort: 'Environmental priority',
    defaultValue: 'Mine',
    options: ['Mine', 'City', 'Farm'],
    type: 'categorical',
  },
  {
    id: 'm16a',
    label: 'Number of precision tokens remaining?',
    labelShort: 'Precision?',
    min: 0,
    max: 6,
    defaultValue: 6,
    type: 'numeric',
  },
  {
    id: 'gp',
    labelShort: 'GP',
    label: 'Gracious Professionalism® displayed at the robot game table?',
    options: ['2 - Developing', '3 - Accomplished', '4 - Exceeds'],
    defaultValue: '3 - Accomplished',
    type: 'categorical',
  },
];

const missions: Mission[] = [
  {
    prefix: 'm00',
    title: 'M00 - Equipment Inspection Bonus',
    image: missionPics[SEASON].m00,
  },
  {
    prefix: 'm01',
    title: 'M01 - Drone Survey 🚳',
    image: missionPics[SEASON].m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Exploding Seeds',
    image: missionPics[SEASON].m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Flip the Rock',
    image: missionPics[SEASON].m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Lucky Leaves 🚳',
    image: missionPics[SEASON].m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Reaching Roots 🚳',
    image: missionPics[SEASON].m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Leafcutter Frenzy',
    image: missionPics[SEASON].m06,
  },
  {
    prefix: 'm07',
    title: 'M07 - Humongous Fungus',
    image: missionPics[SEASON].m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Tangled',
    image: missionPics[SEASON].m08,
  },
  {
    prefix: 'm09',
    title: 'M09 - Research Platform 🚳',
    image: missionPics[SEASON].m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Fragile Microhabitats 🚳',
    image: missionPics[SEASON].m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Window to the Past',
    image: missionPics[SEASON].m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Forest Elder 🚳',
    image: missionPics[SEASON].m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Keystone Species',
    image: missionPics[SEASON].m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Seeds of Renewal',
    image: missionPics[SEASON].m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Biocentric Architecture 🚳',
    image: missionPics[SEASON].m15,
  },
  {
    prefix: 'm16',
    title: 'M16 - Precision Tokens',
    image: missionPics[SEASON].m16,
  },
  {
    prefix: 'gp',
    title: 'Gracious Professionalism®',
  },
];

const convertAnswer = (
  q: Score<QuestionId>,
  answer?: string,
): string | number | boolean => {
  if (answer === undefined) return q.defaultValue;
  if (q.type === 'numeric') {
    return parseInt(answer);
  } else if (q.type === 'categorical') {
    return answer;
  } else if (q.type === 'boolean') {
    return answer === 'Yes' || answer === 'true';
  }
  return answer; // Fallback, should not happen
};

// const getTypedAnswers = (
//   answers: ScoreAnswer[],
// ): Record<QuestionId, typeof questions[QuestionId]['defaultValue']> => {
//   // Convert answers to the right type
//   return Object.fromEntries(
//     questions.map((q) => [
//       q.id,
//       convertAnswer(q, answers.find((a) => a.id === q.id)?.answer),
//     ]) as [QuestionId, string | number | boolean][],
//   ) as Record<QuestionId, string | number | boolean>;
// };

const validate = (answers: ScoreAnswer[]) => {
  const errors: ScoreError[] = [];

  const emptyQs: Score['id'][] = [];
  // If any answer is empty, invalid.
  const empties = answers
    .map((r) => r.answer === '')
    .reduce((t, c) => (t = t + (c ? 1 : 0)), 0);
  answers.forEach((r) => {
    if (r.answer === '') emptyQs.push(r.id);
  });
  if (empties > 0)
    errors.push({
      id: emptyQs.join(','),
      message: `${empties} unanswered questions!`,
    });

  // game-specific validation

  const drone = answers.find((r) => r.id === 'm01a')?.answer === 'Yes';
  const lidar = answers.find((r) => r.id === 'm01b')?.answer === 'Yes';
  if (!drone && lidar)
    errors.push({
      id: 'm01b',
      message: 'The bonus is only available if you have lifted the drone',
    });

  const researchFlag = answers.find((r) => r.id === 'm03a')?.answer === 'Yes';
  const rock = answers.find((r) => r.id === 'm03b')?.answer === 'Yes';
  if (!researchFlag && rock)
    errors.push({
      id: 'm03b',
      message: 'The bonus is only available if you have the research flag down',
    });

  const firstLeaf = answers.find((r) => r.id === 'm04a')?.answer === 'Yes';
  const secondLeaf = answers.find((r) => r.id === 'm04b')?.answer === 'Yes';
  if (!firstLeaf && secondLeaf)
    errors.push({
      id: 'm04b',
      message: 'The bonus is only available if you have removed the 1st leaf',
    });

  //TODO: answer text
  const root = answers.find((r) => r.id === 'm05a')?.answer === 'Yes';
  const rootAndMycelium =
    answers.find((r) => r.id === 'm05b')?.answer === 'Yes';
  if (!root && rootAndMycelium)
    errors.push({
      id: 'm05b',
      message: 'The bonus is only available if you have raised the root',
    });

  //TODO: answer text
  const mycelium = answers.find((r) => r.id === 'm07a')?.answer === 'Yes';
  const myceliumAndRoot =
    answers.find((r) => r.id === 'm07b')?.answer === 'Yes';
  if (!mycelium && myceliumAndRoot)
    errors.push({
      id: 'm07b',
      message: 'The bonus is only available if you have raised the mycelium',
    });

  const seedsIn = Number(answers.find((r) => r.id === 'm14a')?.answer);
  const seedsMat = Number(answers.find((r) => r.id === 'm14b')?.answer);
  if (seedsMat > seedsIn)
    errors.push({
      id: 'm14b',
      message: 'You cannot have more seeds in & touching the mat, than just in',
    });

  return errors;
};

// Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
// The getTypedAnswers function above does something like this
const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  _score = 0;
  // M00
  if (bAnswer(answers, 'm00a')) _score += 20;

  // M01
  const drone = bAnswer(answers, 'm01a');
  _score += drone ? 20 : 0; // 20 points if drone lifted
  const lidar = bAnswer(answers, 'm01b');
  _score += lidar ? 10 : 0; // 10 points if lidar map flipped & scan marker in zone

  // M02
  const seeds = nAnswer(answers, 'm02a') ?? 0;
  _score += seeds * 10; // 10 points per seed

  // M03
  const researchFlag = bAnswer(answers, 'm03a');
  _score += researchFlag ? 20 : 0; // 20 points if flag down
  const rock = bAnswer(answers, 'm03b');
  if (researchFlag) _score += rock ? 10 : 0; // 10 points bonus if rock returned to original position

  // M04 - Lucky Leave
  const firstLeaf = bAnswer(answers, 'm04a');
  _score += firstLeaf ? 10 : 0; // 10 points if 1 leaf removed
  const secondLeaf = bAnswer(answers, 'm04b');
  if (firstLeaf && secondLeaf) _score += 20; // 20 points bonus if second leaf moved

  // M05 - Reaching Roots (+ 07b touching mycelium)
  const root = answer(answers, 'm05a');
  if (root === 'Partially') _score += 10; // 10 points if root partially raised
  else if (root === 'Completely') _score += 20; // 20 points if root completely raised
  const rootAndMycelium = answer(answers, 'm05b');
  if (root != 'Not raised' && rootAndMycelium) _score += 10; // 10 points from M07B for touching opps. mycelium

  // M06 - Leafcutter Frenzy
  const ant = bAnswer(answers, 'm06a');
  const leafCutter = nAnswer(answers, 'm06b');
  if (ant) _score += leafCutter * 10; // 10 points per leaf

  // M07 - Humongous Fungus
  const mycelium = bAnswer(answers, 'm07a');
  if (mycelium) _score += 20; // 20 points for extending the mycelium
  const myceliumAndRoot = bAnswer(answers, 'm07b');
  if (mycelium && myceliumAndRoot) _score += 10; // 10 points for it touching opps. root

  // M08 - Tangled
  if (bAnswer(answers, 'm08a')) _score += 30; // 30 points for the vine touching the mat

  // M09 - Research platform
  if (bAnswer(answers, 'm09a')) _score += 10; // 10 points if platform raised
  if (bAnswer(answers, 'm09b')) _score += 10; // 10 points if camera trap deployed
  if (bAnswer(answers, 'm09c')) _score += 10; // 10 points if see deployed

  // M10 - Fragile microhabitats
  if (bAnswer(answers, 'm10a')) _score += 10; // 10 points if spider hab in orginal pos
  if (bAnswer(answers, 'm10b')) _score += 10; // 10 points if snail hab in original pos

  // M11 - Window to the past
  if (bAnswer(answers, 'm11a')) _score += 20; // 20 points if roots exposed

  // M12 - Forest elder
  if (bAnswer(answers, 'm12a')) _score += 20; // 20 points if crane raised
  if (bAnswer(answers, 'm12b')) _score += 10; // 10 points if support around tree

  // M13 - Keystone species
  if (bAnswer(answers, 'm13a')) _score += 30; // 30 points if keystone species placed

  // M14 - Seeds of renewal
  const seedsInStation = nAnswer(answers, 'm14a');
  _score += Math.round(seedsInStation) * 5;
  // Number touching mat cannot exceed in station, cap touching mat
  const seedsAlsoTouchingMat = Math.min(
    nAnswer(answers, 'm14b'),
    seedsInStation,
  );
  _score += Math.round(seedsAlsoTouchingMat) * 5;

  // M15 - Biocentric architecture
  const canopy = bAnswer(answers, 'm15a');
  _score += 10; // 10 points if canopy raised
  const skylight = bAnswer(answers, 'm15b');
  _score += 10; // 10 points if skylight in
  const compost = bAnswer(answers, 'm15c');
  _score += 10; // 10 points if hatch opened
  const location = answer(answers, 'm15d');
  switch (
    location // 10 bonus points if achived objective that is relevant for location
  ) {
    case 'Mine':
      if (canopy) _score += 10;
      break;
    case 'City':
      if (skylight) _score += 10;
      break;
    case 'Farm':
      if (compost) _score += 10;
      break;
  }

  // M16
  switch (nAnswer(answers, 'm16a')) {
    case 6:
      _score += 50;
      break;
    case 5:
      _score += 50;
      break;
    case 4:
      _score += 35;
      break;
    case 3:
      _score += 25;
      break;
    case 2:
      _score += 15;
      break;
    case 1:
      _score += 10;
      break;
    default:
      _score += 0;
  }

  return _score;
};

const bioglow: Game = {
  name: 'Bioglow',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default bioglow;
