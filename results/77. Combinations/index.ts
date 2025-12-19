function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const backtrack = (combination: number[] = [], start = 1) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < n + 1; i++) {
      combination.push(i);
      backtrack(combination, i + 1);
      combination.pop();
    }
  };

  backtrack();

  return result;
}
