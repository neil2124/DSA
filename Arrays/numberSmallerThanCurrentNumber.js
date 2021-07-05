var smallerNumbersThanCurrent = function(nums) {
    var result =[];
    for(let i=0;i<nums.length;i++){
        var number = nums[i];
        var count =0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]<number){
                count = count +1;
            }
        }
        result.push(count)
    }
    return result;
}

console.log(smallerNumbersThanCurrent([2,1,1,6,5]));