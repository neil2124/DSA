// Mistake i made
// const fibonacci = (n) =>{
//     // Base Case
//     if (n===1) return 1;

//     let result = result +n;
//     return fibonacci(n-1);

// }

const fibonacci = (n) =>{
    if (n <=2) return 1;
    let result = fibonacci(n-1) + fibonacci(n-2);
    return result;
}

console.log(fibonacci(45));

