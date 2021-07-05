//Time complexity - O(n2) Space complexity O(1)
// var findWaterUnits = (arr) =>{
//     var waterUnits=0;
//     for(let i=0;i<arr.length;i++){
//         console.log("i:",i,"value:",arr[i])
//         let j=i;
//         let k=i;
//         var maxL=maxR=0;

//         while(j >=0){
//             if(arr[j]>maxL){
//                 maxL = arr[j];
//             }
//             j-=1;
//         }
//         while(k<arr.length){
//             maxR = Math.max(maxR,arr[k]);
//             k+=1;
//         }
//         console.log(maxL,maxR);
//         var newWater = Math.min(maxL,maxR) - arr[i];
//         if(newWater<0){
//             newWater =0;
//         }
//         waterUnits = waterUnits + newWater;
//     }
//     return waterUnits;
// }

// Optimized Solution
var trap = (height) =>{
    var waterUnits =0;
    var p1 = 0;
    var p2 = height.length-1;
    var maxL =0;
    maxR=0;
    var currentWater;
    while(p1<p2){
        console.log(p1,p2);
        if(height[p1]<=height[p2]){
            if(maxL > height[p1]){
                currentWater = maxL - height[p1];
                if(currentWater>0){
                    waterUnits +=currentWater;

                }
            }else{
                maxL = height[p1];
            }
            p1 +=1;
        }
        else {
            if(maxR > height[p2]){
                currentWater = maxR - height[p2];
                if(currentWater > 0){
                    waterUnits +=currentWater;
                }

            }else{
                maxR = height[p2];
            }
            p2 -=1;
        }
    }
    return waterUnits;
}

console.log(trap([0,1,0,2,1,0,3,1,0,1,2]));