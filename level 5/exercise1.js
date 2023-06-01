//convert the characters &,<,>,"(doulbe quote),'(apostrophe) in a string to the corresponding HTML entities
//the program will convert HTML entities from string to corresponding HTML entities
function convertCharacter(letter) {
    if (letter === '&') {
        return "&amp;";
    } else if (letter === '<') {
        return "&lt;";
    } else if (letter === '>') {
        return "&gt;";
    } else if (letter === '"') {
        return "&quot;";
    } else if (letter === "'") {
        return "&apos;";
    }
}
function convertHTML(str) {
    ///&colon;&par;
    let characterToCheckFor = ["&", "<", ">", "'", '"']
    for (let i = 0; i < str.length; i += 1) { //separate each sting and work with each other character to convert the right ones
        if (characterToCheckFor.indexOf(str[i]) != -1) {
            let symbolToConvert = (str[i]);
            console.log(symbolToConvert);
            str = str.slice(0, i) +
                convertCharacter(symbolToConvert) +
                str.slice(i + 1)
        };
    }
    return str;
}
console.log(convertHTML("Dolce & Gabanna"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//solution 2
function convertHTML1(str) {
    //split characters by creating an array containing individual characters in the passed string
    var temp = str.split("");

    //switch statement is used to check for HTML elements
    for (var i = 0; i < temp.length; i++) { //pass each character in the newly created array into a switch() statement
        switch (temp[i]) { //replace HTML entities with the corresponding HTML entity string
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }
    temp = temp.join(""); //convert the array  of characters into a string 
    return temp;

}
//test in the program
console.log(convertHTML1("Hamburgers < Pizza < Tacos"));