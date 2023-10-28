const NAMES = ["Alex", "Şaner", "Michael", "Amir", "Birte", "Delano", "Daniel", "Raphael", "Philipp", "Manuel", "Vera", "Sven", "Vlad", "Louis"];

export function getRandomName(): string {
  const index = Math.floor(Math.random() * NAMES.length);
  return NAMES[index];
}