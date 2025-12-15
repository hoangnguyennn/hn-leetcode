/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const binarySearch = (left, right) => {
    if (left === right || left + 1 === right) {
      if (right * right === x) return right;
      return left;
    }

    const mid = Math.floor((left + right) / 2);
    const power = mid * mid;

    if (power === x) {
      return mid;
    }

    if (power > x) {
      return binarySearch(left, mid);
    }

    if (power < x) {
      return binarySearch(mid, right);
    }
  };

  return binarySearch(0, Math.ceil(x / 2));
};
