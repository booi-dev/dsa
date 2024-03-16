// given the integer 'n', find the factorial of n

// USING LOOP

// const factorial = (n) => {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//         res = res * 1
//     }

//     return res;
// }

//USING recursion

const factorial = (n) => {
    if (n === 1 || n === 0) return 1;
    if (n < 0) return;

    return n * factorial(n - 1)
}

const res = factorial(1)
console.log(res)

// Big-O of factorial = O(n)
