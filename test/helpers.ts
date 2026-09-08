import { Game, ScoreAnswer } from '../src/game-types';
import { isBooleanScore } from '../src/extras';

/**
 * Builds a full answer set for a game from its defaults, with the given
 * overrides applied. Booleans accept real booleans, numerics accept numbers.
 */
export const buildAnswers = (
  game: Game,
  overrides: Record<string, string | number | boolean> = {},
): ScoreAnswer[] =>
  game.scores.map((q) => {
    const raw = q.id in overrides ? overrides[q.id] : q.defaultValue;
    let value: string;
    if (typeof raw === 'boolean') value = raw ? 'Yes' : 'No';
    else value = String(raw);
    // Sanity: a boolean question should never receive a numeric answer.
    if (isBooleanScore(q) && typeof raw === 'number') {
      throw new Error(`Question ${q.id} is boolean but got a number`);
    }
    return { id: q.id, answer: value };
  });

/** Score a game with the given overrides applied over its defaults. */
export const scoreWith = (
  game: Game,
  overrides: Record<string, string | number | boolean> = {},
): number => game.score(buildAnswers(game, overrides));

/** Validate a game with the given overrides applied over its defaults. */
export const validateWith = (
  game: Game,
  overrides: Record<string, string | number | boolean> = {},
) => game.validate(buildAnswers(game, overrides));
