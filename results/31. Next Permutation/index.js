/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i !== -1) {
    let k = nums.length - 1;
    while (nums[k] <= nums[i]) {
      k--;
    }

    [nums[i], nums[k]] = [nums[k], nums[i]];
  }

  i = i + 1;
  k = nums.length - 1;
  while (i < k) {
    [nums[i], nums[k]] = [nums[k], nums[i]];
    k--;
    i++;
  }
};
