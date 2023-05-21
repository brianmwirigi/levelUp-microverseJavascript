//return lowest index at which a value should be inserted into an array once it has been sorted
function getIndexToInsert(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length
}

console.log(getIndexToInsert([10, 20, 30, 40, 50, 60], 35))