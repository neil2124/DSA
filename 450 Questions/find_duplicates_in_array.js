const findDuplicate = (arr) =>{
    // Initialize an object
    var visited = {}
    var duplicates = new Set()
    for (i =0;i<arr.length;i++){
        if (!visited[arr[i]]){
            visited[arr[i]] = true
        }else{
            if (!duplicates.has(arr[i])){

                duplicates.add(arr[i])
            }
        }
    }
    return duplicates
}


const result = findDuplicate([1,2,2,2,3,4,5,5])
console.log(result)