//logical operators || &&
let num = 9;
if (num > 5) {
    console.log("Greater than 5");

}
if (num < 12) {
    console.log("Smaller than 12");
}

//simplified solution

if (num > 5 && num < 12) {
    console.log("its greater than 5 and smaller than 12")
}

// or operator ||
if (num === 6 || num === 9 || num === 12) {
    console.log("its either 6, 9 or 12");
}

//combination of logical operator
if ((num > 5 && num < 12) || (num > 15 && num < 17)) {
    console.log("in range");
}

//exerice 3 solution
let arr = [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3 && arr[i] <= 7) {
        console.log(arr[i]);
    }
}