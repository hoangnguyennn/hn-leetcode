## Đệ quy

Đệ quy là một kỹ thuật lập trình mà một hàm lại gọi chính nó trong implementation của nó.

Ví dụ:

Tính tổng các số tự nhiên từ 1 tới n, nếu triển khai bằng đệ quy thì nó sẽ như sau:

```js
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
```

Nhìn vào bài toán ở trên, ta thấy rằng, để tính được tổng từ `1` tới `n` thì ta sẽ lấy `n` + với tổng từ `1` tới `n - 1`. Chúng ta thấy rằng tổng từ `1` tới `n` và tổng từ `1` tới `n - 1` có cấu trúc khá tương tự nhau. Vì vậy nên ta có thể "gọi lại hàm" `sum` để giải quyết bài toán có cấu trúc tương tự nhưng ở quy mô nhỏ hơn.

Thêm 1 điều nữa, bài toán con của `n` là `n - 1`, bài toán con của `n - 1` là `n - 2`, ... Vậy bài toán con của `1` thì bằng bao nhiêu? Chúng ta chỉ tính tổng từ `1` nên bài toán con của `1` không phải là `0`. Nhìn vào đoạn code `if (n === 1) return 1;` chúng ta thấy rằng, khi `n = 1` thì trả về `1` trực tiếp. Nó có nghĩa là `n = 1` là bài toán nhỏ nhất rồi, không còn nhỏ hơn nữa, và bài toán nhỏ nhất đó gọi là điểm dừng, nếu không có điểm dừng, nó sẽ chạy mãi cho tới khi out-of-memory.

Tóm lại, đệ quy là kỹ thuật lập trình mà nó có 2 đặc trưng:

- Hàm gọi lại chính nó để giải quyết bài toán tương tự nhưng với quy mô đầu vào nhỏ hơn
- Có điểm dừng (bài toán nhỏ nhất)
