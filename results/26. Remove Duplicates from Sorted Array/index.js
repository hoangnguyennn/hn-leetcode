/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer = 0;
  let current = nums[pointer];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== current) {
      pointer++;
      current = nums[i];
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
};
