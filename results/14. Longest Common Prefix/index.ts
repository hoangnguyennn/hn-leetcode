function longestCommonPrefix(strs: string[]): string {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let k = 0; k < strs.length; k++) {
      if (strs[k][i] !== strs[0][i]) return result;
    }

    result += strs[0][i];
  }

  return result;
}
