class Graph {
    constructor(){
        this.adjacenceyList = {};
    }

    addVertex(name){
        if (!this.adjacenceyList[name]) this.adjacenceyList[name]=[];
    }

    addEdge(v1,v2){
        if(this.adjacenceyList[v1]) this.adjacenceyList[v1].push(v2)
        if(this.adjacenceyList[v2]) this.adjacenceyList[v2].push(v1)
    }

    removeEdge(v1,v2){
       
        this.adjacenceyList[v1] = this.adjacenceyList[v1].filter((v)=>{
            return v!==v2
        })
        this.adjacenceyList[v2] = this.adjacenceyList[v2].filter((v)=>{
            return v!==v1
        })
    }


    removeVertex(v1){
         //iterate through the list  and call removeEdge for each place
         
         while (this.adjacenceyList[v1].length){
             const vertex = this.adjacenceyList[v1].pop()
            
             this.removeEdge(v1,vertex)
             
         }
         delete this.adjacenceyList[v1]
    }

    dfsRecurrsive(vertex){
        var result = []
        var visitedNodes = {}
        const adjacenceyList = this.adjacenceyList
        function helperFunction (vertex){
       
            // if (!vertex) return null
            result.push(vertex)
            visitedNodes[vertex]=true
            
            
            adjacenceyList[vertex].forEach((v)=>{
                if (!visitedNodes[v]) return helperFunction(v)

            })
        }
        helperFunction(vertex)
       console.log(result)
    }

    dfsIterative(start){
        const stat = [start];
        const result = [];
        const visitedNodes={};
        visitedNodes[start]=true
       
        visitedNodes[start]=true
        
        while(stat.length){
            console.log(stat)
            const vertex = stat.pop()
            
                result.push(vertex)
                this.adjacenceyList[vertex].forEach((neigbour)=>{
                    if(!visitedNodes[neigbour]){
                        
                        visitedNodes[neigbour]=true
                        stat.push(neigbour)
                    }
                })
                
            
        }
         console.log(result)
    }

    bfsIterative(start){
        const result=[]
        const stack=[start]
        const visitedNodes={}
        visitedNodes[start]=true
        let currentVertex;
        while(stack.length){
            console.log(stack)
            currentVertex = stack.shift()
            result.push(currentVertex)
            this.adjacenceyList[currentVertex].forEach((neigbour)=>{
                if(!visitedNodes[neigbour]){

                    
                    visitedNodes[neigbour]=true
                    stack.push(neigbour)
                }
            })
            
        }
        console.log(result)
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

g.dfsRecurrsive("A")

