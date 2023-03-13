const hour = new Date().getHours();
let greeting;

if (hour < 10) {
    greeting = 'Good moring';
} else if (hour < 20) {
    greeting = 'Good Day';
} else {
    greeting = 'Good evening';
}

let xl = Math.random();
console.log(xl);


console.log(greeting);

let day;
switch (new Date().getDay()) {
    default:
        day = 'Error';
        break;
    case 0:
        day = 'sunday';
        day = 'It is weekend'
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thurday';
        day = 'Soon it is weekend'
        break;
    case 5:
        day = 'friday';
        day = 'Soon it is weekend'
        break;
    case 6:
        day = 'saturday';
        day = 'It is weekend'
        break;
}

console.log(day);

let vx = "0";
switch (vx) {
    case '0':
        text = "Off";
        break;
    case '1':
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text);


var X = 32;

if (X == 9) {
    console.log("true");
} else {
    console.log('false');
}

var Y = 'Green';

if (Y == "Blue") {
    console.log("Blue Detected!");
} else if (Y == 'Green') {
    console.log("Green detected");
} else {
    console.log("No Green or Blue Detected");
}

function myFunction() {
    let age = Number(document.getElementById("age").value);
    let voteable;
    if (isNaN(age)) {
        voteable = 'input is not a number';
    } else {
        voteable = (age < 18) ? 'Too young to vote.' : 'Old enough to vote.';
    }
    document.getElementById("demo").innerHTML = voteable;
}

/*null operator
The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second argument.
*/
let firstname0 = 'null';
let ending = 'missing';
let result = firstname0 ?? ending;

console.log('The name is ' + result);

/*The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
*/
const user = { firstname: "brian", age: 25, height: 2.5, birthdate: "10.12.95" };
let birthdate = user?.birthdate;

console.log(birthdate);