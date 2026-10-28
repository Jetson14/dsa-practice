import { test } from 'node:test';
import assert from 'node:assert/strict';
import { threeSum } from './solution.js';

test('finds all unique triplets that sum to zero', () => {
  assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('returns empty array when no triplet sums to zero', () => {
  assert.deepEqual(threeSum([0, 1, 1]), []);
});

test('handles all zeros', () => {
  assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
});
