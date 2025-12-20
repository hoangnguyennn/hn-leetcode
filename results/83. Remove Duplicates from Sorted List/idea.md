## Ý tưởng

Duyệt danh sách liên kết từ đầu tới cuối, khi gặp 2 node liền kề nhau mà có giá trị giống nhau thì bỏ node trước ra.

```js
const result = head;
const currentNode = head;

while (head) {
  head = head.next; // di chuyển qua từng node

  while (head.val === currentNode.val) {
    head = head.next;
  }

  currentNode.next = head;
  currentNode = currentNode.next;
}

return result;
```
