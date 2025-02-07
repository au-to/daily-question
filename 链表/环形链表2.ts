// https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked



class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

function deleteNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null
  let nodeSet = new Set<ListNode>()
  let curNode: ListNode | null = head
  while (curNode) {
    if (nodeSet.has(curNode)) {
      return curNode
    }
    nodeSet.add(curNode)
    curNode = curNode.next
  }
  return null
}
