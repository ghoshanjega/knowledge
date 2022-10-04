import { isPrime } from './utils/prime';

export function p0007(index: number): number {
  let count = 0;
  let i = 0;
  const primes = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (isPrime(i)) {
      primes.push(i);
      count++;
    }

    if (count === index) {
      console.log(primes.slice(primes.length - 5));
      return i;
    }
    i++;
  }
}
