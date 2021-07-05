var maxSubArray = function(nums) {
    var max=0;
    var prevMax=0;
    for(let i=0;i<nums.length;i++){
        max = max + nums[i];
        if(max<0) max =0;
        console.log(max,prevMax)
        prevMax = Math.max(max,prevMax);
    }
    return prevMax;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));