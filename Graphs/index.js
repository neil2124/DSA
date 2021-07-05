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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

