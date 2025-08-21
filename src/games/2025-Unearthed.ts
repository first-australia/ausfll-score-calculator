import missionPics from '../firebase.links';
import { Season } from '../first-constants';
import { answer, bAnswer, nAnswer } from '../functions';
import { Game, Mission, Score, ScoreAnswer, ScoreError } from '../game-types';

const SEASON: Season = 20252026;

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
  'm06a',
  'm07a',
  'm08a',
  'm09a',
  'm09b',
  'm10a',
  'm10b',
  'm11a',
  'm12a',
  'm12b',
  'm13a',
  'm14a',
  'm15a',
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
    label: 'Soil deposits completely cleared, touching the mat',
    labelShort: 'Soil cleared?',
    min: 0,
    max: 2,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm01b',
    label: "Archaeologist's brush is not touching the dig site",
    labelShort: 'Brush touching?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm02a',
    label: 'Topsoil sections completely cleared?',
    labelShort: 'Topsoil cleared?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm03a',
    label:
      "Your team's minecart is on the opposing team's field (must pass completely through the mineshaft entry)?",
    labelShort: 'Your minecart?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm03b',
    label: "Opposing team's minecart is on your field?",
    labelShort: 'Opposing minecart?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04a',
    label: 'Precious artefact is not touching the mine?',
    labelShort: 'Artefact not touching?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04b',
    label: 'Are both support structures standing?',
    labelShort: 'Supports standing?',
    defaultValue: true,
    type: 'boolean',
  },
  {
    id: 'm05a',
    label: 'Is the structure floor completely upright?',
    labelShort: 'Floor upright?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm06a',
    label: 'Ore blocks not touching the forge:',
    labelShort: 'Ores?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm07a',
    label: 'Is the millstone not touching the forge?',
    labelShort: 'Millstone not touching?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm08a',
    label: 'Preserved pieces outside the silo?',
    labelShort: 'Pieces outside?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm09a',
    label: 'Is the roof completely raised?',
    labelShort: 'Roof raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09b',
    label: 'Are the market wares raised?',
    labelShort: 'Wares raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm10a',
    label: 'Is the scale tipped and touching the mat?',
    labelShort: 'Scale tipped?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm10b',
    label: 'Is the scale pan completely removed?',
    labelShort: 'Pan removed?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm11a',
    label: 'Are the artefacts raised above the ground layer?',
    labelShort: 'Artefacts raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm12a',
    label:
      'Is the sand completely cleared (pull activator past the line on the mat)?',
    labelShort: 'Sand cleared?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm12b',
    label: 'Is the ship completely raised?',
    labelShort: 'Ship raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm13a',
    label: 'Is the statue completely raised?',
    labelShort: 'Statue raised?',
    defaultValue: false,
    type: 'boolean',
  },
  // TODO
  {
    id: 'm14a',
    label: 'Artefacts touching the mat and at least partly in the forum?',
    labelShort: 'Artefacts?',
    min: 0,
    max: 7,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm15a',
    label: 'Sites with a flag at least partly inside and touching the mat?',
    labelShort: 'Sites flagged?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
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
    title: 'M01 - Surface Brushing 🚳',
    image: missionPics[SEASON].m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Map Reveal',
    image: missionPics[SEASON].m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Mineshaft Explorer',
    image: missionPics[SEASON].m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Careful Recovery 🚳',
    image: missionPics[SEASON].m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Who Lived Here? 🚳',
    image: missionPics[SEASON].m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Forge',
    image: missionPics[SEASON].m06,
  },
  {
    prefix: 'm07',
    title: 'M07 - Heavy Lifting',
    image: missionPics[SEASON].m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Silo',
    image: missionPics[SEASON].m08,
  },
  {
    prefix: 'm09',
    title: "M09 - What's on Sale? 🚳",
    image: missionPics[SEASON].m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Tip the Scales',
    image: missionPics[SEASON].m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Angler Artefacts 🚳',
    image: missionPics[SEASON].m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Salvage Operation 🚳',
    image: missionPics[SEASON].m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Statue Rebuild 🚳',
    image: missionPics[SEASON].m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Forum 🚳',
    image: missionPics[SEASON].m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Site Marking',
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

  const brush = answers.find((r) => r.id === 'm01b')?.answer == 'Yes' ? 1 : 0;
  const topsoil = answers.find((r) => r.id === 'm02a')?.answer != '0' ? 1 : 0;
  const minecart =
    answers.find((r) => r.id === 'm03b')?.answer == 'Yes' ? 1 : 0;
  const artefact =
    answers.find((r) => r.id === 'm04a')?.answer == 'Yes' ? 1 : 0;
  const ore = answers.find((r) => r.id === 'm06a')?.answer != '0' ? 1 : 0;
  const millstone =
    answers.find((r) => r.id === 'm07a')?.answer == 'Yes' ? 1 : 0;
  const scalePan =
    answers.find((r) => r.id === 'm10b')?.answer == 'Yes' ? 1 : 0;

  const m14MaxPossible =
    brush + topsoil + minecart + artefact + ore + millstone + scalePan;
  const m14a = parseInt(answers.find((r) => r.id === 'm14a')?.answer ?? '0');

  if (m14a > m14MaxPossible) {
    errors.push({
      id: 'm14a',
      message:
        'Samples in the forum area is greater than samples released / moved',
    });
  }

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
  const deposits = nAnswer(answers, 'm01a');
  _score += deposits * 10; // 10 points per deposit
  const brush = bAnswer(answers, 'm01b');
  _score += brush ? 10 : 0; // 10 points if brush is not touching

  // M02
  const soils = nAnswer(answers, 'm02a') ?? 0;
  _score += soils * 10; // 10 points per soil

  // ==== TODO ==== //
  // M03
  const yourMinecart = bAnswer(answers, 'm03a');
  _score += yourMinecart ? 30 : 0;
  const opposingMinecart = bAnswer(answers, 'm03b');
  if (yourMinecart) _score += opposingMinecart ? 10 : 0; // 10 points if opposing minecart is on your field

  // M04
  // Precious artefact not touching the mine
  if (bAnswer(answers, 'm04a')) _score += 30;
  // Both support structures standing
  if (bAnswer(answers, 'm04b')) _score += 10;

  // M05
  // Structure floor completely upright
  if (bAnswer(answers, 'm05a')) _score += 30;

  // M06
  // Ore blocks not touching the forge
  const oreBlocks = nAnswer(answers, 'm06a');
  _score += oreBlocks * 10; // 10 points per ore block

  // M07
  // Millstone not touching the forge
  if (bAnswer(answers, 'm07a')) _score += 30;

  // M08
  // Preserved pieces outside the silo
  const preservedPieces = nAnswer(answers, 'm08a');
  _score += preservedPieces * 10; // 10 points per preserved piece

  // M09
  // Roof completely raised
  if (bAnswer(answers, 'm09a')) _score += 20;
  // Market wares raised
  if (bAnswer(answers, 'm09b')) _score += 10;

  // M10
  // Scale tipped and touching the mat
  if (bAnswer(answers, 'm10a')) _score += 20;
  // Scale pan completely removed
  if (bAnswer(answers, 'm10b')) _score += 10;

  // M11
  // Artefacts raised above the ground layer
  const artefactsRaised = bAnswer(answers, 'm11a');
  if (artefactsRaised) {
    _score += 20;
    if (bAnswer(answers, 'm11b')) _score += 10; // 10 points if crane flag is lowered
  }

  // M12
  // Sand completely cleared
  if (bAnswer(answers, 'm12a')) _score += 20;
  // Ship completely raised
  if (bAnswer(answers, 'm12b')) _score += 10;

  // M13
  // Statue completely raised
  if (bAnswer(answers, 'm13a')) _score += 30;

  // M14
  // Artefacts touching the mat and at least partly in the forum
  const artefactsInForum = nAnswer(answers, 'm14a');
  _score += Math.min(Math.round(artefactsInForum), 7) * 5; // 10 points per artefact in forum

  // M15
  // Sites with a flag at least partly inside and touching the mat
  const siteFlags = nAnswer(answers, 'm15a');
  _score += Math.min(Math.round(siteFlags), 3) * 10; // 10 points per site with a flag

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

const unearthed: Game = {
  name: 'Unearthed',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default unearthed;
