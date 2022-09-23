class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
        let newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
        }
        else{
            let currentNode=this.root
            while(true){
                if(currentNode.value>newNode.value){
                    if(currentNode.left===null){
                        currentNode.left=newNode;
                        break;
                    }
                    else{
                        currentNode=currentNode.left;
                    }
                }
                else{
                    if(currentNode.right===null){
                        currentNode.right=newNode;
                        break;
                    }
                    else{
                        currentNode=currentNode.right;
                    }
                }
            }
        }
        return this;
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode=this.root
        while(currentNode){
            if(value===currentNode.value){
                return currentNode;
            }
            else if(value<currentNode.value){
                currentNode=currentNode.left;
            }
            else{
                currentNode=currentNode.right
            }
        }
        return false
    }

    remove(value){
        if(!this.root){
            return false; 
        }
        let searchNode=this.root
        let parentNode=null
        let replacementNode=null
        while(searchNode.value!=value && searchNode!=null){
            if(value===searchNode.value){
                if(searchNode.right===null){
                    if(parentNode===null){
                        this.root=searchNode.left;
                    }
                    else{
                        if(searchNode.value<parentNode.value){
                            parentNode.left=searchNode.left;
                        }
                        else if(searchNode.value>parentNode.value){
                            parentNode.right=searchNode.left;
                        }
                    }
                }
                else if(searchNode.right.left===null){
                    currentNode.right.left = currentNode.left;
                    if(parentNode==null){
                        this.root=searchNode.left 
                    }
                    else{
                        searchNode.right.left=searchNode.left
                        if(searchNode.value<parentNode){
                            parentNode.left=searchNode.right;
                        }
                        else if(searchNode.value>parentNode.value){
                            parentNode.right=searchNode.right
                        }
                    } 
                }
                else{
                    let leftMost=searchNode.right.left;
                    let leftMostParent=searchNode.right;
                    while(leftMost.left!==null){
                        leftMostParent=leftMost
                        leftMost=leftMost.left
                    }
                    leftMostParent.left=leftMost.right
                    leftMost.left=searchNode.left
                    leftMost.right=searchNode.right
                    if(parentNode===null){
                        this.root=leftMost
                    }
                    else{
                        if(searchNode.value<parentNode){
                            parentNode.left=leftMost;
                        }
                        else if(searchNode.value>parentNode.value){
                            parentNode.right=leftMost;
                        }
                    }
                }
            }
            else if(value<searchNode.value){
                parentNode=searchNode
                searchNode=searchNode.left;
            }
            else{
                parentNode=searchNode
                searchNode=searchNode.right
            }
        }
        if(searchNode==null)
        {

        }
        else{
            replacementNode=searchNode
            if(parentNode===null){
                
            } 
            else{
                while(replacementNode.left!=null || replacementNode.right!=null){
                    if(replacementNode.left!==null){
                        replacementNode=replacementNode.left;
                    }
                    
                }
            }
        }
    }
}

const myTree=new BinarySearchTree()
myTree.insert(10)
myTree.insert(20)
myTree.insert(244)
myTree.insert(40)
myTree.insert(60)

console.log(myTree.lookup(40))
console.log(traverse(myTree.root))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
  