/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode | null = null;
  let lastNode: ListNode | null = null;
  let memo = 0;

  while (l1 || l2) {
    let val = (l1?.val || 0) + (l2?.val || 0) + memo;
    memo = Math.floor(val / 10);
    val = val % 10;

    const newNode = new ListNode(val);

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      result = newNode;
    }

    lastNode = newNode;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  if (memo) {
    const newNode = new ListNode(memo);

    if (lastNode) {
      lastNode.next = newNode;
    }
  }

  return result;
}
