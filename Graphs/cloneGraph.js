class GraphVertex {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

var cloneGraph = function(graph) {
    if(!graph) return null;
    const map = new Map();
    
    function clone(node) {
        if (map.has(node.value)) return map.get(node.value)
        const newNode = new GraphVertex(node.value);
        map.set(node.value, newNode);
        
        for(let next of node.edges) {
            newNode.edges.push(clone(next));
        }
        return newNode;
    }
    return clone(graph);
};




let n1 = new GraphVertex(1);
let n2 = new GraphVertex(2);
let n3 = new GraphVertex(3);
let n4 = new GraphVertex(4);
n1.edges.push(n2, n4);
n2.edges.push(n1, n3);
n3.edges.push(n2, n4);
n4.edges.push(n1, n3);
console.log(cloneGraph(n1));