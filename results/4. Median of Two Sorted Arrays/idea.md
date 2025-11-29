## Ý tưởng

Vì 2 mảng đã cho đã được sắp xếp nên mình cứ merge 2 mảng lại, sau đó xác định index của trung vị là được.

```js
let mergedArr = [];

let nums1Index = 0;
let nums2Index = 0;

while (nums1[nums1Index] !== undefined && nums2[nums2Index] !== undefined) {
  if (nums1[nums1Index] > nums2[nums2Index]) {
    mergedArr.push(nums2[nums2Index++]);
  } else {
    mergedArr.push(nums1[nums1Index++]);
  }
}

if (nums1Index < nums1.length) {
  mergedArr = mergedArr.concat(nums1.slice(nums1Index));
}

if (nums2Index < nums2.length) {
  mergedArr = mergedArr.concat(nums2.slice(nums2Index));
}

const length = nums1.length + nums2.length;
if (length % 2 === 0) {
  const mid1 = length / 2;
  const mid2 = length / 2 - 1;

  return (mergedArr[mid1] + mergedArr[mid2]) / 2;
} else {
  const mid = Math.floor(length / 2);
  return mergedArr[mid];
}
```

- Độ phức tạp thời gian là O(m + n)
- Độ phức tạp không gian là O(m + n)

## Cải tiến

Mình đã xác định được `mid1` và `mid2` (index của trung vị) ngay từ đầu thì mình thấy rằng chỉ cần merge 2 mảng từ index 0 tới trung vị là được, không cần phải merge tới cuối mảng.

```js
const length = nums1.length + nums2.length;
const mid1 = Math.floor((length - 1) / 2);
const mid2 = Math.floor(length / 2);

let mergedArr: number[] = [];

let nums1Index = 0;
let nums2Index = 0;
let counter = -1;

while (nums1Index < nums1.length && nums2Index < nums2.length) {
  if (nums1[nums1Index] > nums2[nums2Index]) {
    mergedArr.push(nums2[nums2Index++]);
  } else {
    mergedArr.push(nums1[nums1Index++]);
  }

  counter++;

  if (mid2 === counter) {
    return (mergedArr[mid1] + mergedArr[mid2]) / 2;
  }
}

while (nums1Index < nums1.length) {
  mergedArr.push(nums1[nums1Index++]);
  counter++;

  if (mid2 === counter) {
    return (mergedArr[mid1] + mergedArr[mid2]) / 2;
  }
}

while (nums2Index < nums2.length) {
  mergedArr.push(nums2[nums2Index++]);
  counter++;

  if (mid2 === counter) {
    return (mergedArr[mid1] + mergedArr[mid2]) / 2;
  }
}

return (mergedArr[mid1] + mergedArr[mid2]) / 2;
```

Mặc dù chúng ta chỉ cần duyệt một nửa so với ban đầu nhưng độ phức tạp không đổi.

- Độ phức tạp thời gian là O(m + n)
- Độ phức tạp không gian là O(m + n)

## Còn nữa

Bài toàn mô tả rằng có cách giải đạt độ phức tạp O(log(m + n)) và thuộc chủ đề tìm kiếm nhị phân, chia để trị, nhưng mình chưa hình dung ra cách làm.
