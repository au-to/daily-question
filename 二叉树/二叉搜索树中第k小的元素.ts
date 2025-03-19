// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-100-liked



class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

/**
 * 遍历 + 排序
 * 时间复杂度O(n) + O(nlogn)
 * 空间复杂度O(n)
 * @param root 
 * @param k 
 * @returns
 */
function kthSmallest(root: TreeNode | null, k: number): number | null {
  if (!root) return null

  const arr: number[] = []
  function inOrder(node: TreeNode | null) {
    if (node) {
      inOrder(node.left)
      arr.push(node.val)
      inOrder(node.right)
    }
  }

  inOrder(root)

  return arr[k - 1]
}

// 优化版本
/**
 * 时间复杂度O(k)
 * 空间复杂度O(n)
 * @param root 
 * @param k 
 * @returns 
 */
function kthSmallest2(root: TreeNode | null, k: number): number | null {
  if (!root) return null

  let count = 0
  let res = 0
  function inOrder(node: TreeNode | null): void {
    if (!node || count >= k) return
    inOrder(node.left)
    count++
    if (count === k) {
      res = node.val
      return
    }
    inOrder(node.right)
  }

  inOrder(root)
  return res
}