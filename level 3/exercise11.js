//use return to produce the output of a function
function sum(x, y) {
    console.log(x + y);
}
sum(5, 10);

//keyword return allows output of a value into a variable

function addition(x, y) {
    return x + y;
}

let result = addition(1, 4) * addition(1, 9);

console.log(result);

//advanced
function summ(arr) {
    let output = [];
    for (i = 0; i < arr.length; i++) {
        output.push(arr[i] + 1);
    }
    return output;
}

let result1 = summ([1, 2, 3, 4]);
let result2 = summ([0, 1, 0, 1, 0, 2]);

console.log(result1);
console.log(result2);

//exercise 11 solution
function multiplication(array1) {
    let out = [];
    for (i = 0; i < array1.length; i++) {
        out.push(array1[i] * 5);
    }
    return out;
}
let return3 = multiplication([1, 2, 3, 4, 5]);
console.log(return3);