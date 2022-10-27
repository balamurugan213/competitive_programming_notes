const findFibonacciRecursive=((n)=>{
    if(n<2){
        return n
    }
    return  findFibonacciRecursive(n-1)+findFibonacciRecursive(n-2);
});

const findFibonacciIterative=((n)=>{
    let val1=0
    let val2=1
    if(n===0 || n==1){
        return n;
    }

    for(i=1;i<n;i++){
        fib=val1+val2
        val1=val2
        val2=fib
    }
    return fib;
});
console.log("Hello")
console.log(findFibonacciIterative(3))
console.log(findFibonacciRecursive(3))
