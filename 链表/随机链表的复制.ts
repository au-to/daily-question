// https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-100-liked


class ListNode {
  val: number
  next: ListNode | null
  random: ListNode | null
  constructor(val?: number, next?: ListNode, random?: ListNode) {
    this.val = val ?? 0
    this.next = next ?? null
    this.random = random ?? null
  }
}


/*
* 解题思路：
* 1. 遍历链表，复制每个节点，并存储在哈希表中
* 2. 再次遍历链表，设置每个节点的 next 和 random 指针
* 3. 返回新的链表
*/
function copyRandomList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  // 遍历原链表，根据原节点创建新节点，并存在哈希表中
  const map = new Map<ListNode, ListNode>();
  let cur = head;
  while (cur) {
    map.set(cur, new ListNode(cur.val));
    cur = cur.next!;
  }

  // 再次遍历原链表，设置新节点的 next 和 random 指针
  cur = head;
  while (cur) {
    const newNode = map.get(cur)!;
    newNode.next = cur.next ? map.get(cur.next)! : null;
    newNode.random = cur.random ? map.get(cur.random)! : null;
    cur = cur.next!;
  }

  return map.get(head)!
}