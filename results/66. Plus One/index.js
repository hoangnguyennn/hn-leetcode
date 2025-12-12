/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let memo = 0;
  let val = digits[digits.length - 1] + 1;
  memo = Math.floor(val / 10);
  val = val % 10;
  digits[digits.length - 1] = val;

  for (let i = digits.length - 2; i > -1; i--) {
    let val = digits[i] + memo;
    memo = Math.floor(val / 10);
    val = val % 10;
    digits[i] = val;
  }

  if (memo) {
    digits.unshift(memo);
  }

  return digits;
};
