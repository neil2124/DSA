const findKthSmallest = (arr,k) =>{
    const length = arr.length;
    while(true){
        const pos = quickSort(arr,0,length);
        if(pos = k-1) return arr[pos];
        if(pos>k-1){
            quickSort(arr,0,pos);
        } else {
            quickSort(arr,pos,length);
        }
    }
}