// https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-100-liked


class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

function hasCycle(head: ListNode | null): boolean {
  let nodeSet = new Set<ListNode>()
  let curNode = head
  while (curNode) { 
    if (nodeSet.has(curNode)) { 
      return true
    }
    nodeSet.add(curNode)
    curNode = curNode.next
  }
  return false
}