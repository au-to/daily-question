// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked


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

/**
 * @params 二叉树的根节点
 * @return 二叉树的最大深度
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */
function maxDeep<T>(root: TreeNode<T>): number {
  if (!root) return 0

  // 遍历二叉树（BFS）
  let depth = 0
  const queue: TreeNode<T>[] = [root] // 队列存储二叉树当前层的节点

  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift() // 队头出队
      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }
    }
    depth++ // 处理完一层，depth+1
  }

  return depth
}

// DFS
function maxDepth<T>(root: TreeNode<T> | null): number {
  if (!root) return 0

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}