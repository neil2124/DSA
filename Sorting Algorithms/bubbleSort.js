//Bubble Sort // Time Complexity O(n^2).  // Space Complexity O(1).
var bubbleSort = (arr) =>{
    const length = arr.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length-i;j++){

            if(arr[j]>arr[j+1]){
                 var temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
             } 
        }
    }
    return arr;
}

console.log(bubbleSort([8,7,6,5,4,3,2,1]));