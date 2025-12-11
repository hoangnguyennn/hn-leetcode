function combinationSum2(candidates: number[], target: number): number[][] {
  const result: Map<string, number[]> = new Map();

  candidates.sort((a, b) => a - b);
  const backtrack = (
    candidates: number[],
    target: number,
    start: number,
    path: number[]
  ): void => {
    if (target < 0) return;

    if (target === 0 && path.length > 0) {
      result.set(JSON.stringify(path), [...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i + 1, path);
      path.pop();
    }
  };

  backtrack(candidates, target, 0, []);

  return Array.from(result.values());
}
