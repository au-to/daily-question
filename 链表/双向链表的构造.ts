// 双向链表的特点:

// 1. 双向遍历：比单链表更灵活，支持 prev 指针向前遍历。

// 2. 插入/删除高效：O(1) 复杂度操作 head 和 tail。

// 3. 比单链表多 prev 指针，额外占用空间。


// 定义节点
class ListNode<T> {
  value: T
  next: ListNode<T> | null
  prev: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

// 定义双向链表
class DoublyLinkedList<T> {
  private head: ListNode<T> | null
  private tail: ListNode<T> | null
  private length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 添加到头部
  addToHead(value: T) {
    const newNode = new ListNode(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head!.prev = newNode
      this.head = newNode
    }
    this.length++
  }

  // 添加到尾部
  addToTail(value: T) {
    const newNode = new ListNode(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail!.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // 删除节点（按值）
  remove(value: T): boolean {
    let current = this.head
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next
        if (current.next) current.next.prev = current.prev
        if (current === this.head) this.head = current.next
        if (current === this.tail) this.tail = current.prev
        this.length--
        return true
      }
      current = current.next
    }
    return false
  }

  // 查找节点
  find(value: T): ListNode<T> | null {
    let current = this.head
    while (current) {
      if (current.value === value) return current
      current = current.next
    }
    return null
  }

  // 转换为数组
  toArray(): T[] {
    const result: T[] = []
    let current = this.head
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }
}