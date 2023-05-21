//factorialize a number
function factorialize(num1) {
    let output = 1;
    output *= 2;
    output *= 3;
    output *= 4;
    output *= 5;
    output *= 6;
    return output;
}

console.log(factorialize(0));


//second solution
function factorialize1(num) {
    let output = 1;
    for (let i = 2; i <= num; i++) {
        output *= i;
    }
    return output;
}
console.log(factorialize1(0));


//recursion 
function factorialize2(num) {  //terminal condition to check the end of the recursion
    if (num === 0) {
        return 1;
    }
    return num * factorialize2(num - 1);
}
console.log(factorialize2(5));