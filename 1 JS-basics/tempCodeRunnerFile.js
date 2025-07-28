function studentDetails(name,fees){
   return function emi(name,fees){
    return function(emi){
        console.log("the name of student is ", name);
        console.log("the fees of student is ", fees);
        console.log("the emiof student is ", emi);

    }
   }
}
studentDetails("Rachit,7000");