class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight})
        this.adjacencyList[v2].push({node:v1,weight})
        

    }
    dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path=[];
        // Build up initial states
        for (let vertex in this.adjacencyList){
            if (vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        // As long as as there is something to visit
        while (nodes.values.length){
            smallest = nodes.dequeue().val;
            if (smallest === finish){
                // We are done 
                // build up path to return at end
                while (previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if ( smallest || distances[smallest] !== Infinity){
                for (let neighbour in this.adjacencyList[smallest]){
                    // Find neighbouring nodes
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    // Calculate new distance to neighbouring nodes
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node;
                    if (candidate <distances[nextNeighbour]){
                        // Updating new smallest distance to the neighbour
                        distances[nextNeighbour] = candidate;
                        // Updating previous node
                        previous[nextNeighbour] = smallest;
                        // Setting new priority
                        nodes.enqueue(nextNeighbour,candidate)
                    }
                }
            }
        }
        console.log(path.concat(smallest).reverse()); 
    }
}

var graph = new WeightedGraph()
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
graph.dijkstra("A","E")