function mySqrt(x: number): number {
  const binarySearch = (left: number, right: number): number => {
    if (left === right || left + 1 === right) {
      if (x > 1) {
        return left;
      } else {
        return right;
      }
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

  return binarySearch(0, x);
}
