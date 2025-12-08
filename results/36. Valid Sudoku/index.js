/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // duyệt hàng
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === ".") continue;
      if (set.has(board[i][k])) return false;
      set.add(board[i][k]);
    }
  }

  // duyệt cột
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let k = 0; k < 9; k++) {
      if (board[k][i] === ".") continue;
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
          if (board[startRow + m][startCol + n] === ".") continue;
          if (set.has(board[startRow + m][startCol + n])) return false;
          set.add(board[startRow + m][startCol + n]);
        }
      }
    }
  }

  return true;
};
