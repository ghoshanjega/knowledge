import { p0006, p0006efficient } from '../p0006';

test('should return the sum square difference', () => {
  expect(p0006(100)).toBe(25164150);
});

test('should return the sum square difference', () => {
  expect(p0006efficient(100)).toBe(25164150);
});
