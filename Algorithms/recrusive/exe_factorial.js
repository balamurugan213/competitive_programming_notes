const findFactorialRecursive=((n)=>{
    if(n===2){
        return 2
    }
    return n * findFactorialRecursive(n-1);
});

const findFactorialIterative=((n)=>{
    let val=1
    for(i=n;i>1;i--){
        val *=i;
    }
    return val;
});
console.log("Hello")
console.log(findFactorialIterative(4))
console.log(findFactorialRecursive(4))

