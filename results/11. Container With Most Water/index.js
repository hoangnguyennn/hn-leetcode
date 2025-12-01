/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let max = 0;
  let level = 0;

  while (left < right) {
    level++;

    let leftValue = height[left];
    let rightValue = height[right];

    while (leftValue < level) {
      left++;
      leftValue = height[left];

      if (left > height.length - 1) break;
    }

    while (rightValue < level) {
      right--;
      rightValue = height[right];

      if (right === 0) break;
    }

    const volume = level * (right - left);
    if (max < volume) max = volume;
  }

  return max;
};
