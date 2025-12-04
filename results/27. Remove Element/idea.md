## Ý tưởng

Ý tưởng tương tự bài `26. Remove Duplicates from Sorted Array`.

Nhưng lúc này mình không cần phải lưu giá trị của phần tử không trùng lặp trước đó nữa, mà nó được chỉ định thẳng trong đầu vào.

```js
let pointer = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== val) {
    nums[pointer++] = nums[i];
  }
}

return pointer;
```

- Độ phức tạp thời gian là O(n), vì chỉ duyệt mảng 1 lần
- Độ phức tạp không gian là O(1), vì chỉ sử dụng 1 biến `pointer`
