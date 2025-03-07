// https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode<T> {
  value: T
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

/**
 * 翻转二叉树
 * BFS遍历二叉树的同时交换二叉树的节点
 */
function revertTree<T>(root: TreeNode<T> | null): TreeNode<T> | null {
  if (!root) return null

  const queue: TreeNode<T>[] = [root]
  while (queue.length > 0) {
    const node = queue.shift()!

    // 交换左右子树
    let temp = node.left
    node.left = node.right
    node.right = temp

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return root
}