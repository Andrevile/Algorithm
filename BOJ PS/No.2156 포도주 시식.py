import sys



N = int(sys.stdin.readline())
wine = [0]
for i in range(N):
    wine.append(int(sys.stdin.readline()))


DP = [0] * (N+1)
DP[0] = 0
DP[1] = wine[1]
if N > 1:
    DP[2] = wine[1] + wine[2]
    for i in range(3,N+1):
        DP[i] = max(DP[i-3] + wine[i-1] + wine[i],DP[i-2] + wine[i] , DP[i-1])

print(DP[-1])


