function strStr(haystack: string, needle: string): number {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  let left = 0;
  let right = 0;
  while (left < haystackLength - needleLength + 1) {
    if (haystack[left + right] === needle[right]) {
      right++;
    } else {
      right = 0;
      left++;
    }

    if (right === needleLength) return left;
  }

  return -1;
}
