// https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=top-100-liked


class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head // 递归终止条件

  // 1. 找到链表中点（使用快慢指针）
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let prev: ListNode | null = null // 记录 slow 的前一个节点

  while (fast !== null && fast.next !== null) {
    prev = slow
    slow = slow!.next
    fast = fast.next.next
  }

  // 2. 断开链表，分成两部分
  prev!.next = null

  // 3. 递归对左右部分排序
  const left = sortList(head)
  const right = sortList(slow)

  // 4. 合并两个已排序链表
  return mergeTwoLists(left, right)
}

/**
 * 合并两个有序链表
 * @param l1 第一个有序链表
 * @param l2 第二个有序链表
 * @returns 合并后的有序链表
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)
  let current = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  // 连接剩余部分
  current.next = l1 !== null ? l1 : l2

  return dummy.next
}