// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

// 三步反转法 时间复杂度O(n) 空间复杂度O(1)
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  function reverse(arr: number[], start: number, end: number): void {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // 第一次反转
  reverse(nums, 0, n - 1);
  // 第二次反转
  reverse(nums, 0, k - 1);
  // 第三次反转
  reverse(nums, k, n - 1);
}