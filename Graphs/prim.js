class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort()
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
    }
}


class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] =[];
    }
    addEdge(v1,v2,weight){
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push({node:v2,weight});
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push({node:v1,weight});
    }
    primsAlgorithm(start){
        const nodesLength = Object.keys(this.adjacencyList).length
        let visited = {};
        const nodes = new PriorityQueue();
        const distances = {};
        let previous = {};
        let candidate;
        for (let v in this.adjacencyList){
            if (v === start){
                distances[v] =0;
                visited[v] = true;
                nodes.enqueue(v,0);
            }else{
                distances[v] = Infinity;
                visited[v] = false;
                nodes.enqueue(v,Infinity);
            }
            previous[v] = null;
        } 
        for (let i =0; i < nodesLength-1; i++){
            let currentVertex = nodes.dequeue().val
            if (currentVertex || distances[currentVertex]!== Infinity){
                for (let vertex in this.adjacencyList[currentVertex]){
                    let newNode = this.adjacencyList[currentVertex][vertex];
                    let newNeigbour = newNode.node;
                    candidate = distances[currentVertex] + newNode.weight;
                    if (candidate < distances[newNeigbour]){
                        distances[newNeigbour] = candidate;
                        previous[newNeigbour] = currentVertex;
                        visited[newNeigbour] = true;
                        nodes.enqueue(newNeigbour,candidate)
                    } 
                }
            }
        }
        return previous;        
    }
}

var graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
console.log(graph.primsAlgorithm("A"));