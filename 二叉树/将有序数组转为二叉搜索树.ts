// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked


/**
 * 时间复杂度O(n)
 * 空间复杂度O(logn)
 */
class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null

  function buildBST(left: number, right: number): TreeNode | null {
    if (left > right) return null

    const mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid])
    root.left = buildBST(left, mid - 1)
    root.right = buildBST(mid + 1, right)

    return root
  }

  return buildBST(0, nums.length - 1)
}