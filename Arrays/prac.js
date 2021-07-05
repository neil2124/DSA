// arr = [1, 5, 4, 2, 7, 4];
// arr.sort((a, b) => a - b);
// console.log(arr);

// var largestPerimeter = function (nums) {
//     var arr = [...nums];
//     arr.sort((a, b) => a - b);
//     var max = arr.pop();
//     var second = arr.pop();
//     while (arr.length) {
//         var least = arr.pop();
//         if (max < second + least) {
//             return max + second + least;
//         }
//         max = second;
//         second = least;
//     }
//     return 0;
// };


var arr = new Set();
arr.add(1);
arr.add(2);
console.log(arr);
console.log(arr.has(1))