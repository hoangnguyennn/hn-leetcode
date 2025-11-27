## Ý tưởng

Dựa vào ví dụ, ta thấy được rằng số được biểu diễn ở dạng danh sách liên kết, và cả input và output đều đặt giá trị hàng đơn vị là node đầu tiên.

Vậy thì quá trình thực hiện khá đơn giản, chỉ việc cộng từng cặp số từ node đầu của hai danh sách tới cuối như việc thực hiện phép cộng thủ công.

```js
let result, lastNode;

while (l1 || l2) {
  let val = (l1?.val || 0) + (l2?.val || 0);

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

return result;
```

Tới đây, mình chạy thử thì thấy fail, mình đã bỏ sót trường hợp tổng 2 số lớn hơn 10. Vậy nên mình đã bổ sung code để xử lý trường hợp này.

```js
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
```

- Độ phức tạp thời gian là O(n)
- Độ phức tạp không gian là O(n)
