## Ý tưởng ban đầu

Nếu mảng đã được sắp xếp, thì mình có thể kiểm tra lần lượt 2 phần tử liền kề nhau xem có giống nhau không. Nếu có thì xóa nó đi.

```js
for (let i = 0; i < nums.length; i++) {
  if (i === 0 || nums[i] !== nums[i - 1]) continue;
  nums.splice(i--, 1);
}

return nums.length;
```

- Độ phức tạp thời gian là O(n^2), vì phải duyệt mảng 2 lần, 1 lần ở vòng lặp `for` và 1 lần ở hàm `splice`
- Độ phức tạp không gian là O(1), vì không cần xin cấp thêm bộ nhớ

## Cải tiến

Nhận thấy rằng mình không cần phải dùng hàm `splice` để xóa phần tử.

Mình có thể sử dụng 1 con trỏ để lưu vị trí của phần tử không trùng lặp hiện tại. Sau đó lần lượt duyệt qua mảng, nếu phần tử hiện tại khác với con trỏ thì tăng con trỏ lên 1 và gán giá trị của phần tử hiện tại vào vị trí con trỏ đó.

```js
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
```

- Độ phức tạp thời gian là O(n), vì chỉ duyệt mảng 1 lần
- Độ phức tạp không gian là O(1), vì chỉ sử dụng 2 biến `pointer` và `current`
