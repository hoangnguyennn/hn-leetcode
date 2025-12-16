## Ý tưởng

Làm sạch dữ liệu, loại bỏ các space có trong chuỗi.

```js
s = s.trim();
```

Kiểm tra lần lượt từng ký tự, nếu nó nằm ngoài phạm vi 0-9 thì sẽ dừng lại.

Ngoại lệ:

- ký tự đầu tiên cho phép là ký tự dấu trừ (`-`)
- ký tự đầu tiên là ký tự dấu cộng (`+`) thì bỏ qua

Khi có kết quả, convert nó sang number và kiểm tra giá trị biên: [-2^31, 2^31 - 1]

```js
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  let resultStr = "";

  let i = 0;
  while (i < s.length) {
    if (s[i] >= "0" && s[i] <= "9") {
      resultStr += s[i];
    } else if (s[i] === "-" && i === 0) {
      resultStr += s[i];
    } else if (s[i] === "+" && i === 0) {
      // do nothing
    } else {
      break;
    }

    i++;
  }

  // invalid char
  if (resultStr === "-") resultStr = "0";
  let resultNum = Number(resultStr);
  if (resultNum > 2147483647) resultNum = 2147483647; // 2^31 - 1
  if (resultNum < -2147483648) resultNum = -2147483648; // -2^31

  return resultNum;
};
```
