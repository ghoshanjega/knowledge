import { sumReducer } from './utils/reducers';

export function p0001(range: number): number {
  const divisible: number[] = [];
  [...Array(range).keys()].forEach((item) => {
    if (item % 5 === 0 || item % 3 === 0) {
      divisible.push(item);
    }
  });
  return divisible.reduce(sumReducer);
}
