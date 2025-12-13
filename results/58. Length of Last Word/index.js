/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let mark = -1;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== " " && mark === -1) {
      // vị trí cuối cùng khác space
      mark = i;
    }

    if (s[i] === " " && mark !== -1) {
      // tìm thấy space và mark đã được xác định
      return mark - i;
    }
  }

  return mark + 1;
};
