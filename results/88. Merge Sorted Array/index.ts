/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.length = m;
  nums2.length = n;

  let k = 0;
  for (let i = 0; i < n; i++) {
    while (nums1[k] < nums2[i]) {
      k++;
    }

    nums1.splice(k, 0, nums2[i]);
  }
}
