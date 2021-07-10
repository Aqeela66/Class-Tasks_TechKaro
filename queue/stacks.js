class Queue {
    constructor() {
        this.items = [];
    }
    peek() {
        console.log(this.items[this.items.length - 1]);
    }
    //isEmpty function
    isEmpty() {

        return this.items.length == 0;
    }
    printqueue() {
        for (let i = 0; i < this.items.length; i++)
            console.log(this.items[i]);
    }
}

//creating object for stack class
let mystack = new Stack();

mystack.push("Karachi");
mystack.push("Hyderabad");
mystack.push("Lahore");
mystack.printstack();

mystack.pop();
mystack.printstack();

mystack.peek();
mystack.printstack();

mystack.isEmpty();


