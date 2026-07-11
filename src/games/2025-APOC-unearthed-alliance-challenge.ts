import { Season } from '../first-constants';
import { answer, bAnswer, nAnswer } from '../functions';
import { Game, Mission, Score, ScoreAnswer, ScoreError } from '../game-types';

// Temporary scoring variant of Unearthed for the APOC Alliance Challenge.
// It shares the 2025-2026 season but is NOT registered in the season-keyed
// map (that key belongs to regular Unearthed). It is exposed via the `games`
// array in extras.ts and a named export in index.ts.
// Images are intentionally omitted for this temporary calculator.
const SEASON: Season = 20252026;

const questionIds = [
  'm00a',
  'm01a',
  'm01b',
  'm02a',
  'm06a',
  'm07a',
  'm08a',
  'm09a',
  'm09b',
  'm10b',
  'm11a',
  'm11b',
  'm12a',
  'm12b',
  'm13a',
  'm14a',
  'm14c',
  'm14b',
  'm15a',
  'a1a',
  'a2a',
  'a3a',
  'm16a',
  'gpa',
  'gpb',
] as const;

type QuestionId = (typeof questionIds)[number];

const questions: Score<QuestionId>[] = [
  {
    id: 'm00a',
    label:
      "All of both teams' equipment fits in the inspection areas (each team using a separate launch area)?",
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
    id: 'm11b',
    label: 'Is the crane flag at least partly lowered?',
    labelShort: 'Crane flag?',
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
  {
    id: 'm14a',
    label:
      'Items delivered to the forum (brush, topsoil, and millstone), touching the mat and at least partly in the forum?',
    labelShort: 'Forum items (5pt)?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm14c',
    label:
      'Ores delivered to the forum, touching the mat and at least partly in the forum?',
    labelShort: 'Forum ores?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm14b',
    label: 'Of the delivered ores, how many contained a fossilised artifact?',
    labelShort: 'Artifact ores?',
    min: 0,
    max: 2,
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
    id: 'a1a',
    label: 'Is the minecart removed from the top of the crane?',
    labelShort: 'Cart rescued?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'a2a',
    label: 'Mineshaft entry: how far did the minecart reach?',
    labelShort: 'Mineshaft entry?',
    options: [
      'None',
      'Touching the mineshaft structure',
      'Two wheels inside on the floor',
      'Placed properly on the tracks',
    ],
    defaultValue: 'None',
    type: 'categorical',
  },
  {
    id: 'a3a',
    label:
      'Is the scale pan placed on top of the raised roof of Mission 9 (What’s on Sale)?',
    labelShort: 'Pan on roof?',
    defaultValue: false,
    type: 'boolean',
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
    id: 'gpa',
    label:
      'Did each launch area have one team member from each alliance team throughout the match?',
    labelShort: 'Both teams present?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'gpb',
    label: 'How many robots were launched from both launch areas during the match?',
    labelShort: 'Dual-launch robots?',
    min: 0,
    max: 2,
    defaultValue: 0,
    type: 'numeric',
  },
];

const missions: Mission[] = [
  {
    prefix: 'm00',
    title: 'M00 - Equipment Inspection Bonus',
  },
  {
    prefix: 'm01',
    title: 'M01 - Surface Brushing 🚳',
  },
  {
    prefix: 'm02',
    title: 'M02 - Map Reveal',
  },
  {
    prefix: 'm06',
    title: 'M06 - Forge',
  },
  {
    prefix: 'm07',
    title: 'M07 - Heavy Lifting',
  },
  {
    prefix: 'm08',
    title: 'M08 - Silo',
  },
  {
    prefix: 'm09',
    title: "M09 - What's on Sale? 🚳",
  },
  {
    prefix: 'm10',
    title: 'M10 - Tip the Scales (starts tipped, +20 auto)',
  },
  {
    prefix: 'm11',
    title: 'M11 - Angler Artefacts 🚳',
  },
  {
    prefix: 'm12',
    title: 'M12 - Salvage Operation 🚳',
  },
  {
    prefix: 'm13',
    title: 'M13 - Statue Rebuild 🚳',
  },
  {
    prefix: 'm14',
    title: 'M14 - Forum 🚳',
  },
  {
    prefix: 'm15',
    title: 'M15 - Site Marking',
  },
  {
    prefix: 'a1',
    title: 'A1 - Archaeologist Rescue',
  },
  {
    prefix: 'a2',
    title: 'A2 - Mineshaft Entry',
  },
  {
    prefix: 'a3',
    title: 'A3 - Scale Pan Sale',
  },
  {
    prefix: 'm16',
    title: 'M16 - Precision Tokens',
  },
  {
    prefix: 'gp',
    title: 'Gracious Professionalism® / Alliance Bonuses',
  },
];

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

  // M14: delivered items can't exceed items actually released / moved.
  // The 5-point items are the brush, topsoil, and millstone; ores are separate.
  const brush = bAnswer(answers, 'm01b') ? 1 : 0;
  const topsoil = answers.find((r) => r.id === 'm02a')?.answer != '0' ? 1 : 0;
  const millstone = bAnswer(answers, 'm07a') ? 1 : 0;
  const oresReleased = nAnswer(answers, 'm06a');

  const m14aMaxPossible = brush + topsoil + millstone;
  const m14a = parseInt(answers.find((r) => r.id === 'm14a')?.answer ?? '0');
  const m14c = parseInt(answers.find((r) => r.id === 'm14c')?.answer ?? '0');

  if (m14a > m14aMaxPossible) {
    errors.push({
      id: 'm14a',
      message:
        'Forum items (brush/topsoil/millstone) exceed the number released / moved',
    });
  }

  // Ores delivered to the forum can't exceed ores released (M06).
  if (m14c > oresReleased) {
    errors.push({
      id: 'm14c',
      message: 'Ores in the forum exceed the number of ores released',
    });
  }

  // M14b: artifact-bearing ores can't exceed the ores delivered to the forum.
  const m14b = parseInt(answers.find((r) => r.id === 'm14b')?.answer ?? '0');
  if (m14b > m14c) {
    errors.push({
      id: 'm14b',
      message: 'Artifact ores cannot exceed the number of ores in the forum',
    });
  }

  // A3: the pan can only be sold if it was obtained from M10.
  const panRemoved = answers.find((r) => r.id === 'm10b')?.answer == 'Yes';
  const panOnRoof = answers.find((r) => r.id === 'a3a')?.answer == 'Yes';
  if (panOnRoof && !panRemoved) {
    errors.push({
      id: 'a3a',
      message:
        'Scale pan cannot be sold (A3) unless it was removed from the scale (M10)',
    });
  }

  return errors;
};

