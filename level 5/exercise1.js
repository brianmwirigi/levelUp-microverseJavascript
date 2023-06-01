//convert the characters &,<,>,"(doulbe quote),'(apostrophe) in a string to the corresponding HTML entities 
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
    for (let i = 0; i < str.length; i += 1) {
        if (characterToCheckFor.indexOf(str[i]) != -1) {
            let symbolToConvert = (str[i]);
            console.log(symbolToConvert);
            string1 = str.slice(0, i) +
                convertCharacter(symbolToConvert) +
                str.slice(i + 1)
        };
    }
    return string1;
}
console.log(convertHTML("Dolce & Gabanna"));