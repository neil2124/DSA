var binarySearch = (arr,start,end,eleToFind) =>{
    if(start<=end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid]===eleToFind) return true;
        if(arr[mid]>eleToFind){
            return binarySearch(arr,start,mid-1,eleToFind);
        } else{
            return binarySearch(arr,mid+1,end,eleToFind);
        }
    }
    return false;
    
}

console.log(binarySearch([1,2,3,4,5,6,7],0,6,7));