/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
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
};
