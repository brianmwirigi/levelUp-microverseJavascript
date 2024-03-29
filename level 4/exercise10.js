//DNA pairing
/**pairs of DNA strands consist of nucleobase pairs. 
 * Base pairs are represented by the characters AT and CG which form building blocks of the DNA double helix
 * DNA strand misses the pairing element.
 * the function below matches the missing pairs for the provided DNA strand
 * for each character in the provided string, find the base pair character
 * return result in 2D array
 * character and its pairs are paired up in an array. all arrays are grouped into one encapsulating array
 * 
 * */

function pairElement(str) {
    let output = [];
    for (let i = 0; i < str.length; i++) {
        //cases subatring go here and can use if/then statement
        if (str[i] === "A") {
            output.push(["A", "T"])
        };
        if (str[i] === "T") {
            output.push(["T", "A"])
        };
        if (str[i] === "G") {
            output.push(["G", "C"])
        };
        if (str[i] === "C") {
            output.push(["C", "G"])
        };
        console.log(str[i]);
    }
    return output;
}
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));

//second solution
function pairElement(str) {
    //function to match each character with the base
    const matchWithBasePair = function (char) {
        switch (char) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
        }
    };
    //find pair for every character in the string
    //empyy array uses the matchWithBAsePair function to push the right values to the array and return them
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        pairs.push(matchWithBasePair(str[i]));
    }
    return pairs;

}

console.log(pairElement("GCG"));