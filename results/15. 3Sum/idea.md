## Ý tưởng

Gọi 3 index của bộ số lần lượt là `i`, `j` và `k`.

Áp dụng kỹ thuật 2 con trỏ, ta neo `i` tại 1 điểm và lần lượt điều khiển `j` và `k` sao cho tổng của bộ số `nums[i] + nums[j] + nums[k] = 0`.

Để xác định tổng của bộ số đang nhỏ hơn hay lớn hơn 0, để quyết định di chuyển `j` và `k` tới vị trí thích hợp thì ta sẽ phải sắp xếp đầu vào.

```ts
nums.sort((a, b) => a - b);
```

```ts
// Ta định nghĩa vị trí ban đầu của `j` và `k`
let j = i + 1;
let k = nums.length - 1;
```

Khi mảng đầu vào đã được sắp xếp, nếu tổng của bộ số lớn hơn 0, tức là chúng ta cần giảm lại, và khi tổng của bộ số nhỏ hơn 0 thì ta tăng nó lên.

Vì ta đã sắp xếp lại mảng đầu vào, nên để tăng giá trị của tổng, ta sẽ tăng `j` lên, và khi giảm giá trị của tổng thì ta giảm `k` lại.

```ts
const total = nums[i] + nums[j] + nums[k];
if (total > 0) {
  k--;
} else if (total < 0) {
  j++;
}
```

Dừng lại một xíu, vì mảng đầu vào đã sắp xếp tăng dần, vậy khi muốn giảm tổng, ta có thể giảm `j` và khi muốn tăng thì tăng `k` được không? Không, vì chúng ta đã định nghĩa biên trái là `j` và biên phải là `k` rồi, nên ở bước kiểm tra đầu tiên, `j` không thể giảm, và nhưng bước sau, nếu giảm thì nó sẽ lặp lại với bước kiểm tra trước.

Quay lại hướng giải quyết ban đầu, khi đã điều chỉnh tăng `j` và giảm `k` tới vị trí phù hợp (tổng bằng `0`) thì ta được bộ đáp án. Ta đưa bộ đáp án vào kết quả và tăng `j` hoặc `k` để tiếp tục tìm bộ `j` và `k` khác tương ứng với `i` đang neo.

```ts
const total = nums[i] + nums[j] + nums[k];
if (total > 0) {
  k--;
} else if (total < 0) {
  j++;
} else {
  result.push([nums[i], nums[j], nums[k]]);
  j++;
}
```

Khi `j` và `k` đụng nhau thì ta sẽ dừng.

```ts
const result: number[][] = [];
while (j < k) {
  const total = nums[i] + nums[j] + nums[k];
  if (total > 0) {
    k--;
  } else if (total < 0) {
    j++;
  } else {
    result.push([nums[i], nums[j], nums[k]]);
    j++;
  }
}
```

Tổng quát, ta duyệt `i` từ đầu tới cuối. Với mỗi `i`, ta lại thực hiện các thao tác ở trên.

```ts
nums.sort((a, b) => a - b);
const result: number[][] = [];

let i = 0;
while (i < nums.length - 2) {
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
    }
  }

  i++;
}
```

Tới đầy, bài giải đã gần như hoàn chỉnh. Vì trong mảng đầu vào, có thể có nhiều số trùng nhau, dẫn tới kết quả có nhiều bộ đáp án trùng lặp.

Để tránh việc này ta sẽ bỏ qua các số trùng lặp.

Cụ thể:

- khi neo `i` tại 1 vị trí, thì khi duyệt tiếp vị trí tiếp theo, nếu `i` mới giống `i` cũ thì bỏ qua.
- khi tìm được bộ đáp án `i`, `j`, `k`, nếu `j` mới giống `j` cũ thì cũng tăng `j` lên để bỏ qua.

```ts
nums.sort((a, b) => a - b);
const result: number[][] = [];

let i = 0;

while (i < nums.length - 2) {
  // bỏ qua `nums[i]` trùng lặp
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
        // bỏ qua `nums[j]` trùng lặp
        j++;
      }
    }
  }

  i++;
}
```
