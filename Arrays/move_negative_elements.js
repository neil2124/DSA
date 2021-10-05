const move = (arr,n)=>{
    debugger;
    var index = n-1;
    for(let j=n-1;j>=0;j--){
        if(arr[j]<0){
            var temp = arr[j];
            var i = j-1;
            while(i>=0){
                arr[i] = arr[i+1];
                i = i-1;
            }
            arr[index] = temp;
            index = index -1;
        }
    }
    return arr;
}

console.log(move([1 ,-1, 3, 2 ,-7 ,-5, 11 ,6],8))