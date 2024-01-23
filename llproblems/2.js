// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

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

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  addNodeAtNth(value, position) {
    if (position > this.size || position < 1) {
      console.log("position invalid to add");
      return;
    }

    let newNode = new Node(value);
    let current = this.head;

    let _position = 1;

    while (current) {
      _position += 1;

      if (_position === position) {
        let before = current;
        let after = current.next;

        before.next = newNode;
        newNode.next = after;

        this.size += 1;

        return;
      }

      current = current.next;
    }
  }

  deleteNodeAtNth(position) {
    if (position > this.size || position < 1) {
      console.log("position invalid to delete");
      return;
    }

    let prev = null;
    let current = this.head;
    let _position = 1;

    while (current) {
      if (_position === position) {
        if (position == 1) {
          this.head = current.next;
          this.size -= 1;
          return;
        }

        prev.next = current.next;

        this.size -= 1;

        return;
      }

      _position += 1;

      prev = current ?? prev.next;
      current = current.next;
    }
  }

  getSize() {
    console.log("Size:", this.size);
  }

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myList = new LinkedList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);
myList.addNode(6);

// console.log(myList.head);

// first solution
var middleNode = function (head) {
  let currentHead = head;

  let size = 0;
  let result = null;

  while (currentHead) {
    size += 1;
    currentHead = currentHead.next;
  }

  currentHead = head;

  let midPosition = Math.floor(size / 2) + 1;

  let currentPosition = 0;

  while (currentHead) {
    currentPosition += 1;

    if (currentPosition === midPosition) {
      result = currentHead;
      break;
    }
    currentHead = currentHead.next;
  }

  return result;
};

console.log("Result----", middleNode(myList.head));
