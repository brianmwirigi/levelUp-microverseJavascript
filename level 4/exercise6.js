//a function that splits an array into groups the lenght of size and return them as a two-dimensional aaray
function chunkArrayInGroups(arr, size) {
    let output = [];
    let subArray = [];
    let subCounter = 0;

    for (let i = 0; i < arr.length; i++) { //loop through all elements in arr
        //increase subcounter untill we reach size 
        //reset subcounter
        if (subCounter === size) {
            subCounter = 0;
            output.push(subArray);
            subArray = []; //empty subarray 
        }
        subArray.push(arr[i]);
        console.log(subCounter, subArray);
        subCounter++;

    }

    output.push(subArray);
    console.log(output);

    return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);



//solution2
function chunkArrayInGroups1(arr, size) {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

chunkArrayInGroups1([0, 1, 2, 3, 4, 5], 4);
