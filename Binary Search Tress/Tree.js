class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right= null;
    }
}
class TreeNode {
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode = new Node(value);
        //Create a new Node.

        if(this.root===null){
            this.root = newNode;
            return this;
        } 
        // If the tree is empty then the new node is the root node.

        var currentNode = this.root;
        // Start from the root node and figure out the postion.

        while(true){
            if(currentNode.value>=value){
                if(currentNode.left===null){
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if(currentNode.right===null){
                    currentNode.right = newNode;
                    break;
                } else{
                    currentNode = currentNode.right;
                }
            }
        }
        
    }
    findNode(value){
        if(this.root===null) return false;
        // If the tree in empty the search is done

        var currentNode = this.root;
        while(currentNode){
        // Traverse till u hit the end of the tree.
            if(currentNode.value===value){
                return true;
            } else if(currentNode.value>value){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
    bfsTraversal(){
        if(this.root===null) return [];
        // Check if the tree is empty
        var result=[];
        var queue=[this.root];
        while(queue.length){
            var currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }
    dfsTraversal(node,result=[]){
        debugger;
        if(!node) return this;
        this.dfsTraversal(node.left,result);
        this.dfsTraversal(node.right,result);
        result.push(node.value);
        return result;
    }

    findDepthOfTree(node,count=0){
        debugger;
        if(!node) return count;
        count = count +1;
        return Math.max(this.findDepthOfTree(node.left,count),this.findDepthOfTree(node.right,count));         
    }
}



const tree = new TreeNode();
tree.insert(7);
tree.insert(2);
tree.insert(10);
tree.insert(1);
tree.insert(3);
tree.insert(11);
tree.insert(8);
tree.insert(0);
console.log(tree.bfsTraversal());
// console.log(tree.dfsTraversal(tree.root));
console.log(tree.findDepthOfTree(tree.root));


//          7
//      2      10
//   1    3  8    11
//  