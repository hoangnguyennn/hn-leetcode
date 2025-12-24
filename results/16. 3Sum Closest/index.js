/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  let i = 0;

  while (i < nums.length - 2) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const total = nums[i] + nums[j] + nums[k];

      if (total === target) {
        return target;
      }

      if (Math.abs(target - total) < Math.abs(target - closest)) {
        closest = total;
      }

      if (total > target) {
        k--;
      } else {
        j++;
      }
    }

    i++;
  }

  return closest;
};
