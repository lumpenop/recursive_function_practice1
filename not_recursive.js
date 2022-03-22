const sumAll = (arr) =>{
   
    const sum = arr.reduce((prev, curr)=>{
        return prev + curr;
    });

    return sum;
}

console.log(sumAll([1,2,3]));