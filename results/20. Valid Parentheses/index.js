/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opening = new Map([
    ["(", "("],
    ["{", "{"],
    ["[", "["],
  ]);

  const closing = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (opening.has(s[i])) {
      arr.push(s[i]);
      continue;
    }

    if (arr.pop() !== closing[s[i]]) {
      return false;
    }
  }

  return arr.length === 0;
};
