const numToChars: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  const result: string[] = [];

  const backtrack = (current = "", index = 0) => {
    if (current.length === digits.length) {
      result.push(current);
      return;
    }

    for (let char of numToChars[digits.at(index)!]) {
      backtrack(current + char, index + 1);
    }
  };

  backtrack();
  return result;
}
