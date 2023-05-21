//a function that splits an array into groups the lenght of size and return them as a two-dimensional aaray
function chunkArrayIngroups(arr, size) {
    let output = [];
    let subArray = [];
    let subcounter = 0;

    for (let i = 0; i < arr.length; i++) { //loop through all elements in arr
        //increase subcounter untill we reach size 
        //reset subcounter
        if (subcounter === size) {
            subcounter = 0;
            output.push(subArray);
            subArray = []; //empty subarray 
        }
        subArray.push(arr[i]);
        console.log(subcounter, subArray);
        subcounter++;

    }

    output.push(subArray);
    console.log(output);

    return output;
}

chunkArrayIngroups(["a", "b", "c", "d"], 3);