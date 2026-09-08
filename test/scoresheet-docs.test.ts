import { execFileSync } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, expect, it } from 'vitest';

const DOC = resolve(__dirname, '../docs/2026-scoresheets.md');

describe('generated scoresheet documentation', () => {
  it('is up to date with the game definitions', () => {
    const before = readFileSync(DOC, 'utf8');
    // Regenerating is a pure function of the game objects, so a difference
    // means a game changed without `pnpm docs` being run.
    execFileSync(
      'npx',
      ['vite-node', 'scripts/generate-2026-scoresheet-docs.mts'],
      {
        cwd: resolve(__dirname, '..'),
        stdio: 'pipe',
      },
    );
    const after = readFileSync(DOC, 'utf8');
    expect(after, 'docs/2026-scoresheets.md is stale - run `pnpm docs`').toBe(
      before,
    );
  });
});
