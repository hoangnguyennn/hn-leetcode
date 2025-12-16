## Ý tưởng

Số đối xứng là số đọc xuôi, đọc ngược đều giống nhau.

Vậy việc đầu tiên là mình sẽ tạo ra số đảo ngược của input và so sánh thôi.

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const backupX = x;
  let revertedX = 0;

  while (x !== 0) {
    const modulo = x % 10;
    revertedX = revertedX * 10 + modulo;
    x = Math.floor(x / 10);
  }

  return revertedX === backupX;
};
```

Nhận thấy rằng số âm thì luôn không đối xứng, vì không thể convert số âm thành 1 số ngược hợp lệ được. Bổ sung thêm logic này vào:

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const backupX = x;
  let revertedX = 0;

  while (x !== 0) {
    const modulo = x % 10;
    revertedX = revertedX * 10 + modulo;
    x = Math.floor(x / 10);
  }

  return revertedX === backupX;
};
```

Vì mỗi lần lặp, ta chia x cho 10, nên sau n lần, khi x = 0 thì dừng.

Ta có công thức: 10^n ~ x (~ = xấp xỉ)

=> n ~ log10(x)

- Độ phức tạp thời gian là O(log(n))
- Độ phức tạp không gian là O(1)
