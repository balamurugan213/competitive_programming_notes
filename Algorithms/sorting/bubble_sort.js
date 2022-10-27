const num=[5,7,3,7,3,9,3,54,645,4563,654,5463,435,43,56,45231,5432,3241,543,43,564,432,3542,3542]

const bubbleSort=((arr)=>{
    let len=arr.length
    for (let i = 0; i <len; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[j]>arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        
    }
    return arr;
})

console.log(bubbleSort(num))