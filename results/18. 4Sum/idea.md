## Ý tưởng

Bài này tương tự bài `3Sum` nhưng lớn hơn.

Để tìm được `4Sum`, ta neo `i` và tiến hành tìm ba index còn lại. Ba index còn lại đã được giải ở bài `3Sum`.

```ts
nums.sort((a, b) => a - b);
const result: number[][] = [];
let i = 0;

while (i < nums.length - 3) {
  if (i !== 0 && nums[i] === nums[i - 1]) {
    i++;
    continue;
  }

  // tìm danh sách bộ 3 số
  const threeSumResults = threeSum(nums, target - nums[i], i + 1);
  for (let r of threeSumResults) {
    // đưa nó vào mảng kêt quả
    result.push([nums[i], ...r]);
  }

  i++;
}
```
