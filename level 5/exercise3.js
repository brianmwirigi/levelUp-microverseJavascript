/**
 * Hackerrank 
 * algorithms - solve me first
 * function solveMefirst to compute sum of two integers
 * function protype - int solveMeFirst(int a, int b);
 *
 */ 
function solveMeFirst(a, b) {
    return a + b;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var result = solveMeFirst(a, b);
    console.log(result);
}
/**
 * given an  arrray of integers, find sum of its elements
 * example array ar =[1,2,3,4] , 1+2+3+4 = 10 therefore returning 6
 * input format - first line contains an integer ,n, denoting the size of the array. 
 * second line contains n space-separated integers representing the arrays elements
 * constraints 0 < n, ar[i]<=1000
 * 
 */
function simpleArraySum(ar) {
    //for loop
    let sum = 0; //initialize a sum
    for (let i = 0; i < ar.length; i++) { // itterate through the input array
        sum += ar[i]; //add the value to the sum
    }
    return sum;
}

/**
 * compare the triplets
 * alice = [1,2,3]
 * bob = [3,2,1]
 */
var a = [17, 28, 30];
var b = [99, 16, 8];

function compareTriplets(a, b) {
    var finalScore = [];
    var aScore = 0;
    var bScore = 0;

    for (var i = 0; i < a.length; i++) { //loop through simultaneously
        for (var i = 0; i < b.length; i++) {
            if (a[i] > b[i]) {
                aScore += 1;
            } else if (a[i] < b[i]) {
                bScore += 1;
            } else {
                aScore += 0;
                bScore += 0;
            }
        }
    }
    finalScore = [aScore, bScore];
    return finalScore;

    /**
     * alternative is 
     * finalScore[0] = aScore;
     * finalScore[1] = bScore;
     * return finalScore;
     */
}
console.log(compareTriplets(a, b));

/**
 * palindrome -  a word or phrase or sequence that reads the same backwards or forwards eg wow, madam ,nurses run
 * anagram - a word or phrase made by transponding the letters of another word or phrase.eg the word secure is an anagram of rescue
 */

//a very big sum
