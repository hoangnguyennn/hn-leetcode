## Ý tưởng

Ý tưởng ban đầu là cắt chuỗi thành các từ, phân cách nhau bởi dấu space. Sau đó, tìm từ cuối cùng và xác định length của nó.

```js
s.trim().split(" ").pop().length;
```

Tuy nhiên cách này chạy khá lâu, vì phải thao tác xử lý chuỗi và mảng.

Sau đó, để cải tiến thì mình chỉ xác định xem "vị trí biên" của từ là ở đâu, sau đó tính khoảng cách giữa 2 biên là được.

Chúng ta có 1 số trường hợp như sau:

1. `"Hello World"` -> Chuỗi có space ngăn cách các từ
2. `"Hello World   "` -> Chuỗi có space ở cuối và có nhiều từ
3. `"Hello      "` -> Chuỗi có space ở cuối và chỉ có 1 từ
4. `"      World"` -> Chuỗi có space ở đầu
5. `"     "` -> Chuỗi chỉ toàn space
6. `"Hello"` -> Chuỗi chỉ có 1 từ

Đầu tiên, xác định biên bên phải, biên bên phải được xác định bằng "ký tự khác space ngoài cùng nhất bên phải".

Lần lượt các ví dụ trên, ta có index của chúng là:

1. 10 -> chữ `"d"` trong từ `"World"`
2. 10 -> chữ `"d"` trong từ `"World"`
3. 4 -> chữ `"o"` trong từ `"Hello"`
4. 10 -> chữ `"d"` trong từ `"World"`
5. -1 -> không có ký tự khác space
6. 4 -> chữ `"o"` trong từ `"Hello"`

Tiếp theo là xác định biên bên trái, biên bên trái là được xác định bằng "ký tự liền sau ký tự space và trước ký tự biên bên phải"

Lần lượt các ví dụ trên, ta có index ký tự space trươcs biên bên trái:

1. 5 -> chữ `"W"` trong từ `"World"`
2. 5 -> chữ `"W"` trong từ `"World"`
3. -1 -> không có space nào trước biên bên phải
4. 5 -> chữ `"W"` trong từ `"World"`
5. -1 -> vì biên bên phải chưa được xác định nên cũng không xác định được biên bên trái
6. -1 -> không có space nào trước biên bên phải

Và kết quả mong muốn của mình là length bằng:

1. 5 -> từ `"World"`
2. 5 -> từ `"World"`
3. 5 -> từ `"Hello"`
4. 5 -> từ `"World"`
5. 0 -> không có từ nào
6. 5 -> từ `"Hello"`

Nhìn vào vị trí biên và kết quả mong đợi, ta thấy:

1. 10 - 5 = 5
2. 10 - 5 = 5
3. 4 - (-1) = 5
4. 10 - 5 = 5
5. -1 - (-1) = 0
6. 4 - (-1) = 6

Nhìn vào kết quả trên, ta thấy rằng không có trường hợp ngoại lệ nào. Vậy thì tiến hành code thôi.

Ta sẽ duyệt từ cuối chuỗi về đầu

```js
let mark = -1; // vị trí biên bên phải, đánh dấu -1 nghĩa là chưa xác định
for (let i = s.length - 1; i > -1; i++) {
  if (s[i] !== " " && mark === -1) {
    // nếu ký tự hiện tại khác space và biên phải chưa được xác định
    // thì index đó sẽ là biên phải
    mark = i;
  }

  if (s[i] === " " && mark !== -1) {
    // nếu ký tự hiện tại là space và biên phải đã được xác định
    // thì index đó sẽ là ký tự space liền trước biên trái
    // tại đây, ta trả vê kết quả là khoảng cách giữa biên trái và phải là được
    return mark - i;
  }
}

// nếu duyệt hết mảng mà chưa xác định được biên 2 bên
// thì nó có 2 trường hợp:
// 1. Chuỗi chỉ toàn space, lúc này mark vẫn đang là -1
// 2. Chuỗi chỉ có 1 từ, biên bên phải đã xác định, nhưng biên bên trái thì không

// Cả 2 trường hợp trên, ta đều cần +1 để trả đúng kết quả mong đợi:
// 1. -1 + 1 = 0 -> chuỗi rỗng
// 2. x - 0 + 1 -> 0 là toạ độ của biên trái (vì không có space trước nó)
return mark + 1;
```
