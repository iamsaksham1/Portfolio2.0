import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateScrollOffset,
  calculateCardScale,
  getCharacterProgressRange,
  calculateMagnetPosition,
  splitAndExpandMarquee,
} from './portfolioMath.ts';

test('calculateScrollOffset calculates correct offset given scroll and section positions', () => {
  const offset = calculateScrollOffset(500, 200, 1000, 0.3);
  // (500 - 200 + 1000) * 0.3 = 1300 * 0.3 = 390
  assert.equal(offset, 390);
});

test('calculateCardScale scales down preceding cards properly', () => {
  // For totalCards = 3:
  // index 2 (last): 1 - (3 - 1 - 2)*0.03 = 1
  // index 1: 1 - (3 - 1 - 1)*0.03 = 0.97
  // index 0 (first): 1 - (3 - 1 - 0)*0.03 = 0.94
  assert.equal(calculateCardScale(2, 3), 1);
  assert.equal(Math.round(calculateCardScale(1, 3) * 100) / 100, 0.97);
  assert.equal(Math.round(calculateCardScale(0, 3) * 100) / 100, 0.94);
});

test('getCharacterProgressRange slices [0, 1] evenly across characters', () => {
  const range0 = getCharacterProgressRange(0, 10);
  assert.equal(range0.start, 0);
  assert.equal(range0.end, 0.1);

  const rangeLast = getCharacterProgressRange(9, 10);
  assert.equal(rangeLast.start, 0.9);
  assert.equal(rangeLast.end, 1);
});

test('calculateMagnetPosition returns 0 displacement when cursor is outside bounding box padding', () => {
  const rect = { left: 100, top: 100, width: 200, height: 200 };
  const res = calculateMagnetPosition(600, 600, rect, 150, 3);
  assert.equal(res.active, false);
  assert.equal(res.x, 0);
  assert.equal(res.y, 0);
});

test('calculateMagnetPosition applies strength divisor when cursor is within bounds', () => {
  const rect = { left: 100, top: 100, width: 200, height: 200 };
  // Center is at (200, 200)
  // Cursor at (230, 260) -> deltaX = 30, deltaY = 60
  // With strength = 3 -> x = 10, y = 20
  const res = calculateMagnetPosition(230, 260, rect, 150, 3);
  assert.equal(res.active, true);
  assert.equal(res.x, 10);
  assert.equal(res.y, 20);
});

test('splitAndExpandMarquee splits array, expands to at least 6, and triples', () => {
  const items = ['A', 'B', 'C', 'D'];
  const { row1, row2 } = splitAndExpandMarquee(items, 6, 3);

  // Row 1 raw: ['A', 'B'] (2 items).
  // Repeated to >= 6: ['A', 'B', 'A', 'B', 'A', 'B'] (6 items).
  // Tripled: 6 * 3 = 18 items.
  assert.equal(row1.length, 18);
  assert.deepEqual(row1.slice(0, 4), ['A', 'B', 'A', 'B']);

  // Row 2 raw: ['C', 'D'] (2 items).
  // Repeated to >= 6: ['C', 'D', 'C', 'D', 'C', 'D'] (6 items).
  // Tripled: 6 * 3 = 18 items.
  assert.equal(row2.length, 18);
  assert.deepEqual(row2.slice(0, 4), ['C', 'D', 'C', 'D']);
});

