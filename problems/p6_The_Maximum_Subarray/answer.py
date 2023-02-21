#!/bin/python3

import math
import os
import random
import re
import sys


# def maxSubarray(arr):
#     a = [[0 for i in range(len(arr))] for j in range(len(arr))]
#     k=max(arr)
#     mx=arr[0]
    
#     def findsum(st,s):
#         # print(st,s)
#         if(s==0):
#             a[s][st]=arr[st]
#         else:
#             a[s][st]=a[s-1][st]+a[0][s+st]
#         # for i in a:
#             # print(i)
#         # print("===========")
#         return a[s][st]
    
#     if(k<0):
#         return([k,k])
#     else:
#         k=0
#         for i in range(0,len(arr)):
#             if(arr[i]>0):
#                 k+=arr[i]
#             for j in range(0,len(arr)-i):
#                 # l=sum(arr[j:j+i+1])
#                 l=findsum(j,i)
#                 mx=max(mx,l)  
#         return([mx,k])


def maxSubarray(arr):
    a = [[0 for i in range(len(arr))] for j in range(len(arr))]
    k=max(arr)
    mx=0
    tx=0
    
    if(k<0):
        return([k,k])
    else:
        k=0
        for i in range(0,len(arr)):
            if(arr[i]>0):
                k+=arr[i]
            if tx<0:
                tx=0
            tx+=arr[i]
            if tx>mx:
                mx=tx
        return([mx,k])

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())
    o=[]

    for t_itr in range(t):
        n = int(input().strip())

        arr = list(map(int, input().rstrip().split()))

        result = maxSubarray(arr)

        o.append(result)
    for i in o:
        print(i)
        print('\n')

    #     fptr.write(' '.join(map(str, result)))
    #     fptr.write('\n')10


    # fptr.close()
