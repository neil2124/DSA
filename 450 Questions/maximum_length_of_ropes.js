const maxLength = (l) =>{
    if (l < 3) {
        return l;
    }

    var num_of_twos = 0;
    
    var num_of_threes  = parseInt(l/3) ;
    var remainder = l%3
    if (remainder ===1){
        num_of_threes -=1
        num_of_twos = 2
    }
    else if (remainder === 2){
        num_of_twos = 1
    }
    else {
        num_of_twos = 0;
    }
    console.log(num_of_twos,num_of_threes)
    console.log(Math.pow(2,num_of_twos)* Math.pow(3,num_of_threes)) 
}

maxLength(7)