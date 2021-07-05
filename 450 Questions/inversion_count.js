const inversionCount = (ar) =>{
    var n = ar.length
    var count =0
    for (var i =0;i<=n-1;i++){
        for (var j =i+1;j<=n-1;j++){
            if (ar[i]>ar[j]){
                count +=1
            }
        } 
        
    }
    return count
}


const result = inversionCount([2, 4, 1, 3, 5])
console.log(result)