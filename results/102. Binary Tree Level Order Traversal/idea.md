## Ý tưởng

Sử dụng BFS để duyệt qua các node trong cây nhị phân.

```js
const result = [];
const bfs = (root) => {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
};

bfs(root);
```

Tiếp theo, cần mở rộng một xíu, thêm level mỗi khi đẩy node vào queue để xác định độ sâu của nó.

```js
const result = [];
const bfs = (root) => {
  const queue = [[root, 0]]; // [node, level]

  while (queue.length) {
    const item = queue.shift();
    result.push(item);

    const node = item[0];
    const level = item[1];

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
};

bfs(root);
```

Gom nhóm các node cùng level với nhau lại.

```js
const result = [];
const bfs = (root) => {
  const queue = [[root, 0]]; // [node, level]

  while (queue.length) {
    const item = queue.shift();
    result.push(item);

    const node = item[0];
    const level = item[1];

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
};

bfs(root);

let current = [];
let currentLevel = 0;
let groupedResult = [];

for (let i = 0; i < result.length; i++) {
  const item = result[i]; // [node, level]
  const node = item[0];
  const level = item[1];

  if (level === currentLevel) {
    current.push(node);
  } else {
    groupedResult.push(current);
    current = [node];
    currentLevel = level;
  }
}

return groupedResult;
```
