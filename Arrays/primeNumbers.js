// var countPrimes = (n)=>{
//     var count = 0;
//     var primeCount=0;
//     for(let i =2;i<n;i++){
//         for(let j=1;j<=i;j++){
//             if(i%j===0){
//                 count = count +1;
//         }
//     }
//     if(count===2){
//         primeCount = primeCount +1;
//     }
//     count = 0
// }
// return primeCount;
// }

//Optimized Solution 
var countPrimes = function(n) {
    const record = new Array(n).fill(true)
    record[0] = false
    record[1] = false
    for (let i = 2; i*i < n; i++) {
        for (let j = i*i; j <=n ; j+=i) 
            record[j] = false
    }
    console.log(record)
    return record.filter(val => val).length
};

console.log(countPrimes(10));