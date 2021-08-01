var selectionSort = (arr) =>{
    const length = arr.length;
    for(let i=0;i<length;i++){
        //Current Index is minimum 
        var min = i;
        for(let j=i+1;j<length;j++){
            if(arr[min]>arr[j]){
                // Update minimum if current Element is smaller that what we had as minimum.
               min =j; 
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


console.log(selectionSort([5,4,33,2,1,7,44,22]))