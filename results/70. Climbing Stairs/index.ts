function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;

  for (let i = 3; i < n + 1; i++) {
    b += a;
    a = b - a;
  }

  return b;
}
