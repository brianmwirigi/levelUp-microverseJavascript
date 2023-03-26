//functions is a block of code that i can call anytime i want

function sum() {
    let x = 5;
    let y = 7;
    console.log(x + y);
}
sum();
sum();
sum();

//features of functions are arguments that allow change of behaviour of function everytime it is invoked

function addition(x, y) {
    console.log(x + y)
}

addition(5, 100);
addition(10, 11);

//analogy
function juice(firstIngredient, secondIngredient) {
    console.log("here is youre", firstIngredient, "with", secondIngredient, "juice");

}

juice("oranges", "apples", "pawpaw");

juice("strawberry", "pineapple");

//exercise 10 solution
function multiply(a, b) {
    console.log("the product is ", a * b)
}
multiply(10, 5);

function greet(name) {
    console.log("greeting", name, "!")
}

greet("brian");