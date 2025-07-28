/*
const cart=["shoes","pants","kurtas"];

// createOrder(cart); // orderId

// proceedToPayment(orderId);

createOrder(cart,function(orderId){
    proceedToPayment(orderId)
});

const promise = createOrder(cart);
// promise is nothing but an empty object with a data value in it.
// { data : undefined }


promise.then(function(orderId){
    proceedToPayment(orderId);
});
*/
const GITHUB_API="https://www.instagram.com/";
const user=fetch(GITHUB_API);
console.log(user);

user.then(function(data){
    console.log(data);
});