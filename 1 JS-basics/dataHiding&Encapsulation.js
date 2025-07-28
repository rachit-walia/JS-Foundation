

// var counter=0;

// function incrementCounter(){
//     counter++;
// }

// function counter(){
//     var count=0;
//     function incrementCounter(){
//         counter++;
//     }
// }
// console.log(count); // gives reference error, that count is not defined

/*
function Counter(){
    var count=0;
    this.incrementCounter=function(){
        count++;
        console.log(count);
    }
    this.decrementCounter=function(){
        count--;
        if(count<=0){
            return;
        }
        console.log(count);
    }
}
var counter1=new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
*/

function a() {
    var x = 0;
    return function b() {
        console.log(x);
    }
}

y = a();  
console.log(y);
