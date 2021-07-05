var networkDelayTime = (times,n,k)=> {
    let list = getAdjacencyList(times,n);
    let results = new Array(n+1);
    results.fill(Infinity);
    let visited = new Array(n+1);
    visited.fill(false);

    let currentNode = k;
    results[currentNode] =0;
    let nextNodeIndex = 0;
    let nextNodeWeight = 1;

    for(let i=0;i<n && currentNode != -1;i++){
        visited[currentNode] = true;

        // Update weights
        for(let j=0;j<list[currentNode].length;j++){
            let dist = results[currentNode] + list[currentNode][j][nextNodeWeight];
            let nextNode = list[currentNode][j][nextNodeIndex];
            results[nextNode] = Math.min(results[nextNode],dist);
        }

        // Next Node to visit
        let nextNode = getMinimumNode(visited,results);
        currentNode = nextNode;
    }

    results.shift(); // First node was never traversed so its Infinity value
    let res = Math.max(...results)
    // Infinity means the node was never visited
    console.log(results)
    return res === Infinity ? -1 : res;
}

function getMinimumNode(visited, vals){
    
    let minimum = Infinity;
    let index = -1;
    for(let i = 1; i < vals.length; i++){
        if(visited[i] === false){

            index = i;
        }
    }
    return index;
}






var getAdjacencyList = (times,n) =>{
    var List = new Array(n+1);
    for(let i=0;i<List.length;i++){
        List[i]=[];
    }
    let start =0;
    let end =1;
    let weight=2;
    for(let i=0;i<times.length;i++){
        let edge = times[i];
        let pair = [edge[end],edge[weight]];
        List[edge[start]].push(pair);
    }
    return List;
}


console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))