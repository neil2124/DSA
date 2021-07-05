class Graph {
    constructor(){
        this.adjancencyList = {};
    }
    addVertex(vertex){
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] =[];
    }
    addEdge(v1,v2){
        if (this.adjancencyList[v1]) this.adjancencyList[v1].push(v2);
    }
    detectCycle(){
        console.log(this.adjancencyList)
        const nodes = Object.keys(this.adjancencyList);
        const visited = {};
        const recStack = {};
        let cNode;
        // forEach does not work n i have no fuckin idea why!!!!!!!!
        for (let i =0; i < nodes.length; i++){
            cNode = nodes[i];
            if (this.detectCycleUtil(cNode,visited,recStack)){
                return "There is a Cycle";
            } 
         }
        return "There is no cycle";
    }
    detectCycleUtil(vertex,visited,recStack){
        if(!visited[vertex]){
            visited[vertex] = true;
            recStack[vertex] = true;
            const nodeNeighbors = this.adjancencyList[vertex];
            for(let i = 0; i < nodeNeighbors.length; i++){
              const currentNode = nodeNeighbors[i];

              if(!visited[currentNode] && this.detectCycleUtil(currentNode,visited, recStack)){
                return true;
              } else if (recStack[currentNode]){
                return true;
              }
            }
          }
          recStack[vertex] = false;
          return false;
    }
}

const graph = new Graph()
  
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B')
graph.addEdge('D', 'E')
graph.addEdge('C', 'E')
graph.addEdge('A', 'D')
graph.addEdge('A', 'C')
graph.addEdge('E', 'B')
graph.addEdge('D', 'B')
graph.addEdge('E', 'A')
const answer = graph.detectCycle();
console.log(answer);