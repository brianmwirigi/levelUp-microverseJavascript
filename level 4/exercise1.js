function sumAll(arr) {
    let first = arr[0];
    let last = arr[1];

    if (first > last) {
        first = arr[1];
        last = arr[0];
    }


    let output = 0;
    for (i = first; i <= last; i++) {
        console.log(i);
        output += i;
    }

    return output;
}

let result = sumAll([10, 5]);
console.log(result);

//convert celsius to fehrenheit

function convertCtoF(celsius) {
    let fehrenheit = (celsius * (9 / 5) + 32);
    return fehrenheit;

}
let result1 = convertCtoF(10);

console.log(result1);