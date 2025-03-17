// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-100-liked


class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}


function BFS(root: TreeNode): number[][] {
  if (!root) return []

  const res: number[][] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const arr: number[] = []
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!
      arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(arr)
  }

  return res
}