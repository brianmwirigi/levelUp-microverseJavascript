//creating filters by constructing arrays from another array
let num = [1, 5, 3, 67, 8, 9, 0, 32];

let arr = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
        console.log(num[i])
        arr.push(num[i]);
    }
}
console.log(arr);


arr.push(0);
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr);

//simpler solved solution
for (let i = 0; i < 10; i++) { arr.push(i); }
console.log(arr);


//exercise 7 solution

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers1 = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 4 && numbers[i] <= 9) {
        numbers1.push(numbers[i]);
    }
}
console.log(numbers1);

