function findxinkindowSize( arr,  x,  k,  n)
{
    debugger;
    var i=0;
    while(i<n){
        var j=0;
        while(j<k){
            console.log(arr[i+j])
            if(arr[i+j]===x){
                break;
            }
            j +=1;
        }
        if(j===k) return false;
        i = i+k;
    }

    if(i===n) return true;
    j=i-k;
    while(j<n){
        if(arr[j]===x){
            break;
        }
        j +=1;
    }
    if(j===n){
        return false;
    }
    return true;
}

console.log(findxinkindowSize([21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25],23,5,13));