import { picsFor } from '../firebase.links';
import { Season } from '../first-constants';
import { answer, bAnswer, nAnswer } from '../functions';
import { Game, Mission, Score, ScoreAnswer, ScoreError } from '../game-types';

const SEASON: Season = 20262027;
const PROGRAM = 'FLL_CHALLENGE_FUTURE' as const;
const pics = picsFor(SEASON, PROGRAM);

const questionIds = [
  'm01a',
  'm01b',
  'm01c',
  'm01d',
  'm02a',
  'm02b',
  'm03a',
  'm04a',
  'm04b',
  'm05a',
  'm06a',
  'm06b',
  'gp',
] as const;

type QuestionId = (typeof questionIds)[number];

const questions: Score<QuestionId>[] = [
  // ---- M01 Mighty Microbiomes ----
  {
    id: 'm01a',
    label:
      'Keystone species resting loose in the young forest microbiome (not touching equipment)?',
    labelShort: 'Young forest?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm01b',
    label:
      'Keystone species resting loose in the grand tree microbiome (not touching equipment)?',
    labelShort: 'Grand tree?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm01c',
    label:
      'Keystone species resting loose in the hollow tree microbiome (not touching equipment)?',
    labelShort: 'Hollow tree?',
    min: 0,
    max: 3,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm01d',
    label:
      'Is the invasive queen on the opposite side of the field knocked down? (the opposing team knocks it down with their fourth keystone species)',
    labelShort: 'Queen down?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M02 Roots of Renewal ----
  {
    id: 'm02a',
    // The rulebook states no maximum for the base; 15 is an input bound, not
    // a scoring cap, and every resource entered here scores.
    label: 'Resources in the grand tree base?',
    labelShort: 'Tree base?',
    min: 0,
    max: 15,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm02b',
    label: 'Resources in the canopy chamber (must have been cycled up)?',
    labelShort: 'Canopy?',
    min: 0,
    max: 15,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M03 Cave Waterfall ----
  {
    id: 'm03a',
    label:
      'Number shown on the cave waterfall counter at the end of the match (keystone species cycled through)?',
    labelShort: 'Waterfall counter?',
    min: 0,
    max: 50,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- M04 Rainforest Awakening ----
  {
    id: 'm04a',
    label: 'Are all keystone species released from the nest?',
    labelShort: 'Nest released?',
    defaultValue: false,
    type: 'boolean',
  },
  {
    id: 'm04b',
    label: 'Are all resources released from the hollow tree?',
    labelShort: 'Hollow tree released?',
    defaultValue: false,
    type: 'boolean',
  },
  // ---- M05 Central Haven (cooperative) ----
  {
    id: 'm05a',
    // The rulebook states no maximum; 50 is an input bound, not a scoring cap.
    label:
      'Keystone species or resources resting completely in the central haven (shared - both teams score)?',
    labelShort: 'Central haven?',
    min: 0,
    max: 50,
    defaultValue: 0,
    type: 'numeric',
  },
  // ---- Level Up Challenge: Invasive Attack ----
  {
    id: 'm06a',
    label:
      'Invasive species added during pre-match setup (optional, excludes the required queen)?',
    labelShort: 'Invasives added?',
    min: 0,
    max: 5,
    defaultValue: 0,
    type: 'numeric',
  },
  {
    id: 'm06b',
    label:
      'Invasive species in the containment zone (may include the invasive queen)?',
    labelShort: 'Contained?',
    min: 0,
    max: 6,
    defaultValue: 0,
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
    prefix: 'm01',
    title: 'M01 - Mighty Microbiomes',
    image: pics.m01,
  },
  {
    prefix: 'm02',
    title: 'M02 - Roots of Renewal',
    image: pics.m02,
  },
  {
    prefix: 'm03',
    title: 'M03 - Cave Waterfall',
    image: pics.m03,
  },
  {
    prefix: 'm04',
    title: 'M04 - Rainforest Awakening',
    image: pics.m04,
  },
  {
    prefix: 'm05',
    title: 'M05 - Central Haven (Cooperative)',
    image: pics.m05,
  },
  {
    prefix: 'm06',
    title: 'Level Up Challenge - Invasive Attack',
    image: pics.m06,
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

  // M01 needs no cross-question validation. The queen recorded here is the one
  // on the opposite side of the field, knocked down by the OPPOSING team's
  // fourth keystone species, so it is independent of this team's own young
  // forest count. The bonus condition itself is enforced in `score`.

  // M02 has no cross-question validation. The rulebook's "maximum 15" applies
  // to the canopy chamber alone; the grand tree base has no stated maximum,
  // and no total field resource count is published, so a combined cap would
  // reject sheets the rules permit.

  // Level Up: only invasive species that exist can be contained - the optional
  // added ones plus the one required queen.
  const added = nAnswer(answers, 'm06a');
  const contained = nAnswer(answers, 'm06b');
  if (contained > added + 1) {
    errors.push({
      id: 'm06b',
      message:
        'More invasive species in the containment zone than were placed on the field (added + the required queen)',
    });
  }

  return errors;
};

const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  // M01 - Mighty Microbiomes
  // 20 points per keystone species, maximum 3 scoring in each microbiome. A
  // fourth in the young forest scores nothing for placement; it is what
  // knocks down the queen on the opposing side of the field.
  const youngForest = Math.min(Math.round(nAnswer(answers, 'm01a')), 3);
  const grandTree = Math.min(Math.round(nAnswer(answers, 'm01b')), 3);
  const hollowTree = Math.min(Math.round(nAnswer(answers, 'm01c')), 3);
  _score += (youngForest + grandTree + hollowTree) * 20;
  // Bonus: at least three in the young forest and the opposing queen down.
  if (youngForest >= 3 && bAnswer(answers, 'm01d')) _score += 40;

  // M02 - Roots of Renewal
  _score += nAnswer(answers, 'm02a') * 5; // 5 per resource in the grand tree base
  _score += Math.min(Math.round(nAnswer(answers, 'm02b')), 15) * 10; // 10 per resource in the canopy chamber

  // M03 - Cave Waterfall
  // 5 points per keystone species shown on the counter, maximum 50.
  _score += Math.min(Math.round(nAnswer(answers, 'm03a')), 50) * 5;

  // M04 - Rainforest Awakening
  if (bAnswer(answers, 'm04a')) _score += 30; // all keystone species released from the nest
  if (bAnswer(answers, 'm04b')) _score += 20; // all resources released from the hollow tree

  // M05 - Central Haven (cooperative - both teams receive the full score)
  _score += nAnswer(answers, 'm05a') * 5;

  // Level Up Challenge - Invasive Attack
  _score += Math.min(Math.round(nAnswer(answers, 'm06a')), 5) * 20; // 20 per invasive added pre-match
  _score += nAnswer(answers, 'm06b') * 10; // 10 per invasive delivered to containment

  return _score;
};

const bioglowFuture: Game = {
  name: 'BIOGLOW Future Edition',
  program: PROGRAM,
  season: SEASON,
  scores: questions,
  missions,
  answer: (res, q) => answer(res, q),
  score,
  validate,
};

export default bioglowFuture;
