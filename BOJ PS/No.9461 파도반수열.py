import sys

DP=[1,1,1]
T=int(sys.stdin.readline())

def result(n):
    if n==0:
        return DP[0]
    if n==1:
        return DP[1]
    if n==2:
        return DP[1]
    for i in range(3,100):
        DP.append(DP[i-3]+DP[i-2])

    return DP[n]



for i in range(T):
    n=int(sys.stdin.readline())
    print(result(n-1))