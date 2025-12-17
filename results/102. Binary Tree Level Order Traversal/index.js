/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const arr = [];
  const bfs = (root) => {
    const queue = [[root, 0]];

    while (queue.length) {
      const node = queue.shift();
      arr.push(node);

      if (node[0].left) {
        queue.push([node[0].left, node[1] + 1]);
      }

      if (node[0].right) {
        queue.push([node[0].right, node[1] + 1]);
      }
    }
  };

  bfs(root);
  const result = [];
  let current = [];
  let currentLevel = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item[1] === currentLevel) {
      current.push(item[0].val);
    } else {
      result.push(current);
      current = [item[0].val];
      currentLevel = item[1];
    }
  }

  if (current.length) {
    result.push(current);
  }

  return result;
};
