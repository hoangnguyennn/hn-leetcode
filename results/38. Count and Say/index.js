const rle = (str) => {
  let result = "";

  let counter = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (char === "") {
      char = str[i];
      counter = 1;
      continue;
    }

    if (char === str[i]) {
      counter++;
    } else {
      result += counter + char;
      char = str[i];
      counter = 1;
    }
  }

  result += counter + char;
  return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  return rle(countAndSay(n - 1));
};
