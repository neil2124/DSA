// var reverseWords =(s) =>
// {
//     // code here
//     var newList = s.split(".");
//     var reverseList = [];
//     console.log(newList);
//     for(let i=0;i<newList.length;i++){
//         var ele = newList.pop();
//         reverseList.push(ele);
//     }
//     console.log(reverseList);
// }

//Optimized solution
var reverseWords = (s) =>{
    var i = s.length-1;
    var answer = "";
    while(i>=0){
        console.log(i,j)
        while(i>=0 && s[i]===" ") i--;
        var j =i;
        while(i>=0 && s[i]!=" ") i--;
        if(answer === "")
        {
            answer = answer.concat(s.substring(i+1,j+1));
        } else {
            answer = answer.concat(" " + s.substring(i+1,j+1));
        }
    }
    return answer;
}


console.log(reverseWords(" i like this       program very  much   "));