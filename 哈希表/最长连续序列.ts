// https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked


// 方法1：排序 --- 时间复杂度O(n)
const longestConsecutive: (nums: number[]) => number = function (nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  let res = 1;
  let temp = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] - nums[i - 1] === 1) {
      temp++;
    } else {
      temp = 1;
    }
    res = Math.max(res, temp);
  }
  return res;
}