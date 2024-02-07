// Given the head of a singly linked list, reverse the list, and return the reversed list.

// https://leetcode.com/problems/reverse-linked-list/description/

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

// LOGIC
//Iterative
// const reverseList = function (head) {
//   let prev = null;
//   let current = head;

//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   head = prev;

//   return head;
// };

// recursion

const reverseListInt = (head, newHead) => {
  if (head === null) return newHead;

  let next = head.next;
  head.next = newHead;
  return reverseListInt(next, head);
};

const reverseList = function (head) {
  return reverseListInt(head, null);
};

console.log("Result---->", reverseList(myList.head));
// reverseList(myList.head);
