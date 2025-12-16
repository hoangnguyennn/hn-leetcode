/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = -2147483648;
  const max = 2147483647;

  const sign = x < 0 ? -1 : 1;
  x *= sign; // make absolute
  let revertedX = 0;

  while (x !== 0) {
    const modulo = x % 10;
    revertedX = revertedX * 10 + modulo;
    x = Math.floor(x / 10);
  }

  const result = revertedX * sign;
  if (result > max || result < min) return 0;
  return result;
};
