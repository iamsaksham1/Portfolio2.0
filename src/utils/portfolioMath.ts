export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Calculates horizontal marquee scroll offset based on window scroll position and section boundaries.
 */
export function calculateScrollOffset(
  scrollY: number,
  sectionTop: number,
  innerHeight: number,
  factor = 0.3
): number {
  return (scrollY - sectionTop + innerHeight) * factor;
}

/**
 * Calculates card stacking scale factor based on its index and the total count.
 */
export function calculateCardScale(
  index: number,
  totalCards: number,
  scaleStep = 0.03
): number {
  if (totalCards <= 0) return 1;
  const clampedIndex = Math.max(0, Math.min(index, totalCards - 1));
  return 1 - (totalCards - 1 - clampedIndex) * scaleStep;
}

/**
 * Computes character animation progress slice [start, end] within scroll bounds [0, 1].
 */
export function getCharacterProgressRange(
  charIndex: number,
  totalChars: number
): { start: number; end: number } {
  if (totalChars <= 1) return { start: 0, end: 1 };
  const step = 1 / totalChars;
  const start = charIndex * step;
  const end = Math.min(1, start + step);
  return { start, end };
}

/**
 * Calculates magnetic pull coordinates if cursor is within padding of the bounding box.
 */
export function calculateMagnetPosition(
  cursorX: number,
  cursorY: number,
  rect: Rect,
  padding = 150,
  strength = 3
): { x: number; y: number; active: boolean } {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const minX = rect.left - padding;
  const maxX = rect.left + rect.width + padding;
  const minY = rect.top - padding;
  const maxY = rect.top + rect.height + padding;

  const isInBounds =
    cursorX >= minX && cursorX <= maxX && cursorY >= minY && cursorY <= maxY;

  if (!isInBounds) {
    return { x: 0, y: 0, active: false };
  }

  const deltaX = cursorX - centerX;
  const deltaY = cursorY - centerY;

  return {
    x: deltaX / strength,
    y: deltaY / strength,
    active: true,
  };
}

/**
 * Splits array in half into two rows, repeats each row until it has at least minTiles (default 6),
 * then triples it for seamless looping.
 */
export function splitAndExpandMarquee<T>(
  items: T[],
  minTiles = 6,
  repeatFactor = 3
): { row1: T[]; row2: T[] } {
  if (items.length === 0) {
    return { row1: [], row2: [] };
  }
  const mid = Math.ceil(items.length / 2);
  const rawRow1 = items.slice(0, mid);
  const rawRow2 = items.slice(mid);

  const expand = (row: T[]) => {
    if (row.length === 0) return [];
    let expanded = [...row];
    while (expanded.length < minTiles) {
      expanded = [...expanded, ...row];
    }
    const result: T[] = [];
    for (let i = 0; i < repeatFactor; i++) {
      result.push(...expanded);
    }
    return result;
  };

  return {
    row1: expand(rawRow1),
    row2: expand(rawRow2),
  };
}

