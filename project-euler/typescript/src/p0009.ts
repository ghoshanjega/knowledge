export function p0009(p: number): number {
  let a = 1;
  let b = a + 1;
  let c;

  while (a < p) {
    while (b < p && b > a) {
      c = p - a - b;
      if (c < b) {
        break;
      }
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        console.log(a * b * c);
        return a * b * c;
      }
      b++;
    }
    a++;
    b = a + 1;
  }
  return 0;
}

// p = expectedSum
// (p - a - b)(p - a -b) = a^2 + b^2
// p^2 - pa -pb -pa +a^2 + ab - pb + ab + b^2 = a^2 + b^2
// p^2 - 2pa  -2pb + 2ab + a^2 + b^2 = a^2 + b^2
// p^2 - 2pa - 2pb + 2ab = 0
// 2ab + p^2 = 2pa + 2pb
// ab + p^2/2 = p(a+b)
// ab/p + p = a + b
