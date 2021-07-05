//Dutch national flag problem

const solveTheDutchWay = (array)=>{
    var low = 0
    var mid = 0
    var high = array.length -1
    while (mid<=high){
        if (array[mid]===0){
            const temp =  array[mid]
            array[mid]= array[low]
            array[low] = temp
            low +=1
            mid +=1
        }
        else if (array[mid]===1){
            mid +=1
        }
        else {
            const temp = array[mid]
            array[mid] = array[high]
            array[high] = temp
            high -=1
        }
    }
    return array
}

const sortedArray = solveTheDutchWay([0,1,2,1,2,2,0,0])
console.log(sortedArray)