/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const backtrack = (combination = [], start = 1) => {
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
};
