

def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr


arr = [12, 34, 6, 23, 5, 43, 6, 76, 45, 23, 542, 334]
arr = insertionSort(arr)
for i in range(len(arr)):
    print('%d' % arr[i])
