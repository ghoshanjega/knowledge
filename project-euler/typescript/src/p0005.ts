import { isPrime } from './utils/prime';

// brute
export function p0005(limit: number) {
  let index = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (let divider = 1; divider <= limit; divider++) {
      if (index % divider !== 0) {
        index++;
        break;
      }
      if (divider == limit) {
        return index;
      }
    }
  }
}

export function p0005efficient(limit: number) {
  let index = 1;
  let i = 0;
  let check = true;
  const primes = [...Array(limit).keys()].filter((item) => isPrime(item));
  const exponents = [...Array(primes.length).keys()];
  while (primes[i] <= limit) {
    exponents[i] = 1;
    if (check) {
      if (primes[i] <= Math.sqrt(limit)) {
        exponents[i] = Math.floor(Math.log(limit) / Math.log(primes[i]));
      } else {
        check = false;
      }
    }
    index = index * Math.pow(primes[i], exponents[i]);
    i = i + 1;
  }
  return index;
}
