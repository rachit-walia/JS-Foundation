
        // HIGHER ORDER FUNCTION

//what is higher order function 
/* higher order functions are the functions which accept a function in a parameter or return a function or both */

/* function abcd(val){
}
abcd(function(){}) */


/*
function abcd(){
    return function(){}
}
abcd()

*/

// aisa function jo accept karle ek aur function ya fir wo return krde ek aur function.


            // constructor functions 

             
// jab apke pass aaisa koi bhi mauka ho ke aapko ek jaise properties waale bahut saare elements banaane hai us waqt aap constructor function use karr skte hoo

/*  
function saanchaofBiscuits(){
    this.width=12;
    this.height=22;
    this.color="brown";
    this.taste="sugary"
}

var bis1=new saanchaofBiscuits();
var bis2=new saanchaofBiscuits();
var bis3=new saanchaofBiscuits();
*/

// normal function jisme this ka istmal ho and aap function ko call karte huye new keyword ka use kre


            // first class functions
            
/* a language is said to have first class function when the functions in that language are treated as Variable , You can pass them as arguments to another functions. */        


            // new keyword 

/* 
jab bhi new lagta hai humesha ek blank object apne maan mai bna lo. 
*/

            // iife
/* 
immediately involked function expression  
*/

// iife hai function ko turanat chane ki kala, is tareeke se ki hum log koi private variable bna payee


            // prototype
/*
[[prototype]] contains many helper properties and methods which we can use to complete our task, lets say we create an array and we want to know length of it, what do we do , we  use .length property on array , did we created .length on that array , no but it still contains .length ....how?

ANS-- many properties and methods are already to use built by javscript creators inside prototype of every object.

        basically inbuilt collectionsand functions. that are availabe for user .
*/

        // Prototype inheritance

/*
It is basically passing parents features or properties to their children to do the same thing in javascript with the help of prototype (one extra property always given by javascript to every object ) is called prototype inheritance.
*/

         // this call apply blind
/*
this keyword is a special keyword in Javascript which changes its value in different context.
*/

// global-- jab bhi kuch likh rhe ho check kro ki udr khai bhi loi function object scope bana h{}

// ek function jo object ke andar ho use method khte haii

        // pure and impure function


        // pure function 
/*
1. it should always return same output for same input
2. it will never change / update the value of a global variable.
*/

// impure function
// will change the value of global