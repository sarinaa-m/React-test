import { test, expect } from 'vitest';
import { sum } from './Sum';

test('sum adds numbers correctly', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 5)).toBe(4);
});
