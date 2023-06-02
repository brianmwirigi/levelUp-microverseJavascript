//used in cryptography
//intermediate algorithm: sum All prime numbers
//a prime number is a whole number greater than 1 with two divisors: 1 and itself
//sum of all prime numbers that are less than or equal to the number
function sumPrimes(num) {
    //helper function to check primality
    function isPrime(num) {
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
    //check all number for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}
console.log(sumPrimes(10));

//solution 2
function sumPrimes01(num) {
    if (num <= 1) {
        return 'numbers lower than 0 dont work here';
    }

    let counter = 2;
    let sum = 0;

    while (counter <= num) {
        if (isPrime1(counter)) {
            sum += counter;
        }

        counter += 1; //prevents infinite loops
    }
    return sum;

}
function isPrime1(singleNumber) {
    let counter = 2;
    while (counter < singleNumber) {
        if (singleNumber % counter === 0) {
            return false;
        }
        counter += 1;
    }
    return true;
}

console.log(sumPrimes01(977));
console.log(isPrime1(4));