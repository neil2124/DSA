var dfstraversal = (matrix) =>{
    var seen = new Array(matrix.length).fill(0).map(()=> new Array(matrix[0].length).fill(false));
    result =[];
    var i=0;
    var j=0;
    function helperFunction(matrix,seen,i,j,result){
        //There is no base case.We execute this code under certain conditions.
        if(i>=0 && j>=0 && i<matrix.length && j<matrix[0].length && seen[i][j]===false){
            result.push(matrix[i][j]);
            seen[i][j] = true;
            helperFunction(matrix,seen,i-1,j,result);
            helperFunction(matrix,seen,i,j+1,result);
            helperFunction(matrix,seen,i+1,j,result);
            helperFunction(matrix,seen,i,j-1,result);
        }
    }
    helperFunction(matrix,seen,i,j,result);
    return result;
}

var bfsTraversal = (matrix)=>{
    debugger;
    var result =[];
    var seen = new Array(matrix.length).fill(0).map(()=> new Array(matrix[0].length).fill(false));
    var i=2;
    var j=2;
    var queue=[[i,j]];
    while(queue.length){
        var currentElement = queue.shift();
        i = currentElement[0];
        j = currentElement[1];
        if(i<0 || j<0 || i>=matrix.length || j>=matrix[0].length || seen[i][j]){
            continue;
        }
        seen[i][j] = true;
        result.push(matrix[i][j]);
        queue.push([i-1,j]);
        queue.push([i,j+1]);
        queue.push([i+1,j]);
        queue.push([i,j-1]);

    }
    return result;
}

// console.log(dfstraversal([[1,2,3],[4,5,6],[7,8,9]]));
console.log(bfsTraversal([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]));