console.log("Hello")
var a=setTimeout(function(){
    console.log("JavaScript");
},5000);
console.log(a);
console.log("how are you?")

// carts

const carts=["shoes","pants","kurtas"];
api.createOrder(carts,function(){
    api.showOrderPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        })

        
    })
})