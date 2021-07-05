// Solution 1
// var removeDuplicates = function(nums) {
//     var index =2;
//     for(let i=2;i<nums.length;i++){
//         console.log("index:",index,"i:",i);
//         console.log(nums[index-2],nums[i]);
//         if(nums[index-2]!== nums[i]){
//             nums[index] = nums[i];
//             index = index +1;
//         }
//     }
//     return index;
// };

//Solution 2
var  removeDuplicates = function(nums){
    let forward =1;
    for(let i=0;i<nums.length-1;){
        if(nums[i]===nums[forward] && nums[i]=== nums[forward+1]){
            nums.splice(forward,1);
        }else{
            forward +=1;
            i +=1;
        }
    }
    console.log(nums)
    return nums.length;
}

console.log(removeDuplicates([1,1,1,1,1,2,2,3,3,3]));