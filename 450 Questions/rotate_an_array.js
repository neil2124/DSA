const rotate = (arr) =>{
    var temp = arr[arr.length-1]
    
    for(var j=arr.length-1; j>0; j--){
        console.log(arr[j-1],arr[j])
        arr[j] = arr[j-1]
    }
    arr[0] = temp
    return arr
}

const result = rotate([9, 8, 7, 6, 4, 2, 1, 3])
console.log(result)