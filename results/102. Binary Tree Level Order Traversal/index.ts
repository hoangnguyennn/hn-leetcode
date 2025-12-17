/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const arr: [TreeNode, number][] = [];
  const bfs = (root: TreeNode) => {
    const queue: [TreeNode, number][] = [[root, 0]];

    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      arr.push(item);

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

  const result: number[][] = [];
  let current: number[] = [];
  let currentLevel: number = 0;
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
}
