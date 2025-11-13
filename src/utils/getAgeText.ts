/**
 * Returns the correct Ukrainian form of "рік" based on the age number
 * Rules:
 * - 1, 21, 31, 41... (ends in 1, but not 11) → рік
 * - 2-4, 22-24, 32-34... (ends in 2-4, but not 12-14) → роки
 * - 5-20, 25-30, 35-40... (ends in 5-9, 0, or 11-14) → років
 */
export function getAgeText(age: number): string {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  // Special case: 11-14 always use "років"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'років';
  }

  // Ends in 1 (but not 11) → рік
  if (lastDigit === 1) {
    return 'рік';
  }

  // Ends in 2-4 (but not 12-14) → роки
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'роки';
  }

  // Everything else (0, 5-9, or already handled 11-14) → років
  return 'років';
}
