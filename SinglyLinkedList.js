// Big O Complexity
// => Insertion - O(1)
// => Removal - O(1) {from begenning} / O(N) {from end}
// => Searching - O(N)
// => Accessing - O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    !this.head
      ? ((this.head = node), (this.tail = node))
      : ((this.tail.next = node), (this.tail = node));
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    const node = new Node(val);
    !this.head
      ? ((this.head = node), (this.tail = node))
      : (node.next = this.head),
      (this.head = node);
    this.length++;

    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;

    let counter = 0;
    let current = this.head;

    // Teachers solution
    // while(counter !== i) {
    //   current = current.next;
    //   counter++;
    // }

    // return current;

    // My solution
    while (current) {
      if (counter === i) {
        return current;
      }

      current = current.next;
      counter++;
    }
  }

  set(i, val) {
    this.get(i) ? (this.get(i).val = val) : false;
  }

  insert(i, val) {
    if (i < 0 || i >= this.length) return false;

    if (i === this.length) return !!this.push(val);

    if (i === 0) return !!this.unshift(val);

    const node = new Node(val);

    const prev = this.get(i - 1);

    const next = prev.next;

    prev.next = node;
    node.next = next;

    this.length++;

    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return false;

    if (i === this.length - 1) return !!this.pop();

    if (i === 0) return !!this.shift();

    this.get(i - 1).next = this.get(i).next;

    this.length--;

    return this.get(i).val;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const test = new SinglyLinkedList();
test.push(23);
test.push(2);
test.push(3);
test.push(233);
test.pop();
test.shift();
test.unshift(444);
test.get(0);
test.set(0, 66);
test.insert(0, 77);
test.remove(2);
// test.remove(2);
test.reverse();
console.log(test);
