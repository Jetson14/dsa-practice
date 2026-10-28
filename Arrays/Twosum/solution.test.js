import { test } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from './solution.js';

test('returns indices of the two numbers that add up to target', () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

test('works when the answer is not at the start', () => {
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
});

test('returns empty array when no solution exists', () => {
  assert.deepEqual(twoSum([1, 2, 3], 100), []);
});
