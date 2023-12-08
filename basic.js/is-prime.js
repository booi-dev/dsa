// Given a natural number 'n', 
// determine if the number is prime or not


// 1
// const isPrime = (n) => {
//     if (n < 2) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// 2. optimsed

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) // true
console.log(isPrime(4)) //false

//1
// Big-O = O(n)

//2
//Big-O = O(sqrt(n))