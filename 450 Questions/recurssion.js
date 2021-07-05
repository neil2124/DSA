//Iterative Method
const factorial = (a) =>{
    var fact=1
    for(var i =1; i<=a;i++){
         fact = fact *i // 1 * 2 * 3 
    }
    return fact
}


const result = factorial(3)
console.log(result)

// Recursion
const recursiveFact = (a) =>{
   
    // Base Case
    if (a ===1) return 1
    return a*recursiveFact(a-1)

}


const re = recursiveFact(5)
console.log(re)