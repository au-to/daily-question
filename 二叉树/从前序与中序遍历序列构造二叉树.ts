// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked


class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(val: number) {
    this.val = val
  }
}


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null

  // 找到根节点的值
  const rootVal: number = preorder[0]
  // 构造根节点
  const root: TreeNode = new TreeNode(rootVal)
  // 找到根节点在中序遍历中的索引
  const mid = inorder.indexOf(rootVal)
  // 递归构造左子树
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  // 递归构造右子树
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}