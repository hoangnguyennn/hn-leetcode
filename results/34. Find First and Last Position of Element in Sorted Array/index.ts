function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1 && nums[0] === target) return [0, 0];

  let resultLeft = -1;
  let resultRight = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }

    if (nums[mid] === target) {
      resultLeft = mid;
      resultRight = mid;
      while (nums[resultLeft] === nums[resultLeft - 1]) {
        resultLeft--;
      }

      while (nums[resultRight] === nums[resultRight + 1]) {
        resultRight++;
      }

      break;
    }
  }

  return [resultLeft, resultRight];
}
