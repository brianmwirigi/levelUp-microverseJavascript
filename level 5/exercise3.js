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
 * compare the trpplets
 */