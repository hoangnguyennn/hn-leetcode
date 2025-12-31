function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  let i = 0;

  while (i < nums.length - 3) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    const threeSumResults = threeSum(nums, target - nums[i], i + 1);
    for (let r of threeSumResults) {
      result.push([nums[i], ...r]);
    }

    i++;
  }

  return result;
}

function threeSum(nums: number[], target: number, start = 0): number[][] {
  const result: number[][] = [];

  let i = start;

  while (i < nums.length - 2) {
    if (i !== start && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const total = nums[i] + nums[j] + nums[k];

      if (total > target) {
        k--;
      } else if (total < target) {
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
}
