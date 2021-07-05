const merge =(ar1,ar2,m,n) =>{
    for (var i = n-1; i>=0;i--){
        var last = ar1[m-1]
        for (var j = m-2; j>=0 && ar1[j]>ar2[i]; j--){
            ar1[j+1] = ar1[j]
            
        }
        if (j!=m-2 || last>ar2[i]){
            ar1[j+1] = ar2[i]
            ar2[i] = last
        }
    }
    return [ar1,ar2]
}


const [arr1r,arr2r] = merge([2,6,7,10],[3,4,5],4,3)
console.log(arr1r,arr2r)