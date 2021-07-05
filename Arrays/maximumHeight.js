// Time complexity O(n2)   //Which is very bad hence leetcode doesnt accept the solution.
// Space Complexity O(1).
// var maxArea = (height) =>{
//     // Return the numbers that can hold the maximum amount of water
//     var currentMaxArea=0;
//     var map = {};
//     for(let i=0;i<height.length;i++){
//         var currentMapVal = map[height[i]];
//         if(currentMapVal>=0){
//             return currentMapVal;
//         }else{
//             const height = heights[i];

//         }
// }
// // return currentMaxArea;
// return currentMaxArea;
// }


//Optimized Solution New concept - Two pointer Method.
var maxArea = (height) =>{
    var currentmaxArea =0;
    var a =0;
    var b = height.length -1;
    while(a<b){
        const heightt = Math.min(height[a],height[b]);
        const width = b-a;
        let area = heightt * width;
        currentmaxArea = Math.max(currentmaxArea,area);
        if(height[a]<=height[b]){
            a = a+1;
        }else if(height[b]<height[a]){
            b = b-1;
        }
    }
    return currentmaxArea;
}


maxArea([1,8,6,2,5,4,8,3,7]);