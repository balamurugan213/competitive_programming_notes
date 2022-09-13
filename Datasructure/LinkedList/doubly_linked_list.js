class Nodes{
    constructor(value){
        this.value=value;
        this.next=null;
        this.before=null;
    }
}

class LinkedListDouble{
    constructor(value){
        this.head=new Nodes(value)
        this.tail=this.head;
        this.length=1;
    }

    append(value){
        const newNode=new Nodes(value)
        this.tail.next=newNode;
        newNode.before=this.tail;
        this.tail=newNode;
        this.length++;
        return this.head;
    }

    prepend(value){
        const newNode=new Nodes(value);
        this.head.before=newNode;
        newNode.next=this.head;
        this.head =newNode;
        this.length++;
        return this.head;
    }

    _showList(currentNode){
        if(currentNode){
            return currentNode.value+"-->"+this._showList(currentNode.next);
        }
        else{
            return "NULL"
        }
        
    }

    _showReverseList(currentNode){
        if(currentNode){
            // console.log(currentNode.value)
            return currentNode.value+"-->"+this._showReverseList(currentNode.before);
        }
        else{
            return "NULL"
        }
        
    }

    printList(order){
        if(order!=null && order===-1){
            console.log(this._showReverseList(this.tail))
        }
        else{
            console.log(this._showList(this.head))
        }
    }


    insert(index,value){
        let newNode={
            value:value,
            next:null
        }
        let currentNode=this.traverseToIndex(index-1);
        let nextNode=currentNode.next;

        newNode.next=nextNode;
        nextNode.before=newNode;
        currentNode.next =newNode;
        newNode.before=currentNode;
        
        this.length++; 


    }

    remove(index){
        let currentNode=this.traverseToIndex(index-1);
        let unwantedNode=currentNode.next;
        let newNextNode=unwantedNode.next;
        currentNode.next=newNextNode;
        newNextNode.before=currentNode;
        this.length--;
        unwantedNode.next=null;
        return unwantedNode;
    }

    traverseToIndex(index){
    let currentNode =this.head;
    for(let i=0;i<index;i++){
        currentNode=currentNode.next;
    }
    return currentNode;
    }
}

let myLinkedList=new LinkedListDouble(10);
myLinkedList.printList();
myLinkedList.printList(-1)
// console.log(myLinkedList.head)
console.log("--------------")
myLinkedList.append(50);
myLinkedList.printList();
myLinkedList.printList(-1)
// console.log(myLinkedList.head)
console.log("--------------")
myLinkedList.append(20);
myLinkedList.printList();
myLinkedList.printList(-1)
// console.log(myLinkedList.head)
console.log("--------------")
myLinkedList.append(30);
myLinkedList.prepend(1000);
myLinkedList.printList();
myLinkedList.printList(-1)
console.log("--------------")
myLinkedList.append(100);
myLinkedList.printList();
myLinkedList.printList(-1)
console.log("--------------")
myLinkedList.insert(2,345)
myLinkedList.printList()
myLinkedList.printList(-1)
console.log("--------------")
myLinkedList.remove(4)
myLinkedList.printList()
myLinkedList.printList(-1)
console.log("--------------")
