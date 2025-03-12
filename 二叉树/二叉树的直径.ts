// https://leetcode.cn/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode {
  value: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(value: number) {
    this.value = value
  }
}


function maxPath(root: TreeNode | null): number {
  if (!root) return 0

  let res = 0
  function depth(node: TreeNode | null): number {
    if (!node) return 0

    let leftDepth = depth(node.left)!
    let rightDepth = depth(node.right)!

    res = Math.max(res, (leftDepth + rightDepth))
    return Math.max(leftDepth, rightDepth) + 1
  }
  depth(root)

  return res
}