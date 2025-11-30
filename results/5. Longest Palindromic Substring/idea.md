## Ý tưởng

Palindromic string là chuỗi đối xứng, tức là đọc từ đầu tới cuối sẽ giống với đọc từ cuối lên đầu.

Mà đối xứng thì sẽ phải có tâm đối xứng, nên ý tưởng của mình là duyệt chuỗi từ đầu tới cuối, ký tự hiện tại sẽ là tâm, và xác định độ dài đối xứng lớn nhất.

Và tâm đối xứng thì có thể là 1 ký tự hoặc 2 ký tự trùng nhau.

```js
let longestString = "";

// 1 char
for (let i = 0; i < s.length; i++) {
  let left = i;
  let right = i;

  while (left > -1 && right < s.length + 1) {
    if (s[left] === s[right]) {
      left--;
      right++;
      continue;
    }

    break;
  }

  const str = s.slice(left + 1, right);

  if (longestString.length < str.length) {
    longestString = str;
  }
}

// 2 chars
for (let i = 0; i < s.length; i++) {
  let left = i;
  let right = i + 1;

  while (left > -1 && right < s.length + 1) {
    if (s[left] === s[right]) {
      left--;
      right++;
      continue;
    }

    break;
  }

  const str = s.slice(left + 1, right);

  if (longestString.length < str.length) {
    longestString = str;
  }
}

return longestString;
```

Refactor một chút để rút ngắn code trùng lặp:

```js
let longestIndices = [0, 0];
let longestLength = 0;

const getPalindrome = (left, right) => {
  while (left > -1 && right < s.length + 1) {
    if (s[left] === s[right]) {
      left--;
      right++;
      continue;
    }

    break;
  }

  return [left + 1, right];
};

for (let i = 0; i < s.length; i++) {
  const odd = getPalindrome(i, i);
  const even = getPalindrome(i, i + 1);
  const oddLength = odd[1] - odd[0];
  const evenLength = even[1] - even[0];
  const current = oddLength > evenLength ? odd : even;
  const currentLength = oddLength > evenLength ? oddLength : evenLength;

  if (currentLength > longestLength) {
    longestLength = currentLength;
    longestIndices = current;
  }
}

return s.slice(longestIndices[0], longestIndices[1]);
```

- Độ phức tạp thời gian là O(n^2), vì sử dụng 2 vòng lặp lồng nhau
- Độ phức tạp không gian là O(1), vì không sử dụng thêm không gian để lưu trữ mảng

## Còn nữa

Mình chưa nghĩ ra cách làm hay hơn, nhưng bài toán thuộc chủ đề quy hoạch động nên có lẻ có cách để giảm thời gian xuống O(n)
