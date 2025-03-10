// https://leetcode.cn/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode<T> {
  value: T
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}


// BFS解法
function isMirror<T>(root: TreeNode<T> | null): boolean {
  if (!root) return true

  const queue: [TreeNode<T> | null, TreeNode<T> | null][] = [[root.left, root.right]]
  // const queue: Array<[TreeNode<T> | null, TreeNode<T> | null]> = []
  while (queue.length) {
    const [left, right] = queue.shift()!
    if (!left && !right) continue
    if (!left || !right || left.value !== right.value) return false
    queue.push([left.left, right.right])
    queue.push([left.right, right.left])
  }
  return true
}

// DFS解法
function isMirror2<T>(root: TreeNode<T> | null): boolean {
  if (!root) return true

  function check(left: TreeNode<T> | null, right: TreeNode<T> | null): boolean {
    if (!left && !right) return true
    if (!left || !right) return false

    return check(left.left, right.right) && check(left.right, right.left) && left.value === right.value
  }

  return check(root.left, root.right)
}