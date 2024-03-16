// given the number 'n', find the first 'n' elements of the Fibonacci sequence

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        const element = fib[i - 1] + fib[i - 2];
        fib.push(element)
    }

    return fib;
}

const res = fibonacci(10)

console.log("Result", res)

// Big-O = O(n)

console.log("--------------")

function fibonacciRec(n) {
    if (n < 2) return n;

    return fibonacciRec(n - 1) + fibonacciRec(n - 2)
}

console.log(fibonacciRec(0))
console.log(fibonacciRec(10))
console.log(toString(121))

// Big-O = O(2^n)