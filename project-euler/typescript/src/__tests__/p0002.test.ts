import { p0002 } from '../p0002';

test('should return the sum of even fibonacci numbers', () => {
  expect(p0002(4000000)).toBe(4613732);
});
