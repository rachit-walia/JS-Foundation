/*
function orderPlace(cb){
    // no. of cart items
    // total price of cart

}
function orderGateway(){
    // random order
}
function addressDetails(){
    // name,address 
}
function payementGateway(){
    // payement Success order ID
}
function OrderSum(){
    // orderId 
    // nameId
    // Payment Gateway
    // Total price
    // order info
}
*/
                    // task 1
/*
console.log("Starting E-commerce Order...");

function orderPlace(cb) {
    console.log("Placing order...");
    setTimeout(() => {
        console.log("Order placed with 2 items, total ₹500");
        cb();
    }, 1000);
}

function orderGateway(cb) {
    console.log("Generating order ID...");
    setTimeout(() => {
        console.log("Order ID: ORD1234");
        cb();
    }, 1000);
}

function addressDetails(cb) {
    console.log("Saving address...");
    setTimeout(() => {
        console.log("Name: Rachit, Address: Faridabad");
        cb();
    }, 1000);
}

function paymentGateway(cb) {
    console.log("Processing payment...");
    setTimeout(() => {
        console.log("Payment Successful: ₹500");
        cb();
    }, 1000);
}

function orderSummary() {
    console.log("Showing Order Summary...");
    console.log("Order ID: ORD1234");
    console.log("Name: Rachit");
    console.log("Total: ₹500");
    console.log("Thank you for shopping!");
}


orderPlace(() => {
    orderGateway(() => {
        addressDetails(() => {
            paymentGateway(() => {
                orderSummary();
            });
        });
    });
});
*/

// map

// var arr = [2, 4, 6, 7, 8, 9, 10];

// function calculateMap(arrUser) {
//     let output = [];
//     for (let i = 0; i < arrUser.length; i++) {
//         output.push(arrUser[i] * 1); 
//     }
//     return output;
// }

// const output = calculateMap(arr);
// console.log(output);  

// Array.prototype.calculate = function () {
//     let output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(this[i] * 1); 
//     }
//     return output;
// };

// const arr = [2, 4, 6, 8];
// const ans = arr.calculate();
// console.log(ans);


/*
Array.prototype.myFilter = function (callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            output.push(this[i]);
        }
    }
    return output;
};
const arr = [1, 2, 3, 4, 5, 6];


const evenNumbers = arr.myFilter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);  
*/

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const initialValue = 0;

const sumInitialized = arr1.reduce(function (acc, curr) {
    return acc + curr;
}, initialValue);

console.log(sumInitialized); 
