var findMinHeightTrees = (n,edges)=>{
  if(n===1) return [0];
  if(n===2) return edges[0];
  // Create the graph
  let roots = createGraph(edges);
  let queue =[];
  for(let i=0;i<edges.length;i++){
    if(roots.get(i).size===1){
      queue.push(i);
    }
  }
  while(n>2){
    n = n-queue.length;
    let currentLevelLength = queue.length // This step is necessary as the length of queue changes
    for(let i=0;i<currentLevelLength;i++){
      // find the only neighbours
      let leaf = queue.shift();
      let parentVertex = roots.get(leaf).keys().next().value;
      let parent = roots.get(parentVertex);

      roots.delete(leaf);
      parent.delete(leaf);

      if(parent.size ===1){
        queue.push(parentVertex);
      }
    }
  }
  console.log(queue);
}


// Create the graph
// Roots as keys and values as sets
var createGraph = (edges)=>{
  let roots = new Map();
  for(let i=0;i<edges.length;i++){
    let first = edges[i][0];
    let second = edges[i][1];
    if(!roots.get(first)){
      roots.set(first,new Set());
    }
    if(!roots.get(second)){
      roots.set(second,new Set());
    }
    roots.get(first).add(second);
    roots.get(second).add(first);
  }
  return roots;
}


findMinHeightTrees(4,[[1,0],[1,2],[1,3]])