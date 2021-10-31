import sys


n=int(sys.stdin.readline())

dp=[1,3]

def result(n):

    dp.append(dp[n-2]*2+dp[n-1])


for i in range(2,1000):
    result(i)

print(dp[n-1]%10007)
#print(result(n)%10007)