import { sumReducer } from './utils/reducers';

export function p0002(range: number): number {
  const fibo = [1, 2];
  while (fibo[fibo.length - 1] < range) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo.filter((i) => !(i % 2)).reduce(sumReducer);
}
