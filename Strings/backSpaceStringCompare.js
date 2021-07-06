var backspaceCompare = function (s, t) {
    var leftP =s.length-1;
    var rightP =t.length-1;
    while(leftP >=0 || rightP >=0){
        if(s[leftP]==="#" || t[rightP]==="#"){
            if(s[leftP]==="#"){
                var backCount = 2;
                while(backCount>0){
                    leftP = leftP - 1;
                    backCount = backCount -1;
                    if(s[leftP]==="#"){
                        backCount = backCount + 2;
                    }
                }
            }
            if(t[rightP]==="#"){
                var backCount = 2;
                while(backCount>0){
                    rightP = rightP-1;
                    backCount = backCount - 1;
                    if(t[rightP]==="#"){
                        backCount = backCount + 2;
                    }
                }
            }
        }
        else {

            if(s[leftP]!==t[rightP]){
                return false;
            }
            else {
                leftP = leftP - 1;
                rightP = rightP - 1;
            }
        }
    }
    return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));