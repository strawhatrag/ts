
function typeofGuard(value: number | string) {
  // we use typeof  as a guard
  if (typeof value === 'string') {
    return value.repeat(3);
  }

  return value * 3;   // ts is smart to assign this to a number
}