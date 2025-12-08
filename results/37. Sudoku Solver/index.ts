/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const isValid = (
    board: string[][],
    x: number,
    y: number,
    num: string
  ): boolean => {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] === num) return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][y] === num) return false;
    }

    let startRow = Math.floor(x / 3) * 3;
    let startCol = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        if (board[startRow + i][startCol + k] === num) return false;
      }
    }

    return true;
  };

  const backtrack = (board: string[][]): boolean => {
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        if (board[i][k] === ".") {
          for (let num = 1; num < 10; num++) {
            const numStr = num + "";
            if (isValid(board, i, k, numStr)) {
              board[i][k] = numStr;

              if (backtrack(board)) {
                return true;
              }

              board[i][k] = ".";
            }
          }

          return false;
        }
      }
    }

    return true;
  };

  backtrack(board);
}
