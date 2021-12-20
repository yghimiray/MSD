"use strict";
class Queue {
    constructor() {
        this.arr = [];
    }
    push(elem) {
        return this.arr.push(elem);
    }
    pop() {
        return this.arr.pop();
    }
}
const queue = new Queue();
queue.push(0);
queue.push(1);
queue.push(2);
// queue.push("Abcd")
console.log(queue);
