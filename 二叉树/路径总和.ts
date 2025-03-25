// https://leetcode.cn/problems/path-sum-iii/description/?envType=study-plan-v2&envId=top-100-liked


class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

/**
 * 时间复杂度O(n*n)
 * 空间复杂度O(n)
 * @param root
 * @param targetSum 
 * @returns 
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0

  // 计算以当前节点为起点的路径数量
  function dfs(node: TreeNode | null, sum: number): number {
    if (!node) return 0

    // 当前路径的和是否等于targetSum
    let count: number = node.val === sum ? 1 : 0

    // 继续往下找，看子树中是否有满足条件的路径
    count += dfs(node.left, sum - node.val)
    count += dfs(node.right, sum - node.val)

    return count
  }

  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
}