/**
 * Regenerates docs/2026-scoresheets.md from the live game definitions.
 *
 * Specific to the 2026-2027 season: the mission notes below are written by
 * hand for these two games, and the best-case sheets name their questions.
 * A later season wants its own copy of this script, not a generalisation
 * of this one.
 *
 * Point values are probed from each game's own `score` function rather than
 * transcribed, so the document cannot drift from the code. Cross-question
 * rules (bonuses, gating, zeroing) are declared below per mission, since they
 * live inside `score`/`validate` and cannot be read off the question list.
 *
 * Run with: pnpm docs
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import bioglowFounders from '../src/games/2026-BIOGLOW-founders';
import bioglowFuture from '../src/games/2026-BIOGLOW-future';
import {
  isBooleanScore,
  isCategoricalScore,
  isNumericScore,
} from '../src/extras';
import { Game, Score, ScoreAnswer } from '../src/game-types';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Answers keyed by question id, used to override a game's defaults. */
type Overrides = Record<string, string | number | boolean>;

/** Build a full answer sheet from defaults, with overrides applied. */
const sheet = (game: Game, overrides: Overrides = {}): ScoreAnswer[] =>
  game.scores.map((q) => {
    const raw = q.id in overrides ? overrides[q.id] : q.defaultValue;
    return {
      id: q.id,
      answer: typeof raw === 'boolean' ? (raw ? 'Yes' : 'No') : String(raw),
    };
  });

/** The value that makes a question score as highly as possible. */
const bestValue = (q: Score): string | number | boolean => {
  if (isBooleanScore(q)) return true;
  if (isNumericScore(q)) return q.max;
  return q.options[q.options.length - 1];
};

/** The value that makes a question score as little as possible. */
const worstValue = (q: Score): string | number | boolean => {
  if (isBooleanScore(q)) return false;
  if (isNumericScore(q)) return q.min;
  return q.options[0];
};

/**
 * How a question moves the score on its own, with every other answer left at
 * its default. Most questions gain points from their best answer; a few start
 * satisfied (an undisturbed habitat) and instead lose points from their worst,
 * which is worth showing as a penalty rather than a blank.
 */
const soloPoints = (game: Game, q: Score, best: Overrides): string => {
  const base = game.score(sheet(game));
  const gain = game.score(sheet(game, { [q.id]: bestValue(q) })) - base;
  if (gain > 0) return String(gain);
  const loss = base - game.score(sheet(game, { [q.id]: worstValue(q) }));
  if (loss > 0) return `${loss} _(lost if not met)_`;
  // Scores nothing on its own, so it gates or is gated by another question.
  // Measure it against the best-case sheet, where its dependencies are met,
  // to report the points actually at stake rather than a bare "conditional".
  const withBest = game.score(sheet(game, best));
  const without = game.score(sheet(game, { ...best, [q.id]: worstValue(q) }));
  const swing = withBest - without;
  if (swing > 0) return `${swing} _(conditional)_`;
  return '0 _(no points)_';
};

/** Describes the answer domain of a question. */
const domain = (q: Score): string => {
  if (isBooleanScore(q))
    return `Yes / No (default ${q.defaultValue ? 'Yes' : 'No'})`;
  if (isNumericScore(q)) return `${q.min}-${q.max} (default ${q.defaultValue})`;
  return q.options.map((o) => `\`${o}\``).join(', ');
};

/**
 * Cross-question rules, keyed by mission prefix. These are the parts a reader
 * would otherwise have to reconstruct from `score` and `validate`.
 */
type Notes = { scoring?: string[]; validation?: string[] };

const foundersNotes: Record<string, Notes> = {
  m01: {
    scoring: ['The LiDAR bonus (10) only scores if the drone is flown (m01a).'],
    validation: ['m01b set without m01a.'],
  },
  m03: {
    scoring: [
      'The rock-return bonus (10) only scores if the flag is down (m03a).',
    ],
    validation: ['m03b set without m03a.'],
  },
  m04: {
    scoring: [
      'A katydid outside the leaf habitat (m04c = No) zeroes the whole mission.',
      'First leaf 10; the second leaf adds 20 only if the katydid is in its starting position (m04b).',
    ],
    validation: [
      'Two leaves removed but m04b = No (bonus lost).',
      'm04c = No while any leaf is removed (mission zeroed).',
    ],
  },
  m05: { scoring: ['Only one condition scores: partial 10, complete 20.'] },
  m06: {
    scoring: [
      'Fragments score 10 each only while the ant touches the nest (m06a); otherwise the mission scores 0.',
      'The nest holds four fragments (white, yellow, orange, green), so 40 is the mission maximum.',
    ],
    validation: ['Fragments counted with m06a = No.'],
  },
  m07: {
    scoring: [
      'The connection bonus (10) requires your mycelium fully extended (m07a).',
    ],
    validation: ['m07b set without m07a.'],
  },
  m10: {
    scoring: [
      'Both habitats start undisturbed and score 10 each; points are lost by knocking them, not gained.',
    ],
  },
  m14: {
    scoring: [
      '5 per seed in the station, plus 5 more for each of those also touching the mat.',
      'Only 4 seeds exist: 3 from M02 and 1 from M09.',
    ],
    validation: [
      'More seeds planted than were released (m02a + m09c).',
      'More seeds touching the mat (m14b) than are in the station (m14a).',
    ],
  },
  m15: {
    scoring: [
      '10 per completed feature.',
      'Environmental bonus 10 if the dock (m15d) matches a completed feature: Mine/canopy, City/skylight, Farm/hatch. Only one bonus is possible.',
    ],
  },
  m16: {
    scoring: [
      'Tokens remaining: 6 or 5 = 50, 4 = 35, 3 = 25, 2 = 15, 1 = 10, 0 = 0.',
    ],
  },
};

