import { ScoreAnswer, Game, Mission, Score, ScoreError } from '../game-types';
import { Season } from '../first-constants';
import missionPics from '../firebase.links';
import { answer, nAnswer } from '../functions';

const SEASON: Season = 20222023;

const NUM_ENERGY = 20;

const questions: Score[] = [
  {
    id: 'm00a',
    label:
      'If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 inches',
    labelShort: 'Inspection?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm01a',
    label:
      'Is your Innovation Project model at least partly in the hydrogen plant target area?',
    labelShort: 'In the area?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm02a',
    label: 'Number of fuel units in the fuel truck?',
    labelShort: 'Fuel in truck?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm02b',
    label:
      'Is at least one fuel unit in the truck and the truck is at least partly over the fueling station target?',
    labelShort: 'Loaded and partly in target?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm03a',
    label: 'How many energy units are completely in the energy storage bin?',
    labelShort: 'Energy in bin?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm03b',
    label:
      'Is the energy unit completely removed from the energy storage tray?',
    labelShort: 'Removed from tray?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm04a',
    label:
      'How many energy units have been completely removed from their starting circle?',
    labelShort: '# Removed?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm05a',
    label: "Is your field's orange connector completely raised?",
    labelShort: 'Raised?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm05b',
    label: "Are both teams' orange connectors completely raised?",
    labelShort: 'Both?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm06a',
    label: 'Is the hybrid car no longer touching the ramp?',
    labelShort: 'Car not touching?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm06b',
    label: 'Is the hybrid unit in the hybrid car?',
    labelShort: 'Hybrid unit?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm07a',
    label: 'How many energy units are no longer touching the wind turbine?',
    labelShort: '# removed?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm08a',
    label: 'Is the television completely raised?',
    labelShort: 'Raised?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm08b',
    label: 'Is an energy unit completely in the green television slot?',
    labelShort: 'Energy unit?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm09a',
    label: 'Is the dinosaur toy completely in the left home area?',
    labelShort: 'Completely left?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm09b',
    label: 'Is the dinosaur toy lid completely closed containing...?',
    labelShort: 'Closed with...?',
    options: ['No', 'Energy', 'Rechargeable battery'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm10a',
    label: 'How many energy units are no longer touching the power plant?',
    labelShort: '# removed?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm11a',
    label: 'Is the energy unit no longer touching the hydroelectric dam?',
    labelShort: 'Energy removed?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm12a',
    label:
      'How many looped water units are completely in the water reservoir, touching the mat?',
    labelShort: 'Water touching?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm12b',
    label: 'How many hooks are holding a looped water unit?',
    labelShort: 'Hooks?',
    options: ['0', '1', '2'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm13a',
    label:
      'How many energy units are completely in the hydrogen plant target area?',
    labelShort: '# Energy?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm14a',
    label: 'How many energy units are partly in the slot or in the red hopper?',
    labelShort: '# Energy?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm14b',
    label: 'Has the mini dinosaur toy been released?',
    labelShort: 'Mini dino?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm15a',
    label:
      'How many energy units are completely in the rechargeable battery target area?',
    labelShort: '# Energy?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm16a',
    labelShort: 'Precision?',
    label: 'How many Precision Tokens are left on the field?',
    options: ['0', '1', '2', '3', '4', '5', '6'],
    defaultValue: '6',
    type: 'categorical',
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
    title: 'M01 - Innovation Project Model',
    image: missionPics[SEASON].m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Oil Platform',
    image: missionPics[SEASON].m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Energy Storage',
    image: missionPics[SEASON].m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Solar Farm',
    image: missionPics[SEASON].m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Smart Grid',
    image: missionPics[SEASON].m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Hybrid Car',
    image: missionPics[SEASON].m06,
  },
  {
    prefix: 'm07',
    title: 'M07 - Wind Turbine',
    image: missionPics[SEASON].m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Watch Television',
    image: missionPics[SEASON].m08,
  },
  {
    prefix: 'm09',
    title: 'M09 - Dinosaur Toy',
    image: missionPics[SEASON].m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Power Plant',
    image: missionPics[SEASON].m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Hydroelectric Dam',
    image: missionPics[SEASON].m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Water Reservoir',
    image: missionPics[SEASON].m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Power-To-X',
    image: missionPics[SEASON].m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Toy Factory',
    image: missionPics[SEASON].m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Rechargeable battery',
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

  // Fuel truck
  if (answer(answers, 'm02a') === '0' && answer(answers, 'm02b') === 'Yes')
    errors.push({
      id: 'm02a,m02b',
      message:
        'The fuel truck cannot contain fuel if there is no fuel in the fuel truck.',
    });

  // Energy units
  const m03a = nAnswer(answers, 'm03a');
  const m03b = answer(answers, 'm03b') === 'No' ? 1 : 0; // One energy unit lives in M03 if this is "no"
  const m04a = 3 - nAnswer(answers, 'm04a'); // If they haven't been removed, they are not available
  const m07a = 3 - nAnswer(answers, 'm07a'); // If they haven't been removed, they are not available
  const m08b = answer(answers, 'm08b') === 'Yes' ? 1 : 0;
  const m09b =
    answer(answers, 'm09b') === 'Energy' && answer(answers, 'm09a') === 'Yes'
      ? 1
      : 0;
  const m10a = 3 - nAnswer(answers, 'm10a');
  const m11a = answer(answers, 'm11a') === 'No' ? 1 : 0;
  const m13a = nAnswer(answers, 'm13a');
  const m14a = nAnswer(answers, 'm14a');
  const m15a = nAnswer(answers, 'm15a');

  // Total number of mutually exclusive containers:
  // Note: m15a is exclusive with m15b and m15c
  if (
    m03a + m03b + m04a + m07a + m08b + m09b + m10a + m11a + m13a + m14a + m15a >
    NUM_ENERGY
  )
    errors.push({
      id: [
        m03a ? 'm03a' : '',
        m03b ? 'm03b' : '',
        m04a ? 'm04a' : '',
        m07a ? 'm07a' : '',
        m08b ? 'm08b' : '',
        m09b ? 'm09b' : '',
        m10a ? 'm10a' : '',
        m11a ? 'm11a' : '',
        m13a ? 'm13a' : '',
        m14a ? 'm14a' : '',
        m15a ? 'm15a' : '',
      ].join(','),
      message: `Too many energy units have been used - there are only ${NUM_ENERGY}!`,
    });

  // Water units
  const m12a = nAnswer(answers, 'm12a');
  const m12b = nAnswer(answers, 'm12b');
  if (m12a + m12b > 3)
    errors.push({
      id: 'm12a,m12b',
      message:
        'Looped water units cannot be touching the ground and hanging on the hooks.',
    });

  return errors;
};

// Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
// TODO fully check that this is correct
const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  // M00
  if (answer(answers, 'm00a') === 'Yes') _score += 20;

  // M01
  if (answer(answers, 'm01a') === 'Yes') _score += 10;

  // M02
  _score += nAnswer(answers, 'm02a') * 5;
  if (answer(answers, 'm02b') === 'Yes') _score += 10;

  // M03
  _score += nAnswer(answers, 'm03a') * 10;
  if (answer(answers, 'm03b') === 'Yes') _score += 5;

  // M04
  const m04a = nAnswer(answers, 'm04a');
  _score += m04a * 5;
  if (m04a === 3) _score += 5;

  // M05
  if (answer(answers, 'm05a') === 'Yes') _score += 20;
  if (answer(answers, 'm05b') === 'Yes') _score += 10;

  // M06
  if (answer(answers, 'm06a') === 'Yes') _score += 10;
  if (answer(answers, 'm06b') === 'Yes') _score += 10;

  // M07
  _score += nAnswer(answers, 'm07a') * 10;

  // M08
  if (answer(answers, 'm08a') === 'Yes') _score += 10;
  if (answer(answers, 'm08b') === 'Yes') _score += 10;

  // M09
  if (answer(answers, 'm09a') === 'Yes') _score += 10;
  const m09b = answer(answers, 'm09b');
  if (m09b === 'Energy') _score += 10;
  else if (m09b === 'Rechargeable battery') _score += 20;

  // M10
  const m10a = nAnswer(answers, 'm10a');
  _score += m10a * 5;
  if (m10a === 3) _score += 10;

  // M11
  if (answer(answers, 'm11a') === 'Yes') _score += 20;

  // M12
  _score += nAnswer(answers, 'm12a') * 5;
  _score += nAnswer(answers, 'm12b') * 10;

  // M13
  _score += nAnswer(answers, 'm13a') * 5;

  // M14
  _score += nAnswer(answers, 'm14a') * 5;
  if (answer(answers, 'm14b') === 'Yes') _score += 10;

  // M15
  _score += nAnswer(answers, 'm15a') * 5;

  // M16
  switch (answer(answers, 'm16a')) {
    case '6':
      _score += 50;
      break;
    case '5':
      _score += 50;
      break;
    case '4':
      _score += 35;
      break;
    case '3':
      _score += 25;
      break;
    case '2':
      _score += 15;
      break;
    case '1':
      _score += 10;
      break;
    default:
      _score += 0;
  }

  return _score;
};

const superPowered: Game = {
  name: 'SuperPowered',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default superPowered;
