// https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked

// 时间复杂度O（n），空间复杂度O（1）
class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true

  // 使用快慢指针找到链表中间点
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next && slow) {
    slow = slow.next
    fast = fast.next.next
  }

  // 反转链表后半部分
  let pre: ListNode | null = null
  let cur: ListNode | null = slow
  while (cur !== null) {
    const nextTemp = cur.next
    cur.next = pre
    pre = cur
    cur = nextTemp
  }

  // 判断链表前半部分和后半部分
  let left: ListNode | null = head
  let right: ListNode | null = pre
  while (right && left) {
    if (right.val !== left.val) return false
    left = left.next
    right = right.next
  }
  return true
}