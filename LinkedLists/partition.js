class Node {
    constructor(val=null) {
        this.val = val;
        this.next =null;
    }
}
const partition = (head,x) =>{
    var left = new Node();
    var right = new Node();
    var ltail = left;
    var rtail = right;
    while(head){
        if(head.val<x){
            ltail.next = head;
            ltail = ltail.next;
        } else {
            rtail.next = head;
            rtail = rtail.next;
        }
        head = head.next;
    }
    ltail.next = right.next;
    rtail.next = null;
    return left;
}

var a = new Node(5);
a.next = new Node(4);
a.next.next = new Node(3);
a.next.next.next = new Node(2);
a.next.next.next.next = new Node(1);
console.log(partition(a,3));
