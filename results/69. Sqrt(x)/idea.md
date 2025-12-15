## Ý tưởng

Đặt phạm vi giá trị cần tìm là từ `0` tới `x`.

Chúng ta sẽ kiểm tra `"mid"` có phải là giá trị cần tìm không. Nếu không phải thì kiểm tra xem nó đang lớn hơn hay nhỏ hơn giá trị cần tìm. Nếu lớn hơn thì mình sẽ kiểm tra phần bên trái, nếu nhỏ hơn thì kiểm tra phần bên phải.

Lặp lại cho tới khi tìm được giá trị cần tìm.

```js
var mySqrt = function (x) {
  const binarySearch = (left, right) => {
    if (left === right) return left;

    const mid = Math.floor((left + right) / 2);
    const power = mid * mid;

    if (power === x) {
      return mid;
    }

    if (power > x) {
      return binarySearch(left, mid);
    }

    if (power < x) {
      return binarySearch(mid, right);
    }
  };

  return binarySearch(0, x);
};
```

Với cách làm này thì nó bị rơi vào vòng lặp vô tận khi `left` và `right` chỉ lệch nhau 1 đơn vị.

Để fix cái này thì mình sửa lại điều kiện dừng 1 xíu:

```js
if (left === right || left + 1 === right) return left;
```

Mình đã chạy thử và nó fail ở case `x` = `1`. Mình thấy rằng đây là trường hợp ngoại lệ, nếu `x` = `1` thì giá trị cần tìm là `1` vì `1^2` = `1`.

Để tổng quát thì mình sửa logic lại:

```js
if (left === right || left + 1 === right) {
  if (x > 1) {
    return left;
  } else {
    return right;
  }
}
```

Cách làm này chạy mất 2ms và beat 33%, nghĩa là có thể hiệu chỉnh gì đó để giảm thời gian chạy xuống, nhưng vì đã áp dụng binary search như topic đề ra nên mình tạm dừng ở đây.

- Độ phức tạp thời gian là O(log(n))
- Độ phức tạp không gian là O(1)
