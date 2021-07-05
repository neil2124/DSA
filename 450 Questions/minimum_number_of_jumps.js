// Greedy Approach
const minJumps = (arr) =>{
    var prev = 0
    var current = 0
    var jump = 0
    for (var i =0; i<arr.length; i++){
        if (i>prev){
            jump +=1
            prev = current
        }
        current = Math.max(current,i+arr[i])
    }
    return jump
}

const result = minJumps([1,2,3,1,2,1,1])
console.log(result)