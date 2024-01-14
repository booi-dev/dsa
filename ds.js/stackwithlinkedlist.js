class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.rear = null;
    this.size = 0;
  }

  addNodeFromRear(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.size += 1;
  }

  removeNodeFromRear() {
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

class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.addNodeFromRear(value);
  }

  pop() {
    if (this.items.size === 0) {
      console.log("stack is empty");
      return;
    }
    this.items.removeNodeFromRear();
  }

  print() {
    this.items.print();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.print();
