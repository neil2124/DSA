var arrayStringsAreEqual = function(word1, word2) {
    var w1=""
    var w2=""
    word1.forEach((word)=>{
        w1 = w1.concat(word);
    });
    word2.forEach((word)=>{
        w2 = w2.concat(word);
    });
    if(w1 ===w2){
        return true;
    }
    return false;
};

console.log(arrayStringsAreEqual(["a","bc"],["a","cb"]));