// https://leetcode.cn/problems/intersection-of-two-linked-lists/?envType=study-plan-v2&envId=top-100-liked

// 相交链表 --- 集合；时间复杂度O(n)；空间复杂度O(n)
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let visitedNodes = new Set<ListNode>();

  // 先遍历链表A，将链表A的节点存入map中
  let cur = headA;
  while (cur !== null) {
    visitedNodes.add(cur);
    cur = cur.next;
  }

  // 遍历链表B，查看map中是否有相同的节点
  cur = headB;
  while (cur !== null) {
    if (visitedNodes.has(cur)) {
      return cur;
    }
    cur = cur.next;
  }

  return null;
};