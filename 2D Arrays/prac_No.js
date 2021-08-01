const testMatrix = [
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ]
const directions = [
    [-1,0], //up
    [0,1],  //right
    [1,0],  //down
    [0,-1]  //left
];

const numberOfIslands = (matrix) =>{
    debugger;
    var noOfIslands = 0;
    var queue =[];
    if(matrix.length===0) return 0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===1){
                matrix[i][j] =0;
                noOfIslands +=1;
                queue.push([i,j]);
                //BFS
                while(queue.length){
                    var curEle = queue.shift();
                    var curRow = curEle[0];
                    var curCol = curEle[1];
                    for(let i=0;i<directions.length;i++){
                        const currentDir = directions[i];
                        const nextRow = curRow + currentDir[0];
                        const nextCol = curCol + currentDir[1];
                        if(nextRow <0 || nextRow>=matrix.length || nextCol <0 || nextCol>=matrix[0].length){
                            continue;
                        }
                        if(matrix[nextRow][nextCol]===1){
                            matrix[nextRow][nextCol]=0;
                            queue.push([nextRow,nextCol]);
                        }
                    }
                }
            }
        }
    }
    return noOfIslands
}

console.log(numberOfIslands(testMatrix));