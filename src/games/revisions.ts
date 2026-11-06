import { Game, Score, ScoreAnswer } from '../game-types';
import bioglowFounders from './2026-BIOGLOW-founders';
import bioglowFoundersR1 from './2026-BIOGLOW-founders-r1';

/** Earlier revisions of each current game, newest first */
const earlierRevisions = new Map<Game, Game[]>([
  [bioglowFounders, [bioglowFoundersR1]],
]);

/** Every revision of a game, newest (current) first */
export const revisionsOf = (game: Game): Game[] => [
  game,
  ...(earlierRevisions.get(game) ?? []),
];

/** What a saved scoresheet records about the game it was scored with */
export type SavedScoresheet = {
  /** The `Game['revision']` the sheet was saved with, if it was recorded */
  revision?: number;
  answers?: ScoreAnswer[];
};

/**
 * The revision of `game` that a saved scoresheet was scored with, for showing
 * and scoring the sheet as the referee recorded it.
 *
 * Uses the sheet's recorded revision when it has one. A sheet saved before
 * revisions were recorded gets the newest revision that asks every question
 * the sheet answers, falling back to the current revision.
 *
 * Throws if the sheet records a revision this package does not know, which
 * means the sheet was saved with a newer version of this package.
 */
export const revisionFor = (game: Game, sheet: SavedScoresheet): Game => {
  const revisions = revisionsOf(game);

  if (sheet.revision !== undefined) {
    const recorded = revisions.find((r) => r.revision === sheet.revision);
    if (!recorded) {
      throw Error(
        `${game.name} has no revision ${sheet.revision}; update ausfll-score-calculator`,
      );
    }
    return recorded;
  }

  const answered = (sheet.answers ?? []).map((a) => a.id);
  return (
    revisions.find((r) => {
      const asked = new Set(r.scores.map((q) => q.id));
      return answered.every((id) => asked.has(id));
    }) ?? game
  );
};

/** Whether two questions ask the same thing with the same possible answers */
const sameQuestion = (a: Score, b: Score): boolean => {
  if (a.id !== b.id || a.type !== b.type || a.label !== b.label) return false;
  if (a.type === 'numeric' && b.type === 'numeric') {
    return a.min === b.min && a.max === b.max;
  }
  if (a.type === 'categorical' && b.type === 'categorical') {
    return (
      a.options.length === b.options.length &&
      a.options.every((option, i) => option === b.options[i])
    );
  }
  return true;
};

/**
 * The answers from a sheet scored with revision `from` that still apply in
 * revision `to`: those whose question has the same wording and possible
 * answers in both. Use it to pre-fill a sheet being re-scored under a newer
 * revision; every other question needs answering again.
 */
export const answersCarriedOver = (
  from: Game,
  to: Game,
  answers: ScoreAnswer[],
): ScoreAnswer[] => {
  if (from === to) return answers;
  const unchanged = new Set(
    to.scores
      .filter((q) => {
        const old = from.scores.find((o) => o.id === q.id);
        return old !== undefined && sameQuestion(old, q);
      })
      .map((q) => q.id),
  );
  return answers.filter((a) => unchanged.has(a.id));
};
