import { range } from './utils/array';
import { sumReducer } from './utils/reducers';

export function p0006(limit: number): number {
  const squareAndThenSum = range(1, limit + 1)
    .map((num) => Math.pow(num, 2))
    .reduce(sumReducer);
  const sumAndThenSquare = Math.pow(range(1, limit + 1).reduce(sumReducer), 2);
  return sumAndThenSquare - squareAndThenSum;
}

export function p0006efficient(limit: number) {
  const squareAndThenSum = (2 * limit + 1) * (limit + 1) * (limit / 6);
  const sumAndThenSquare = Math.pow((limit + 1) * (limit / 2), 2);
  return sumAndThenSquare - squareAndThenSum;
}
