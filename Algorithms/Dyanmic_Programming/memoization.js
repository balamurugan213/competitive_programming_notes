function addTo80(n){
    console.log('Very long process');
    return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(10));
console.log(addTo80(5));

// memoization

let cache={};
function memoizedAddTo80(n){
    if(n in cache){
        return cache[n];
    }
    else{
        console.log('very long time');
        cache[n]= n +80;
        return cache[n];
    }
}
console.log("------------------------------------");

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(10));
console.log(memoizedAddTo80(5));


// closures

function memoizedAddTo80Closure(){
    let cache={};
    return fn=((n)=>{
        if(n in cache){
            return cache[n];
        }
        else{
            console.log('very long time');
            cache[n]= n +80;
            return cache[n];
        }
    });
}

console.log("------------------------------------");

const memoized=memoizedAddTo80Closure()
console.log(memoized(5));
console.log(memoized(10));
console.log(memoized(5));