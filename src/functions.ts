import { Score, ScoreAnswer } from 'game-types';

export const answer = (res: ScoreAnswer[], q: Score['id']) => {
  try {
    return res.find((r) => r.id === q)?.answer;
  } catch (e: any) {
    return '';
  }
};

export const nAnswer = (res: ScoreAnswer[], q: Score['id']): number => {
  try {
    const a = res.find((r) => r.id === q)?.answer;
    if (a) return Number.parseInt(a);
    else return 0;
  } catch (e: any) {
    return 0;
  }
};

export const bAnswer = (res: ScoreAnswer[], q: Score['id']) => {
  try {
    const strAnswer = res.find((r) => r.id === q)?.answer;
    return strAnswer === 'true' || strAnswer === 'Yes' || strAnswer === '1';
  } catch (e: any) {
    return '';
  }
};
