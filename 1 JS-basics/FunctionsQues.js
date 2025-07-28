a(); // a is called
// b(); // undefined

            //  Function Statement
function a(){
    console.log("a is called");
}

            // Function Expression
var b=function(){
    console.log("This is function expression");
}

            // Function Declaration
// function Statement is also called as function declaration

// Anonymous Function is , that we can use function as an variable

            // Named Function Expressions
// is same as function expression but without using Anonymous function
var c=function xyz(){
    console.log("hello duniya!!")
}
c();// hello duniya
// xyz();// not defined (Reference error)

        // Parameters vs Arguments
var s=function xyz(a,c){ // these a and c are called Parameters
    console.log(a);
    console.log(c);
}
s("hello","World"); // these are called arguments

            // First Class Functions

// passing function as an arguments, assign them to variables 
// return them from other functions
// Assigning a function to a variable


const greet = function(name) {
    return `Hello, ${name}!`;
};

// Passing function as argument
function callFunction(fn, value) {
    console.log(fn(value));
}

// Calling it
callFunction(greet, "Rachit");

// Returning a function from another function
function multiplier(factor) {
    return function(number) {4
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10


