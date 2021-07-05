class Graph{
    constructor(){
        this.adjancencyList = {};
    }
    addVertex(vertex){
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] =[];
    }
    addEdge(v1,v2){
        if (this.adjancencyList[v1]) this.adjancencyList[v1].push(v2);
        if (this.adjancencyList[v2]) this.adjancencyList[v2].push(v1);
    }
    bfs(start){
        const result = [];
        const stack = [start];
        const visited = {}
        visited[start] = true;
        let currentVertex;
        while (stack.length){
            currentVertex = stack.shift();
            result.push(currentVertex);
            this.adjancencyList[currentVertex].forEach((neighbor) =>{
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        console.log(result);
    }

}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

g.bfs("A")

