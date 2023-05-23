//pig latin is a way of altering english words
//rules are if a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word and add ay to it
//if a word begins with a vowel, add way at the end
function translatepigLatin(str) {
    //test if a word begins with a vowel
    let fistLetter = str[0];
    let vowels = "aeiou";
    //test using includes method to see if vowels.includes(firstLetter)

    if (vowels.includes(fistLetter) === true) {
        return str + "way";
    }
    let i = 0; //store consonants
    //store cluster of consonants
    let cluster = "";
    while (vowels.includes(str[i]) === false && i < str.length) {
        console.log(str[i]);
        cluster += str[i];
        i++;
    }
    console.log(cluster);
    return str.substring(i) + cluster + "ay";

}
console.log(translatepigLatin("consonant"));
console.log(translatepigLatin("eight"));
console.log(translatepigLatin("schwartz"));
console.log(translatepigLatin("rhythm"));

//regex solution
function translatepigLatin01(str) {
    let consonantRegex = /^[^aeiou]+/
    let myConsonant = str.match(consonantRegex);
    return myConsonant !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonant)
            .concat("ay")
        : str.concat("way"); //if regex pattern not found, start with vowel , then add way
}

console.log(translatepigLatin01("consonant"));
console.log(translatepigLatin01("eight"));
console.log(translatepigLatin01("schwartz"));
console.log(translatepigLatin01("rhythm"));