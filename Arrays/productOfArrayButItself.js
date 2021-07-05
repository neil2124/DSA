var productExceptSelf = function(nums) {
    var result=Array(nums.length).fill(1);
    var prefix=1;
    var postfix=1;
    for(let i=1;i<nums.length;i++){
        prefix = prefix*nums[i-1];
        result[i] = prefix;
    }
    for(let j=nums.length-2;j>=0;j--){
        postfix = postfix * nums[j+1];
        result[j] = result[j]*postfix;
    }
    return result;
};


console.log(productExceptSelf([1,2,3,4]))