import { ScoreAnswer, Game, Mission, Score, ScoreError } from '../game-types';
import { Season } from '../first-constants';
import missionPics from '../firebase.links';
import { answer } from '../functions';

const SEASON: Season = 20232024;

const questions: Score[] = [
  {
    id: 'm00a',
    label:
      'All team equipment fits in one launch area and under 12 in. (305 mm)?',
    labelShort: 'Inspection?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm01a',
    label:
      "If the 3D cinema's small red beam is completely to the right of the black frame",
    labelShort: 'Beam right?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm02a',
    label: "If your theater's red flag is down and the active scene colour is:",
    labelShort: 'Flag down + colour?',
    options: ['No', 'Blue', 'Pink', 'Orange'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm02b',
    label: "Do both teams' active scenes match?",
    labelShort: 'Teams match?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm03a',
    label: 'The three immersive experience screens are raised?',
    labelShort: 'Raised?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm04a',
    label:
      "Your team's LEGO® art piece is at least partly in the museum target area:",
    labelShort: 'In area?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm04b',
    label: 'The art piece is completely supported by the pedestal?',
    labelShort: 'On pedestal?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm05a',
    label:
      "The augmented reality statue's orange lever is rotated completely to the right?",
    labelShort: 'Rotated?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm06a',
    label: "The lights' orange lever is rotated completely downwards?",
    labelShort: 'Lights?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm06b',
    label: "The speakers' orange lever is rotated completely to the left?",
    labelShort: 'Speakers?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm07a',
    label:
      "The performer's orange push activator is completely past the black stage set line?",
    labelShort: 'Turned?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm08a',
    label: "The rolling camera's white pointer is left of?",
    labelShort: 'Left of?',
    options: [
      'None',
      'Dark blue',
      'Dark & medium blue',
      'Dark, medium & light blue',
    ],
    defaultValue: 'None',
    type: 'categorical',
  },
  {
    id: 'm09a',
    label:
      'The boat is touching the mat and is completely past the black scene line?',
    labelShort: 'Boat?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm09b',
    label:
      'The camera is touching the mat and is at least partly in the camera target area?',
    labelShort: 'Camera?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm10a',
    label: 'Number of sound mixer sliders raised?',
    labelShort: 'Sliders?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm11a',
    label: "TThe light show's white pointer is within zone?",
    labelShort: 'Zone?',
    options: ['None', 'Yellow', 'Green', 'Blue'],
    defaultValue: 'None',
    type: 'categorical',
  },
  {
    id: 'm12a',
    label: 'The chicken is intact and has moved from its starting position?',
    labelShort: '🐔 moved?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm12b',
    label: 'The chicken is over or completely past the lavender dot?',
    labelShort: '🐔 over dot?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm13a',
    label: "If the craft machine's orange and white lid is completely open?",
    labelShort: 'Lid?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm13b',
    label: "If the craft machine's light pink latch is pointing straight down?",
    labelShort: 'Latch?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm14a',
    label: 'Number of audience members completely in a target destination?',
    labelShort: 'People?',
    options: ['0', '1', '2', '3', '4', '5', '6', '7'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm14b',
    label:
      'Number of destinations with at least one audience member completely in it?',
    labelShort: 'Destinations?',
    options: ['0', '1', '2', '3', '4', '5', '6', '7'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm15a',
    label: 'Number of experts at least partly in their target destination?',
    labelShort: 'Experts?',
    options: ['0', '1', '2', '3', '4', '5'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm16a',
    labelShort: 'Precision?',
    label: 'Number of precision tokens remaining?',
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
    title: 'M01 - 3D Cinema',
    image: missionPics[SEASON].m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Theatre Scene Change',
    image: missionPics[SEASON].m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Immersive Experience',
    image: missionPics[SEASON].m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - MASTERPIECE℠',
    image: missionPics[SEASON].m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Augmented Reality Statue',
    image: missionPics[SEASON].m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Music Concert Light and Sound',
    image: missionPics[SEASON].m06,
  },
  {
    prefix: 'm07',
    title: 'M07 - Hologram Performer',
    image: missionPics[SEASON].m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Rolling Camera',
    image: missionPics[SEASON].m08,
  },
  {
    prefix: 'm09',
    title: 'M09 - Movie Set',
    image: missionPics[SEASON].m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Sound Mixer',
    image: missionPics[SEASON].m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Light Show',
    image: missionPics[SEASON].m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Virtual Reality Artist',
    image: missionPics[SEASON].m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Craft Creator',
    image: missionPics[SEASON].m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Audience Delivery',
    image: missionPics[SEASON].m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Expert Delivery',
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

  // game-specific validation

  // If audiences have been delivered, then at least one target should be set
  const m14a = answers.find((r) => r.id === 'm14a')?.answer;
  const m14b = answers.find((r) => r.id === 'm14b')?.answer;
  if (m14a && m14b && m14a !== '0' && m14b === '0') {
    errors.push({
      id: 'm14a,m14b',
      message: 'Audiences delivered, but no destinations set!',
    });
  }

  return errors;
};

// Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  _score = 0;
  // M00
  if (answer(answers, 'm00a') === 'Yes') _score += 20;

  // M01 - 20 points if achieved
  if (answer(answers, 'm01a') === 'Yes') _score += 20;

  // M02 - 10 points per level
  const matching = answer(answers, 'm02b') === 'Yes';
  switch (answer(answers, 'm02a')) {
    case 'Blue':
      _score += 10 + (matching ? 20 : 0);
      break;
    case 'Pink':
      _score += 20 + (matching ? 30 : 0);
      break;
    case 'Orange':
      _score += 30 + (matching ? 10 : 0);
      break;
    default:
      _score += 0;
  }

  // M03 - 20 points if Yes
  if (answer(answers, 'm03a') === 'Yes') _score += 20;

  // M04 - 10 points for a, 20 points for b
  if (answer(answers, 'm04a') === 'Yes') {
    if (answer(answers, 'm04b') === 'Yes') _score += 20;
    _score += 10;
  }

  // M05 - 30 points if Yes
  if (answer(answers, 'm05a') === 'Yes') _score += 30;

  // M06 - 10 points each
  if (answer(answers, 'm06a') === 'Yes') _score += 10;
  if (answer(answers, 'm06b') === 'Yes') _score += 10;

  // M07 - 20 points if Yes
  if (answer(answers, 'm07a') === 'Yes') _score += 20;

  // M08 - 10 points per level
  switch (answer(answers, 'm08a')) {
    case 'Dark blue':
      _score += 10;
      break;
    case 'Dark & medium blue':
      _score += 20;
      break;
    case 'Dark, medium & light blue':
      _score += 30;
      break;
    default:
      _score += 0;
  }

  // M09 - 10 points each
  if (answer(answers, 'm09a') === 'Yes') _score += 10;
  if (answer(answers, 'm09b') === 'Yes') _score += 10;

  // M10 - 10 points each
  switch (answer(answers, 'm10a')) {
    case '1':
      _score += 10;
      break;
    case '2':
      _score += 20;
      break;
    case '3':
      _score += 30;
      break;
    default:
      _score += 0;
  }

  // M11 - 10 points each
  switch (answer(answers, 'm11a')) {
    case 'Yellow':
      _score += 10;
      break;
    case 'Green':
      _score += 20;
      break;
    case 'Blue':
      _score += 30;
      break;
    default:
      _score += 0;
  }

  // M12 - 10 points for a, 30 points if a + b
  if (answer(answers, 'm12a') === 'Yes') {
    if (answer(answers, 'm12b') === 'Yes') _score += 20;
    _score += 10;
  }

  // M13 - 10 points for a, 20 points for b
  if (answer(answers, 'm13a') === 'Yes') _score += 10;
  if (answer(answers, 'm13b') === 'Yes') _score += 20;

  // M14 - 5 each for a, 5 each for b
  switch (answer(answers, 'm14a')) {
    case '1':
      _score += 5;
      break;
    case '2':
      _score += 10;
      break;
    case '3':
      _score += 15;
      break;
    case '4':
      _score += 20;
      break;
    case '5':
      _score += 25;
      break;
    case '6':
      _score += 30;
      break;
    case '7':
      _score += 35;
      break;
    default:
      _score += 0;
  }
  switch (answer(answers, 'm14b')) {
    case '1':
      _score += 5;
      break;
    case '2':
      _score += 10;
      break;
    case '3':
      _score += 15;
      break;
    case '4':
      _score += 20;
      break;
    case '5':
      _score += 25;
      break;
    case '6':
      _score += 30;
      break;
    case '7':
      _score += 35;
      break;
    default:
      _score += 0;
  }

  // M15 - 10 each
  switch (answer(answers, 'm15a')) {
    case '1':
      _score += 10;
      break;
    case '2':
      _score += 20;
      break;
    case '3':
      _score += 30;
      break;
    case '4':
      _score += 40;
      break;
    case '5':
      _score += 50;
      break;
    default:
      _score += 0;
  }

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

const masterPiece: Game = {
  name: 'Masterpiece',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default masterPiece;
