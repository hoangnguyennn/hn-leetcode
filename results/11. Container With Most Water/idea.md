## Ý tưởng

Ý tưởng của mình tưởng tượng các thanh giống như những chiếc cọc, mình sẽ đổ nước dàn đều theo từng nấc. Khi nó đạt ngưỡng nước ở một trong hai cọc biên thì dừng lại, tính toán số lượng nước chứa được. Sau đó rút cọc đó lên và lặp lại quá trình, cứ mực nước chạm ngưỡng thì tính toán lượng nước đang chứa và rút cọc. Lặp lại cho tới khi mà chỉ còn 2 chiếc cọc thì dừng.

```js
let left = 0;
let right = height.length - 1;

let max = 0;
let level = 0;

while (left < right) {
  level++;

  let leftValue = height[left];
  let rightValue = height[right];

  while (leftValue < level) {
    left++;
    leftValue = height[left];

    if (left > height.length - 1) break;
  }

  while (rightValue < level) {
    right--;
    rightValue = height[right];

    if (right === 0) break;
  }

  const volume = level * (right - left);
  if (max < volume) max = volume;
}

return max;
```

- Độ phức tạp thời gian là O(n^2), vì nó vừa duyệt các cọc từ đầu tới cuối, với mỗi lần duyệt, nó lại tăng chiều cao mực nước theo từng nấc
- Độ phức tạp không gian là O(1), vì không sử dụng mảng để lưu
