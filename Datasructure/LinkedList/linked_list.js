class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }

    /**
    * Appending a node to the end of the Linked list
    * @param  {Number} value The value for the new node
    * @return {Node}      The head Node after adding the new node
    */
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

    /**
    * Appending a node to the start of Linked list
    * @param  {Number} value The value for the new node
    * @return {Node}      The head Node after adding the new node
    */
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

    /**
    * Get the Pic string of the Linked list #recursive #private
    * @param  {Node} currentNode Starting point of the oic string
    * @return {String}      Pic String with -->
    */
    _showList(currentNode){
        if(currentNode){
            return currentNode.value+"-->"+this._showList(currentNode.next);
        }
        else{
            return "NULL"
        }
        
    }

    /**
    * Print in console 
    * @param  {}          -
    * @return {Null}      -
    */
    printList(){
        console.log(this._showList(this.head))
    }

    /**
    * insert a node after particular index
    * @param  {Number} index Insert position for the new node
    * @param  {Number} value The value for the new node
    * @return {Node}      The head Node after adding the new node
    */
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

    /**
    * Remove a node at particular index
    * @param  {Number} index Insert position for the new node
    * @return {Node}      Node the removed form linked_list
    */
    remove(index){
        let currentNode=this.traverseToIndex(index-1);
        let unwantedNode=currentNode.next;
        currentNode.next=unwantedNode.next;
        this.length--;
        unwantedNode.next=null;
        return unwantedNode;
    }

    /**
    * Get the node from particular index
    * @param  {Number} index  position of the node
    * @return {Node}      Node the removed form linked_list
    */
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