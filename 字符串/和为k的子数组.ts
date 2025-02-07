// https://leetcode.cn/problems/subarray-sum-equals-k/?envType=study-plan-v2&envId=top-100-liked

/**
 * 前缀和 + 哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let pre = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    map.set(pre, (map.get(pre) || 0) + 1);
  }
  return count;
};