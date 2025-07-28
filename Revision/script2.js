/*javascript has 2 versions
1. ES5 is old --- var 
2. ES6 is new one--- let ,const 
*/

// we can use both ES5 and ES6 version 

        // the difference between var let and constant

/*
var function is scoped=> var apne parent function mai khai bhi use ho skta hai
    Example:
        funtion abcd(){
            for(var i=1;i<12;i++){
                console.log(i);
            }
            console.log(i);
        }

        in this case console.log(i) will also print as this is function scoped 

let function=> this is curled scoped 
        example: 
        funtion abcd(){
            for(let var i=1;i<12;i++){
                console.log(i);
            }
            console.log(i);
        }

        in this case console.log(i) will not print.


--var adds itself in the window objects 
--  lets and const doesnt adds

js mai kuch features nahi hai but voh fearures hum use kr skte hai window ke help se. window is the box of features given browser to use with js 

*/


            // stack

/*  stack is that -- first come first out
*/

        // heap memory
/*  jitne bhi variables ya data hum banatee hai unhe store khai to karna pdta hai uske liye hai heap memory  */


            // execution context
        
// execution context mtlb jab bhi hum functions chalenge function apna kud ka imaginary container bna lega jisme uski 3 cheeze honge 

// 1) variables
// 2) function inside that parent function
// 3) lexical enivronment of that function


// ----- yeh joh container hai imaginary isi he hum execution context kahte hai.  
// function abcd(){
//     var a=12;
//     function def(){
//         var b=12;
//     }
// }


            // exectution context
/*
execution context is a container where the function's code is exectuted and it's created whenever a function is called , it contains 3 things, Variable , Functions and lexical environment.
*/    


            //lexical environment

/* lexical environment hota hai ek chart jisme ye likha hota hai ke apka particular function ki cheejo ko access kar skta hai and kinko nahi kar skta haii, matlb ki its holds it's scope and scope chain*/



            // how to copy reference values 

/*
var a=[2,3,4,5];
var b=[...a] // these 3 dots are called spread operator
b.pop();
console.log(b);*/


// var obj={name:"rachit"};
// var copyobj={...obj};  
// console.log(copyobj);


// js mai kuch bhi likho tum wo mainly 2 parkaar mai se kisi ek prakaar ko belong karti haii
// falsuy values yeh hai = 0 false undefined null NAN document.all
// truly values

// NaN --> not a number;


/* 
 if(7){
    console.log("Hey");
 }
 else{
    console.log("Hello");
 }
*/



                // switch
// switch(1){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
// }


        // foreach-- for each loop sirf array pe chalta hai mtlb ki jab bhi tumrhe pass ek array ho, tab use mein kaun aata hai foreach loop


// var a=[1,2,23,34,4,23,4,3,45,54,3,23];
// a.forEach(function(val){
//     console.log(val+2);
// }

// )

// for each kabhi bhi by default aapke array mai change nahi karta wo aapko changes krke deta hai array ki temporyary copy par jiske wajah se array humesha same rehta hai

/*
objects par loop karne ke liye hota hai forin loop
*/


// var obj={
//     name:"rachit",
//     age:20,
//     city:"panchkula"
// }
// for(var key in obj){
//     console.log(key,obj[key])
// }


    // do while loop


//     var a=12;
// do{
//     console.log("hey");
//     a++;
// }
// while(a<15)


        // call back functions 

/*
jab bhi koi aasia code jo baad mai chalta hai kyuki voh code baad mainchalta hai isliye js ko pta nahi hota ki voh complete huya hai ya nahi. aaise code completion pr js ko btya jata hai ki voh complete hogya hai and hum usko chala skto hai yeh batanne ka kaam call back ka haii !!!!
*/

            // first clzss functions 
/* 
js mai ek concept hai jiska mtlb hota hai ki functions ko use kar skte hai as a value 
*/