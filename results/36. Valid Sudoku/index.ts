function isValidSudoku(board: string[][]): boolean {
  // duyệt hàng
  for (let i = 0; i < 9; i++) {
    let set = new Set<string>();
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === ".") continue;
      if (set.has(board[i][k])) return false;
      set.add(board[i][k]);
    }
  }

  // duyệt cột
  for (let i = 0; i < 9; i++) {
    let set = new Set<string>();
    for (let k = 0; k < 9; k++) {
      if (board[k][i] === ".") continue;
      if (set.has(board[k][i])) return false;
      set.add(board[k][i]);
    }
  }

  // duyệt 3x3
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      let set = new Set<string>();
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          if (board[i * 3 + m][k * 3 + n] === ".") continue;
          if (set.has(board[i * 3 + m][k * 3 + n])) return false;
          set.add(board[i * 3 + m][k * 3 + n]);
        }
      }
    }
  }

  return true;
}
