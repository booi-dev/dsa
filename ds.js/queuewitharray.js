class Queue {
  constructor() {
    this.items = [];
  }

  onQueue(element) {
    this.items.push(element);
  }

  deQueue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.onQueue(1);
queue.onQueue(2);
queue.onQueue(3);
queue.onQueue(4);

queue.deQueue();
queue.deQueue();

queue.print();
console.log(queue.size());
console.log(queue.peek());
