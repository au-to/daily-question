// https://leetcode.cn/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-100-liked


class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

/**
 * 思路：层序遍历 > 每层最后一个元素加入结果数组
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param root 
 * @returns 
 */
function rightSideView(root: TreeNode | null): number[] | null {
  if (!root) return null

  const queue: TreeNode[] = [root]
  const res: number[] = []
  while (queue.length) {
    const levelLength = queue.length
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift()
      if (i === levelLength - 1) {
        res.push(node?.val!)
      }
      if (node?.left) queue.push(node.left)
      if (node?.right) queue.push(node.right)
    }
  }

  return res
}