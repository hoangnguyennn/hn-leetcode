## Ý tưởng

Xác định yêu cầu, khi gặp số âm thì các số sẽ đảo ngược, còn dấu âm sẽ giữ nguyên.

Vì vậy, mình sẽ lưu lại dấu vào 1 biến riêng, và chuyển số đầu vào thành giá trị tuyệt đối của nó.

Sau đó lấy từng số từ cuối lên đầu bằng cách chia lấy dư với 10 và đưa số đó vào đầu ra.

```js
// lưu lại dấu của số
const sign = x < 0 ? -1 : 1;

// chuyển số thành giá trị tuyệt đối của nó
x = x * sign;

let revertedX = 0;

while (x !== 0) {
  const modulo = x % 10;
  revertedX = revertedX * 10 + modulo;
  x = Math.floor(x / 10);
}

const result = revertedX * sign; // lấy lại dấu cho số
```

Tiếp theo, chúng ta sẽ kiểm tra xem `result` đã chạm tới biên chưa, nếu chạm rồi thì trả về `0` như yêu cầu đề bài.

```js
// lưu lại dấu của số
const sign = x < 0 ? -1 : 1;

// chuyển số thành giá trị tuyệt đối của nó
x = x * sign;

let revertedX = 0;

while (x !== 0) {
  const modulo = x % 10;
  revertedX = revertedX * 10 + modulo;
  x = Math.floor(x / 10);
}

const result = revertedX * sign; // lấy lại dấu cho số
if (result > max || result < min) return 0; // max và min là biên mà đề bài đặt ra
return result;
```
