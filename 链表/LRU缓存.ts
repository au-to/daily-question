// https://leetcode.cn/problems/lru-cache/?envType=study-plan-v2&envId=top-100-liked



class ListNode {
  prev: ListNode | null
  next: ListNode | null
  key: number
  value: number

  constructor(key: number, value: number) {
    this.prev = null
    this.next = null
    this.key = key
    this.value = value
  }
}

class LRUCache {
  private capacity: number
  private map: Map<number, ListNode>
  private head: ListNode | null
  private tail: ListNode | null

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new ListNode(0, 0)
    this.tail = new ListNode(0, 0)
    // 伪头和伪尾
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  // 获取缓存值
  get(key: number): number {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)
    this.moveToHead(node!)
    return node!.value
  }

  // 设置缓存值
  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!
      node.value = value
      this.moveToHead(node)
    } else {
      const node = new ListNode(key, value)
      this.addNode(node)
      if (this.map.size > this.capacity) {
        this.removeTail()
      }
    }
  }

  // 将节点移动到头部
  private moveToHead(node: ListNode): void {
    this.removeNode(node)
    this.addToHead(node)
  }

  // 将节点添加到头部
  private addToHead(node: ListNode): void {
    node.prev = this.head
    node.next = this.head!.next
    this.head!.next!.prev = node
    this.head!.next = node
  }

  // 删除节点
  private removeNode(node: ListNode): void {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  // 删除尾部节点
  private removeTail(): void {
    const node = this.tail!.prev
    this.removeNode(node!)
    this.map.delete(node!.key)
  }

  // 添加新节点
  private addNode(node: ListNode): void {
    this.map.set(node.key, node)
    this.addToHead(node)
  }
}