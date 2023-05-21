//truncating string
function truncateString(str, num) {
    let output = str.substring(0, num);
    if (output.length < str.length) {
        output += "...";
    }
    return output;
}


let result = truncateString("A brown fox crossed the road and made it to the forest to feeed the family ", 8);
console.log(result);


///ternary operation
function truncateString1(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString1("i love programming", 7))