const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  // M00 - Equipment Inspection
  if (bAnswer(answers, 'm00a')) _score += 20;

  // M01 - Surface Brushing
  const deposits = nAnswer(answers, 'm01a');
  _score += deposits * 10; // 10 points per deposit
  if (bAnswer(answers, 'm01b')) _score += 10; // 10 points if brush is not touching

  // M02 - Map Reveal
  const soils = nAnswer(answers, 'm02a') ?? 0;
  _score += soils * 10; // 10 points per topsoil section

  // M06 - Forge
  const oreBlocks = nAnswer(answers, 'm06a');
  _score += oreBlocks * 10; // 10 points per ore block

  // M07 - Heavy Lifting
  if (bAnswer(answers, 'm07a')) _score += 30;

  // M08 - Silo
  const preservedPieces = nAnswer(answers, 'm08a');
  _score += preservedPieces * 10; // 10 points per preserved piece

  // M09 - What's on Sale?
  if (bAnswer(answers, 'm09a')) _score += 20; // roof raised
  if (bAnswer(answers, 'm09b')) _score += 10; // market wares raised

  // M10 - Tip the Scales (starts tipped: 20 auto-awarded)
  _score += 20;
  if (bAnswer(answers, 'm10b')) _score += 10; // scale pan completely removed

  // M11 - Angler Artefacts
  if (bAnswer(answers, 'm11a')) {
    _score += 20;
    if (bAnswer(answers, 'm11b')) _score += 10; // crane flag lowered
  }

  // M12 - Salvage Operation
  if (bAnswer(answers, 'm12a')) _score += 20; // sand cleared
  if (bAnswer(answers, 'm12b')) _score += 10; // ship raised

  // M13 - Statue Rebuild
  if (bAnswer(answers, 'm13a')) _score += 30;

  // M14 - Forum
  // Brush / topsoil / millstone are 5 points each; ores are 10 points each.
  const forumItems = nAnswer(answers, 'm14a');
  _score += Math.min(Math.round(forumItems), 3) * 5;
  const forumOres = nAnswer(answers, 'm14c');
  _score += Math.min(Math.round(forumOres), 3) * 10;
  // Artifact lottery: +20 for 1 artifact ore, +30 for 2.
  switch (nAnswer(answers, 'm14b')) {
    case 2:
      _score += 30;
      break;
    case 1:
      _score += 20;
      break;
    default:
      _score += 0;
  }

  // M15 - Site Marking
  const siteFlags = nAnswer(answers, 'm15a');
  _score += Math.min(Math.round(siteFlags), 3) * 10; // 10 points per flagged site

  // A1 - Archaeologist Rescue
  if (bAnswer(answers, 'a1a')) _score += 20; // minecart removed from crane

  // A2 - Mineshaft Entry (best achieved tier)
  switch (answer(answers, 'a2a')) {
    case 'Placed properly on the tracks':
      _score += 50;
      break;
    case 'Two wheels inside on the floor':
      _score += 30;
      break;
    case 'Touching the mineshaft structure':
      _score += 15;
      break;
    default:
      _score += 0;
  }

  // A3 - Scale Pan Sale
  if (bAnswer(answers, 'a3a')) _score += 30; // pan placed on raised roof

  // M16 - Precision Tokens
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

  // Gracious Professionalism alliance bonuses
  if (bAnswer(answers, 'gpa')) _score += 10; // both teams present in each launch area
  const dualLaunchRobots = nAnswer(answers, 'gpb');
  _score += Math.min(Math.round(dualLaunchRobots), 2) * 10; // 10 per robot, max 20

  return _score;
};

const unearthedAllianceChallenge: Game = {
  name: 'Unearthed Alliance Challenge (APOC)',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default unearthedAllianceChallenge;
