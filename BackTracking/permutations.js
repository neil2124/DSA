const permute = (nums,left,right) =>{
    function perm(nums,left,right){
        result = [];
        // Base Case 
        if(left == right){
            result.push(nums);
        }
        else{
            for(let i=1;i<=right;i++){
                nums = swap(nums,left,i);
                perm(nums,left+1,right);
                nums = swap(nums,left,i);
            }
        }
    }
    perm(nums,left,right)
    return result;
}

const swap = (nums,i,j) =>{
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums;
}

console.log(permute([1,2,3],0,2));