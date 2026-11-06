import { describe, expect, it } from 'vitest';
import { seasons } from '../src/first-constants';
import {
  answersCarriedOver,
  findGame,
  gamesForSeason,
  revisionFor,
  revisionsOf,
} from '../src/games';
import bioglowFounders from '../src/games/2026-BIOGLOW-founders';
import bioglowFoundersR1 from '../src/games/2026-BIOGLOW-founders-r1';
import submerged from '../src/games/2024-Submerged';
import { buildAnswers } from './helpers';

const SEASON = 20262027;
const FOUNDERS = 'FLL_CHALLENGE_FOUNDERS';

describe('revisionsOf', () => {
  it('lists the Founders Edition revisions newest first', () => {
    expect(revisionsOf(bioglowFounders)).toEqual([
      bioglowFounders,
      bioglowFoundersR1,
    ]);
    expect(bioglowFounders.revision).toBe(2);
    expect(bioglowFoundersR1.revision).toBe(1);
  });

  it('gives each revision of every game a distinct number', () => {
    seasons.flatMap(gamesForSeason).forEach((game) => {
      const numbers = revisionsOf(game).map((r) => r.revision);
      expect(new Set(numbers).size, game.name).toBe(numbers.length);
      expect(Math.max(...numbers), game.name).toBe(game.revision);
    });
  });

  it('keeps a game with no rule changes at revision 1', () => {
    expect(revisionsOf(submerged)).toEqual([submerged]);
    expect(submerged.revision).toBe(1);
  });
});

describe('revisionFor', () => {
  it('uses the revision recorded on the sheet', () => {
    expect(revisionFor(bioglowFounders, { revision: 1 })).toBe(
      bioglowFoundersR1,
    );
    expect(revisionFor(bioglowFounders, { revision: 2 })).toBe(bioglowFounders);
  });

  it('prefers the recorded revision over what the answers suggest', () => {
    const answers = buildAnswers(bioglowFoundersR1);
    expect(revisionFor(bioglowFounders, { revision: 2, answers })).toBe(
      bioglowFounders,
    );
  });

  it('throws for a revision this package does not know', () => {
    expect(() => revisionFor(bioglowFounders, { revision: 3 })).toThrow(
      /no revision 3/,
    );
  });

  it('recognises an unrecorded revision 1 sheet by its retired m04c answer', () => {
    const answers = buildAnswers(bioglowFoundersR1);
    expect(revisionFor(bioglowFounders, { answers })).toBe(bioglowFoundersR1);
  });

  it('treats an unrecorded sheet answering the current questions as current', () => {
    const answers = buildAnswers(bioglowFounders);
    expect(revisionFor(bioglowFounders, { answers })).toBe(bioglowFounders);
  });

  it('falls back to the current revision when nothing identifies the sheet', () => {
    expect(revisionFor(bioglowFounders, {})).toBe(bioglowFounders);
    expect(
      revisionFor(bioglowFounders, {
        answers: [{ id: 'unknown', answer: 'Yes' }],
      }),
    ).toBe(bioglowFounders);
  });
});

describe('findGame', () => {
  it('returns the current revision without a sheet', () => {
    expect(findGame(SEASON, FOUNDERS)).toBe(bioglowFounders);
  });

  it("returns the sheet's revision with a sheet", () => {
    expect(findGame(SEASON, FOUNDERS, { revision: 1 })).toBe(bioglowFoundersR1);
    expect(
      findGame(SEASON, FOUNDERS, { answers: buildAnswers(bioglowFoundersR1) }),
    ).toBe(bioglowFoundersR1);
  });

  it('still returns the only game of a single-game season', () => {
    expect(findGame(20242025, 'FLL_CHALLENGE', { revision: 1 })).toBe(
      submerged,
    );
  });

  it('still throws when a multi-game season has no game for the program', () => {
    expect(() => findGame(SEASON, 'FLL_EXPLORE')).toThrow();
  });
});

describe('answersCarriedOver', () => {
  const r1Answers = buildAnswers(bioglowFoundersR1, {
    m00a: true,
    m04a: 1,
    m04b: false,
    m04c: true,
    m07b: 1,
  });
  const carried = answersCarriedOver(
    bioglowFoundersR1,
    bioglowFounders,
    r1Answers,
  );
  const carriedIds = carried.map((a) => a.id);

  it('keeps answers to questions that did not change', () => {
    expect(carried).toContainEqual({ id: 'm00a', answer: 'Yes' });
    expect(carried).toContainEqual({ id: 'm04a', answer: '1' });
  });

  it('drops the re-worded m04b, whose old answer means something else now', () => {
    expect(carriedIds).not.toContain('m04b');
  });

  it('drops the retired m04c', () => {
    expect(carriedIds).not.toContain('m04c');
  });

  it('drops m07b, whose wording changed', () => {
    expect(carriedIds).not.toContain('m07b');
  });

  it('carries over nothing new: m04d and m04e need answering', () => {
    expect(carriedIds).not.toContain('m04d');
    expect(carriedIds).not.toContain('m04e');
  });

  it('keeps every answer within a revision', () => {
    const answers = buildAnswers(bioglowFounders);
    expect(answersCarriedOver(bioglowFounders, bioglowFounders, answers)).toBe(
      answers,
    );
  });
});
