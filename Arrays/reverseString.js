const reverseWord = (str) =>{
    var st = "";
    for(let i of str){
        st = i+st;
    }
    return st;
}


console.log(reverseWord("NEIL"))