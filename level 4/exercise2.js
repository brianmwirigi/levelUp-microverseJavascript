//reverse a string
function reverseString(str) {

    return str

        .split("") //splits the string and turns it into an array of characters
        .reverse() //chained function reverses the array characters
        .join(""); //used to join characters bach together into string
}


console.log(reverseString("hello"));

//solution 2
function reverseString1(string1) {
    let reverseString01 = "";
    for (let i = string1.length - 1; i >= 0; i--) { //starting at the last character of the string paassed to the function using string.length -1
        reverseString01 += string1[i]; //a new string is built
    }
    return reverseString01;
}

console.log(reverseString1("mwirigi"));


//solution 3
function reverseString2(str) {
    let output = [];
    output.push(str[5]);
    output.push(str[4]);
    output.push(str[3]);
    output.push(str[2]);
    output.push(str[1]);
    output.push(str[0]);

    return output;
}

console.log(reverseString2("Maingi"));

//solution 4
function reverseString3(str) {
    let output = "";
    output += str[4]; //concatination
    output += str[3];
    output += str[2];
    output += str[1];
    output += str[0];
    return output;
}

console.log(reverseString3("brian"));