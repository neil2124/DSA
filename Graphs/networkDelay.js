var networkDelayTime = function(times, n, k) {
   

    let list = getAdjacencyList(times, n);
    
    let results = new Array(n+1);
    results.fill(Infinity);
    
    let visited = new Array(n+1);
    visited.fill(false);
    
    let curr = k;
    results[curr] = 0;
    let indexNextNode = 0;
    let indexWeight = 1;
    
    for(let i = 0; i < n && curr !== -1; i++ ){
        
        visited[curr] = true;
        
        //update weights
        for(let j = 0; j < list[curr].length; j++){
            let dist = results[curr] + list[curr][j][indexWeight];
            let nextNode = list[curr][j][indexNextNode];
            results[nextNode] = Math.min(results[nextNode], dist);
        }
        
        //find the next node to visit
        let nextNode = getMinimumNode(visited, results);
        curr = nextNode;
        
    }
    
    //the bottleneck is the node with the most delay, so we find that one
    results.shift();
    let res = Math.max(...results);
    
    //Infinity means there was a node that wasn't visited
    return res === Infinity ? -1 : res;
};

function getAdjacencyList(times, n){
    
    let list = new Array(n+1);
    for(let i = 0; i < list.length; i++){
        list[i] = [];
    }
    
    let start = 0; 
    let end = 1;
    let weight = 2;
    for(let i = 0; i < times.length; i++){
        
        let edge = times[i];
        let pair = [edge[end], edge[weight]];
        list[edge[start]].push(pair);

    }
    return list;
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

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))