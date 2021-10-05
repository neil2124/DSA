const getMaxMin = (arr) =>{
    var prevMax = -999999;
    var prevMin = 9999999;
    for(let i=0;i<arr.length;i++){
        if(prevMax < arr[i]) prevMax = arr[i];
        if(prevMin > arr[i]) prevMin = arr[i];
    }
    return [prevMax,prevMin];
}

console.log(getMaxMin([4, 1, 8 ,9, 13 ,12, 14, 7]))