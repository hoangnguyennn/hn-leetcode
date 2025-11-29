/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const mid1 = Math.floor((length - 1) / 2);
  const mid2 = Math.floor(length / 2);

  let mergedArr = [];

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
};
