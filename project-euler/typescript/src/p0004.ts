import { isPalindrome } from './utils/palindrome';

export function p0004(digits: number): number {
  let largestPalindrome = 0;
  const limit = Math.pow(10, digits);
  for (let p = 0; p < limit; p++) {
    for (let q = 0; q < limit; q++) {
      const product = p * q;
      if (isPalindrome(product)) {
        largestPalindrome = product > largestPalindrome ? product : largestPalindrome;
      }
    }
  }
  return largestPalindrome;
}
