## Quay lui

Quay lui là một kỹ thuật lập trình mà chúng ta sẽ thử qua từng lựa chọn, nếu tại một bước nào đó, ta nhận ra phương án này không phương án đúng, chúng ta sẽ lùi lại bước trước đó và thử lựa chọn khác. Cho tới khi nào chọn được phương án đúng.

```psuedo
func backtrack (state):
  if(state is complete):
    return

  for(choice of choices):
    apply(state, choice)
    backtrack(state)
    undo(state, choice)
```

Một ví dụ đơn giản có thể áp dụng kỹ thuật quay lui là liệt kê tất cả các cách chọn 2 số từ tập hợp 3 sô.

Ví dụ:

Cho tập hợp `[1, 2, 3]`, hãy liệt kê ra tất cả các cách chọn 2 số trong tập hợp này.

```js
const result = [];

const backtrack = (path, start = 1) => {
  if (path.length === 2) {
    result.push([...path]);
    return;
  }

  for (let i = start; i <= 3; i++) {
    path.push(i);
    backtrack(path, i + 1);
    path.pop();
  }
};
```

Nhìn vào đoạn code trên ta thấy, khi chiều dài của mảng `path` = 2 nghĩa là nó là phương án đúng (đã thoả điều kiện đề ra) thì sẽ lưu lại phương án đó.

Nếu nó chưa thoả điều kiện, và nó vẫn còn có thể thử các phương án khác thì ta tiến hành thử từ phương án, ở đây ta có các phương án là từ `start` tới `3`.

Ta lần lượt tiến hành 3 bước:

- thử một lựa chọn (gán 1 số vào phương án),
- tiếp tục lựa chọn
- bỏ lựa chọn ở bước 1 ra để chuẩn bị cho lần thử tiếp theo
