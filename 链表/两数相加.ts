// https://leetcode.cn/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-100-liked


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * 时间复杂度：O(max(m, n))
 * 空间复杂度：O(max(m, n))
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode();
  let cur = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}
