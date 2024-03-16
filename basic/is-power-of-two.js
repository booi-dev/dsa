// PROBLEM - Give a positive integer 'n',
// determine if the number is a power of 2 or not

// An integer is a power of two,
//  if there exist an integer 'x' such that 'n' === 2^x

// 1
const isPowerOfTwo = (n) => {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 != 0) return false
        n = n / 2;
    }

    return true;
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(5)) // false

// Big-O = O(log(n))

// 2

const isPowerOfTwoBitWise = (n) => {
    if (n < 1) return false;
    return (n & n - 1) === 0;
}

console.log(isPowerOfTwoBitWise(1)) // true
console.log(isPowerOfTwoBitWise(2)) // true
console.log(isPowerOfTwoBitWise(4)) // true
console.log(isPowerOfTwoBitWise(5)) // false

// Big-O = O(log(1))
