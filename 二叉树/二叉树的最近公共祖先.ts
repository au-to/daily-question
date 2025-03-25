class TreeNode {
  left: TreeNode | null
  right: TreeNode | null
  val: number

  constructor(val: number) {
    this.val = val
  }
}


/**
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root
  return left || right
}