const futureNotes: Record<string, Notes> = {
  m01: {
    scoring: [
      '20 per keystone species, max 3 scoring per microbiome.',
      'A fourth keystone in the young forest scores nothing for placement; it is what knocks down the queen on the *opposing* side of the field.',
      "Bonus 40 for 3 in the young forest (m01a) AND the opposing queen down (m01d). m01d is set by the opposing team's fourth keystone, so it is independent of this team's own count.",
    ],
  },
  m02: {
    scoring: [
      '5 per resource in the tree base (no stated maximum), 10 per resource in the canopy chamber (maximum 15).',
      'Resources must be cycled up the tree; placing them directly into the canopy chamber does not count.',
    ],
  },
  m03: {
    scoring: ['5 per keystone species shown on the counter, capped at 50.'],
  },
  m05: {
    scoring: [
      'Cooperative: both teams receive the full value. 5 per item, no stated maximum.',
    ],
  },
  m06: {
    scoring: [
      '20 per invasive added pre-match (max 5), 10 per invasive in the containment zone.',
    ],
    validation: [
      'More contained than exist on the field (added + the required queen).',
    ],
  },
};

/**
 * The highest-scoring sheet that still passes validation. Maxing every
 * question independently can describe an impossible field (15 resources in
 * the tree base AND 15 in the canopy, when only 15 exist), so each game
 * declares its own best case and the renderer asserts it is legal.
 */
const bestSheets: Record<string, Overrides> = {
  'BIOGLOW Founders Edition': {
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
  },
  'BIOGLOW Future Edition': {
    m01a: 3,
    m01b: 3,
    m01c: 3,
    m01d: true,
    // Only 15 resources exist; all 15 cycled to the canopy scores highest.
    m02a: 0,
    m02b: 15,
    m03a: 50,
    m04a: true,
    m04b: true,
    m05a: 50,
    m06a: 5,
    m06b: 6,
  },
};

const renderGame = (game: Game, notes: Record<string, Notes>): string => {
  const lines: string[] = [];
  lines.push(`## ${game.name}`);
  lines.push('');
  const best = bestSheets[game.name];
  if (!best) throw new Error(`No best-case sheet declared for ${game.name}`);
  const errors = game.validate(sheet(game, best));
  if (errors.length) {
    throw new Error(
      `Best-case sheet for ${game.name} fails validation: ${errors
        .map((e) => e.message)
        .join('; ')}`,
    );
  }
  lines.push(
    `\`${game.program}\` · season ${game.season} · **maximum ${game.score(
      sheet(game, best),
    )} points**`,
  );
  lines.push('');

  game.missions.forEach((m) => {
    const qs = game.scores.filter((q) =>
      /^m\d+[a-z]$/.test(q.id)
        ? q.id.slice(0, -1) === m.prefix
        : q.id === m.prefix,
    );
    if (!qs.length) return;
    lines.push(`### ${m.title}`);
    lines.push('');
    lines.push('| ID | Question | Answers | Points |');
    lines.push('| --- | --- | --- | --- |');
    qs.forEach((q) => {
      const label = q.label.replace(/\|/g, '\\|');
      lines.push(
        `| \`${q.id}\` | ${label} | ${domain(q)} | ${soloPoints(
          game,
          q,
          best,
        )} |`,
      );
    });
    lines.push('');
    const n = notes[m.prefix];
    if (n?.scoring) {
      n.scoring.forEach((s) => lines.push(`- **Scoring:** ${s}`));
    }
    if (n?.validation) {
      n.validation.forEach((v) => lines.push(`- **Validation error:** ${v}`));
    }
    if (n) lines.push('');
  });
  return lines.join('\n');
};

const out = [
  '<!-- Generated by scripts/generate-2026-scoresheet-docs.mts - run `pnpm docs` to refresh. -->',
  '',
  '# 2026-2027 BIOGLOW™ scoresheets',
  '',
  'A one-page cross-check of the questions, scoring and validation for both',
  "2026 editions. Point values are probed from each game's own `score`",
  'function, so this table reflects the code as it actually runs.',
  '',
  'A plain **Points** value is what that question contributes on its own, with',
  'every other answer left at its default. `(conditional)` marks a question',
  'that scores nothing by itself because it gates, or is gated by, another;',
  'the number is what it is worth once its dependencies are met, so for a gate',
  "like M06's ant that is the whole mission riding on it. `(lost if not met)`",
  'marks a question that starts satisfied, where points are forfeited rather',
  'than earned. The Scoring notes under each mission explain each case.',
  '',
  'The **Answers** range is the input bound a referee can enter, which is not',
  'always a scoring cap - where the rulebook states no maximum, every entered',
  'item scores. The Scoring notes call out the rulebook maxima that are real.',
  '',
  renderGame(bioglowFounders, foundersNotes),
  renderGame(bioglowFuture, futureNotes),
].join('\n');

const target = resolve(__dirname, '../docs/2026-scoresheets.md');
writeFileSync(target, out.endsWith('\n') ? out : `${out}\n`);
console.log(`Wrote ${target}`);
