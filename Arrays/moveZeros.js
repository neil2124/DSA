
    var moveZeroes = function(nums) {
        let index = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==0){
                var temp = nums[index];
                nums[index] = nums[i];
                nums[i]= temp;
                index +=1;
            }
        }
        return nums;
        };



console.log(moveZeroes([1,0,2,3]))