import { describe, expect, it } from 'vitest';
import bioglowFounders from '../src/games/2026-BIOGLOW-founders';
import { buildAnswers, scoreWith, validateWith } from './helpers';

/**
 * Points a sheet scores with no missions attempted but the precision tokens
 * zeroed out: the two fragile microhabitats start undisturbed and score 10
 * each unless the robot knocks them. Mission tests add this to their expected
 * value so each assertion reflects only the mission under test.
 */
const UNDISTURBED_HABITATS = 20;

describe('BIOGLOW Founders Edition - metadata', () => {
  it('is registered as the Founders Edition program for the 2026-2027 season', () => {
    expect(bioglowFounders.program).toBe('FLL_CHALLENGE_FOUNDERS');
    expect(bioglowFounders.season).toBe(20262027);
  });

  it('has a mission entry covering every scored question prefix', () => {
    const prefixes = new Set(bioglowFounders.missions.map((m) => m.prefix));
    bioglowFounders.scores.forEach((q) => {
      const prefix = /^m\d+[a-z]$/.test(q.id) ? q.id.slice(0, -1) : q.id;
      expect(prefixes.has(prefix), `no mission for ${q.id}`).toBe(true);
    });
  });

  it('scores only the precision tokens on an untouched sheet', () => {
    // All six precision tokens remain by default, worth 50.
    expect(scoreWith(bioglowFounders)).toBe(50 + UNDISTURBED_HABITATS);
  });
});

