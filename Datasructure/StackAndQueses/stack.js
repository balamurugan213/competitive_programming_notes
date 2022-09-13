class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){
        return this.top;
    }

    push(value){
        let newNode=new Node(value)
        if(this.length===0){
            this.top=newNode
            this.bottom=newNode
        }
        else{
            let holdingPointer=this.top
            this.top=newNode
            this.top.next=holdingPointer
        }
        this.length++;
        return this;

    }

    pop(){
        if(!this.top){
            return "No element in stack";
        }
        if(this.top===this.bottom){
            this.bottom=null;
        }
        const holdingPointer=this.top;
        this.top=this.top.next;
        this.length--;
        return holdingPointer;
    }

    isEmpty(){
        return this.length==0
    }
}
const myStack=new Stack()

console.log(myStack.peek())
console.log("------------------")
myStack.push('Dragon')
console.log(myStack.peek())
console.log(myStack.push('Human').peek())
console.log(myStack.push('Angel').peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.peek())

