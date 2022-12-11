

// Time complexity O(2^n)

let calculation=0;
function fibonacci(n){
    calculation++;
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}


console.log(fibonacci(12));
console.log("Calculation involved ->"+calculation)


// Time Complexity O(n)

let memoizedCalculation=0;
function memoizedFibonacci(){
    let cache={};
    return function fib(n){
        memoizedCalculation++;
        if(n in cache){
            return cache[n];
        }
        else{
            if(n<2){
                return n;
            }
            else{
                cache[n]=fib(n-1)+fib(n-2);
                return cache[n];
            }
        }
    };
}

const mFib=memoizedFibonacci()
console.log(mFib(12));
console.log("Calculation involved ->"+memoizedCalculation)