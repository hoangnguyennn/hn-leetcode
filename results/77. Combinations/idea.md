## Ý tưởng

Để liệt kê các tổ hợp, mình nghĩ ngay tới quay lui.

Tiến hành triển khai quay lui:

```js
var combine = function (n, k) {
  const result = [];
  const backtrack = (combination = [], start = 1) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < n + 1; i++) {
      combination.push(i);
      backtrack(combination, i + 1);
      combination.pop();
    }
  };

  backtrack();

  return result;
};
```

Cách làm này đã pass (69ms, beat 37%). Mình đã thử chạy bằng TypeScript thì thời gian chạy là 45ms, beat 97%.

- Độ phức tạp thời gian là O(C(n, k) \* k), chúng ta cần thời gian để liệt kê toàn bộ tổ hợp, số lượng tổ hợp là `C(n, k)` và cần thời gian để copy tổ hợp vào kết quả, tổ hợp có kích thước `k`.
- Độ phức tạp không gian là O(C(n, k) \* k), chúng ta cần không gian để chứa đủ toàn bộ tổ hợp (`C(n, k)`), mỗi tổ hợp có kích thước `k`
