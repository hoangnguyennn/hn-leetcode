/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;

  let k = 0;
  for (let i = 0; i < n; i++) {
    while (nums1[k] < nums2[i]) {
      k++;
    }

    nums1.splice(k, 0, nums2[i]);
  }
};
