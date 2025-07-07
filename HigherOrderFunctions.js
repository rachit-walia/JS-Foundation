/*
const radius=[3,1,2,4];

const calculateArea=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateCircumference=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));
*/


// Optimised Code

const radius=[3,1,2,4];

const area=function(radius){
    return Math.PI*radius*radius;
};

const circumference=function(radius){
    return Math.PI*radius*2;
};

const diameter=function(radius){
    return 2*radius;
}

const calculateArea=function(radius,area){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(area(radius[i]));
    }
    return output;
};
const calculateCircumference=function(radius,circumference){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(circumference(radius[i]))
    }
    return output;
};
const calculateDiameter=function(radius,diameter){
    const output=[];
    for(let i=0;i<radius.length;i++ ){
        output.push(diameter(radius[i]));
    }
    return output;

};

console.log(calculateArea(radius,area));
console.log(calculateCircumference(radius,circumference));
console.log(calculateDiameter(radius,diameter));

console.log(radius.map(area));