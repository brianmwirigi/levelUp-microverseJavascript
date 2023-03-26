//access subarray inside arrays with nested loops
let bigarr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(bigarr);
console.log(bigarr[1]); //access the second array
console.log(bigarr[1][2]); //access specific value in subarray

//nested loops
for (let i = 0; i < bigarr.length; i++) {
    //console.log(bigarr[i]);
    for (let j = 0; j < bigarr[i].length; j++) {
        console.log(bigarr[i][j]);
    }
}

//exercise 8 solution
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (i = arr.length - 1; i >= 0; i--) {
    for (j = arr[i].length - 1; j >= 0; j--) {
        console.log(arr[i][j]);
    }
}