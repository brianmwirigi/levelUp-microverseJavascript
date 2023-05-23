///function arguments
function destroyer(arr) {
    //built in variable function called argument object
    //filters
    let input = arguments[0];
    let output = [];
    let destroy = [];

    for (let i = 1; i < arguments.length; i++) { //second array
        destroy.push(arguments[i]);
    }

    for (let i = 0; i < input.length; i++) {
        console.log("is ", input[i], "included in ", destroy, "?");
        if (destroy.includes(input[i]) === false) {
            output.push(input[i]);
            console.log("No, So keep it");
        } else {
            console.log("yes. Delete it");
        }
        console.log(output);

    }

    return output;
    //loop through input and delete the numbers included in destroy array

    return arr;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);