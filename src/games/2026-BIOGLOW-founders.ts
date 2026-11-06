import { picsFor } from '../firebase.links';
import { Season } from '../first-constants';
import { answer, bAnswer, nAnswer } from '../functions';
import { Game, Mission, Score, ScoreAnswer, ScoreError } from '../game-types';

const SEASON: Season = 20262027;
const PROGRAM = 'FLL_CHALLENGE_FOUNDERS' as const;
const pics = picsFor(SEASON, PROGRAM);

const questionIds = [
  'm00a',
  'm01a',
  'm01b',
  'm02a',
  'm03a',
  'm03b',
  'm04a',
  'm04b',
  'm04d',
  'm04e',
  'm05a',
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
  // ---- Equipment Inspection ----
  {
    id: 'm00a',
    label:
      'All team equipment fits in one launch area and under 12 in. (305 mm)?',
    labelShort: 'Inspection?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M01 Drone Survey ----
  {
    id: 'm01a',
    label: 'Is the drone no longer touching the mat?',
    labelShort: 'Drone flown?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm01b',
    label:
      'Is the LiDAR map completely flipped over, with the scan marker at least partly in the survey area?',
    labelShort: 'LiDAR map?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M02 Exploding Seeds ----
  {
    id: 'm02a',
    label: 'Seeds no longer touching the stalk?',
    labelShort: 'Seeds released?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M03 Flip the Rock ----
  {
    id: 'm03a',
    label: 'Is the research flag down?',
    labelShort: 'Flag down?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm03b',
    label: 'Has the rock been returned to its original starting position?',
    labelShort: 'Rock returned?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M04 Lucky Leaves ----
  {
    id: 'm04a',
    label: 'Leaves completely removed, no longer touching the nest?',
    labelShort: 'Leaves removed?',
    min: 0,
    max: 2,
    defaultValue: 0,
    type: 'numeric',
  },
  // Challenge Update 01 (2 Sep 2026): the katydid's whereabouts are recorded
  // as three separate facts. `m04c` is retired: it meant "inside the leaf
  // habitat" in sheets saved before this change, so reusing the ID with a
  // different meaning would misread them.
  {
    id: 'm04b',
    label: 'Is the katydid in its original starting position?',
    labelShort: 'Katydid in place?',
    defaultValue: true,
    type: 'boolean',
  },
  {
    id: 'm04d',
    // Completely outside the leaf habitat at any time loses the bonus.
    label:
      'Was the katydid ever completely outside the leaf habitat during the match? (the leaf habitat is the nest and the marked area on the mat around it)',
    labelShort: 'Katydid ever out?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04e',
    // Completely outside the leaf habitat at the end scores zero for M04.
    label: 'Is the katydid completely outside the leaf habitat?',
    labelShort: 'Katydid out now?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M05 Reaching Roots ----
  {
    id: 'm05a',
    label: 'How far is the plant root extended?',
    labelShort: 'Root extended?',
    options: ['Not extended', 'Partially extended', 'Completely extended'],
    defaultValue: 'Not extended',
    type: 'categorical',
  },
  // ---- M06 Leafcutter Frenzy ----
  {
    id: 'm06a',
    label: 'Is the ant touching the nest?',
    labelShort: 'Ant home?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm06b',
    // The nest model holds four leaf fragments (white, yellow, orange, green),
    // one per slot.
    label: 'Leaf fragments contained within the nest?',
    labelShort: 'Fragments?',
    min: 0,
    max: 4,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M07 Humongous Fungus ----
  {
    id: 'm07a',
    label: 'Is the mycelium completely extended?',
    labelShort: 'Mycelium?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm07b',
    // Two bonuses are possible, matching the official scoresheet: this team's
    // mycelium to the opposing plant root, and the opposing mycelium to this
    // team's plant root. The models do not need to touch to form a connection.
    // Not achievable in remote play or where there is no opposing team.
    label:
      "Connections formed between an extended mycelium and the opposing team's fully extended plant root? (count both directions: your mycelium to their root, and their mycelium to your root; not possible in remote competitions or with no opposing team)",
    labelShort: 'Connections?',
    min: 0,
    max: 2,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M08 Tangled ----
  {
    id: 'm08a',
    label: 'Is the vine touching the mat?',
    labelShort: 'Vine down?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M09 Research Platform ----
  {
    id: 'm09a',
    label: 'Is the research platform raised?',
    labelShort: 'Platform raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09b',
    label: 'Is the camera trap deployed?',
    labelShort: 'Camera trap?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm09c',
    label: 'Is the seed no longer touching the tree?',
    labelShort: 'Seed released?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M10 Fragile Microhabitats ----
  {
    id: 'm10a',
    label: 'Is the spider habitat in its original starting position?',
    labelShort: 'Spider habitat?',
    defaultValue: true,
    type: 'boolean',
  },
  {
    id: 'm10b',
    label: 'Is the snail habitat in its original starting position?',
    labelShort: 'Snail habitat?',
    defaultValue: true,
    type: 'boolean',
  },
  // ---- M11 Window to the Past ----
  {
    id: 'm11a',
    label: 'Is the root cover down, touching the mat?',
    labelShort: 'Root cover down?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M12 Forest Elder ----
  {
    id: 'm12a',
    label: 'Is the cane completely raised, touching the tree?',
    labelShort: 'Cane raised?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm12b',
    label: 'Is the support tie around the post?',
    labelShort: 'Support tie?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M13 Keystone Species ----
  {
    id: 'm13a',
    label:
      "Is your team's keystone species on the restoration platform with the young trees raised?",
    labelShort: 'Keystone species?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M14 Seeds of Renewal ----
  {
    id: 'm14a',
    label: 'Seeds contained within the replantation station?',
    labelShort: 'Seeds planted?',
    min: 0,
    max: 4,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm14b',
    label: 'Of those, how many are also touching the mat (bonus)?',
    labelShort: 'Seeds rooted?',
    min: 0,
    max: 4,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M15 Biocentric Architecture ----
  {
    id: 'm15a',
    label: 'Is the nesting canopy raised?',
    labelShort: 'Nesting canopy?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15b',
    label: 'Is the garden skylight completely in?',
    labelShort: 'Garden skylight?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15c',
    label: 'Is the compost hatch completely opened, touching the mat?',
    labelShort: 'Compost hatch?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm15d',
    label:
      'Which dock is the biocentric architecture model located on? (environmental bonus is scored if the matching feature is complete)',
    labelShort: 'Which dock?',
    options: ['Not placed', 'Mine dock', 'City dock', 'Farm dock'],
    defaultValue: 'Not placed',
    type: 'categorical',
  },
  // ---- Precision Tokens ----
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
    image: pics.m00,
  },
  {
    prefix: 'm01',
    title: 'M01 - Drone Survey 🚳',
    image: pics.m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Exploding Seeds',
    image: pics.m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Flip the Rock',
    image: pics.m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Lucky Leaves 🚳',
    image: pics.m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Reaching Roots 🚳',
    image: pics.m05,
  },
  {
    prefix: 'm06',
    title: 'M06 - Leafcutter Frenzy',
    image: pics.m06,
  },
  {
    prefix: 'm07',
    title: 'M07 - Humongous Fungus 🚳',
    image: pics.m07,
  },
  {
    prefix: 'm08',
    title: 'M08 - Tangled',
    image: pics.m08,
  },
  {
    prefix: 'm09',
    title: 'M09 - Research Platform 🚳',
    image: pics.m09,
  },
  {
    prefix: 'm10',
    title: 'M10 - Fragile Microhabitats 🚳',
    image: pics.m10,
  },
  {
    prefix: 'm11',
    title: 'M11 - Window to the Past',
    image: pics.m11,
  },
  {
    prefix: 'm12',
    title: 'M12 - Forest Elder 🚳',
    image: pics.m12,
  },
  {
    prefix: 'm13',
    title: 'M13 - Keystone Species',
    image: pics.m13,
  },
  {
    prefix: 'm14',
    title: 'M14 - Seeds of Renewal',
    image: pics.m14,
  },
  {
    prefix: 'm15',
    title: 'M15 - Biocentric Architecture 🚳',
    image: pics.m15,
  },
  {
    prefix: 'm16',
    title: 'Precision Tokens',
    image: pics.m16,
  },
  {
    prefix: 'gp',
    title: 'Gracious Professionalism®',
  },
];

/** Total seeds available on the field: three from M02 plus one from M09. */
const TOTAL_SEEDS = 4;

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
  //
  // The referee records what happened on the field; `score` decides what that
  // is worth. Only combinations that cannot physically happen are flagged
  // here, never combinations that are possible but score nothing.

  // M04: a katydid completely outside the leaf habitat now has been outside
  // it at some point, and is not in its starting position.
  if (bAnswer(answers, 'm04e')) {
    if (!bAnswer(answers, 'm04d')) {
      errors.push({
        id: 'm04d',
        message:
          'Katydid is completely outside the leaf habitat now, so it was completely outside it during the match',
      });
    }
    if (bAnswer(answers, 'm04b')) {
      errors.push({
        id: 'm04b',
        message:
          'Katydid is completely outside the leaf habitat, so it cannot be in its original starting position',
      });
    }
  }

  // M07: each connection needs a mycelium on one field and a fully extended
  // plant root on the other. One connection involves this team's mycelium
  // (M07) or this team's root (M05); two need both. A connection made only
  // through this team's root is recordable but scores nothing, because the
  // bonus is on this team's mycelium (see `score`).
  const connections = nAnswer(answers, 'm07b');
  if (connections > 2) {
    errors.push({
      id: 'm07b',
      message: 'You cannot have more than 2 cross-table connections',
    });
  }
  const mycelium = bAnswer(answers, 'm07a');
  const root = answer(answers, 'm05a') === 'Completely extended';
  if (connections >= 2 && !(mycelium && root)) {
    errors.push({
      id: 'm07b',
      message:
        'Two connections need both your mycelium completely extended (M07) and your plant root completely extended (M05)',
    });
  } else if (connections >= 1 && !(mycelium || root)) {
    errors.push({
      id: 'm07b',
      message:
        'A connection needs either your mycelium completely extended (M07) or your plant root completely extended (M05)',
    });
  }

  // M14: only seeds that exist can be planted - three from M02 and one from
  // M09 - and the mat bonus applies only to seeds in the station.
  const seedsReleased =
    nAnswer(answers, 'm02a') + (bAnswer(answers, 'm09c') ? 1 : 0);
  const planted = nAnswer(answers, 'm14a');
  if (planted > seedsReleased) {
    errors.push({
      id: 'm14a',
      message:
        'More seeds in the replantation station than were released from the stalk and the research platform tree',
    });
  }
  if (nAnswer(answers, 'm14b') > planted) {
    errors.push({
      id: 'm14b',
      message:
        'More seeds touching the mat than are contained within the replantation station',
    });
  }

  return errors;
};

const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  // Equipment inspection bonus
  if (bAnswer(answers, 'm00a')) _score += 20;

  // M01 - Drone Survey
  if (bAnswer(answers, 'm01a')) {
    _score += 20; // drone no longer touching the mat
    if (bAnswer(answers, 'm01b')) _score += 10; // LiDAR map flipped, marker in the survey area
  }

  // M02 - Exploding Seeds: 10 per seed released from the stalk
  _score += Math.min(Math.round(nAnswer(answers, 'm02a')), 3) * 10;

  // M03 - Flip the Rock
  if (bAnswer(answers, 'm03a')) {
    _score += 20; // research flag is down
    if (bAnswer(answers, 'm03b')) _score += 10; // rock returned to its start
  }

  // M04 - Lucky Leaves
  // A katydid completely outside the leaf habitat at the end of the match
  // scores zero.
  if (!bAnswer(answers, 'm04e')) {
    const leaves = Math.min(Math.round(nAnswer(answers, 'm04a')), 2);
    if (leaves >= 1) _score += 10; // first leaf removed
    // The second leaf only scores with the katydid in its starting position,
    // and never completely outside the leaf habitat during the match.
    if (leaves >= 2 && bAnswer(answers, 'm04b') && !bAnswer(answers, 'm04d')) {
      _score += 20;
    }
  }

  // M05 - Reaching Roots (only one scoring condition is possible)
  switch (answer(answers, 'm05a')) {
    case 'Completely extended':
      _score += 20;
      break;
    case 'Partially extended':
      _score += 10;
      break;
    default:
      break;
  }

  // M06 - Leafcutter Frenzy: fragments score only with the ant touching the nest
  if (bAnswer(answers, 'm06a')) {
    _score += Math.min(Math.round(nAnswer(answers, 'm06b')), 4) * 10;
  }

  // M07 - Humongous Fungus
  if (bAnswer(answers, 'm07a')) {
    _score += 20; // mycelium completely extended
    // 10 per connection, and two bonuses are possible. Connections score only
    // as a bonus on this team's extended mycelium.
    _score += Math.min(Math.round(nAnswer(answers, 'm07b')), 2) * 10;
  }

  // M08 - Tangled
  if (bAnswer(answers, 'm08a')) _score += 30;

  // M09 - Research Platform
  if (bAnswer(answers, 'm09a')) _score += 10; // platform raised
  if (bAnswer(answers, 'm09b')) _score += 10; // camera trap deployed
  if (bAnswer(answers, 'm09c')) _score += 10; // seed no longer touching the tree

  // M10 - Fragile Microhabitats
  if (bAnswer(answers, 'm10a')) _score += 10; // spider habitat undisturbed
  if (bAnswer(answers, 'm10b')) _score += 10; // snail habitat undisturbed

  // M11 - Window to the Past
  if (bAnswer(answers, 'm11a')) _score += 20;

  // M12 - Forest Elder
  if (bAnswer(answers, 'm12a')) _score += 20; // cane raised, touching the tree
  if (bAnswer(answers, 'm12b')) _score += 10; // support tie around the post

  // M13 - Keystone Species
  if (bAnswer(answers, 'm13a')) _score += 30;

  // M14 - Seeds of Renewal
  const planted = Math.min(Math.round(nAnswer(answers, 'm14a')), TOTAL_SEEDS);
  _score += planted * 5; // 5 per seed in the replantation station
  // Bonus 5 added for each of those also touching the mat.
  _score += Math.min(Math.round(nAnswer(answers, 'm14b')), planted) * 5;

  // M15 - Biocentric Architecture
  const canopy = bAnswer(answers, 'm15a');
  const skylight = bAnswer(answers, 'm15b');
  const hatch = bAnswer(answers, 'm15c');
  if (canopy) _score += 10; // nesting canopy raised
  if (skylight) _score += 10; // garden skylight completely in
  if (hatch) _score += 10; // compost hatch opened, touching the mat
  // Environmental bonus: 10 added if the feature matching the model's dock is
  // complete. Only one bonus is possible for this mission.
  const dock = answer(answers, 'm15d');
  if (
    (dock === 'Mine dock' && canopy) ||
    (dock === 'City dock' && skylight) ||
    (dock === 'Farm dock' && hatch)
  ) {
    _score += 10;
  }

  // Precision Tokens
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

const bioglowFounders: Game = {
  name: 'BIOGLOW Founders Edition',
  program: PROGRAM,
  season: SEASON,
  revision: 2,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default bioglowFounders;
