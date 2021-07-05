const merge= (arr1,arr2)=> {
    var resultArray=[]
    while(arr1.length && arr2.length){
        
        if (arr1[0]>arr2[0]){
            resultArray.push(arr2.shift())
        }else{
            resultArray.push(arr1.shift())
        }
    }
    return [...resultArray,...arr1,...arr2]
}

const mergeSort=(array)=>{
    //Base Case
    if (array.length<2) return array
    const half = array.length/2
    var firstHalf = mergeSort(array.slice(0,half))
    var secondHalf = mergeSort(array.slice(half))
    return merge(firstHalf,secondHalf)
}

const findKthElement = (arr,pos)=>{
    const sortedArray = mergeSort(arr)
    return sortedArray[sortedArray.length-pos]
}


const ele = findKthElement([4,2,5,1,7],5) 
console.log(ele)