var insertionSort = (arr) =>{
    const length = arr.length;
    for(let i=1;i<length;i++){
        let eleToInsert = arr[i];
        var j = i-1;
        while(j>=0 && arr[j]>eleToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = eleToInsert;
    }
    return arr;
}

console.log(insertionSort([6,5,4,3,2,1]));