#!/bin/python3

import os
import sys

#
# Complete the getMoneySpent function below.
#


def getMoneySpent(keyboards, drives, b):
    total = 0
    for i in keyboards:
        for j in drives:
            if i+j > total and i+j <= b:
                total = i+j
    return -1 if total == 0 else total


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    bnm = input().split()

    b = int(bnm[0])

    n = int(bnm[1])

    m = int(bnm[2])

    keyboards = list(map(int, input().rstrip().split()))

    drives = list(map(int, input().rstrip().split()))

    #
    # The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    #

    moneySpent = getMoneySpent(keyboards, drives, b)
    print(moneySpent)
    # fptr.write(str(moneySpent) + '\n')
    # fptr.close()
