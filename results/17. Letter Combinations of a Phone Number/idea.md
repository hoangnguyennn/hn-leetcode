## Ý tưởng

Bài này là một dạng quay lui.

Quay lui là thử tất cả lựa chọn cho tới khi tìm thấy đáp án đúng. Nếu tại một bước nào đấy mà mình xác định là đi tiếp sẽ sai thì mình lùi lại và chọn phương án khác.

Trong bài toán này, đáp án đúng là tạo được dãy ký tự tương ứng với dãy số. Tức là ký tự phải tương ứng với số tại cùng vị trí (index) và kích thước dãy ký tự phải bằng kích thước dãy số.

Đầu tiên, ta xây dựng một object, với các key là số và value là một mảng gồm các ký tự tương ứng với số đó.

```ts
const numToChars: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};
```

Tiếp theo, với mỗi số, ta lần lượt đưa ký tự tương ứng vào phương án hiện tại.

```ts
const backtrack = (current = "", index = 0) => {
  for (let char of numToChars[digits.at(index)!]) {
    backtrack(current + char, index + 1);
  }
};
```

Khi đạt kích thước của dãy số ban đầu, tức là ta đã có đáp án đúng gồm các "lựa chọn" tại mỗi bước (mỗi số). Tiến hành đưa nó vào mảng kết quả

```ts
const result: string[] = [];
const backtrack = (current = "", index = 0) => {
  if (current.length === digits.length) {
    result.push(current);
    return;
  }

  for (let char of numToChars[digits.at(index)!]) {
    backtrack(current + char, index + 1);
  }
};
```
