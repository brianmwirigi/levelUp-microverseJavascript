//variables 
let myname = 'Brian';
console.log("Hello", myname, "how are you?");

let totalapples = 20;
let totalusers = 5;

let applesperuser = totalapples / totalusers;

console.log("you have", applesperuser, 'apples');

//variable declarations keyword + name then value
//box with a label and content
let country = 'Kenya';
console.log(country); //value of variable is display
console.log("country"); //string display

//data types that can be stored in a variable
//string which is a sequence of characters that can be wrapped around using double quotes
//variables that are numbers
//combine multiple variables in the consolelog
//boolean variable that contains either value true or false
//undefined  variable has been declared but has not yet been assigned a value
//null data types is an object

let county = 'Nairobi'; //string
let year = 2023 //integer
let nightime = false; //boolean
let n; //undefined
let x = null;

console.log(county, year, nightime, n, x);

typeof undefined;
//undefined
typeof null;
//object

// demonstration of arithmetic operations using undefined and null
undefined + 1;
// NaN
null + 1;
// 1 

//exercise 4
let greeting = 'Hello my name is';
myname = 'Brian' //redeclaration of variables
myname += ' ' + 'mwirigi'
let lastname = 'maingi';
fullname = myname + ' ' + lastname; //construct a variable with other variables
let str = 'And i have';
let apples = 40;
apples = apples + 5; //redeclaring variable
apples += 7;
apples++;
let end = 'apples';

console.log(greeting, fullname, str, apples, end);