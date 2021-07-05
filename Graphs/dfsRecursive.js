class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] =[];
    }
    addEdge(v1,v2){
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);

    }
    dfsRecursive(start){
        const result =[];
        const visited = {};
        visited[start] = true;
        let adjacencyList = this.adjacencyList;
        function helperFunction(vertex){
            if (!vertex) return null;
            result.push(vertex);
            if (adjacencyList[vertex]){

                adjacencyList[vertex].forEach((neighbor) =>{
                    if (!visited[neighbor]){
                        visited[neighbor] = true;
                        return helperFunction(neighbor);
                    }
                })
            }
        }
        helperFunction(start);
        console.log(result);
    }
}

let g = new Graph()
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)
g.addVertex(7)


g.addEdge(1,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.addEdge(2,5)
g.addEdge(3,6)
g.addEdge(3,7)
g.dfsRecursive(1)