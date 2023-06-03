export const programs = [
  'FLL_CHALLENGE',
  'FLL_EXPLORE',
  'FLL_DISCOVER',
  'FIRST_TECH_CHALLENGE',
  'FIRST_ROBOTICS_COMPETITION',
] as const;

export const seasons = [
  20192020, 20202021, 20212022, 20222023, 20232024,
] as const;

export const CURRENT_SEASON = 20232024;

export type Program = (typeof programs)[number];
export type Season = (typeof seasons)[number];
