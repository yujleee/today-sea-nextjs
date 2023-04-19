import { atom } from 'recoil';

export const beachInfoState = atom<Beach[]>({
  key: 'beachInfoState',
  default: [],
});

export const beachNumState = atom<number>({
  key: 'beachNumState',
  default: 1,
});

export const currentBeachNameState = atom<string>({
  key: 'currentBeachNameState',
  default: '',
});

export const currentTimeState = atom<Now>({
  key: 'currentTimeState',
  default: { date: '', time: '' },
});
