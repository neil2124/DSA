class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
// Nodes
a = new Node(5)
b = new Node(1)
c = new Node(4)
d = new Node(3)
e = new Node(6)
// Binary Tree
a.left = b
a.right = c
c.left = d
c.right = e

const validateBinaryTree = (a) =>{
    function validate(node,left,right){
        debugger;
        if(!node){
            return true;
        }
        if(!(node.val < right && node.val>left)){
            return false
        }

        return (validate(node.left,left,node.val) && validate(node.right,node.val,right))
    }
    return validate(a,-99999,999999)
}

console.log(validateBinaryTree(a))
