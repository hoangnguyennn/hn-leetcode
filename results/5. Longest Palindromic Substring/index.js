/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestIndices = [0, 0];
  let longestLength = 0;

  const getPalindrome = (left, right) => {
    while (left > -1 && right < s.length + 1) {
      if (s[left] === s[right]) {
        left--;
        right++;
        continue;
      }

      break;
    }

    return [left + 1, right];
  };

  for (let i = 0; i < s.length; i++) {
    const odd = getPalindrome(i, i);
    const even = getPalindrome(i, i + 1);
    const oddLength = odd[1] - odd[0];
    const evenLength = even[1] - even[0];
    const current = oddLength > evenLength ? odd : even;
    const currentLength = oddLength > evenLength ? oddLength : evenLength;

    if (currentLength > longestLength) {
      longestLength = currentLength;
      longestIndices = current;
    }
  }

  return s.slice(longestIndices[0], longestIndices[1]);
};
