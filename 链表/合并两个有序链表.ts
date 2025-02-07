// https://leetcode.cn/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-100-liked

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

/**
 * 时间复杂度：O(n + m)
 * 空间复杂度：O(1)
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let virtualHead = new ListNode(0, null); // 虚拟头节点
  let cur = virtualHead;

  while (list1 && list2) { 
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return virtualHead.next;
}