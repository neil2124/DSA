//Solution 1
const findiu = (arr1,arr2) =>{
    const visited = {}
    const intersection = []
    const union = []
    arr1.forEach(number =>{
        union.push(number)
        visited[number] = true
    })
    arr2.forEach(num =>{
        if (!visited[num]){
            union.push(num)
            visited[num] = true
        } else if (visited[num]){
            intersection.push(num)
        }
    })
    
    return [union,intersection]
}

const [un,inter] = findiu([1,2,3,4],[1,2,6,4])
// console.log(un,inter)

