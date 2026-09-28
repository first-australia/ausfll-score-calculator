import { describe, expect, it } from 'vitest';
import missionPics, {
  editionMissionPics,
  picsFor,
  singleEditionSeasons,
} from '../src/firebase.links';
import { seasons } from '../src/first-constants';

describe('mission images', () => {
  it('has a flat entry for every single-edition season', () => {
    singleEditionSeasons.forEach((season) => {
      expect(missionPics[season], `no entry for ${season}`).toBeDefined();
    });
  });

  it('keeps multi-edition seasons out of the flat map', () => {
    // 2026-2027 carries two editions, so it lives in editionMissionPics only.
    expect(singleEditionSeasons).not.toContain(20262027);
    expect(editionMissionPics[20262027]).toBeDefined();
  });

  it('lists both 2026-2027 editions', () => {
    const entry = editionMissionPics[20262027];
    expect(entry).toHaveProperty('FLL_CHALLENGE_FOUNDERS');
    expect(entry).toHaveProperty('FLL_CHALLENGE_FUTURE');
  });

  it('only registers seasons that exist', () => {
    Object.keys(editionMissionPics).forEach((season) => {
      expect(seasons).toContain(Number(season));
    });
  });

  it('returns an empty map for an edition with no images yet', () => {
    // Images are added by hand after the season art is cropped, so an empty
    // map must still be safe to index.
    expect(picsFor(20262027, 'FLL_CHALLENGE_FOUNDERS')).toEqual({});
    expect(picsFor(20262027, 'FLL_CHALLENGE_FOUNDERS').m01).toBeUndefined();
  });

  it('returns an empty map for a season with no edition entry', () => {
    expect(picsFor(20252026, 'FLL_CHALLENGE')).toEqual({});
  });
});
