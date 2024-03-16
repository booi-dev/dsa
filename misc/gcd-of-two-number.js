// find gcd of two number

const gcd = (a, b) => {
  if (b === 0) return a;
  else {
    return gcd(b, a % b);
  }
};

const result = gcd(48, 18);

console.log(result);
