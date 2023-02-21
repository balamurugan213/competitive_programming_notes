import sys

def solve(a, k):
    def sumup(I, J):
        sm = 0
        for u in I:
            for v in J:
                sm += abs(u - v)
        return sm
    k = min(k, len(a) - k)
    a.sort()
    print('k=%d a=%s' % (k, a), file = sys.stderr)
    index = (len(a) - 2 * k) // 2
    I = a[index:index + 2 * k:2]
    J = a[:index] + a[index + 1:index + 2 * k + 1:2] + a[index + 2 * k:]
    print('I=%s J=%s' % (I, J), file = sys.stderr)
    return sumup(I, J)

# _, k = map(int, input().split())
# a = list(map(int, input().split()))
k=2
a=[4,3,1,2]
print(solve(a, k))