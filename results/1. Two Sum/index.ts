function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];

    if (map.has(remain)) {
      return [map.get(remain)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}
