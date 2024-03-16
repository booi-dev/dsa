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

  // add
  add(value) {
    if (!this.contains(value)) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  }

  // remove
    let prev = null;

    while (currentNode){
      if (currentNode.value === tobeRemoveVal) {
        if (prev) {
          prev.next = currentNode.next;
          if (currentNode === this.tail) {
            this.tail = prev;
          }
        } else {
          this.head = currentNode.next;
          if (!this.head) {
            this.tail = null;
          }
        }
        this.size--;
        return tobeRemoveVal;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
    return "value not found";
  }

  // contains
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" "));
  }
}

const myHashSet = new LinkedList();

myHashSet.add(1); // set = [1]
myHashSet.print();
myHashSet.add(2); // set = [1, 2]
myHashSet.print();
console.log(myHashSet.contains(1)); // return True
myHashSet.print();
console.log(myHashSet.contains(3)); // return False, (not found)
myHashSet.print();
myHashSet.add(2); // set = [1, 2]
myHashSet.print();
console.log(myHashSet.contains(2)); // return True
myHashSet.print();
myHashSet.remove(2); // set = [1]
myHashSet.print();
console.log(myHashSet.contains(2)); // return False, (already removed)
myHashSet.print();
myHashSet.remove(1);
myHashSet.print();

// myHashSet.print();
