class Solution:

    def perm(self,n:int,r:int)->int:
        k=self.factorial(n)
        l=self.factorial(n-r)
        m=self.factorial(r)
        return k//(l*m)

    def factorial(self,n:int)->int:
        if n<=1:
            return 1
        else:
            return n* self.factorial(n-1)


    def climbStairs(self, n: int) -> int:
        sum1=1
        k=n%2
        for i in range(0,(n//2)):
            sum1 = sum1 + self.perm(n//2+k+i,n//2-i)
        return sum1