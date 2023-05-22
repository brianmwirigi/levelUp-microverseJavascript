//sum of all numbers in a range array
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]); //variable to store maximum number
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0; //accumulator variable to add the number
    for (let i = min; i <= max; i++) { //loop
        sumBetween += i;
    }

    return sumBetween;
}

console.log(sumAll([10, 1]));

//solution 2
function sumAll01(arr) {
    let start = arr[0];
    let end = arr[1];

    if (end < start) {
        start = arr[1];
        end = arr[0];

    }
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll01([5, 1]));