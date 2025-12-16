/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const backupX = x;
  let revertedX = 0;

  while (x !== 0) {
    const modulo = x % 10;
    revertedX = revertedX * 10 + modulo;
    x = Math.floor(x / 10);
  }

  return revertedX === backupX;
};
