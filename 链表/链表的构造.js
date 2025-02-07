class Node {
  constructor(ele) {
    this.data = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 增（末尾）
  append(ele) {
    const newNode = new Node(ele);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = newNode;
  }

  // 增（头部）
  prepend(ele) {
    const newNode = new Node(ele);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 删
  remove(ele) {
    if (!this.head) return;
    if (this.head.data === ele) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;
    while (cur && cur.next) {
      if (cur.next.data === ele) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  // 改
  update(ele, newEle) {
    let cur = this.head;
    while (cur) {
      if (cur.data === ele) {
        cur.data = newEle;
        return;
      }
      cur = cur.next;
    }
  }

  // 查
  find(ele) {
    let cur = this.head;
    while (cur) {
      if (cur.data === ele) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }
}