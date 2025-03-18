// https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

function validBST(root: TreeNode | null): boolean {

  function help(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true
    if (node.val <= min || node.val >= max) return false

    return help(node.left, min, node.val) && help(node.right, node.val, max)
  }

  return help(root, -Infinity, Infinity)
}