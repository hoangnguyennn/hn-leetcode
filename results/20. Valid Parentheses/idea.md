## Ý tưởng

Ý tưởng của mình là tạo một cái stack, khi gặp ký tự mở ngoặc thì push vào, khi gặp ký tự đóng ngoặc tương ứng thì xoá ký tự mở ngoặc trong stack.

Cứ thêm và bớt từ đầu chuỗi cho tới cuối, nếu duyệt tới cuối chuỗi mà stack rỗng nghĩa là chuỗi hợp lệ.

```js
const opening = new Map([
  ["(", "("],
  ["{", "{"],
  ["[", "["],
]);

const closing = {
  ")": "(",
  "}": "{",
  "]": "[",
};

let arr = [];

for (let i = 0; i < s.length; i++) {
  if (opening.has(s[i])) {
    arr.push(s[i]);
    continue;
  }

  if (arr.pop() !== closing[s[i]]) {
    return false;
  }
}

return arr.length === 0;
```

- Độ phức tạp thời gian là O(n), vì phải duyệt từ đầu tới cuối chuỗi
- Độ phức tạp không gian là O(n), vì trong trường hợp xấu nhất, chỉ toàn ký tự mở thì mình cần `n` ô để chứa
