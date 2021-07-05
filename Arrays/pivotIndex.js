var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
    var leftHalf=0;
    var rightHalf=0;
        let leftP = i-1;
        let rightP = i+1;
        while(leftP >=0){
            leftHalf = leftHalf + nums[leftP];
            leftP = leftP -1;
        }
        while(rightP <nums.length){
            rightHalf = rightHalf + nums[rightP];
            rightP = rightP +1;
        }
        console.log("i:",i,"leftHalf:",leftHalf,"rightHalf:",rightHalf);
        if(leftHalf === rightHalf){
            return i;
        }
    }
    return -1;
};


console.log(pivotIndex([2,1,-1]));