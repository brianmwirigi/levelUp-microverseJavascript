//build arrays with subarrays using nested loops
let bigarr = [];

let ext = 1;
for (let i = 0; i < 100; i++) {
    //bigarr.push([]);
    let littleArr = [];
    for (let j = 0; j < 3; j++) {
        littleArr.push(ext);
        ext++;
    }
    bigarr.push(littleArr);
}
console.log(bigarr);

//exercise 9 solution
