import { atom } from 'recoil';

export const beachInfoState = atom<Beach[]>({
  key: 'beachInfoState',
  default: [],
});
