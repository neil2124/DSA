const merge = (arr1,arr2) =>{
    const l1 = arr1.length;
    const l2 = arr2.length;
    var i=0;
    var j=0;
    var res=[];
    while(i<l1 && j<l2){
        if(arr1[i]<=arr2[j]){
            res.push(arr1[i]);
            i++;
        } else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<l1){
        res.push(arr1[i]);
        i++;
    }
    while(j<l2){
        res.push(arr2[j]);
        j++;
    }
    
    return res;
}

const mergeSort = (arr) =>{
    //Base Case
    if(arr.length===1) return arr;

    const length = arr.length;
    const mid = Math.floor(length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergeSort([4,6,2,1,66,44,77,2,1]))

