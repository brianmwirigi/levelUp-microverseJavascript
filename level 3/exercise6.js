//finding values present in an array
let users = ["brian", "kevin", "james", "samson"];
let login = "brian";

//includes is a predefined method
console.log(users.includes(login));
if (users.includes(login) === true) {
    console.log("welcome User!");
} else {
    console.log("begone hacker!")
}

//application of include in itegers during matching
let numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let find = 7;

if (numbers1.includes(find) === true) {
    console.log("It is included");
} else {
    console.log("Its just not there");
}

//exercise 6 solution
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let finding = 13;


if (numbers2.includes(finding) === true) {
    console.log("Found it!");
} else {

    console.log("not found");
}

numbers2.push(13);
console.log(numbers2);
