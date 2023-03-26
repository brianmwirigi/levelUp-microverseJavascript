//build arrays with subarrays using nested loops
let bigarr = [];

let ext = 1; //counter used to increment the loop 
for (let i = 0; i < 10; i++) {
    //bigarr.push([]); //input data into array
    let littleArr = []; //empty sub-array
    for (let j = 0; j < 10; j++) {
        littleArr.push(ext);
        ext++;
    }
    bigarr.push(littleArr);
}
console.log(bigarr);

//exercise 9 solution

let bigArray = [];
let counter = 9;
for (let i = 2; i >= 0; i--) {
    let smallArray = [];
    for (let j = 2; j >= 0; j--) {
        smallArray.push(counter);
        counter--;
    }
    bigArray.push(smallArray);
}
console.log(bigArray);