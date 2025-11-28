# Ý tưởng ban đầu

Mình nghĩ rằng có thể giải được bằng quy hoạch động với ý tưởng là, độ dài dài nhất khi có ký tự ở ô hiện tại là:

- độ dài dài nhất của ô trước nó + 1 nếu ký tự ở ô hiện tại khác ký tự ở ô liên trước
- độ dài dài nhất của ô trước nó nếu ký tự ở ô hiện tại giống ký tự ở ô liền trước

Tuy nhiên, cách làm này không đúng nếu hai ký tự trùng lặp cách xa nhau

# Tìm lời giải với cách làm ngây ngô nhất

Trong JavaScript có `Set`, object này lưu lại những giá trị không trùng nhau.

Mình tiến hành duyệt qua từng chuỗi con, tách nó thành các ký tự và tạo một `Set` để lưu nó. Sau đó kiểm tra xem liệu kích thước của `Set` có giảm không.

Nếu nó giảm nghĩa là trong chuỗi con đó có ký tự trùng lặp.

```js
let start = 0;
let max = 0;

for (let i = 0; i < s.length; i++) {
  let subArr = s.slice(start, i + 1).split("");

  while (subArr.length !== new Set(subArr).size) {
    start++;
    subArr = s.slice(start, i + 1).split("");
  }

  if (max < subArr.length) {
    max = subArr.length;
  }
}

return max;
```

Tuy nhiên, cách làm này nó có vấn đề ở chỗ, việc tách chuỗi thành mảng rồi truyền vào `Set` rất tốn thời gian.

Dẫn tới, dù đã pass nhưng tốc độ rất chậm.

## Quay lại cách giải ban đâu

Lần này, mình sẽ không tính độ dài tại ô hiện tại dựa trên ô liền trước. Thay vào đó, mình xác định vị trí của ký tự trùng lặp, sau đó tính khoảng cách giữa chúng.

Ví dụ: `"abcdac"` thì mình có thể xác định khoảng cách giữa 2 ký tự `"a"` và khoảng cách giữa 2 ký tự `"c"`.

Tuy nhiên, cách này cũng không đúng nếu giữa 2 ký tự `"a"` có một cặp ký tự trùng nhau. Chẳng hạn, `"abbcac"`, giữa hai ký tự `"a"` có một cặp ký tự `"b"`.

Tới đây, mình thấy rằng, không thể tính độ dài dài nhất khi chứa ký tự `"a"` bằng việc xác định vị trí của hai ký tự `"a"` được. Cách đúng phải là xác định khoảng cách giữa ký tự `"a"` và ký tự `"b"` gần nhất (vì `"b"` là ký tự trùng lặp liền trước `"a"`).

Để xác định vị trí của ký tự trùng lặp gần nhất, mình tạo thêm 1 biến để lưu index của nó, đồng thời, dùng `Map` để lưu lại vị trí gần nhất của các ký tự đã duyệt qua để kiểm tra xem liệu nó có trùng lặp hay không.

```js
const map = new Map();
let max = 0;
let duplicatedIndex = -1;

for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    if (map.get(s[i]) > duplicatedIndex) {
      duplicatedIndex = map.get(s[i]);
    }
  }

  max = Math.max(max, i - duplicatedIndex);
  map.set(s[i], i);
}

return max;
```

- Độ phức tạp thời gian là O(n), chỉ duyệt mảng 1 lần
- Độ phức tạp không gian là O(n), vì cần 1 map để lưu lại các ký tự trong chuỗi
