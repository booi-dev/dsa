class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  onQueue(element) {
    this.items[this.rear] = element;
    this.rear += 1;
  }

  deQueue(element) {
    const itemAtFront = this.items[this.front];
    this.items;
    delete this.items[this.front];
    this.front += 1;
    return itemAtFront;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    if (this.fron > this.rear) return 0;
    return this.rear - this.front;
  }

  print() {
    Object.values(this.items).map((val) => console.log(val));
  }
}

const queue = new Queue();

queue.onQueue(1);
queue.onQueue(2);
queue.onQueue(3);
queue.onQueue(4);

queue.print();
