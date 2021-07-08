class Stack {
    constructor() {
        this.items = [];
    }
    // push function
    push(item) {
        this.items.push(item);
    }
    pop() {
        //if (this.items.length == 0)
        // return "Underflow";
        return this.items.pop();
    }
    // peek function
    peek() {
        console.log( this.items[this.items.length - 1]);
    }
    //isEmpty function
    isEmpty() {

        return this.items.length == 0;
    }
    printstack() {
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


