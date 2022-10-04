export const isPalindrome = (n: number): boolean => {
  let p = 0;
  const q = n;
  let r;
  while (n > 0) {
    r = n % 10;
    p = 10 * p + r;
    n = Math.floor(n / 10);
  }
  return p === q;
};
