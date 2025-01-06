// https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked


// 时间复杂度O（n），空间复杂度O（1）
class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null // 前驱节点
  let cur: ListNode | null = head // 当前节点
  while (cur !== null) {
    const nextTemp: ListNode | null = cur.next // 暂存当前节点的下一个节点
    cur.next = pre // 将当前节点的next指向前一个节点
    pre = cur // 移动前驱节点到当前节点
    cur = nextTemp // 移动当前节点到下一个节点
  }
  return pre
}