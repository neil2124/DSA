const findSubset = (nums) =>{
    var result = [];
    var curSubset = [];
    function dfs(i){
        //Base Case
        if(curSubset.length>nums.length || curSubset.length===0) return
        result.push([...curSubset])
    }
}