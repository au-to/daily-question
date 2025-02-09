// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-100-liked


class ListNode { 
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param head 
 * @param n 
 * @returns 
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 虚拟头节点
  const dummy = new ListNode(0, head)

  // 快慢指针
  let fast: ListNode | null = dummy
  let slow: ListNode | null = dummy

  // 快指针先走n+1步
  for (let i = 0; i <= n; i++) {
    fast = fast?.next ?? null
  }

  // 同时移动快慢指针，直到快指针到达链表末尾，此时慢指针的下一个节点正好为倒数第n个节点
  while (fast) {
    fast = fast?.next ?? null
    slow = slow?.next ?? null
  }

  // 删除倒数第n个节点
  slow!.next = slow!.next?.next ?? null
  return dummy.next
}