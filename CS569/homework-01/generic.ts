
class Queue<T> {
    arr:Array<T>=[];
    push(elem:T){
        return this.arr.push(elem)
    }
    pop(){
        return this.arr.pop()
    }
}

const queue = new Queue<number>();
queue.push(0)
queue.push(1)
queue.push(2)
// queue.push("Abcd")

console.log(queue);
