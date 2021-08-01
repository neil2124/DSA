// Brute force solution
// var lengthOfLongestSubstring = function(s) {   // "abcabcd"
//     if(s.length<=1) return s.length;
//     let longest=0;
//     for(let i=0;i<s.length;i++){
//         var seenChars = {};
//         var currentLength = 0;
//         for(let j=i;j<s.length;j++){
//             const currentChar = s[j];
//             if(!seenChars[currentChar]){
//                 currentLength +=1;
//                 seenChars[currentChar] = true;
//                 longest = Math.max(longest,currentLength);
//             }else{
//                 break;
//             }
//         }
//     }
//     return longest;
// };

// Optimized Solution
var lengthOfLongestSubstring = function(s) {   // "abcabda"
    var p1 = 0;
    var p2 = 0;
    var map={};
    var longest =0;
    while(p2<s.length){
        var currentChar = s[p2];
        var prevSeenChar = map[currentChar];
        if(prevSeenChar >= p1){
            p1 = prevSeenChar +1;
        }
        map[currentChar] = p2;
        var currentMax = p2-p1+1;
        longest = Math.max(longest,currentMax);
        console.log("p1:",p1,"p2",p2);
        p2 +=1;
    }
    return longest;
};


console.log(lengthOfLongestSubstring("abcabda"));