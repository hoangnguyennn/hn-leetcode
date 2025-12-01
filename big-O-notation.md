## Ký hiệu O lớn

Ký hiệu O lớn là công cụ để đo lường tốc độ và bộ nhớ cần sử dụng của một thuật toán.

Nó trả lời cho câu hỏi nếu đầu vào tăng dần thì thời gian và bộ nhớ tăng lên như thế nào.

| Ký hiệu | Giải thích                                                                |
| ------- | ------------------------------------------------------------------------- |
| O(1)    | Thời gian gần như không đổi dù đầu vào có tăng dần                        |
| O(n)    | Tăng tuyến tính, đầu vào gấp đôi, thời gian gấp đôi                       |
| O(n^2)  | Tăng theo hình parabal đứng, đầu vào tăng gấp đôi, thời gian tăng gấp bốn |
| O(2^n)  | Tăng rất nhanh                                                            |
| O(n!)   | Tăng cực kỳ nhanh, chỉ chạy được với đầu vào nhỏ                          |

## Ví dụ

**O(1)**

Truy cập mảng, dù mảng có trăm hay triệu phần tử thì tốc độ truy cập gần như là như nhau.

```js
return arr[10];
```

**O(n)**

Duyệt vòng lặp, đầu vào càng lớn, vòng lặp chạy càng lâu

```js
for (let i = 0; i < n; i++) {
  // do something
}
```

**O(n^2)**

Duyệt vòng lặp lồng nhau

```js
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n; k++) {
    // do something
  }
}
```

**O(2^n)**

Tìm fibonacci bằng đệ quy

```js
function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
```

**O(n!)**

Liệt kê tất cả hoán vị của một tập hợp

```js
function permute(arr, index = 0) {
  if (index === arr.length - 1) {
    console.log(arr);
    return;
  }

  for (let i = index + 1; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permute(arr, index + 1);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}
```
