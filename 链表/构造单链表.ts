class ListNode<T> {
  data: T
  next: ListNode<T> | null

  constructor(ele: T) {
    this.data = ele
    this.next = null
  }
}

class LinkedList<T> {
  head: ListNode<T> | null

  constructor() {
    this.head = null
  }

  // 增（末尾）
  append(ele: T): void {
    const newNode = new ListNode(ele)
    if (!this.head) {
      this.head = newNode
      return
    }
    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    cur.next = newNode
  }

  // 增（头部）
  prepend(ele: T): void {
    const newNode = new ListNode(ele)
    newNode.next = this.head
    this.head = newNode
  }

  // 删
  remove(ele: T): void {
    if (!this.head) return
    if (this.head.data === ele) {
      this.head = this.head.next
      return
    }

    let cur = this.head
    while (cur && cur.next) {
      if (cur.next.data === ele) {
        cur.next = cur.next.next
        return
      }
      cur = cur.next
    }
  }

  // 改
  update(ele: T, newEle: T): void {
    let cur = this.head
    while (cur) {
      if (cur.data === ele) {
        cur.data = newEle
        return
      }
      cur = cur.next
    }
  }

  // 查
  find(ele: T): ListNode<T> | null {
    let cur = this.head
    while (cur) {
      if (cur.data === ele) {
        return cur
      }
      cur = cur.next
    }
    return null
  }
}