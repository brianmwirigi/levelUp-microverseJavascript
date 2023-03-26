//array operations and modification of content
let arr = ["apples", "oranges", "banana", "watermellon", 77, 80, 95, 101];
console.log(arr);

//push - elements are added ot the end of array
arr.push("grape");
console.log(arr);

//pop - elements are removed from array
arr.pop();
console.log(arr);
console.log(arr.pop());
//store value of poped element
let popped = arr.pop();
console.log(popped);


//shifting -first elements is removed
arr.shift();
console.log(arr);

//store shifted variable
let shifted = arr.shift();
console.log(shifted);

//un-shifting is similar to pushing which add element to beginning of arrray

arr.unshift(25);
console.log(arr);

//delete any elements in an array 
arr.splice(2, 1); //first number is beginning of index position to delete and the second number is the number of elememts to remove
console.log(arr);

// store deleted/spliced elements
let spliced = arr.splice(2, 3);
console.log(arr);
console.log(spliced);


///exercise 2 ansers

let arrr = [];
for (i = 3; i < 12; i++) { arrr.push(i) }
console.log(arrr);
