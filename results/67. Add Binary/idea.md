## Ý tưởng ban đầu

Ý tưởng ban đầu của mình là chuyển đổi chuỗi thành số nhị phân, sau đó sẽ cộng 2 số nhị phân lại là được.

```js
const aArr = a.split("").reverse().map(Number);
const bArr = b.split("").reverse().map(Number);

let i = 0;
let result = [];
let memo = 0;

while (aArr.length > i || bArr.length > i) {
  let aNum = aArr[i] || 0;
  let bNum = bArr[i] || 0;
  let sum = aNum + bNum + memo;
  if (sum >= 2) {
    sum = sum % 2;
    memo = 1;
  } else {
    memo = 0;
  }

  result[i] = sum;
  i++;
}

if (memo) {
  result[i] = memo;
}

return result.reverse().join("");
```

Cách làm trên đã pass với tốc độ rất chậm.

Mình thấy rằng cách làm trên khá mất thời gian ở chổ mình cắt chuỗi thành mảng các ký tự riêng biệt, sau đó đảo ngược chuỗi, rồi lại chuyển đổi từng ký tự thành số tương ứng.

Mình sẽ khai thác từ chổ này, mình thấy rằng thao tác cộng số nhị phân khá đơn giản, nó chỉ có 4 trường hợp:

1. a = 0, b = 0 -> kết quả là 0, nhớ 0
2. a = 0, b = 1 -> kết quả là 1, nhớ 0
3. a = 1, b = 0 -> kết quả là 1, nhớ 0
4. a = 1, b = 1 -> kết quả là 0, nhớ 1

Vì vậy mình không chuyển đổi từng giá trị sang số nữa, mà sẽ thao tác trực tiếp trên chuỗi luôn. Mình sẽ kiểm tra các ký tự thứ `i`,
nếu nó thuộc 1 trong 4 trường hợp trên thì mình sẽ có xử lý tương ứng với từng trường hợp.

```js
const aLength = a.length;
const bLength = b.length;
const maxLength = aLength > bLength ? aLength : bLength;

a = a.padStart(maxLength, "0");
b = b.padStart(maxLength, "0");

let i = maxLength - 1;
let result = "";
let memo = "0";
while (i > -1) {
  if (a[i] === "0" && b[i] === "0") {
    if (memo === "0") {
      result += "0";
    } else {
      result += memo;
      memo = "0";
    }
  } else if (a[i] === "0" && b[i] === "1") {
    if (memo === "0") {
      result += "1";
    } else {
      result += "0";
      memo = "1";
    }
  } else if (a[i] === "1" && b[i] === "0") {
    if (memo === "0") {
      result += "1";
    } else {
      result += "0";
      memo = "1";
    }
  } else {
    if (memo === "0") {
      result += "0";
      memo = "1";
    } else {
      result += "1";
      memo = "1";
    }
  }

  i--;
}

if (memo === "1") {
  result += "1";
}

return result.split("").reverse().join("");
```

Cách làm này thì đã nhanh hơn rất nhiều so với cách ban đầu, tuy nhiên, vẫn chưa tối ưu lắm.

Mình nhận thấy rằng đoạn trả về vẫn phải chuyển đổi qua lại giữa chuỗi và mảng. Ban đầu mình lưu result theo chiều ngược vì thói quen với mảng. Hàm `unshift()` của mảng sẽ chèn 1 phần vào đầu mảng, với độ phức tạp thời gian là O(n) vì nó phải dời vị trí toàn bộ các phần từ khác về sau một ô.

Tuy nhiên, chuỗi không xử lý như vậy, việc thêm 1 ký tự vào chuỗi đơn giản hơn nhiều, mình chỉ cần thực hiện phép tính cộng.

```js
result = "0" + result; // chèn ký tự "0" vào đầu chuỗi `result`
```

Vậy nên mình sửa lại 1 xíu, thay vì chèn thêm từng ký tự vào cuối chuỗi qua từng bước rồi đảo ngược chuỗi ở kết quả thì mình chèn thêm ký tự vào đầu luôn.

```js
const aLength = a.length;
const bLength = b.length;
const maxLength = aLength > bLength ? aLength : bLength;

a = "0".repeat(maxLength - aLength) + a;
b = "0".repeat(maxLength - bLength) + b;

let i = maxLength - 1;
let result = "";
let memo = "0";
while (i > -1) {
  if (a[i] === "0" && b[i] === "0") {
    if (memo === "0") {
      result = "0" + result;
    } else {
      result = memo + result;
      memo = "0";
    }
  } else if (a[i] === "0" && b[i] === "1") {
    if (memo === "0") {
      result = "1" + result;
    } else {
      result = "0" + result;
      memo = "1";
    }
  } else if (a[i] === "1" && b[i] === "0") {
    if (memo === "0") {
      result = "1" + result;
    } else {
      result = "0" + result;
      memo = "1";
    }
  } else {
    if (memo === "0") {
      result = "0" + result;
      memo = "1";
    } else {
      result = "1" + result;
      memo = "1";
    }
  }

  i--;
}

if (memo === "1") {
  result = "1" + result;
}

return result;
```

- Độ phức tạp thời gian là O(n), không phải O(n + m) vì mình chỉ duyệt chuỗi có length dài hơn thôi, không phải cả 2
- Độ phức tạp không gian là O(n), mình sử dụng 1 biến để lưu kết quả, biến này dài ra khi đầu vào dài ra.
