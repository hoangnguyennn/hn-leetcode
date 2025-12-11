## Ý tưởng

Ý tưởng ban đầu là tương tự như bài `39. Combination Sum` nhưng các index sẽ không trùng nhau.

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  const backtrack = (candidates, target, start, path) => {
    if (target < 0) return;

    if (target === 0 && path.length > 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i + 1, path); // -> ở bước này, thay vì truyền index = số hiện tại thì mình truyền số kế tiếp nó
      path.pop();
    }
  };

  backtrack(candidates, target, 0, []);

  return result;
};
```

Tuy nhiên, với cách ở giải ở trên, không cover được trường hợp 2 số giống nhau nhưng ở index khác nhau. Vậy nên mình đã tiến hành sắp xếp phương án và lưu vào trong một `Map`. Lúc đầu mình nghĩ tới `Set` nhưng `Set` không phân biệt được 2 mảng có giá trị giống nhau, nên mình dùng `Map`.

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = new Map();

  const backtrack = (candidates, target, start, path) => {
    if (target < 0) return;

    if (target === 0 && path.length > 0) {
      const sortedPath = [...path].sort((a, b) => a - b);
      result.set(JSON.stringify(sortedPath), sortedPath); // -> Thay vì đẩy trực tiếp phương án vào mảng, mình sẽ lưu nó vào trong một Map
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i + 1, path);
      path.pop();
    }
  };

  backtrack(candidates, target, 0, []);
  return Array.from(result.values());
};
```

Như cách này, nó đã đúng về mặt logic. Tuy nhiên khi chạy thì bị dính time limit exceeded khi các giá trị trong mảng đầu vào giống nhau.

Mình nghĩ ra 1 cấch, là sắp xếp lại mảng đầu vào. Và kiểm tra, nếu giá trị tại vị trí hiện tại bằng với giá trị ô liền trước, tức là giá trị đó đã được duyệt, mình không cần phải duyệt thêm nữa. Vì nếu nó là đáp án đúng thì cũng không đưa vào mảng kết quả nên duyệt tiếp phương án đó là không cần thiết.

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = new Map();
  candidates.sort((a, b) => a - b); // -> phải sắp xếp mảng đầu vào

  const backtrack = (candidates, target, start, path) => {
    if (target < 0) return;

    if (target === 0 && path.length > 0) {
      result.set(JSON.stringify(path), [...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // nếu giá trị hiện tại bằng giá trị ô trước nó thì không cần duyệt tiếp
      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i + 1, path);
      path.pop();
    }
  };

  backtrack(candidates, target, 0, []);
  return Array.from(result.values());
};
```
