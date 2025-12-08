## Ý tưởng

Sử dụng kỹ thuật quay lui, thử hết các kết quả, khi và thế bí thì quay lại bước trước đó.

Cấu trúc code của quay lui như sau:

```
func backtrack (state):
  if state is complete:
    return

  for choice in choices:
    if isValid(choice):
      apply(choice)
      backtrack(state)
      undo(choice)
```

Áp dụng quay lui bài toán hiện tại,

```js
var solveSudoku = function (board) {
  const backtrack = (board) => {
    if (isSolved(board)) {
      return;
    }

    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        // chỉ điền vào những ô trống
        if (board[i][k] === ".") {
          // danh sách các lựa chọn
          for (let num = 1; num < 10; num++) {
            // apply lựa chọn
            board[i][k] = num + "";

            // backtrack
            backtrack(board);

            // quay lui
            board[i][k] = ".";
          }
        }
      }
    }
  };

  backtrack(board);
};
```

Hàm `isSolved` sẽ tương tự hàm isValidSudoku của bài 36, nhưng thêm điều kiện là tất cả các ô đều phải được điền.

```js
const isSolved = (board) => {
  // duyệt hàng
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === ".") return false;
      if (set.has(board[i][k])) return false;
      set.add(board[i][k]);
    }
  }

  // duyệt cột
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let k = 0; k < 9; k++) {
      if (board[k][i] === ".") return false;
      if (set.has(board[k][i])) return false;
      set.add(board[k][i]);
    }
  }

  // duyệt 3x3
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      const startRow = i * 3;
      const startCol = k * 3;

      let set = new Set();
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          if (board[startRow + m][startCol + n] === ".") return false;
          if (set.has(board[startRow + m][startCol + n])) return false;
          set.add(board[startRow + m][startCol + n]);
        }
      }
    }
  }

  return true;
};
```

Tới đây thì mình bị time limit exceeded. Vấn đề là mỗi lần vào backtrack, mình lại phải duyệt toàn bộ bảng để kiểm tra chúng có hợp lệ hay không.

Nhưng rõ ràng nếu chưa điền hết tất cả các ô thì chắc chắn 100% là nó chưa "solve" rồi.

Mình không đặt điều kiện dừng ở đầu backtrack như cấu trúc ban đầu nữa, mình sẽ chỉ kiểm tra khi tất cả các ô đều được điền:

```js
var solveSudoku = function (board) {
  const backtrack = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        // chỉ điền vào những ô trống
        if (board[i][k] === ".") {
          // danh sách các lựa chọn
          for (let num = 1; num < 10; num++) {
            // apply lựa chọn
            board[i][k] = num + "";

            // backtrack
            backtrack(board);

            // quay lui
            board[i][k] = ".";
          }
        }
      }
    }

    // ?? có vẻ hơi thừa, vì sau nó đâu còn gì nữa
    if (isSolved(board)) {
      return;
    }
  };

  backtrack(board);
};
```

Sửa lại 1 xíu, nếu nó đã duyệt hết các ô và điền được hết các giá trị thì kết quả sẽ là đã "solve":

```js
var solveSudoku = function (board) {
  const backtrack = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        // chỉ điền vào những ô trống
        if (board[i][k] === ".") {
          // danh sách các lựa chọn
          for (let num = 1; num < 10; num++) {
            // apply lựa chọn
            board[i][k] = num + "";

            // backtrack
            if (backtrack(board)) {
              return true;
            }

            // quay lui
            board[i][k] = ".";
          }

          // nếu ô board[i][k] không điền được số nào (không đi vào câu if và dừng lại)
          // thì phương án này là không hợp lệ
          return false;
        }
      }
    }

    // điền hết tất cả
    return true;
  };

  backtrack(board);
};
```

Tới đây thì mình chạy thử thì thấy sai, mình nhận ra là nếu điền hết tất cả các ô thì chưa chắc đã điền đúng, vậy thì mình phải kiểm tra xem liệu rằng kết quả được điền đó có đúng hay không:

```js
var solveSudoku = function (board) {
  const backtrack = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        // chỉ điền vào những ô trống
        if (board[i][k] === ".") {
          // danh sách các lựa chọn
          for (let num = 1; num < 10; num++) {
            // apply lựa chọn
            board[i][k] = num + "";

            // backtrack
            if (backtrack(board)) {
              return true;
            }

            // quay lui
            board[i][k] = ".";
          }

          // nếu ô board[i][k] không điền được số nào (không đi vào câu if và dừng lại)
          // thì phương án này là không hợp lệ
          return false;
        }
      }
    }

    if (isSolved(board)) {
      return true;
    }

    return false;
  };

  backtrack(board);
};
```

Lúc này thì quay lại vấn đề cũ, bị time limit exceeded, trong các lần backtrack, nó đều gọi tới `isSolved`.

Mình không gọi `isSolved` để kiểm tra nữa, mình sẽ chỉ điền những số thoả điều kiện với ô hiện tại, nếu không thoả thì lùi lại bước trước:

```js
var solveSudoku = function (board) {
  const backtrack = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        // chỉ điền vào những ô trống
        if (board[i][k] === ".") {
          // danh sách các lựa chọn
          for (let num = 1; num < 10; num++) {
            const numStr = num + "";
            if (isValid(board, i, k, numStr)) {
              // apply lựa chọn
              board[i][k] = numStr;

              // backtrack
              if (backtrack(board)) {
                return true;
              }

              // quay lui
              board[i][k] = ".";
            }
          }

          // nếu ô board[i][k] không điền được số nào (không đi vào câu if và dừng lại)
          // thì phương án này là không hợp lệ
          return false;
        }
      }
    }

    // duyệt hết bảng và điền hết các ô thì hợp lệ
    return true;
  };

  backtrack(board);
};
```

`isValid` sẽ kiểm tra xem liệu giá trị `num + ''` có điền vào ô `board[i][k]` được hay không.
Một số có thể điền vào một ô hay không thì phải kiểm tra xem trên hàng đó, trên cột đó, và trên block con đó đã có số đó chưa, nếu chưa có thì mới điền được.

```js
const isValid = (board, x, y, num) => {
  // kiểm tra hàng
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === num) return false;
  }

  // kiểm tra cột
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === num) return false;
  }

  // kiểm tra sub-block
  let startRow = Math.floor(x / 3) * 3;
  let startCol = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      if (board[startRow + i][startCol + k] === num) return false;
    }
  }

  return true;
};
```

Đã pass.
