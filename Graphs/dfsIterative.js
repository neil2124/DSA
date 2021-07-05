class Graph {
    constructor(){
        this.adjancencyList = {};
    }
    addVertex(vertex){
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
    }
    addEdge(v1,v2){
        if (this.adjancencyList[v1]) this.adjancencyList[v1].push(v2);
        if (this.adjancencyList[v2]) this.adjancencyList[v2].push(v1);
    }
    dfsIterative(start){
        const stat = [start];
        const result = [];
        const visitedNodes={};
        visitedNodes[start]=true
       
        visitedNodes[start]=true
        
        while(stat.length){
            
            const vertex = stat.pop()
            
                result.push(vertex)
                if (this.adjancencyList[vertex]){

                    this.adjancencyList[vertex].forEach((neigbour)=>{
                        if(!visitedNodes[neigbour]){
                            
                            visitedNodes[neigbour]=true
                            stat.push(neigbour)
                        }
                    })
                }
            
        }
        console.log(result)
         
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
g.dfsIterative(1)