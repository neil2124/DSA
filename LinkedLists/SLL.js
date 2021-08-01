class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertEnd(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
        } else {
            var currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next =newNode;
        }
    }
    reverseLinkedList(){
        var currentNode = this.head;
        var prev = null;
        var next;
        while(currentNode){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return prev;
    }
    makeCycle(){
        var currentNode = this.head;
        var contact = this.head;
        var j=2;
        while(j>=0){
            contact = contact.next;
            j = j-1;
        }
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = contact;
    }
    detectCycle(){
        debugger;
        var currentNode = this.head;
        var visitedNodes = new Set();
        while(!visitedNodes.has(currentNode.value)){
            if(currentNode.next===null) return false;
            visitedNodes.add(currentNode.value);
            currentNode = currentNode.next
        }
        return currentNode.next.next;
    }
    detectCycleOpti(){
        var P1 = this.head;
        var P2 = this.head;
        P1 = P1.next;
        P2 = P2.next.next;
        while(P2!=null && P1!=P2){
            P1=P1.next;
            P2=P2.next.next;
        }
        P1 = this.head;
        while(P1!=P2){
            P1 = P1.next;
            P2 = P2.next;
        }
        return P1;
    }
}


var linkedList = new LinkedList();
console.log(linkedList.insertEnd(1));
console.log(linkedList.insertEnd(2));
console.log(linkedList.insertEnd(3));
console.log(linkedList.insertEnd(4));
console.log(linkedList.insertEnd(5));
linkedList.makeCycle();
console.log(linkedList.detectCycleOpti());
// console.log(linkedList.reverseLinkedList())