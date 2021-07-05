class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(vertex,priority){
        this.values.push({val:vertex,priority});
        this.sort();
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
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push({node:v2,weight});
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push({node:v1,weight});
    }
    dijkstra(start,finish){
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let result = [];
        let smallest;
        let candidate;
        for (let vertex in this.adjacencyList){
            if (vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if (smallest === finish){
                while (previous[smallest]){
                    result.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity){
                for (let neighbour in this.adjacencyList[smallest]){
                    let newNode = this.adjacencyList[smallest][neighbour];
                    let newNeighbour = newNode.node;
                    candidate = distances[smallest] + newNode.weight
                    if (candidate < distances[newNeighbour]){
                        distances[newNeighbour] = candidate;
                        previous[newNeighbour] = smallest;
                        nodes.enqueue(newNeighbour,candidate);
                        
                    }
                }
            } 
        }

        console.log(result.concat(smallest).reverse());
   
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
graph.dijkstra("A","E");
