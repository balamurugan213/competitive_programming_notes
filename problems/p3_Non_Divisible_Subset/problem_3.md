https://www.hackerrank.com/challenges/non-divisible-subset/submissions


# Non-Divisible Subset

Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by .

### Sample Output
3

### Explanation

The sums of all permutations of two elements from  s[1,7,2,4]  are:

```
1 + 7 = 8
1 + 2 = 3
1 + 4 = 5
7 + 2 = 9
7 + 4 = 11
2 + 4 = 6
```

Only s[1,7,4]  will not ever sum to a multiple of k=3.

---

**Note** 

- We can solve this problem by computing modulo of array numbers with K. if sum of two numbers is divisible by K, then if one of them gives remainder i, other will give remainder (K – i). 

- First we store frequencies of numbers giving specific remainder in a frequency array of size K. 

- Then we loop for all remainders i and include max(f[i], f[K – i]). Why? a subset with no pair sum divisible by K must include either elements with remainder f[i] or with remainder f[K – i]. 

Since we want to maximize the size of subset, we pick maximum of two sizes. 
[Read more...](https://www.geeksforgeeks.org/subset-no-pair-sum-divisible-k/)