import math
import os
import random
import re
import sys


def nonDivisibleSubset(k, s):
    lis1 = [0 for i in range(k)]
    count = 0

    for i in s:
        lis1[i % k] += 1

    count += min(lis1[0], 1)
    if(k % 2 == 0):
        lis1[k//2] = min(lis1[k//2], 1)

    for i in range(1, k//2+1):
        count += max(lis1[i], lis1[k-i])

    return count


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])
    k = int(first_multiple_input[1])
    s = list(map(int, input().rstrip().split()))

    result = nonDivisibleSubset(k, s)

    print(result)

    # fptr.write(str(result) + '\n')

    # fptr.close()
