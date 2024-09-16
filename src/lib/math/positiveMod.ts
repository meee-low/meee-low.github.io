export function posMod(x: number, base: number): number {
  return ((x % base) + base) % base;
}
