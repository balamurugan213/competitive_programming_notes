class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }

    append(value){
        const newNode={
            value:value,
            next:null
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this.head;
    }

    prepend(value){
        const newNode={
            value:value,
            next:null
        }
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

    printList(){
        console.log(this._showList(this.head))
    }

    insert(index,value){
        let newNode={
            value:value,
            next:null
        }
        let currentNode=this.traverseToIndex(index-1);
        newNode.next=currentNode.next
        currentNode.next =newNode;
        this.length++; 


    }

    remove(index){
        let currentNode=this.traverseToIndex(index-1);
        let unwantedNode=currentNode.next;
        currentNode.next=unwantedNode.next;
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

let myLinkedList=new LinkedList(10);
myLinkedList.append(50);
myLinkedList.append(20);
myLinkedList.prepend(1000);
myLinkedList.append(100);
myLinkedList.printList();
myLinkedList.insert(2,345)
myLinkedList.printList()
myLinkedList.remove(4)
myLinkedList.printList()