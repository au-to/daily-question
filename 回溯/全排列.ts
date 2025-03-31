// https://leetcode.cn/problems/permutations/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * 时间复杂度O(n!)
 * 空间复杂度O(n)
 * @param nums 
 * @returns 
 */
function permute(nums: number[]): number[][] {
  const res: number[][] = [] // 结果数组
  const paths: number[] = [] // 当前的排列
  const used: boolean[] = new Array(nums.length).fill(false) // 标记当前元素是否被使用过

  function backtrack() {
    if (paths.length === nums.length) {
      res.push([...paths]) // 记录排列
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue // 跳过已使用的元素
      paths.push(nums[i])
      used[i] = true
      backtrack()
      paths.pop() // 回溯，撤销选择
      used[i] = false
    }
  }

  backtrack()
  return res
}