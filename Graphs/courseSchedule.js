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
        const nodes = Object.keys(this.adjancencyList);
        const visited = {};
        const recStack = {};
        let cNode;
        // forEach does not work n i have no fuckin idea why!!!!!!!!
        for (let i =0; i < nodes.length; i++){
            cNode = nodes[i];
            if (this.detectCycleUtil(cNode,visited,recStack)){
                return false;
            } 
         }
        return true;
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

var canFinish = (numCourses,prerequisites) =>{
    const g = new Graph();
    let visited = {};
    for (let i=0;i<prerequisites.length;i++){
        for (let j=0; j<prerequisites[i].length;j++){
            if (!visited[prerequisites[i][j]]){
                g.addVertex(prerequisites[i][j]);
                visited[prerequisites[i][j]];
                if (j===0){

                    g.addEdge(prerequisites[i][j],prerequisites[i][j+1]);
                }
            }
        }
    }
    return g.detectCycle();

}

console.log(canFinish(2,[[1,0],[0,2]]));

