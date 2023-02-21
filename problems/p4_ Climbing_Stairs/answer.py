def factorial(n):
    if(n<=1):
        return 1
    else:
        return n*factorial(n-1)

k= int(input())
l=k//2
m=0
if(k%2!=0):
    m=1
s=0
for i in range(l):
    p=factorial(l+m)
    s+=(p//(factorial(l)*factorial(m)))
    l-=1
    m+=2
print(s+1)
    