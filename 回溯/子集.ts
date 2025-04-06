// https://leetcode.cn/problems/subsets/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * 时间复杂度O(2^n)
 * 空间复杂度O(n)
 * @param nums
 * @returns
 */
function subsets(nums: number[]): number[][] {
  const res: number[][] = [] // 结果集
  const path: number[] = [] // 当前路径

  function backtrack(startIndex: number) {
    res.push([...path]) // 记录路径，每一步都是合法的子集
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]) // 做选择
      backtrack(i + 1) // 递归
      path.pop() // 撤销选择（回溯）
    }
  }

  backtrack(0)
  return res
}