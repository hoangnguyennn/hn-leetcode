/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let k = 0; k < strs.length; k++) {
      if (strs[k][i] !== strs[0][i]) break;
    }

    result += strs[0][i];
  }

  return result;
};
