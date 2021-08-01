var quickSort = (arr,left,right,k) =>{
    if(left<right){
        var partitionIndex = partion(arr,left,right);
        if(partitionIndex>k){
            return quickSort(arr,left,partitionIndex-1,k);
        }else if(partitionIndex<k){

            return quickSort(arr,partitionIndex+1,right,k);
        } else{
            return arr[partitionIndex];
        }
    }
}

var partion = (arr,left,right) =>{
    var pivot = right;
    var partitionIndex = left;
    var j = left;
    while(j<right){

        if(arr[j]<arr[pivot]){
            swap(arr,j,partitionIndex);
            partitionIndex = partitionIndex+1;
        }
        j = j+1;
    }
    
    swap(arr,partitionIndex,right);
    return partitionIndex;
}

var swap = (arr,i,j) =>{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([4,2,5,1,3,4,2,1],0,7,3));