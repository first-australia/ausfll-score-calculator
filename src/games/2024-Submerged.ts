import { ScoreAnswer, Game, Mission, Score, ScoreError } from '../game-types';
import { Season } from '../first-constants';
import missionPics from '../firebase.links';
import { answer } from '../functions';

const SEASON: Season = 20242025;

//TODO: FIXME: is there any reason why type: numerical is never used?

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
    label: 'Is the coral tree hanging on the coral tree support?',
    labelShort: 'Coral tree on support?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm01b',
    label: 'Is the bottom of the coral tree in its holder?',
    labelShort: 'Coral tree in holder?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm01c',
    label: 'Are the coral buds flipped up?',
    labelShort: 'Coral buds up?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm02a',
    label: 'Is the shark not touching the cave?',
    labelShort: 'Shark no cave?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm02b',
    label: 'Is the shark at least partially touching the shark habitat mat?',
    labelShort: 'Shark mat?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm03a',
    label: 'Is the coral reef flipped up & not touching the mat?',
    labelShort: '',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm03b',
    label: 'Number of reef segments upright, out of home, touching mat',
    labelShort: 'Reef segments?',
    options: ['0', '1', '2', '3'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm04a',
    label: 'Is the scuba diver not touching the coral nursery?',
    labelShort: 'Scuba moved?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm04b',
    label: 'Is the scuba diver hanging on the coral reef support?',
    labelShort: 'Scuba placed?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm05a',
    label: 'Is the angler fish latched within the shipwreck?',
    labelShort: 'Angler fish?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm06a',
    label: 'Is the shipwrecks mast completely raised?',
    labelShort: 'Mast?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm07a',
    label: 'Is the trasure chest completely outside the krakens nest?',
    labelShort: 'Treasure chest?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm08a',
    label:
      'Number of artificial habitat stack segments completely flat & upright?',
    labelShort: 'Artificial habitat?',
    options: ['0', '1', '2', '3', '4'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm09a',
    label: 'Is the unknown creature released?',
    labelShort: 'Unknown released?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm09b',
    label: 'Is the unknown creature partly in the cold seep?',
    labelShort: 'Unknown seep?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm10a',
    label: 'Is your teams yellow flag down?',
    labelShort: 'Yellow flag?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm10b',
    label: 'Is the submersible clearly closer to the opposing field?',
    labelShort: 'Submersible?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm11a',
    label: 'Number of whales revealed?',
    labelShort: 'Whales?',
    options: ['0', '1', '2'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm12a',
    label: "Number of krill partly in the whale's mouth?",
    labelShort: 'Krill?',
    options: ['0', '1', '2', '3', '4', '5'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm13a',
    label: 'Is the ship in the new shipping lane, touching the mat?',
    labelShort: 'Ship?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm14a',
    label: 'Is the water sample completely outside the sample area?',
    labelShort: 'Water sample?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm14b',
    label: 'Is the seabed sample not touching the seabed?',
    labelShort: 'Seabed sample?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm14c',
    label: 'Is the plankton sample not touching the kelp forest?',
    labelShort: 'Plankton sample?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm14d',
    label: 'Number of trident pieces not touching the shipwreck?',
    labelShort: 'Trident pieces?',
    options: ['0', '1', '2'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm15a',
    label:
      'Number of samples, trident part(s), or treasure chest at least partly in the cargo area?',
    labelShort: 'Samples in cargo?',
    options: ['0', '1', '2', '3', '4', '5', '6'],
    defaultValue: '0',
    type: 'categorical',
  },
  {
    id: 'm15b',
    label: "Is the ports latch at least partly in the research vessel's loop?",
    labelShort: 'Ports latch?',
    options: ['No', 'Yes'],
    defaultValue: 'No',
    type: 'categorical',
  },
  {
    id: 'm16a',
    label: 'Number of precision tokens remaining?',
    labelShort: 'Precision?',
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
//     "Your team's LEGO® art piece is at least partly in the museum target area:",

const missions: Mission[] = [
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

const submerged: Game = {
  name: 'Submerged',
  program: 'FLL_CHALLENGE',
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default submerged;
