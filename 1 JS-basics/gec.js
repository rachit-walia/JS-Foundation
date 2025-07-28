// console.log("SCRIPT STARTS")

// var a = 200;
// console.log(a);

// function abc(){
//     console.log("THIS IS FUNCTION ABC");
//     function def(){
//         console.log("THIS IS DEF FUNCTION");
//         function ghi(){
//             console.log("THIS IS GHI FUNCTION");
//         }
//         ghi();
//     }
//     def();
// }
// abc();

{
    // compound statement

}
    // lexical scoping 

// function xyz(){
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     // console.log(x);
//     function yuj(){
//         var x = 800;
//         function abc(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(x);
//         }
//         abc();
//     }
//     yuj();
// }
// xyz();



            // closeures
// it wraps it own scope with there lexical scope.

//  var a=setTimeout(()=>{
//     console.log("HEllo this is set timeout!!")
// },3000)

// console.log(a);

// for (var a = 0; a <= 5; a++) {
//     function closeureFunc(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 2000 * i);
//     }
//     closeureFunc(a);
// }


// var b=0237;
// console.log(b);

                 // higher order function 

// its a function which does atleast one of the following
// 1. takes another function as a arguments
// 2. returns a function as its result 

// Example: Function is passed as an arguments

/*
function greet(name) {
    return "Hello, " + name;
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Rachit", greet)); // "Hello, Rachit"

*/


// Example : Function returing Another function

/*
function multiplier(x){
    return function(y){
        return x*y;
    };
}

const double=multiplier(2);
console.log(double(5)); // 10

*/

            // task 1;
/*
student portal-> student details(name && fees)
               -> pass student fee to another func emi
               -> pass name, fees and emi through a function message
               */
/*
function message(name) {
    return function(fees) {
        return function(emi) {
            console.log("The name of the student is", name);
            console.log("The fees of the student is", fees);
            console.log("The EMI of the student is", emi);
        };
    };
}


message("Rachit")(7000)(2000);
*/

            // CallBack

// a callback is a function that is passed as an argument to another function and is exectuded localStorage, usually after sime task is completed

// console.log("Start script");

// function checkMenu(){
//     setTimeout(()=>{
//         console.log("I am checking menu");
//     },3000)
// }
// checkMenu();

// function OrderPlace(){
//     setTimeout(()=>{
//         console.log("I am ordering food");
//     },2000)
// }
// OrderPlace();

// console.log("checking 1");
// console.log("checking 2");
// console.log("checking 3");
// console.log("checking 4");
// console.log("End of script");

        // callback 

console.log("Going to a restaurant");

function checkMenu(cb) {
    console.log("I am checking the menu");
    setTimeout(cb, 3000);
}

function orderPlace(cb) {
    console.log("I am placing the order");
    setTimeout(cb, 5000);
}

function orderServing(cb) {
    console.log("Food is being served");
    setTimeout(cb, 2000);
}

function eatingFood(cb) {
    console.log("I am eating food");
    setTimeout(cb, 9000);
}

function billPay(cb) {
    console.log("I am paying the bill");
    setTimeout(cb, 1000);
}

function suafEating(cb) {
    console.log("It's sauf time!!!");
    setTimeout(cb, 2000);
}

function exit() {
    console.log("I have left for home");
}



checkMenu(() => {
    orderPlace(() => {
        orderServing(() => {
            eatingFood(() => {
                billPay(() => {
                    suafEating(() => {
                        exit();
                    });
                });
            });
        });
    });
});
