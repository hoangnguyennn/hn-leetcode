function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let max = 0;
  let duplicatedIndex = -1;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i])! > duplicatedIndex) {
        duplicatedIndex = map.get(s[i])!;
      }
    }

    max = Math.max(max, i - duplicatedIndex);
    map.set(s[i], i);
  }

  return max;
}
