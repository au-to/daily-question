// https://leetcode.cn/problems/swap-nodes-in-pairs/description/?envType=study-plan-v2&envId=top-100-liked



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
 * @returns 
 */

function swapPairs(head: ListNode | null): ListNode | null {
  // 创建虚拟节点
  const dummy = new ListNode(0, head);
  let pre: ListNode = dummy;
  
  // 当链表中至少存在两个节点时，进行交换
  while (pre.next && pre.next.next) {
    let first = pre.next;
    let second = first.next;

    // 交换节点
    pre.next = second!;
    first.next = second!.next;
    second!.next = first;
    pre = first;
  }
  
  return dummy.next
}
