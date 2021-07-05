// Solution 1
const arr1 = [1,2,3]
const arr2=[];
while(arr1.length>0){
    const num = arr1.pop()
    arr2.push(num) // Pop removes from the end and push inserts in the end.

}
console.log(arr2)

// Solution 2
const reverseArray = (arr,start,end)=>{
    var temp
    while(start<end){
         temp = arr[start]
         arr[start]=arr[end]
         arr[end]=temp
         start +=1
         end -=1

    }
    return arr
}

const arr3 = reverseArray([1,2,3],0,1)
console.log(arr3)