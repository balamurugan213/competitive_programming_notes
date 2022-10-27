const num=[5,7,3,7,3,9,3,54,645,4563,654,5463,435,43,56,45231,5432,3241,543,43,564,432,3542,3542]

const insertionSort=((arr)=>{
    const len=arr.length;
    for (let i = 0; i < len; i++) {
        if(arr[i]<arr[0]){
            arr.unshift(arr.splice(i,1)[0]);
        }else{
            for (let j = 1; j < i; j++) {
                if(arr[i]>=arr[j-1] && arr[i]<arr[j])
                {
                    arr.splice(j,0,arr.splice(i,1)[0]);
                
                }
            }
            console.log(arr)
        }
        
    }
    return arr;
})

console.log(insertionSort(num))