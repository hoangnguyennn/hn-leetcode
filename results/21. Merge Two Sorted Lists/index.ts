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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let currentNode: ListNode | null = null;
  if (list1.val < list2.val) {
    currentNode = list1;
    list1 = list1.next;
  } else {
    currentNode = list2;
    list2 = list2.next;
  }

  let result = currentNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode!.next = list1;
      list1 = list1.next;
    } else {
      currentNode!.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode!.next;
  }

  if (list1) {
    currentNode!.next = list1;
  }

  if (list2) {
    currentNode!.next = list2;
  }

  return result;
}
