function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];

  const backtrack = (
    candidates: number[],
    target: number,
    start: number,
    path: number[]
  ): void => {
    if (target < 0) return;

    if (target === 0 && path.length > 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i, path);
      path.pop();
    }
  };

  backtrack(candidates, target, 0, []);

  return result;
}
