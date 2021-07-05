//Solution 1
const moveLeft = (array)=>{
    var i=0
    while (i<array.length){

        var j =1
        while (j<array.length){
            if (array[j]<0){
                const temp = array[j-1]
                array[j-1] = array[j]
                array[j] = temp
                
            }
            j+=1
        }
        i+=1
    }
    return array
}

const sortedArray = moveLeft([-2,2,4,5,-1,-3,2,-1])
console.log(sortedArray)