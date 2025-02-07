// https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked



// 方法1：双指针 --- 时间复杂度O(n)
function moveZeroes(nums: number[]): number[] {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++
  }
  return nums;
}