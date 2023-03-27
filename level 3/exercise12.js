//reversing and  translating arrays with functions
function reverse(arr) {
    let output = [];
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(i);//indeces in the array
        console.log(arr[i]);//value of indeces
        output.push(arr[i])
    }
    return output;

}

let result = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(result);

//function that changes value according to value in array

function binary(arr) {
    let output1 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            output1.push("zero")
        }
        if (arr[i] == 1) {
            output1.push("one");
        }
        if (arr[i] == 2) {
            output1.push("two")
        }
        if (arr[i] == 3) {
            output1.push("three")
        }
        if (arr[i] == 4) {
            output1.push("four")
        }
        if (arr[i] == 5) {
            output1.push("five")
        }
    }

    return output1;
}
let result1 = binary([0, 1, 2, 3, 4, 5]);
console.log(result1);

//exercise 12 solution

function reverseTranslate(arrguments1) {
    let output2 = [];
    for (i = arrguments1.length - 1; i >= 0; i--) {
        if (arrguments1[i] == 0) {
            output2.push("zero")
        }
        if (arrguments1[i] == 1) {
            output2.push("one");
        }
        if (arrguments1[i] == 2) {
            output2.push("two")
        }
        if (arrguments1[i] == 3) {
            output2.push("three")
        }
        if (arrguments1[i] == 4) {
            output2.push("four")
        }
        if (arrguments1[i] == 5) {
            output2.push("five")
        }
    }

    return output2;

}
let result2 = reverseTranslate([1, 2, 1, 2]);
console.log(result2);
