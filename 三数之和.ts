// https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked


// 方法1：双指针 --- 时间复杂度O(n^2)
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  let len = nums.length;
  if (len < 3 || !nums) {
    return res;
  }
  for (let i = 0; i < len; i++) {
    let left: number = i + 1;
    let right: number = len - 1;
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left] - 1) left++;
        while (nums[right] === nums[right] + 1) right--;
      }
    }
  }
  return res;
}