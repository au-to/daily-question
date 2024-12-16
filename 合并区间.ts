// https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked

// 时间复杂度：O(nlogn)

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  for (let item of intervals) {
    if (res.length === 0 || res[res.length - 1][1] < item[0]) {
      res.push(item);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], item[1])
    }
  }

  return res;
};