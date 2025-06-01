/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回数组中第 k 个最大的元素。
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 * @param nums 
 * @param k 
 * @returns 
 */
function getKth(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  return nums[nums.length - k];
}