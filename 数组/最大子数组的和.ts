// https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {number[]} nums
 */

function maxSubArray(nums: number[]): number {
  // 初始化最大和和当前和为数组第一个元素
  let maxSum = nums[0];
  let currentSum = nums[0];

  // 遍历数组，从第二个元素开始
  for (let i = 1; i < nums.length; i++) {
      // 更新当前和：选择当前元素或将当前元素加到当前和中
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      // 更新最大和
      maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}