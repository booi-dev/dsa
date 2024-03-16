class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFromRear(value) {
    let newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size += 1;
  }

  removeFromHead() {
    this.head = this.head.next;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.addFromRear(value);
  }

  dequeue() {
    this.items.removeFromHead();
  }

  print() {
    this.items.print();
  }
}

const myqueue = new Queue();

myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(4);
myqueue.enqueue(5);
myqueue.enqueue(6);

myqueue.dequeue();
myqueue.dequeue();

myqueue.print();
