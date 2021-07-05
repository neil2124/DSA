class Graph {
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
  detectCycle(){
    const nodes = Object.keys(this.adjacencyList);
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
      const nodeNeighbors = this.adjacencyList[vertex];
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
  bfs(start){
    const result=[];
    const visited = {};
    let nodes = [start];
    visited[start] =true;
    let currentNode;
    let nodeNeighbors;
    while (nodes.length){
      currentNode = nodes.shift();
      result.push(currentNode);
      nodeNeighbors = this.adjacencyList[currentNode];
      for (let i =0; i<nodeNeighbors.length;i++){
        const neighbour = nodeNeighbors[i];
        if (!visited[neighbour]){
          visited[neighbour] = true;
          nodes.push(neighbour)
        }
      }  
    }
    console.log(result);
  }
  dfsIterative(start){
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;
    let currentNode;
    let nodeNeighbours;
    while(stack.length){
      currentNode = stack.pop();
      result.push(currentNode);
      nodeNeighbours = this.adjacencyList[currentNode];
      if (nodeNeighbours){
        for (let i=0; i<nodeNeighbours.length; i++){
          let neighbour = nodeNeighbours[i];
          if (!visited[neighbour]){
            visited[neighbour] = true;
            stack.push(neighbour);
          }
        }
      }
    }
    console.log(result);
  }
  dfsRecursive(start){
    const result = [];
    const visited = {};
    visited[start] = true;
    const adjacencyList = this.adjacencyList;
    function helperFunction(vertex){
      // Base case      // Which is not required in this example
      if (!vertex) return null;

      result.push(vertex);
      let nodeNeighbours = adjacencyList[vertex];
      // forEach working but loop not working
      for (let i=0; i<nodeNeighbours.length; i++){
        let neighbour = nodeNeighbours[i];
        if (!visited[neighbour]){
          visited[neighbour] = true;
          return helperFunction(neighbour);
        }
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