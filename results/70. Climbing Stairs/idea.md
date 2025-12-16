## Ý tưởng

Bài này khá giống đệ quy.

Số cách để đi tới bậc thứ `n` bằng tổng:

- số cách đi tới bậc thứ `n - 1` (bước thêm 1 bước)
- số cách đi tới bậc thứ `n - 2` (bước thêm 2 bước)

Công thức tổng quát: f(n) = f(n - 1) + 1 + f(n - 2) + 1

Trong đệ quy, ta phải xác định điểm dừng (bài toán nhỏ nhất).
Dễ thấy, bài toán nhỏ nhất là `n = 1` và `n = 2`, số bước lần lượt để đi tới bậc thang đó là `1` và `2`.

Tiến hành xây dựng hàm đệ quy:

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1 || n === 2) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
```

Tới đây thì chúng ta chưa chạy ngay, bài toán đệ quy ở trên nó vẫn dở ở chổ là bài toán con trung gian có thể bị thực thi nhiều lần.

Ví dụ:

Để đi tới bước 5 thì mình phải đi qua bước 3 hoặc bước 4

- để đi qua bước 4 thì mình phải đi qua bước 3 hoặc bước 2
  - để đi qua bước 3 thì mình phải đi qua bước 2 hoặc bước 1
    - để đi qua bước 2 thì mình phải đi qua bước 1
- để đi qua bước 3 thì mình phải đi qua bước 2 hoặc bước 1
  - để đi qua bước 2 thì mình phải đi qua bước 1

Để khắc phục điều này, mình sẽ sử dụng quy hoạch động, lưu lại kết quả của các lần tính toán để dùng lại.

```js
/**
 * [1][2][3][4][5] [6] [7] [8] [9] -> bậc thang
 *
 * [1][2][3][5][8][13][21][34][55] -> số lượng cách đi tới bậc thang tương ứng
 */
```

Dễ thấy đây là dãy fibonacci. Triển khai theo quy hoạch động:

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 1) return 2;

  let a = 1;
  let b = 2;

  for (let i = 3; i < n + 1; i++) {
    b += a;
    a = b - a;
  }

  return b;
};
```

- Độ phức tạp thời gian là O(n), thời gian chạy tăng lên khi `n` càng lớn
- Độ phức tạp không gian là O(1), bộ nhớ không tăng khi `n` càng lớn
