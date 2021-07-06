var lengthOfLongestSubstring = function(s) {   // "abcabcd"
    if(s.length<=1) return s.length;
    let longest=0;
    for(let i=0;i<s.length;i++){
        var seenChars = {};
        var currentLength = 0;
        for(let j=i;j<s.length;j++){
            const currentChar = s[j];
            if(!seenChars[currentChar]){
                currentLength +=1;
                seenChars[currentChar] = true;
                longest = Math.max(longest,currentLength);
            }else{
                break;
            }
        }
    }
    return longest;
};


console.log(lengthOfLongestSubstring("abcabcd"));