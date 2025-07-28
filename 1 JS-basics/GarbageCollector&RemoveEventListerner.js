// Garbage collector 
let obj={name:Rachit};
obj=null 
// Now the object becomes unreachable and cannt be collected


// RemoveEventListerner--used to deatch event handlers

function handleCLick(){
    console.log("Clicked");
}
const btn=document.getElementById("myBtn");
btn.addEventListener("clcik",handleCLick);

btn.removeEventListener("click",handleCLick);