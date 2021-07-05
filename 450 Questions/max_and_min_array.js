//Solution 1
const findMax = (arr)=>{
    var max = arr[0]
    var min = arr[0]
    arr.forEach((number)=>{
        if (number > max){
            max = number
        }
        else if (number<min){
            min = number
        }

    })
    console.log(arr.s)
    return [max,min]
}


const [maximum,minimum] = findMax([2,7,5,4,8,3])
console.log(maximum,minimum)


