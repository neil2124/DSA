const diff = (arr,k) =>{
    arr.sort()
    var small = arr[0] + k
    var big = arr[arr.length-1] - k
    if (small>big){
        var temp = big
        big = small
        small = temp
    }

    for (var i =1;i<arr.length-1;i++){
        var sub = arr[i] - k
        var add = arr[i] + k


        if(sub>=small || add<=big){
            continue
        }
        else if(big - sub <= add - small){
            small = sub 
        }else{
            big = add
        }
    }
    return Math.min(big-small,arr[arr.length-1] - arr[0])
}


const result = diff([1,5,8,10],2)
console.log(result)