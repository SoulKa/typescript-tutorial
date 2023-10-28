const NAMES = ["Alex", "Şaner", "Michael", "Amir", "Birte", "Delano", "Daniel", "Raphael", "Philipp", "Manuel", "Vera", "Sven", "Vlad", "Louis"];

/**
 * Returns a random name.
 */
export function getRandomName(): string {
  // Math.random() returns a random floating point number between 0 (including) and 1 (excluding).
  const index = Math.floor(Math.random() * NAMES.length);
  return NAMES[index];
}