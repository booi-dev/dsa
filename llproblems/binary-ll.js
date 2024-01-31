// Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.next = null), (this.size = 0);
  }

  addNode(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
    arr.push(value);
  }

  getValue() {
    let current = this.head;
    let value = "";
    while (current) {
      value += String(current.value);
      current = current.next;
    }
    console.log("number right now: ", value);
    return value;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const convertToArr = () => {
  let current = this.head;
  let arr = [];

  while (current) {
    arr.pushcurrent.value;
    current = current.next;
  }
  console.log("number right now: ", arr);

  return arr;
};

const createLinkedListFromArr = (arr) => {
  const linkedList = new LinkedList();

  for (let i = 0; i < arr.length; i += 1) {
    linkedList.addNode(arr[i]);
  }

  return linkedList;
};

const LL = new LinkedList();

console.log("1: ", linkedListVal);

const arrFromLL = convertToArr(linkedListVal);

console.log(arrFromLL);

var getDecimalValue = function (head) {
  let current = head;
  let arr = [];
  let size = 0;

  while (current) {
    arr.push(current.val);
    size += 1;
    current = current.next;
  }

  let result = 0;

  for (let i = 0; i < arr.length; i -= 1) {
    const dec = arr[i] * Math.pow(2, size - i);

    result += dec;
  }

  return result;
};
