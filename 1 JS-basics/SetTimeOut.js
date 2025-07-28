/*

function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);

    },3000);
    console.log("Helllo Javascript")
}
x();

*/

// function x(){
//     for(let i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Hello! how's you doing?");
// }
// x();

function outer(){
    function inner(){
        console.log(a);
    }
    var a=10;
    return inner();
}

outer();

