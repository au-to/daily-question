// https://leetcode.cn/problems/container-with-most-water/?envType=study-plan-v2&envId=top-100-liked



// 方法1：暴力破解 --- 时间复杂度O(n^2)
function maxArea1(height: number[]): number {
  let result: number = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let w: number = j - i;
      let h: number = Math.min(height[i], height[j]);
      result = Math.max(result, w * h);
    }
  }
  return result;
};



// 方法2：双指针 --- 时间复杂度O(n)
function maxArea2(height: number[]): number {
  let res: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;
  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    res = Math.max(w * h, res);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res
};