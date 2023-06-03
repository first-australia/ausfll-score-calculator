import { ScoreAnswer, Game, Mission, Score, ScoreError } from '../game-types';
import { Season } from '../first-constants';
import missionPics from '../firebase.links';
import { answer } from '../functions';

const SEASON: Season = 20232024;

const questions: Score[] = [
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

  return errors;
};

// Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
const score = (answers: ScoreAnswer[]): number => {
  let _score = 0;

  _score = 0;

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
