// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}


function flatten(root: TreeNode | null): void {
  if (!root) return

  let pre: TreeNode | null = null
  function preOrder(node: TreeNode | null): void {
    if (!node) return

    const left = node.left
    const right = node.right
    if (pre) {
      pre.right = node
      pre.left = null
    }
    pre = node

    preOrder(left)
    preOrder(right)
  }

  preOrder(root)
}