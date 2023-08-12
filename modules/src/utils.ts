function add(x: number, y: number): number {
  return x + y;
}


function sample<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.pop();
}