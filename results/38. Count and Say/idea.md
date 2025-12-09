## Ý tưởng

Đọc đề là mình thấy đề mô tả luồng chạy của một hàm đệ quy rồi nên code đệ quy như mô tả.

```js
var countAndSay = function (n) {
  if (n === 1) return "1";
  return rle(countAndSay(n - 1));
};
```

Bây giờ, vấn đề của mình là triển khai hàm `rle` đúng theo cái phương pháp nén đó là được.
Trong đề cũng đã giải thích phương pháp nén run-length encoding là gì rồi. Mình code theo là được.

```js
const rle = (str) => {
  let result = "";

  let counter = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (char === "") {
      char = str[i];
      counter = 1;
      continue;
    }

    if (char === str[i]) {
      counter++;
    } else {
      result += counter + char;
      char = str[i];
      counter = 1;
    }
  }

  result += counter + char;
  return result;
};
```

Phương pháp này khá là đơn giản, mình duyệt từ đầu tới cuối chuỗi, nếu có 1 chuỗi các ký tự giống nhau nằm kề nhau thì mình tạo 2 biến, 1 biến lưu số lượng, 1 biến lưu giá trị ký tự. Khi gặp ký tự khác ký tự hiện tại thì đưa biến đếm vào kết quả và reset biến đếm.
