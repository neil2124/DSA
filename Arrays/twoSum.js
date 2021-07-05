// Time Complexity O(n2) Space Complexity O(1)

// var twoSum = (arr,target) =>{
//     var result= [];
//     for(let i=0;i<arr.length;i++){
//         var numtoFind = target - arr[i];
//         for(let j=i+1;j<arr.length;j++){
//             console.log(i,j)
//             if(arr[j]===numtoFind){
//                 result.push(i,j)
//             }
//         }
//     }
//     return result;
// }

// Solution of the course
// var twoSum = (nums,target) =>{
//     const map = {};
//     for(let i=0;i<nums.length;i++){
//         const currentMapVal = map[nums[i]];
//         if(currentMapVal >=0){
//             return [currentMapVal,i];
//         }else{
//             const numToFind = target - nums[i];
//             map[numToFind] = i;
//         }
//     }
//     return null;
// }

// Solution using two pointer system.
var twoSum = function(numbers, target) {
    var p1 =0;
    var p2 = numbers.length -1;
    while(p1<p2){
        var sum = numbers[p1]+numbers[p2];
        if(sum===target){
            return [p1,p2];
        } 
        else if(sum>target){
            p2 = p2 -1;
        }
        else {
            p1 = p1 +1;
        }
    }
    return [];
};

console.log(twoSum([9,5,11,3,2,8,1],5));