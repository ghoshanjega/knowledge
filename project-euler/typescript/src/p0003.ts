export function p0003(n: number): number {
  const primes: number[] = [];
  while (n % 2 === 0) {
    primes.push(2);
    n = Math.floor(n / 2);
  }

  for (let index = 3; index <= Math.sqrt(n); index = index + 2) {
    while (n % index === 0) {
      primes.push(index);
      n = Math.floor(n / index);
    }
  }

  if (n > 2) {
    primes.push(n);
  }
  return primes.sort((a, b) => a - b)[primes.length - 1];
}
