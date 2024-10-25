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
    defaultValue: '3',
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
    prefix: 'm00',
    title: 'M00 - Equipment Inspection Bonus',
    image: missionPics[SEASON].m00,
  },
  {
    prefix: 'm01',
    title: 'M01 - Coral Nursery',
    image: missionPics[SEASON].m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Shark',
    image: missionPics[SEASON].m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Coral Reef',
    image: missionPics[SEASON].m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Scuba Diver',
    image: missionPics[SEASON].m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Angler Fish',
    image: missionPics[SEASON].m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Raise the Mast',
    image: missionPics[SEASON].m06,
  },
  {
    prefix: 'm07',
    title: "M07 - Kraken's Treasure",
    image: missionPics[SEASON].m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Artificial Habitat',
    image: missionPics[SEASON].m08,
  },
  {
    prefix: 'm09',
    title: 'M09 - Unexpected Encounter',
    image: missionPics[SEASON].m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Send Over the Submersible',
    image: missionPics[SEASON].m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Sonar Discovery',
    image: missionPics[SEASON].m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Feed the Whale',
    image: missionPics[SEASON].m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Changing Shipping Lanes',
    image: missionPics[SEASON].m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Sample Collection',
    image: missionPics[SEASON].m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Research Vessel',
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

  const m01a = answers.find((r) => r.id === 'm01a')?.answer;
  const m01b = answers.find((r) => r.id === 'm01b')?.answer;
  if (m01a && m01b && m01a === 'No' && m01b === 'Yes') {
    errors.push({
      id: 'm1a,m1b',
      message: "Coral tree can't be in it's holder without being raised!",
    });
  }

  const m02a = answers.find((r) => r.id === 'm02a')?.answer;
  const m02b = answers.find((r) => r.id === 'm02b')?.answer;
  if (m02a && m02b && m02a === 'No' && m02b === 'Yes') {
    errors.push({
      id: 'm02a,m02b',
      message: "Shark can't be in the habitat without leaving the cave",
    });
  }

  const m04a = answers.find((r) => r.id === 'm04a')?.answer;
  const m04b = answers.find((r) => r.id === 'm04b')?.answer;
  if (m04a && m04b && m04a === 'No' && m04b === 'Yes') {
    errors.push({
      id: 'm04a,m04b',
      message:
        "Scuba diver can't be on the coral reef support without leaving the nursery",
    });
  }

  const m09a = answers.find((r) => r.id === 'm09a')?.answer;
  const m09b = answers.find((r) => r.id === 'm09b')?.answer;
  if (m09a && m09b && m09a === 'No' && m09b === 'Yes') {
    errors.push({
      id: 'm09a,m09b',
      message: "Unknown creature can't be in the seep if it's not released",
    });
  }

  const m07a = answers.find((r) => r.id === 'm07a')?.answer == 'Yes' ? 1 : 0;
  const m14a = answers.find((r) => r.id === 'm14a')?.answer == 'Yes' ? 1 : 0;
  const m14b = answers.find((r) => r.id === 'm14b')?.answer == 'Yes' ? 1 : 0;
  const m14c = answers.find((r) => r.id === 'm14c')?.answer == 'Yes' ? 1 : 0;
  const m14d = parseInt(answers.find((r) => r.id === 'm14d')?.answer ?? '0');

  const m15MaxPossible = m07a + m14a + m14b + m14c + m14d;
  const m15a = parseInt(answers.find((r) => r.id === 'm15a')?.answer ?? '0');

  if (m15MaxPossible && m15a && m15a > m15MaxPossible) {
    errors.push({
      id: 'm15a',
      message:
        'Samples in the cargo area is greater than samples released / moved',
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

  // M01 - 20 points for a, 10 points for b, 20 points for c
  if (answer(answers, 'm01a') === 'Yes') _score += 20;
  if (answer(answers, 'm01b') === 'Yes') _score += 10;
  if (answer(answers, 'm01c') === 'Yes') _score += 20;

  // M02 - 20 points for a, 10 points for b
  if (answer(answers, 'm02a') === 'Yes') _score += 20;
  if (answer(answers, 'm02b') === 'Yes') _score += 10;

  // M03 - 20 points for a, 5 each for b
  if (answer(answers, 'm03a') === 'Yes') _score += 20;
  switch (answer(answers, 'm03b')) {
    case '1':
      _score += 5;
      break;
    case '2':
      _score += 10;
      break;
    case '3':
      _score += 15;
      break;
    default:
      _score += 0;
  }

  // M04 - 20 points for a, 20 points for b
  if (answer(answers, 'm04a') === 'Yes') _score += 20;
  if (answer(answers, 'm04b') === 'Yes') _score += 20;

  // M05 - 30 points if Yes
  if (answer(answers, 'm05a') === 'Yes') _score += 30;

  // M06 - 30 points if Yes
  if (answer(answers, 'm06a') === 'Yes') _score += 30;

  // M07 - 20 points if Yes
  if (answer(answers, 'm07a') === 'Yes') _score += 20;

  // M08 - 10 points per level
  switch (answer(answers, 'm08a')) {
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
    default:
      _score += 0;
  }

  // M09 - 20 points for a, 10 points for b
  if (answer(answers, 'm09a') === 'Yes') _score += 20;
  if (answer(answers, 'm09b') === 'Yes') _score += 10;

  // M10 - 30 points for a, 10 for b
  if (answer(answers, 'm10a') === 'Yes') _score += 30;
  if (answer(answers, 'm10b') === 'Yes') _score += 10;

  // M11 - 20 points for 1 whale, + 10 for two whales
  if (answer(answers, 'm11a') === '1') _score += 20;
  else if (answer(answers, 'm11a') === '2') _score += 30;

  // M12 - 10 points for each
  switch (answer(answers, 'm12a')) {
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

  // M13 - 20 points for a
  if (answer(answers, 'm13a') === 'Yes') _score += 20;

  // M14 - 5 each for a, 10 for b, c, 20 for d, 10 for e
  if (answer(answers, 'm14a') === 'Yes') _score += 5;
  if (answer(answers, 'm14b') === 'Yes') _score += 10;
  if (answer(answers, 'm14c') === 'Yes') _score += 10;
  switch (answer(answers, 'm14d')) {
    case '1':
      _score += 20;
      break;
    case '2':
      _score += 30;
      break;
    default:
      _score += 0;
  }

  // M15 - 5 each for a, 20 for b
  switch (answer(answers, 'm15a')) {
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
    case '5':
      _score += 30;
      break;
    case '6':
      _score += 35;
      break;
    default:
      _score += 0;
  }
  if (answer(answers, 'm15b') === 'Yes') _score += 20;

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
