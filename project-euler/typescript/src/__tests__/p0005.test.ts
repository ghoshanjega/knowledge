import { p0005, p0005efficient } from '../p0005';

test('should return the smallest multiple', () => {
  expect(p0005(20)).toBe(232792560);
});

test('should return the smallest multiple', () => {
  expect(p0005efficient(20)).toBe(232792560);
});
