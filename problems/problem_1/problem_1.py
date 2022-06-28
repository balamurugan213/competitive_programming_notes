arr1 = ['a', 'b', 'c', 'x']
arr2 = ['w', 'y', 'z', 'f']


# Returns True if arr1 and arr2 have the same elements.
def findCommonElements(arr1, arr2):
    for i in range(0, len(arr1)):
        for j in range(0, len(arr2)):
            if(arr1[i] == arr2[j]):
                return True
    return False


def findCommonElements2(arr1, arr2):
    dist = {}
    for i in range(0, len(arr1)):
        if arr1[i] not in dist:
            dist[arr1[i]] = True
    for j in range(0, len(arr2)):
        if arr2[j] in dist:
            return True
    return False


print(findCommonElements2(arr1, arr2))
