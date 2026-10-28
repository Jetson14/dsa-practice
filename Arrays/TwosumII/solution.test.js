import { test } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from './solution.js';

test('returns 1-indexed positions of the two numbers that add up to target', () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
});

test('works when the answer is not at the start', () => {
  assert.deepEqual(twoSum([2, 3, 4], 6), [1, 3]);
});

test('works with negative numbers', () => {
  assert.deepEqual(twoSum([-1, 0], -1), [1, 2]);
});
