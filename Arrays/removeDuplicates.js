// var removeDuplicates = function(nums) {
//     var index =1;
//     for(let i=0;i<nums.length-1;i++){
//         console.log("i:",i);
//         console.log("index:",index,"value1:",nums[i],"value2:",nums[i+1]);
//         if(nums[i] != nums[i+1]){
//             nums[index] = nums[i+1];
//             index = index +1;
//             console.log("index After",index);
//         }
//     }
//     console.log(nums)
//     return index
// };

//Solution 2
var removeDuplicates = function(nums){
    let index = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[index-1]!= nums[i]){
            nums[index] = nums[i];
            index +=1;
        }
    }
    return index;
}

console.log(removeDuplicates( [1,2,3,4]));