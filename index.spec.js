import {expect, test} from '@jest/globals';
import {sum, average, median} from "./index.js";

test('median([]) thrown error', () => {
  expect(() => median([])).toThrow(/^Input must be a non-empty array of numbers.$/)
})

test('median([1]) = 1', () => {
  expect(median([1])).toBe(1)
});

test('median([2,2,2]) = 2', () => {
  expect(median([2,2,2])).toBe(2)
});


test('median([2,2,2,2]) = 2', () => {
  expect(median([2,2,2,2])).toBe(2)
});

test('average([1]) = 1', () => {
  expect(average([1])).toBe(1)
});

test('average([2,2,2]) = 2', () => {
  expect(average([2,2,2])).toBe(2)
});

test('average([1, 2, 4, 8, 16]) = 31', () => {
  expect(average([1, 2, 4, 8, 16])).toBe(6.2)
});

test('average([1, 2, 4]) = 2.3', () => {
  expect(average([1, 2, 4])).toBeCloseTo(2.333333)
});

test('average([]) = error', () => {
  expect(() => average([]))
    .toThrow(/^Input must be a non-empty array of numbers.$/)
});


test('sum([]) = 0', () => {
  expect(sum([0])).toBe(0)
});

test('sum([-1]) = -1', () => {
  expect(sum([-1])).toBe(-1)
});

test('sum([-1,-2]) = -1-2', () => {
  expect(sum([-1])).toBe(-1)
});