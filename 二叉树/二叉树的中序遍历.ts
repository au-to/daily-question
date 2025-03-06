// https://leetcode.cn/problems/binary-tree-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode<T> {
  value: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function inorder<T>(root: TreeNode<T> | null, result: T[]): T[] {
  if (root) {
    inorder(root.left, result)
    result.push(root.value)
    inorder(root.right, result)
  }

  return result
}