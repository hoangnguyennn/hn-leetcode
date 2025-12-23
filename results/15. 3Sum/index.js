/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

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

      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }

    i++;
  }

  return result;
};
