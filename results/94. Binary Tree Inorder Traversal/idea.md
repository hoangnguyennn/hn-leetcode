# Ý tưởng

Sử dụng DFS để duyệt cây. Duyệt từ trái sang phải.

```js
const result = [];

const search = (root) => {
  if (!root) return;

  // duyệt trái: đưa các node con bên trái vào kết quả
  search(root.left);

  // đưa node cha vào kết quả
  result.push(root.val);

  // duyệt phải: đưa các node con bên phải vào kết quả
  search(root.right);
};

search(root);
return result;
```
