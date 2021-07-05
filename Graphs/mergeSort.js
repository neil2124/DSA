const merge = (ar1,ar2) =>{
    const sortedArray = [];
    for (let i =0; i<ar1.length;i++){
        for (let j=0;j<ar2.length;j++){
            if (ar1[j]<=ar2[j]){
                sortedArray.push(ar1[j]);
            }else{
                sortedArray.push(ar2[j])
            }
        }
    }
    while(ar1.length){
        for (let i =0;i<ar1.length;i++){
            sortedArray.push(ar1[i]);
        }
    }
    while(ar2.length){
        for (let i =0;i<ar2.length;i++){
            sortedArray.push(ar2[i]);
        }
    }
    return sortedArray;
}

const mergeSort = (arr)=>{
    if (arr.length ===1) return arr;
    const half = Math.round(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0,half));
    const rightHalf = mergeSort(arr.slice(half));
    let sortedArray =merge(leftHalf,rightHalf);
    console.log(sortedArray);
}

mergeSort([1,45,3,2,6]);