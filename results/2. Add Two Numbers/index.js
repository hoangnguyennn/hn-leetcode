/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result, lastNode;
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
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (memo) {
    const newNode = new ListNode(memo);
    lastNode.next = newNode;
  }

  return result;
};
