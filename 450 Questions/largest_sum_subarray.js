const kadaneAlgo = (arr)=>{
    var length = arr.length
    var max_ending_here = 0 // Keeps track of the postive integers
    var max_so_far = 0 // Keeps track of the sum of the sub arrays
    for (var i =0;i<arr.length-1;i++){
        max_ending_here = max_ending_here + arr[i]
        if (max_ending_here>max_so_far){
            max_so_far = max_ending_here
        }
        if (max_ending_here <0){
            max_ending_here = 0
        }
    }
    return max_so_far
}


const result = kadaneAlgo([-2, -3, 4, -1, -2, 5, -3])
console.log(result)