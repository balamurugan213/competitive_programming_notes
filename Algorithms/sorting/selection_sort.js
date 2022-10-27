const num=[5,7,3,7,3,9,3,54,645,4563,654,5463,435,43,56,45231,5432,3241,543,43,564,432,3542,3542]

const selectionSort=((arr)=>{
    let len=arr.length
    for (let i = 0; i <len; i++) {
        let min= i;
        temp=arr[i];
        for (let j = i+1; j < len; j++) {
            if(arr[min]>arr[j]){
                min=j
            }
            
        }
        arr[i]=arr[min]
        arr[min]=temp
        
    }
    return arr;
})

console.log(selectionSort(num))