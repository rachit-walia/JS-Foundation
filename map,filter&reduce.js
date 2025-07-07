/*

const arr=[5,1,3,2,6];

// Double--[10,2,6,4,12]

// Triple--[15,3,9,6,18]

// Binary--["101","1","11","10","110"]

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output=arr.map(double);
const output1=arr.map(triple);
const output2=arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);
*/


// filter odd values inside the array

/*
const arr=[5,1,3,2,6];
function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2==0;
}
const output=arr.filter(isOdd);
const output1=arr.filter(isEven);
console.log(output); // [5,1,3]
console.log(output1); // [2,6]
*/
        // Reduce

const arr=[5,1,3,2,6];

        // SUM

// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr))

// const output=arr.reduce(function(acc,curr){
//     acc= acc+ curr;
//     return acc;
// },0);
// console.log(output);

                // MAX

// function max(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// };
// console.log(max(arr));

// const maximumElement=arr.reduce(function(max,curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0);
// console.log(maximumElement);


const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// list of full names
// ["akshay saini", "donald trump", ...]

const output = users.map((x) => x.firstName + " " + x.lastName);

console.log(output);

const output1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output1);
