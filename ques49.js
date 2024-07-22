// 49. Check if a number is a happy prime or not.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isHappy(num) {
  let seen = new Set();
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0);
  }
  return num === 1;
}

function isHappyPrime(num) {
  return isPrime(num) && isHappy(num);
}

// Example usage
let number = 7;
if (isHappyPrime(number)) {
  console.log(`${number} is a Happy Prime number.`);
} else {
  console.log(`${number} is not a Happy Prime number.`);
}