describe('Equipment inspection', () => {
  it('awards 20 points for passing inspection', () => {
    expect(scoreWith(bioglowFounders, { m00a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });
});

describe('M01 - Drone Survey', () => {
  it('awards 20 for flying the drone', () => {
    expect(scoreWith(bioglowFounders, { m01a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });

  it('adds 10 for the LiDAR map bonus', () => {
    expect(
      scoreWith(bioglowFounders, { m01a: true, m01b: true, m16a: 0 }),
    ).toBe(30 + UNDISTURBED_HABITATS);
  });

  it('does not award the LiDAR bonus without the drone flown', () => {
    expect(scoreWith(bioglowFounders, { m01b: true, m16a: 0 })).toBe(
      0 + UNDISTURBED_HABITATS,
    );
  });

  it('flags the LiDAR bonus claimed without the drone flown', () => {
    const errors = validateWith(bioglowFounders, { m01a: false, m01b: true });
    expect(errors.some((e) => e.id === 'm01b')).toBe(true);
  });
});

describe('M02 - Exploding Seeds', () => {
  it('awards 10 per seed released', () => {
    expect(scoreWith(bioglowFounders, { m02a: 2, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });

  it('caps at the three seeds on the model', () => {
    expect(scoreWith(bioglowFounders, { m02a: 3, m16a: 0 })).toBe(
      30 + UNDISTURBED_HABITATS,
    );
  });
});

describe('M03 - Flip the Rock', () => {
  it('awards 20 for the research flag being down', () => {
    expect(scoreWith(bioglowFounders, { m03a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });

  it('adds 10 for returning the rock', () => {
    expect(
      scoreWith(bioglowFounders, { m03a: true, m03b: true, m16a: 0 }),
    ).toBe(30 + UNDISTURBED_HABITATS);
  });

  it('does not award the return bonus without the flag down', () => {
    expect(scoreWith(bioglowFounders, { m03b: true, m16a: 0 })).toBe(
      0 + UNDISTURBED_HABITATS,
    );
  });
});

describe('M04 - Lucky Leaves', () => {
  it('awards 10 for the first leaf removed', () => {
    expect(scoreWith(bioglowFounders, { m04a: 1, m16a: 0 })).toBe(
      10 + UNDISTURBED_HABITATS,
    );
  });

  it('adds 20 for the second leaf with the katydid in place', () => {
    expect(scoreWith(bioglowFounders, { m04a: 2, m04b: true, m16a: 0 })).toBe(
      30 + UNDISTURBED_HABITATS,
    );
  });

  it('does not award the second leaf bonus when the katydid moved', () => {
    expect(scoreWith(bioglowFounders, { m04a: 2, m04b: false, m16a: 0 })).toBe(
      10 + UNDISTURBED_HABITATS,
    );
  });

  it('scores zero for the mission when the katydid is outside the habitat', () => {
    expect(
      scoreWith(bioglowFounders, {
        m04a: 2,
        m04b: true,
        m04c: false,
        m16a: 0,
      }),
    ).toBe(0 + UNDISTURBED_HABITATS);
  });

  it('flags a katydid outside the habitat', () => {
    const errors = validateWith(bioglowFounders, { m04a: 1, m04c: false });
    expect(errors.some((e) => e.id === 'm04c')).toBe(true);
  });

  it('flags the second leaf removed with the katydid displaced', () => {
    const errors = validateWith(bioglowFounders, { m04a: 2, m04b: false });
    expect(errors.some((e) => e.id === 'm04b')).toBe(true);
  });
});

describe('M05 - Reaching Roots', () => {
  it('awards 10 for a partially extended root', () => {
    expect(
      scoreWith(bioglowFounders, { m05a: 'Partially extended', m16a: 0 }),
    ).toBe(10 + UNDISTURBED_HABITATS);
  });

  it('awards 20 for a completely extended root', () => {
    expect(
      scoreWith(bioglowFounders, { m05a: 'Completely extended', m16a: 0 }),
    ).toBe(20 + UNDISTURBED_HABITATS);
  });

  it('scores nothing when the root is not extended', () => {
    expect(scoreWith(bioglowFounders, { m05a: 'Not extended', m16a: 0 })).toBe(
      0 + UNDISTURBED_HABITATS,
    );
  });
});

describe('M06 - Leafcutter Frenzy', () => {
  it('awards 10 per fragment when the ant is touching the nest', () => {
    expect(scoreWith(bioglowFounders, { m06a: true, m06b: 4, m16a: 0 })).toBe(
      40 + UNDISTURBED_HABITATS,
    );
  });

  it('scores nothing for fragments when the ant is not home', () => {
    expect(scoreWith(bioglowFounders, { m06a: false, m06b: 4, m16a: 0 })).toBe(
      0 + UNDISTURBED_HABITATS,
    );
  });

  it('caps at the four leaf fragments on the model', () => {
    // The nest holds four fragments: white, yellow, orange and green.
    expect(scoreWith(bioglowFounders, { m06a: true, m06b: 4, m16a: 0 })).toBe(
      40 + UNDISTURBED_HABITATS,
    );
  });

  it('flags fragments contained without the ant touching the nest', () => {
    const errors = validateWith(bioglowFounders, { m06a: false, m06b: 3 });
    expect(errors.some((e) => e.id === 'm06b')).toBe(true);
  });
});

describe('M07 - Humongous Fungus', () => {
  it('awards 20 for a completely extended mycelium', () => {
    expect(scoreWith(bioglowFounders, { m07a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });

  it('adds 10 for the connection bonus', () => {
    expect(
      scoreWith(bioglowFounders, { m07a: true, m07b: true, m16a: 0 }),
    ).toBe(30 + UNDISTURBED_HABITATS);
  });

  it('flags the connection bonus without a fully extended mycelium', () => {
    const errors = validateWith(bioglowFounders, { m07a: false, m07b: true });
    expect(errors.some((e) => e.id === 'm07b')).toBe(true);
  });
});

describe('M08 to M13 - single condition missions', () => {
  it('awards 30 for the vine touching the mat', () => {
    expect(scoreWith(bioglowFounders, { m08a: true, m16a: 0 })).toBe(
      30 + UNDISTURBED_HABITATS,
    );
  });

  it('awards 10 each for the research platform, camera trap and seed', () => {
    expect(
      scoreWith(bioglowFounders, {
        m09a: true,
        m09b: true,
        m09c: true,
        m16a: 0,
      }),
    ).toBe(30 + UNDISTURBED_HABITATS);
  });

  it('awards 10 each for the undisturbed habitats', () => {
    // Both habitats default to undisturbed, so this is the default state.
    expect(
      scoreWith(bioglowFounders, { m10a: true, m10b: true, m16a: 0 }),
    ).toBe(20);
  });

  it('scores nothing for a disturbed habitat', () => {
    expect(
      scoreWith(bioglowFounders, { m10a: false, m10b: false, m16a: 0 }),
    ).toBe(0);
  });

  it('awards 20 for the root cover down', () => {
    expect(scoreWith(bioglowFounders, { m11a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
  });

  it('awards 20 and 10 for the forest elder cane and support tie', () => {
    expect(scoreWith(bioglowFounders, { m12a: true, m16a: 0 })).toBe(
      20 + UNDISTURBED_HABITATS,
    );
    expect(scoreWith(bioglowFounders, { m12b: true, m16a: 0 })).toBe(
      10 + UNDISTURBED_HABITATS,
    );
  });

  it('awards 30 for the keystone species delivered', () => {
    expect(scoreWith(bioglowFounders, { m13a: true, m16a: 0 })).toBe(
      30 + UNDISTURBED_HABITATS,
    );
  });
});

describe('M14 - Seeds of Renewal', () => {
  it('awards 5 per seed in the replantation station', () => {
    expect(scoreWith(bioglowFounders, { m02a: 3, m14a: 3, m16a: 0 })).toBe(
      30 + 15 + UNDISTURBED_HABITATS,
    );
  });

  it('adds 5 for each seed also touching the mat', () => {
    // 3 seeds released (30) + 3 planted (15) + 3 touching the mat (15)
    expect(
      scoreWith(bioglowFounders, { m02a: 3, m14a: 3, m14b: 3, m16a: 0 }),
    ).toBe(60 + UNDISTURBED_HABITATS);
  });

  it('only awards the mat bonus for seeds in the station', () => {
    expect(
      scoreWith(bioglowFounders, { m02a: 1, m14a: 1, m14b: 4, m16a: 0 }),
    ).toBe(10 + 5 + 5 + UNDISTURBED_HABITATS);
  });

  it('flags planting more seeds than were released', () => {
    const errors = validateWith(bioglowFounders, {
      m02a: 1,
      m09c: false,
      m14a: 3,
    });
    expect(errors.some((e) => e.id === 'm14a')).toBe(true);
  });

  it('counts the research platform seed as available to plant', () => {
    // 3 from the stalk plus 1 from the tree is the maximum of 4.
    const errors = validateWith(bioglowFounders, {
      m02a: 3,
      m09c: true,
      m14a: 4,
    });
    expect(errors.some((e) => e.id === 'm14a')).toBe(false);
  });

  it('flags more seeds touching the mat than are in the station', () => {
    const errors = validateWith(bioglowFounders, {
      m02a: 3,
      m14a: 2,
      m14b: 3,
    });
    expect(errors.some((e) => e.id === 'm14b')).toBe(true);
  });
});

describe('M15 - Biocentric Architecture', () => {
  it('awards 10 for each completed feature', () => {
    expect(
      scoreWith(bioglowFounders, {
        m15a: true,
        m15b: true,
        m15c: true,
        m16a: 0,
      }),
    ).toBe(30 + UNDISTURBED_HABITATS);
  });

  it('adds the environmental bonus when the mine dock matches the nesting canopy', () => {
    expect(
      scoreWith(bioglowFounders, { m15a: true, m15d: 'Mine dock', m16a: 0 }),
    ).toBe(20 + UNDISTURBED_HABITATS);
  });

  it('adds the environmental bonus when the city dock matches the garden skylight', () => {
    expect(
      scoreWith(bioglowFounders, { m15b: true, m15d: 'City dock', m16a: 0 }),
    ).toBe(20 + UNDISTURBED_HABITATS);
  });

  it('adds the environmental bonus when the farm dock matches the compost hatch', () => {
    expect(
      scoreWith(bioglowFounders, { m15c: true, m15d: 'Farm dock', m16a: 0 }),
    ).toBe(20 + UNDISTURBED_HABITATS);
  });

  it('does not award the bonus when the dock feature is incomplete', () => {
    expect(
      scoreWith(bioglowFounders, { m15a: true, m15d: 'City dock', m16a: 0 }),
    ).toBe(10 + UNDISTURBED_HABITATS);
  });

  it('awards only one environmental bonus even with every feature complete', () => {
    // 3 features (30) + a single 10 point bonus
    expect(
      scoreWith(bioglowFounders, {
        m15a: true,
        m15b: true,
        m15c: true,
        m15d: 'Farm dock',
        m16a: 0,
      }),
    ).toBe(40 + UNDISTURBED_HABITATS);
  });
});

describe('Precision tokens', () => {
  it.each([
    [6, 50],
    [5, 50],
    [4, 35],
    [3, 25],
    [2, 15],
    [1, 10],
    [0, 0],
  ])('awards %i tokens as %i points', (tokens, points) => {
    expect(scoreWith(bioglowFounders, { m16a: tokens })).toBe(
      points + UNDISTURBED_HABITATS,
    );
  });
});

describe('Validation - general', () => {
  it('reports unanswered questions', () => {
    const answers = buildAnswers(bioglowFounders);
    answers[0].answer = '';
    const errors = bioglowFounders.validate(answers);
    expect(errors.some((e) => e.message.includes('unanswered'))).toBe(true);
  });

  it('returns no errors for a clean default sheet', () => {
    expect(validateWith(bioglowFounders)).toHaveLength(0);
  });

  it('returns no errors for a consistent perfect sheet', () => {
    const errors = validateWith(bioglowFounders, {
      m00a: true,
      m01a: true,
      m01b: true,
      m02a: 3,
      m03a: true,
      m03b: true,
      m04a: 2,
      m04b: true,
      m04c: true,
      m05a: 'Completely extended',
      m06a: true,
      m06b: 4,
      m07a: true,
      m07b: true,
      m08a: true,
      m09a: true,
      m09b: true,
      m09c: true,
      m10a: true,
      m10b: true,
      m11a: true,
      m12a: true,
      m12b: true,
      m13a: true,
      m14a: 4,
      m14b: 4,
      m15a: true,
      m15b: true,
      m15c: true,
      m15d: 'Farm dock',
      m16a: 6,
    });
    expect(errors).toHaveLength(0);
  });
});

describe('Maximum score', () => {
  it('computes the theoretical maximum', () => {
    const max = scoreWith(bioglowFounders, {
      m00a: true,
      m01a: true,
      m01b: true,
      m02a: 3,
      m03a: true,
      m03b: true,
      m04a: 2,
      m04b: true,
      m04c: true,
      m05a: 'Completely extended',
      m06a: true,
      m06b: 4,
      m07a: true,
      m07b: true,
      m08a: true,
      m09a: true,
      m09b: true,
      m09c: true,
      m10a: true,
      m10b: true,
      m11a: true,
      m12a: true,
      m12b: true,
      m13a: true,
      m14a: 4,
      m14b: 4,
      m15a: true,
      m15b: true,
      m15c: true,
      m15d: 'Farm dock',
      m16a: 6,
    });
    // Inspection 20, M01 30, M02 30, M03 30, M04 30, M05 20, M06 40, M07 30,
    // M08 30, M09 30, M10 20, M11 20, M12 30, M13 30, M14 40, M15 40,
    // precision tokens 50
    expect(max).toBe(520);
  });
});
