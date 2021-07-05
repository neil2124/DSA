var threeSum = function(nums) {
    var result =[];
    nums.sort((a,b) => a-b);
    for(let i=0;i<nums.length;i++){
        var a = nums[i];
        if(i>0 && a === nums[i-1]){
            continue;
        }
        var leftP = i+1;
        var rightP = nums.length-1;
        while(leftP<rightP){
            var threeSum = a + nums[leftP]+ nums[rightP];
            if(threeSum>0){
                rightP -=1;
            }
            else if (threeSum <0){
                leftP += 1;
            }
            else{
                result.push([a,nums[leftP],nums[rightP]]);
                leftP = leftP + 1;
                while(nums[leftP]=== nums[leftP-1]){
                    leftP +=1;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([0,0,0,0]));