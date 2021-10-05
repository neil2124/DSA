const combineSum = (nums,target) =>{
    var result = []
    // Base Case
    function dfs(i,cur,total){
        if(total ===target){
            result.push([...cur])
            return
        }
        if(total > target || i>=nums.length ) return 
        cur.push(nums[i])
        dfs(i,cur, total + nums[i])
        cur.pop()
        dfs(i+1,cur,total)
    }
    dfs(0,[],0)
    return result;
}


console.log(combineSum([1,2,3,7],7))