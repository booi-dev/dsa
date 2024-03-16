class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    this.items.pop();
  }

  push(value) {
    this.items.push(value);
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.push("1");
stack.push("2");
stack.push("3");

stack.pop();

stack.print();
