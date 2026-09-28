import { describe, expect, it } from 'vitest';
import bioglowFuture from '../src/games/2026-BIOGLOW-future';
import { buildAnswers, scoreWith, validateWith } from './helpers';

describe('BIOGLOW Future Edition - metadata', () => {
  it('is registered as the Future Edition program for the 2026-2027 season', () => {
    expect(bioglowFuture.program).toBe('FLL_CHALLENGE_FUTURE');
    expect(bioglowFuture.season).toBe(20262027);
  });

  it('has a mission entry covering every scored question prefix', () => {
    const prefixes = new Set(bioglowFuture.missions.map((m) => m.prefix));
    bioglowFuture.scores.forEach((q) => {
      // Mission ids are a prefix plus a trailing letter (m01a -> m01); ids
      // without that suffix, such as `gp`, are their own prefix.
      const prefix = /^m\d+[a-z]$/.test(q.id) ? q.id.slice(0, -1) : q.id;
      expect(prefixes.has(prefix), `no mission for ${q.id}`).toBe(true);
    });
  });

  it('scores zero when nothing is achieved', () => {
    expect(scoreWith(bioglowFuture)).toBe(0);
  });
});

describe('M01 - Mighty Microbiomes', () => {
  it('awards 20 points per keystone species in each microbiome', () => {
    expect(scoreWith(bioglowFuture, { m01a: 1 })).toBe(20);
    expect(scoreWith(bioglowFuture, { m01b: 2 })).toBe(40);
    expect(scoreWith(bioglowFuture, { m01c: 3 })).toBe(60);
  });

  it('scores all three microbiomes together', () => {
    // 3 + 3 + 3 = 9 species at 20 each
    expect(scoreWith(bioglowFuture, { m01a: 3, m01b: 3, m01c: 3 })).toBe(180);
  });

  it('caps each microbiome at three scoring species', () => {
    // A fourth species in the young forest does not score for placement.
    expect(scoreWith(bioglowFuture, { m01a: 5 })).toBe(60);
  });

  it('adds the 40 point bonus for three in the young forest and the queen down', () => {
    // 3 x 20 = 60, plus the 40 bonus
    expect(scoreWith(bioglowFuture, { m01a: 3, m01d: true })).toBe(100);
  });

  it('does not award the bonus with fewer than three in the young forest', () => {
    expect(scoreWith(bioglowFuture, { m01a: 2, m01d: true })).toBe(40);
  });

  it('does not award the bonus when the queen is still standing', () => {
    expect(scoreWith(bioglowFuture, { m01a: 3, m01d: false })).toBe(60);
  });

  it("accepts a downed queen regardless of this team's young forest count", () => {
    // The queen on the opposite side is knocked down by the OPPOSING team's
    // fourth keystone species, so it is independent of this team's placement.
    expect(validateWith(bioglowFuture, { m01a: 0, m01d: true })).toHaveLength(
      0,
    );
    expect(validateWith(bioglowFuture, { m01a: 3, m01d: true })).toHaveLength(
      0,
    );
  });
});

describe('M02 - Roots of Renewal', () => {
  it('awards 5 points per resource in the grand tree base', () => {
    expect(scoreWith(bioglowFuture, { m02a: 4 })).toBe(20);
  });

  it('awards 10 points per resource in the canopy chamber', () => {
    expect(scoreWith(bioglowFuture, { m02b: 4 })).toBe(40);
  });

  it('caps the canopy chamber at 15 resources', () => {
    expect(scoreWith(bioglowFuture, { m02b: 15 })).toBe(150);
  });

  it('does not cap the base and canopy against a combined total', () => {
    // The rulebook's "maximum 15" applies to the canopy chamber alone; the
    // grand tree base has no stated maximum, so no combined cap is enforced.
    expect(validateWith(bioglowFuture, { m02a: 10, m02b: 10 })).toHaveLength(0);
  });

  it('scores every resource in the base, uncapped', () => {
    expect(scoreWith(bioglowFuture, { m02a: 15 })).toBe(75);
  });
});

describe('M03 - Cave Waterfall', () => {
  it('awards 5 points per keystone species on the counter', () => {
    expect(scoreWith(bioglowFuture, { m03a: 8 })).toBe(40);
  });

  it('caps the counter at 50', () => {
    expect(scoreWith(bioglowFuture, { m03a: 50 })).toBe(250);
  });
});

describe('M04 - Rainforest Awakening', () => {
  it('awards 30 points for releasing all keystone species from the nest', () => {
    expect(scoreWith(bioglowFuture, { m04a: true })).toBe(30);
  });

  it('awards 20 points for releasing all resources from the hollow tree', () => {
    expect(scoreWith(bioglowFuture, { m04b: true })).toBe(20);
  });

  it('awards both releases independently', () => {
    expect(scoreWith(bioglowFuture, { m04a: true, m04b: true })).toBe(50);
  });
});

describe('M05 - Central Haven', () => {
  it('awards 5 points per token resting in the central haven', () => {
    expect(scoreWith(bioglowFuture, { m05a: 6 })).toBe(30);
  });
});

describe('Level Up Challenge - Invasive Attack', () => {
  it('awards 20 points per invasive species added pre-match', () => {
    expect(scoreWith(bioglowFuture, { m06a: 3 })).toBe(60);
  });

  it('caps added invasive species at five', () => {
    expect(scoreWith(bioglowFuture, { m06a: 5 })).toBe(100);
  });

  it('awards 10 points per invasive species in the containment zone', () => {
    expect(scoreWith(bioglowFuture, { m06a: 3, m06b: 3 })).toBe(90);
  });

  it('allows containing one more than was added, for the required queen', () => {
    const errors = validateWith(bioglowFuture, { m06a: 2, m06b: 3 });
    expect(errors.some((e) => e.id === 'm06b')).toBe(false);
  });

  it('flags containing more invasives than exist on the field', () => {
    const errors = validateWith(bioglowFuture, { m06a: 2, m06b: 4 });
    expect(errors.some((e) => e.id === 'm06b')).toBe(true);
  });

  it('allows the queen alone to be contained with no invasives added', () => {
    expect(scoreWith(bioglowFuture, { m06a: 0, m06b: 1 })).toBe(10);
    const errors = validateWith(bioglowFuture, { m06a: 0, m06b: 1 });
    expect(errors.some((e) => e.id === 'm06b')).toBe(false);
  });
});

describe('Validation - general', () => {
  it('reports unanswered questions', () => {
    const answers = buildAnswers(bioglowFuture);
    answers[0].answer = '';
    const errors = bioglowFuture.validate(answers);
    expect(errors.some((e) => e.message.includes('unanswered'))).toBe(true);
  });

  it('returns no errors for a clean default sheet', () => {
    expect(validateWith(bioglowFuture)).toHaveLength(0);
  });
});

describe('Maximum score', () => {
  it('computes the theoretical maximum', () => {
    const max = scoreWith(bioglowFuture, {
      m01a: 3,
      m01b: 3,
      m01c: 3,
      m01d: true,
      m02a: 0,
      m02b: 15,
      m03a: 50,
      m04a: true,
      m04b: true,
      m05a: 50,
      m06a: 5,
      m06b: 6,
    });
    // M01 180 + 40 bonus, M02 150, M03 250, M04 50, M05 250, LevelUp 100 + 60
    expect(max).toBe(1080);
  });
});
