const getSum = (arr,n,number) =>{
    var seen  = new Set();
    var output = new Set();
    var b =0;
    for (var a in arr){
        b = number - arr[a]
        console.log(b)
        if (b in seen){
            output.add([a,b])
        }else{
            seen.add(parseInt(arr[a]))
        }
    }
    console.log(seen)
    console.log(output)
}

getSum([1,1,1,1],4,2)