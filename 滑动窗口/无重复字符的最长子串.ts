// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * 滑动窗口
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let map = new Map();
  while (right < s.length) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }
    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
};
