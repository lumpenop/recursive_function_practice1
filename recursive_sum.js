const sum = (num) =>{
    if(num === 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    return num + sum(num-1);
}

console.log(sum(3));