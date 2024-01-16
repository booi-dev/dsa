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
    this.size = null;
  }

  addFromRear(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.seie += 1;
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

  push(value) {
    this.items.addFromRear(value);
  }

  pop() {
    this.items.removeFromHead();
  }

  print() {
    this.items.print();
  }
}

const myqueue = new Queue();

myqueue.push(1);
myqueue.push(2);
myqueue.push(3);
myqueue.push(4);
myqueue.push(5);
myqueue.push(6);

myqueue.pop();
myqueue.pop();

myqueue.print();
