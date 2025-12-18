## Ý tưởng

Đầu tiên, chọn ra 1 chuỗi bất kỳ, duyệt qua từng ký tự trong nó, kiểm tra xem tại vị trí `i` thì các chuỗi có ký tự giống nhau không.

```js
var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let k = 0; k < strs.length; k++) {
      if (strs[k][i] !== strs[0][i]) return result;
    }

    result += strs[0][i];
  }

  return result;
};
```

- Độ phức tạp thời gian là O(m \* n)
- Độ phức tạp không gian là O(1)
