// 定义二叉树的节点
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

// 定义二叉树
class BinaryTree<T> {
  root: TreeNode<T> | null

  constructor() {
    this.root = null
  }

  // 插入节点
  insert(value: T): void {
    const newNode: TreeNode<T> = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // 插入节点-辅助方法
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 前序遍历
  preOrder(node: TreeNode<T> | null = this.root, result: T[]): T[] {
    if (node) {
      result.push(node.value)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }

    return result
  }

  // 中序遍历
  inOrder(node: TreeNode<T> | null = this.root, result: T[]): T[] {
    if (node) {
      this.inOrder(node.left, result)
      result.push(node.value)
      this.inOrder(node.right, result)
    }

    return result
  }

  // 后序遍历
  postOrder(node: TreeNode<T> | null = this.root, result: T[]): T[] {
    if (node) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.value)
    }

    return result
  }

  // 层序遍历
  levelOrder(): T[] {
    if (!this.root) return []
    const result: T[] = []
    const queue: TreeNode<T>[] = [this.root]

    while (queue.length) {
      const node = queue.shift()!
      result.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    return result
  }

  // 查找节点
  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value)
  }

  // 查找节点-辅助方法
  private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null
    if (value === node.value) return node
    if (value < node.value) {
      return this.searchNode(node.left, value)
    } else {
      return this.searchNode(node.right, value)
    }
  }
}