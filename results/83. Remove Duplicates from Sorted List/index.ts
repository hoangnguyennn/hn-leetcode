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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const result = head;
  let currentNode = head;

  while (head) {
    head = head.next; // di chuyển qua từng node

    while (head && head.val === currentNode.val) {
      head = head.next;
    }

    currentNode.next = head;
    currentNode = currentNode.next;
  }

  return result;
}
