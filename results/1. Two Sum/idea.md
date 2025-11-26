## Ý tưởng ban đầu

Mình sẽ duyệt mảng `nums` 2 lần, cộng lần lượt số `nums[i]` và `nums[k]` lại với nhau.

Nếu tổng của chúng bằng `target` thì trả về kết quả `[i, k]`.

Sau khi duyệt mảng, nếu không có kết quả đúng nào thì trả về 1 dummy value `[]`.

```js
for (let i = 0; i < nums.length; i++) {
  for (let k = i + 1; k < nums.length; k++) {
    if (nums[i] + nums[k] === target) {
      return [i, k];
    }
  }
}

return [];
```

- Độ phức tạp thời gian là O(n^2)
- Độ phức tạp không gian là O(1)

## Tìm cách giảm số lượng vòng lặp

Nhận thấy rằng mình có thể lưu lại hiệu số của `target` và `nums[i]`, như vậy thì không cần phải duyệt mảng 2 lần.

```js
const arr = [];
for (let i = 0; i < nums.length; i++) {
  const remain = target - nums[i];

  if (arr.includes(remain)) {
    return [arr.indexOf(remain), i];
  } else {
    arr.push(nums[i]);
  }
}

return [];
```

Dù đã giảm số lượng vòng lặp `for` từ 2 xuống 1. Mình đã nhận định rằng độ phức tạp thời gian đã giảm từ O(n^2) xuống O(n), nhưng thực sự không phải như vậy, runtime chỉ giảm được 1 chút trong khi memory không giảm. Sau khi tìm hiểu thì hàm `indexOf` của array duyệt mảng để tìm index, nên có thể nói nó cũng là O(n), hoặc ít nhất không phải là O(1).

Ngoài ra, nó còn chiếm thêm bộ nhớ lưu kết quả của phép tính trừ.

- Độ phức tạp thời gian vẫn là O(n^2)
- Độ phức tạp không gian tăng lên là O(n)

## Làm sao để xác định hiệu số có tồn tại hay không mà không phải dùng indexOf?

Lúc này, nhìn vào topic bài toán, mình thấy nó đề cập tới `"Hash Table"`. Đúng, tốc độ truy cập hash table là O(1). Vậy, vấn đề bây giờ là xác định key và value sẽ lưu trong hash table là cái gì.

Trong JavaScript, để biểu diễn hash table mình sử dụng object `Map`. `Map` có một hàm là `has()` để kiểm tra xem 1 key có tồn tại hay không.

Mà thứ mình muốn xác nhận có tồn tại hay không chính là hiệu số của `target` với `nums[i]`. Hơn nữa, mình cũng muốn biết vị trí của hiệu số đó nằm ở đâu trong mảng, vậy nên value sẽ là index của hiệu số đó.

```js
const map = new Map();
for (let i = 0; i < nums.length; i++) {
  const remain = target - nums[i];

  if (map.has(remain)) {
    return [map.get(remain), i];
  } else {
    map.set(nums[i], index);
  }
}

return [];
```

- Độ phức tạp thời gian là O(n)
- Độ phức tạp không gian là O(n)
