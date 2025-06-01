/**
 * 给你两个有序数组 nums1 和 nums2，请你合并这两个有序数组并去重。
 * 时间复杂度O(n+m)
 * 空间复杂度O(n+m)
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function mergeArray(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (res[res.length - 1] !== nums1[i]) {
        res.push(nums1[i])
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      if (res[res.length - 1] !== nums1[i]) {
        res.push(nums1[i]);
      }
      i++;
    } else {
      if (res[res.length - 1] !== nums2[j]) {
        res.push(nums2[j]);
      }
      j++;
    }

    while (i < nums1.length) {
      if (res[res.length - 1] !== nums1[i]) {
        res.push(nums1[i]);
      }
      i++;
    }

    while (j < nums2.length) {
      if (res[res.length - 1] !== nums2[j]) {
        res.push(nums2[j]);
      }
      j++;
    }
  }

  return res;
}